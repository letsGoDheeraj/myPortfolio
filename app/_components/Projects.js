import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function Projects() {
  const projectsData = [
    {
      id: 1,
      imageUrl: "portfolio-1.png",
      category: "Agentic AI",
      title: "Multi-Agent AI Release Notes Generator",
      description:
        "Built an AI-driven agent integrating Confluence, Jira, and GitHub custom agents to automate feature release note creation, reducing effort by 95%.",
      link: "#",
    },
    {
      id: 2,
      imageUrl: "portfolio-2.png",
      category: "AI AGENT",
      title: "AI-Powered Figma-to-Code Agent",
      description:
        "Built an AI-powered Figma-to-code agent achieving 80% code generation accuracy, reducing UI development effort by 60-70%.",
      link: "#",
    },
    {
      id: 3,
      imageUrl: "portfolio-3.jpg",
      category: "DEEP LEARNING",
      title: "Redefining Dental Radiology using Deep Learning",
      description:
        "Contributed to an IEEE-published deep learning research project leveraging YOLOv7 and YOLOv8 for automated dental disease detection from panoramic radiographs.",
      link: "#",
    },
    {
      id: 4,
      imageUrl: "portfolio-4.jpg",
      category: "IoT",
      title: "Smart RFID-Based Pet Feeder",
      description:
        "Designed and developed an IoT-enabled automated pet feeding system using ESP32 and RFID technology for secure, hands-free pet identification and food dispensing.",
      link: "#",
    },
    {
      id: 5,
      imageUrl: "portfolio-5.jpg",
      category: "SYSTEM DESIGN",
      title: "Multi-Purchase & Tier Handling System Design",
      description:
        "Designed a comprehensive system for handling multiple asset purchases with different tiers and terms, enabling organizations to accurately track varied acquisition costs and compliance.",
      link: "#",
    },
    {
      id: 6,
      imageUrl: "portfolio-7.jpg",
      category: "FULL STACK",
      title: "Picto – Personal Portfolio Platform",
      description:
        "Engineered a modern, SEO-optimized portfolio platform to showcase projects, experience, certifications, and technical expertise through an interactive, high-performance user experience.",
      link: "#",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg border border-solid border-[#E6E8EB] overflow-hidden "
          >
            <div className="relative h-[248px]">
              <Image
                src={`portfolio/${project.imageUrl}`}
                fill
                className="object-cover"
                alt="blog"
              />
            </div>
            <div className="p-8">
              <div className="text-gray-400 text-xs font-medium">
                {project.category}
              </div>
              <div className="text-gray-900 text-lg font-semibold mb-1">
                {project.title}
              </div>
              <div className="text-gray-600 text-sm mt-3">
                {project.description}
              </div>

              <Link
                href={`/projects/${project.id}`}
                className="p-button p-button-outlined mt-5 text-primary-500 font-bold no-underline"
              >
                Learn More
                <ArrowRightIcon className="size-6 text-primary-500 ml-3" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
