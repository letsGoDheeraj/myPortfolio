import Image from "next/image";
import profle from "@/public/profile.png";
import Link from "next/link";

import ContactForm from "./_components/ContactForm";
import Projects from "./_components/Projects";
import Certifications from "./_components/Certifications";
import AboutMeSections from "./_components/AboutMeSections";

import {
  ArrowDownTrayIcon,
} from "@heroicons/react/24/solid";

export default function Home() {
  const experiences = [
    {
      company: "Flexera",
      designation: "Associate Software Engineer",
      duration: "July 2024 – Present",
      location: "Bengaluru, India",
      responsibilities: [
        "Built and enhanced SaaS connectors for 10+ enterprise SaaS vendors, including Microsoft 365, ServiceNow, Microsoft Entra ID, Salesforce, and DocuSign, enabling automated ingestion of subscription, usage, and user data for enterprise tenants with 100K+ users",
        "Designed and developed a multi-purchase subscription and tier management system with RESTful APIs, currency conversion, and event-driven processing using Go, MongoDB, NATS, and OpenAPI.",
        "Implemented certificate-based authentication for Microsoft 365, Microsoft Entra ID, and Microsoft Defender connectors, enabling secure, keyless authentication for enterprise integrations.",
        "Diagnosed and resolved critical production incidents by performing root cause analysis, fixing large-scale data ingestion failures, correcting subscription count discrepancies, remediating PII exposure in API queries, and implementing resilient retry mechanisms for transient API failures.",
      ],
    },
    {
      company: "Subex",
      designation: "Software Engineer Intern",
      duration: "Jan 2024 – July 2024",
      location: "Bengaluru, India",
      responsibilities: [
        "Developed Bash scripts to automate CI/CD workflows including branch creation, Jenkins build triggering, library version updates, build tag & Helm chart extraction, branch cleanup, and ArgoCD deployments, reducing manual effort by 70% and saving several hours during each release cycle.",
      ],
    },
  ];

  return (
    <>
      <div
        className="pt-12 lg:pt-32 bg-gradient-to-bl from-[#EADFF8] via-[#fff] to-[#E5F8F7]"
        id="home"
      >
        <div className="container mx-auto pb-32">
          <div className="flex flex-col lg:flex-row lg:gap-x-32">
            <div className="lg:w-3/5 grid content-between">
              <div className="lg:mb-16">
                <h1 className="text-gray-900 font-semibold text-5xl lg:text-7xl">
                  Hello, I&apos;m
                  <br />
                  Dheeraj R P
                </h1>
                <div className="text-lg text-gray-600 my-6">
                  A passionate software engineer with expertise in 
                  full-stack development. Currently working at Flexera, as an 
                  Associate Software Engineer, I drive innovation through 
                  building scalable web applications that solve real-world problems.
                  With a B.Tech in Computer Science, I bring strong technical foundations 
                  with hands-on experience in web development, cloud technologies, 
                  and AI-driven solutions. Looking forward to contributing to impactful projects and collaborating with
                  like-minded professionals in the tech community.
                </div>
                <a
                  href="/resume.pdf"
                  download
                  className="p-button bg-primary-500 hover:bg-primary-600 border-primary-500 hover:border-primary-600 font-bold no-underline"
                >
                  <ArrowDownTrayIcon className="size-6 text-white mr-3" />
                  Download CV
                </a>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mt-2 lg:mt-0">
                <div className="flex justify-center flex-col items-center gap-y-2 p-6 bg-[#edd8ff80] text-gray-700">
                  <div className="font-semibold text-2xl text-gray-900">2.5 years</div>
                  <div> Of Experience</div>
                </div>
                <div className="flex justify-center flex-col items-center gap-y-2 p-6 bg-[#edd8ff80] text-gray-700">
                  <div className="font-semibold text-2xl text-gray-900">Bengaluru, India</div>
                  <div>Currently Based In</div>
                </div>
                <div className="flex justify-center flex-col items-center gap-y-2 p-6 bg-[#edd8ff80] text-gray-700">
                  <div className="font-semibold text-2xl text-gray-900">Open to Work</div>
                  <div>Seeking New Opportunities</div>
                </div>
              </div>
            </div>
            <div className="lg:w-2/5 bg-white rounded-2xl flex justify-center items-center">
              <div className="relative aspect-square text-center max-h-[460px]">
                <Image
                  src={profle}
                  alt="profile - Picto Free NextJS & Tailwindcss Template"
                  className="object-contain max-w-full h-full w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 lg:py-24 bg-gray-50" id="experience">
        <div className="container mx-auto">
          <h2 className="text-gray-900 font-semibold text-4xl lg:text-5xl mb-6 text-center">
            Experience
          </h2>
          <div className="text-gray-500 text-center text-lg lg:w-1/2 mx-auto">
            <p>
              A snapshot of my professional journey across companies, technologies and roles that shaped me
            </p>
          </div>
          <div className="mt-12 relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-primary-200"></div>
            <div className="space-y-8">
              {experiences.map((experience) => (
                <article key={experience.company} className="relative pl-12">
                  <div className="rounded-2xl bg-white p-8 shadow-[0_16px_48px_0_rgba(17,24,39,0.08)]">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div>
                        <h3 className="text-gray-900 text-2xl font-semibold">
                          {experience.company}
                        </h3>
                        <p className="text-primary-500 font-semibold mt-1">
                          {experience.designation}
                        </p>
                      </div>
                      <div className="text-gray-500 text-sm lg:text-right">
                        <div className="font-semibold">{experience.duration}</div>
                        <div>{experience.location}</div>
                      </div>
                    </div>
                    <ul className="mt-5 space-y-2 text-gray-600 list-disc list-inside">
                      {experience.responsibilities.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 lg:py-24 bg-white" id="projects">
        <div className="container mx-auto">
          <h2 className="text-gray-900 font-semibold text-4xl lg:text-5xl mb-6 text-center mt-8 lg:mt-12">
            Projects
          </h2>
          <div className="text-gray-400 text-center text-lg lg:w-1/2 mx-auto">
            <p>
              Explore a selection of my work and projects. Each project
              showcases my expertise in design, development, and problem-solving.
              Click on any project to see detailed case studies and learn about
              the solutions I've implemented.
            </p>
          </div>
          <Projects />
        </div>
      </div>

      <div className="py-10 lg:py-24 bg-gray-50" id="certifications">
        <div className="container mx-auto">
          <h2 className="text-gray-900 font-semibold text-4xl lg:text-5xl mb-6 text-center">
            Certifications
          </h2>
          <div className="text-gray-400 text-center text-lg lg:w-1/2 mx-auto">
            <p>
              A collection of professional certifications that validate my expertise
              across technology domains.
            </p>
          </div>
          <Certifications />
        </div>
      </div>

      <div className="py-10 lg:py-24 bg-white" id="about-me">
        <div className="container mx-auto">
          <h2 className="text-gray-900 font-semibold text-4xl lg:text-5xl mb-6 text-center">
            About Me
          </h2>
          <div className="text-gray-400 text-center text-lg lg:w-1/2 mx-auto">
            <p>
              A few personal stories and interests that shape how I think,
              build, and live.
            </p>
          </div>
          <AboutMeSections />
        </div>
      </div>

      <div className="container mx-auto" id="contact">
        <div className="p-8 lg:p-20 bg-white rounded-2xl shadow-[0_59px_124px_0_rgba(0,0,0,0.12)] relative z-10 -mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-32 items-center">
            <div>
              <h3 className="text-gray-900 text-4xl font-semibold">
                Let&apos;s connect
              </h3>
              <div className="text-gray-400 text-lg mt-4 mb-4 lg:mb-0">
                If you&apos;d like to get in touch, you can reach out here. I&apos;m
                always open to meaningful conversations and new ideas.
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 group hover:bg-white rounded-lg hover:border-primary-500 hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] p-6 lg:w-4/5">
                  <div className="flex justify-center items-center p-3 rounded group-hover:bg-primary-500 bg-[rgba(237,216,255,0.50)]">
                    <i className="pi pi-map-marker group-hover:text-white text-primary-500 text-2xl leading-none"></i>
                  </div>
                  <div>
                    <div className="text-gray-700 text-sm">Address:</div>
                    <div className="text-gray-900 font-medium mt-1">
                      New Mexico 31134
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 group hover:bg-white rounded-lg hover:border-primary-500 hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] p-6 lg:w-4/5">
                  <div className="flex justify-center items-center p-3 rounded group-hover:bg-primary-500 bg-[rgba(237,216,255,0.50)]">
                    <i className="pi pi-at group-hover:text-white text-primary-500 text-2xl leading-none"></i>
                  </div>
                  <div>
                    <div className="text-gray-700 text-sm">My Email:</div>
                    <div className="text-gray-900 font-medium mt-1">
                      khurram.pk@hotmail.com
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 group hover:bg-white rounded-lg hover:border-primary-500 hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] p-6 lg:w-4/5">
                  <div className="flex justify-center items-center p-3 rounded group-hover:bg-primary-500 bg-[rgba(237,216,255,0.50)]">
                    <i className="pi pi-phone group-hover:text-white text-primary-500 text-2xl leading-none"></i>
                  </div>
                  <div>
                    <div className="text-gray-700 text-sm">Call Me Now:</div>
                    <div className="text-gray-900 font-medium mt-1">
                      00-1234 00000
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-1 mt-8">
                <Link
                  href="#"
                  className="flex justify-center items-center p-3 no-underline rounded group hover:bg-primary-500"
                >
                  <i className="pi pi-facebook group-hover:text-white text-primary-500  text-2xl leading-none"></i>
                </Link>
                <Link
                  href="#"
                  className="flex justify-center items-center p-3 no-underline rounded group hover:bg-primary-500 "
                >
                  <i className="pi pi-linkedin group-hover:text-white text-primary-500  text-2xl leading-none"></i>
                </Link>
                <Link
                  href="#"
                  className="flex justify-center items-center p-3 no-underline rounded group hover:bg-primary-500 "
                >
                  <i className="pi pi-instagram group-hover:text-white text-primary-500  text-2xl leading-none"></i>
                </Link>
                <Link
                  href="#"
                  className="flex justify-center items-center p-3 no-underline rounded group hover:bg-primary-500 "
                >
                  <i className="pi pi-twitter group-hover:text-white text-primary-500  text-2xl leading-none"></i>
                </Link>
                <Link
                  href="#"
                  className="flex justify-center items-center p-3 no-underline rounded group hover:bg-primary-500 "
                >
                  <i className="pi pi-pinterest group-hover:text-white text-primary-500  text-2xl leading-none"></i>
                </Link>
              </div>
            </div>
            <div>
              <div className="text-gray-400 text-lg">
                There are many variations of passages of Lorem Ipsu available,
                but the majority have suffered alte.
              </div>
              <div className="mt-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
