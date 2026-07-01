import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function Projects() {
  const projectsData = [
    {
      id: 1,
      imageUrl: "portfolio-1.jpg",
      category: "AI AGENT",
      title: "Automated News Post Creation Agent",
      description:
        "Built an AI-driven agent integrating Confluence, Jira, and GitHub custom agents to automate feature release note creation, reducing effort by 95%.",
      link: "#",
    },
    {
      id: 2,
      imageUrl: "portfolio-2.jpg",
      category: "AI AGENT",
      title: "Figma-UI-Generator Agent",
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
        "Contributed to an IEEE-published Deep Learning research project using YOLOv7/YOLOv8 for AI-driven image detection and diagnostic analysis.",
      link: "#",
    },
    {
      id: 4,
      imageUrl: "portfolio-4.jpg",
      category: "WEB DESIGN",
      title: "Corporate Website",
      description:
        "Modern responsive website for a tech company featuring dynamic content, SEO optimization, and lead generation.",
      link: "#",
    },
    {
      id: 5,
      imageUrl: "portfolio-5.jpg",
      category: "BACKEND",
      title: "Analytics API",
      description:
        "Scalable API backend for processing and analyzing large datasets with advanced filtering and reporting capabilities.",
      link: "#",
    },
    {
      id: 6,
      imageUrl: "portfolio-6.jpg",
      category: "UI-UX DESIGN",
      title: "Customer Portal",
      description:
        "User-friendly customer portal with self-service options, support tickets, and personalized dashboards.",
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
