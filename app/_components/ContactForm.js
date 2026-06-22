'use client';

import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    budget: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear status when user starts typing again
    if (status) {
      setStatus(null);
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setStatus({ type: 'error', message: 'Please enter your name' });
      return false;
    }
    if (!formData.email.trim()) {
      setStatus({ type: 'error', message: 'Please enter your email' });
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address' });
      return false;
    }
    if (!formData.subject.trim()) {
      setStatus({ type: 'error', message: 'Please enter a subject' });
      return false;
    }
    if (!formData.message.trim()) {
      setStatus({ type: 'error', message: 'Please enter a message' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({ type: 'success', message: data.message });
        // Reset form
        setFormData({
          name: '',
          email: '',
          location: '',
          budget: '',
          subject: '',
          message: '',
        });
        // Clear success message after 5 seconds
        setTimeout(() => setStatus(null), 5000);
      } else {
        setStatus({ type: 'error', message: data.message || 'Failed to send email' });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus({ type: 'error', message: 'An error occurred. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="p-fluid flex flex-col gap-2">
        <InputText
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border-0 border-b border-gray-300 focus:border-primary-500 rounded-none focus:outline-none focus:shadow-none focus:placeholder-primary-500 pl-0"
          placeholder="Name*"
          disabled={loading}
        />
        <InputText
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="border-0 border-b border-gray-300 focus:border-primary-500 rounded-none focus:outline-none focus:shadow-none focus:placeholder-primary-500 pl-0"
          placeholder="Email*"
          disabled={loading}
        />
        <InputText
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="border-0 border-b border-gray-300 focus:border-primary-500 rounded-none focus:outline-none focus:shadow-none focus:placeholder-primary-500 pl-0"
          placeholder="Location"
          disabled={loading}
        />
        <div className="flex gap-6">
          <div className="w-1/3">
            <InputText
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="border-0 border-b border-gray-300 focus:border-primary-500 rounded-none focus:outline-none focus:shadow-none focus:placeholder-primary-500 pl-0"
              placeholder="Budget"
              disabled={loading}
            />
          </div>
          <div className="w-2/3">
            <InputText
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="border-0 border-b border-gray-300 focus:border-primary-500 rounded-none focus:outline-none focus:shadow-none focus:placeholder-primary-500 pl-0"
              placeholder="Subject*"
              disabled={loading}
            />
          </div>
        </div>
        <InputTextarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="border-0 border-b border-gray-300 focus:border-primary-500 rounded-none focus:outline-none focus:shadow-none focus:placeholder-primary-500 pl-0"
          placeholder="Message*"
          rows={5}
          cols={30}
          disabled={loading}
        />
        
        {status && (
          <div
            className={`p-3 rounded-md text-sm mt-4 ${
              status.type === 'success'
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}
          >
            {status.message}
          </div>
        )}
      </div>
      <Button
        type="submit"
        className="bg-primary-500 hover:bg-primary-600 border-primary-500 hover:border-primary-600 mt-9"
        label={loading ? 'Sending...' : 'Submit'}
        icon={loading ? 'pi pi-spinner pi-spin' : 'pi pi-send'}
        iconPos="right"
        disabled={loading}
      />
    </form>
  );
}
