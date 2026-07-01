import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

const projectsData = [
  {
    id: 1,
    imageUrl: "portfolio-1.jpg",
    category: "AI AGENT",
    title: "Automated News Post Creation Agent",
    description:
      "Built an AI-driven agent integrating Confluence, Jira, and GitHub custom agents to automate feature release note creation, reducing effort by 95%.",
    fullDescription: `This project involved creating a sophisticated AI agent that seamlessly integrates with multiple tools including Confluence, Jira, and GitHub. The agent automatically generates feature release notes by analyzing code changes, documentation, and issue tracking data.

Key Features:
- Automated extraction of release information from Jira and GitHub
- Integration with Confluence for documentation management
- Custom AI agents for intelligent content generation
- 95% reduction in manual effort for release note creation
- Real-time processing and updates

Technologies Used: React.js, TypeScript, GitHub Copilot, Atlassian Rovo, Jira, Confluence`,
    technologies: ["React.js", "TypeScript", "GitHub Copilot", "Atlassian Rovo", "Jira", "Confluence"],
    link: "#",
    challenge: "Automating the time-consuming process of creating release notes while ensuring accuracy and consistency across different platforms.",
    solution: "Developed a unified AI agent that pulls data from multiple sources and generates cohesive, professional release notes automatically.",
    impact: "95% reduction in manual effort, faster release cycles, and improved documentation consistency.",
  },
  {
    id: 2,
    imageUrl: "portfolio-2.jpg",
    category: "AI AGENT",
    title: "Figma-UI-Generator Agent",
    description:
      "Built an AI-powered Figma-to-code agent achieving 80% code generation accuracy, reducing UI development effort by 60-70%.",
    fullDescription: `A powerful AI agent that transforms Figma designs directly into production-ready React code. This agent bridges the gap between design and development by automatically generating components with high accuracy.

Key Features:
- 80% code generation accuracy from Figma designs
- Automatic component creation in React/TypeScript
- Design system integration and component mapping
- Support for responsive layouts and Tailwind CSS
- 60-70% reduction in UI development time

Technologies Used: Figma MCP, React.js, TypeScript, Figma Code Connect, GHCP`,
    technologies: ["Figma MCP", "React.js", "TypeScript", "Figma Code Connect", "GHCP"],
    link: "#",
    challenge: "Converting visual design components into clean, maintainable code while preserving design intent and ensuring consistency.",
    solution: "Implemented an intelligent pattern recognition system that identifies design elements and generates corresponding React components with proper styling.",
    impact: "60-70% faster UI development, improved design-to-code consistency, reduced rework and revisions.",
  },
  {
    id: 3,
    imageUrl: "portfolio-3.jpg",
    category: "DEEP LEARNING",
    title: "Redefining Dental Radiology using Deep Learning",
    description:
      "Contributed to an IEEE-published Deep Learning research project using YOLOv7/YOLOv8 for AI-driven image detection and diagnostic analysis.",
    fullDescription: `A cutting-edge research project that applies advanced deep learning techniques to dental radiography. This work was published in IEEE and presented at international conferences.

Key Features:
- YOLOv7 and YOLOv8 object detection models
- Dental anomaly detection and classification
- High accuracy in identifying dental conditions from X-rays
- Real-time diagnostic analysis
- Clinical validation and testing

Technologies Used: YOLOv7, YOLOv8, Python, Roboflow, Jupyter, PyTorch`,
    technologies: ["YOLOv7", "YOLOv8", "Python", "Roboflow", "Jupyter", "PyTorch"],
    link: "#",
    challenge: "Creating accurate AI models for detecting and classifying dental conditions in radiographic images for clinical use.",
    solution: "Trained and optimized YOLO models on a curated dataset of dental X-rays with expert annotation and validation.",
    impact: "IEEE publication, presentation at 2nd World Conference on Communication & Computing (WCONF), improved diagnostic accuracy.",
  },
  {
    id: 4,
    imageUrl: "portfolio-4.jpg",
    category: "WEB DESIGN",
    title: "Corporate Website",
    description:
      "Modern responsive website for a tech company featuring dynamic content, SEO optimization, and lead generation.",
    fullDescription: `A comprehensive corporate website designed and built to showcase company services and generate qualified leads.`,
    technologies: ["Next.js", "React", "Tailwind CSS", "SEO"],
    link: "#",
    challenge: "Creating an engaging, fast-loading website that converts visitors into leads.",
    solution: "Built with Next.js for optimal performance and SEO, with strategic content placement and CTAs.",
    impact: "Improved lead generation and brand visibility.",
  },
  {
    id: 5,
    imageUrl: "portfolio-5.jpg",
    category: "BACKEND",
    title: "Analytics API",
    description:
      "Scalable API backend for processing and analyzing large datasets with advanced filtering and reporting capabilities.",
    fullDescription: `A robust backend API designed to handle large-scale data analytics requests with high performance and reliability.`,
    technologies: ["Node.js", "Express", "PostgreSQL", "Redis"],
    link: "#",
    challenge: "Processing millions of data points efficiently while providing real-time analytics.",
    solution: "Implemented caching strategies and optimized database queries for high-performance data retrieval.",
    impact: "Supported millions of daily requests with sub-second response times.",
  },
  {
    id: 6,
    imageUrl: "portfolio-6.jpg",
    category: "UI-UX DESIGN",
    title: "Customer Portal",
    description:
      "User-friendly customer portal with self-service options, support tickets, and personalized dashboards.",
    fullDescription: `An intuitive customer portal that empowers users to manage their accounts and resolve issues independently.`,
    technologies: ["React", "Tailwind CSS", "Next.js", "Firebase"],
    link: "#",
    challenge: "Creating a user-friendly interface that reduces support tickets while improving customer satisfaction.",
    solution: "Designed with user research and iterative testing to create an intuitive self-service experience.",
    impact: "30% reduction in support tickets, improved customer satisfaction scores.",
  },
];

