import Image from "next/image";
import profle from "@/public/profile.png";
import Link from "next/link";

import ContactForm from "./_components/ContactForm";
import Projects from "./_components/Projects";
import Certifications from "./_components/Certifications";
import AboutMeSections from "./_components/AboutMeSections";

import { Button } from "primereact/button";

import {
  ArrowDownTrayIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <>
      <div
        className="pt-12 lg:pt-32 bg-gradient-to-bl from-[#EADFF8] via-[#fff] to-[#E5F8F7]"
        id="home"
      >
        <div className="container mx-auto mb-32">
          <div className="flex flex-col lg:flex-row lg:gap-x-32">
            <div className="lg:w-3/5 grid content-between">
              <div className="lg:mb-16">
                <h1 className="text-gray-900 font-semibold text-5xl lg:text-7xl">
                  Hello, I&apos;m
                  <br />
                  Dheeraj R P
                </h1>
                <div className="text-lg text-gray-600 my-6">
                  Technology has always felt a little magical to me. What began as curiosity about how software works evolved into a passion for building it—and eventually into my profession. From software engineering to AI, I enjoy solving complex problems, exploring emerging technologies, and turning ideas into meaningful projects. Along the way, I love connecting with people from different cultures and perspectives, exploring new ideas, and gaining fresh insights that inspire both my work and personal growth.
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
        <div
          className="container mx-auto bg-white rounded-2xl shadow-[0_36px_105px_0_rgba(43,56,76,0.10)] relative -mb-16"
          id="about"
        >
          <div className="flex items-center flex-col lg:flex-row lg:gap-x-32 p-4 lg:p-28">
            <div className="lg:w-2/5 flex justify-center items-center bg-[#F0F1F3]">
              <div className="relative aspect-square flex flex-col justify-center max-h-[460px]">
                <Image
                  src={profle}
                  alt="profile - Picto Free NextJS & Tailwindcss Template"
                  className="object-contain h-full w-auto max-w-full"
                />
                <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-9 flex gap-1 bg-white w-auto mx-auto  p-3 rounded shadow-[0_12px_64px_0_rgba(28,25,25,0.12)]">
                  <Link
                    href="https://github.com/yourusername"
                    target="_blank"
                    title="GitHub"
                    className="flex justify-center items-center p-3 no-underline rounded group hover:bg-primary-500"
                  >
                    <i className="pi pi-github group-hover:text-white text-primary-500  text-2xl leading-none"></i>
                  </Link>
                  <Link
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    title="LinkedIn"
                    className="flex justify-center items-center p-3 no-underline rounded group hover:bg-primary-500 "
                  >
                    <i className="pi pi-linkedin group-hover:text-white text-primary-500  text-2xl leading-none"></i>
                  </Link>
                  <Link
                    href="https://twitter.com/yourusername"
                    target="_blank"
                    title="Twitter"
                    className="flex justify-center items-center p-3 no-underline rounded group hover:bg-primary-500 "
                  >
                    <i className="pi pi-twitter group-hover:text-white text-primary-500  text-2xl leading-none"></i>
                  </Link>
                  <Link
                    href="https://instagram.com/yourusername"
                    target="_blank"
                    title="Instagram"
                    className="flex justify-center items-center p-3 no-underline rounded group hover:bg-primary-500 "
                  >
                    <i className="pi pi-instagram group-hover:text-white text-primary-500  text-2xl leading-none"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-3/5 grid mt-16 lg:mt-0">
              <div>
                <h1 className="text-gray-900 font-semibold text-4xl">
                  Software Engineer & Full-Stack Developer
                </h1>
                <div className="text-lg text-gray-600 my-6">
                  <p className="mb-3">
                    I build scalable, user-focused web applications and digital products.
                    My expertise spans frontend technologies, backend systems, and cloud
                    architecture, with a passion for turning complex problems into elegant solutions.
                  </p>
                  <p>
                    Whether it&apos;s building APIs, designing responsive interfaces, or
                    optimizing performance, I bring a developer&apos;s mindset to every project.
                  </p>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-6">
                  <Link
                    href="#projects"
                    className="p-button bg-primary-500 hover:bg-primary-600 border-primary-500 hover:border-primary-600 font-bold no-underline"
                  >
                    View My Projects
                  </Link>
                  <a
                    href="/resume.pdf"
                    download
                    className="p-button bg-primary-500 hover:bg-primary-600 border-primary-500 hover:border-primary-600 font-bold no-underline"
                  >
                    <ArrowDownTrayIcon className="size-6 text-white mr-3" />
                    Download CV
                  </a>
                </div>
              </div>
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
          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="p-button bg-primary-500 hover:bg-primary-600 border-primary-500 hover:border-primary-600 font-bold no-underline"
            >
              View All Projects
            </Link>
          </div>
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
              across cloud platforms, development practices, and technology domains.
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

      <div className="py-10 lg:py-24 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-white font-semibold text-4xl lg:text-5xl mb-6 text-center w-full lg:w-1/2 mx-auto">
            If you&apos;d like to get in touch, let&apos;s connect.
          </h2>
          <div className="text-gray-300 text-center text-lg w-full lg:w-1/2 mx-auto">
            <p>
              Whether it&apos;s a role, collaboration, or a quick conversation,
              feel free to reach out. I&apos;d be happy to connect.
            </p>
          </div>
          <div className="mt-12 text-center">
            <Link
              href="#contact"
              className="p-button bg-primary-500 hover:bg-primary-600 border-primary-500 hover:border-primary-600 font-bold no-underline"
            >
              <span className="inline-block mr-3"> Let&apos;s Connect</span>
              <ArrowRightIcon className="size-6 text-white" />
            </Link>
          </div>
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