export function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id.toString(),
  }));
}

export default async function ProjectDetail({ params }) {
  const { id } = await params;
  const projectId = parseInt(id, 10);
  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Link href="/#projects" className="p-button bg-primary-500 hover:bg-primary-600">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const projectIndex = projectsData.findIndex((p) => p.id === projectId);
  const previousProject = projectIndex > 0 ? projectsData[projectIndex - 1] : null;
  const nextProject = projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : null;

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <div className="bg-gray-50 pt-20 pb-10">
        <div className="container mx-auto">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-primary-500 font-semibold mb-6 hover:text-primary-600"
          >
            <ArrowLeftIcon className="size-5" />
            Back to Projects
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{project.title}</h1>
          <div className="flex items-center gap-4">
            <span className="px-4 py-2 bg-primary-500 text-white rounded-full text-sm font-semibold">
              {project.category}
            </span>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-96 lg:h-[600px] bg-gray-200">
        <Image
          src={`/portfolio/${project.imageUrl}`}
          fill
          className="object-cover"
          alt={project.title}
          priority
        />
      </div>

      {/* Content Section */}
      <div className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 whitespace-pre-line">
                {project.fullDescription}
              </p>

              {/* Challenge, Solution, Impact */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-12">
                <div className="bg-purple-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Challenge</h3>
                  <p className="text-gray-600">{project.challenge}</p>
                </div>
                <div className="bg-purple-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Solution</h3>
                  <p className="text-gray-600">{project.solution}</p>
                </div>
              </div>

              <div className="bg-purple-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Impact</h3>
                <p className="text-gray-600">{project.impact}</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Technologies</h3>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Links</h3>
                {project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-button bg-primary-500 hover:bg-primary-600 border-primary-500 hover:border-primary-600 font-bold no-underline w-full"
                  >
                    Visit Project
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="border-t border-gray-200 pt-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {previousProject ? (
                <Link
                  href={`/projects/${previousProject.id}`}
                  className="group p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <div className="flex items-center gap-3 text-primary-500 font-semibold mb-2">
                    <ArrowLeftIcon className="size-5" />
                    Previous Project
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 group-hover:text-primary-500">
                    {previousProject.title}
                  </h4>
                </Link>
              ) : (
                <div />
              )}

              {nextProject ? (
                <Link
                  href={`/projects/${nextProject.id}`}
                  className="group p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition text-right"
                >
                  <div className="flex items-center justify-end gap-3 text-primary-500 font-semibold mb-2">
                    Next Project
                    <ArrowRightIcon className="size-5" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 group-hover:text-primary-500">
                    {nextProject.title}
                  </h4>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
