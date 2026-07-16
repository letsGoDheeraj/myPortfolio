import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

const projectsData = [
  {
    id: 1,
    imageUrl: "portfolio-1.jpg",
    category: "Agentic AI",
    title: "Multi-Agent AI Release Notes Generator",
    description:
      "Built an AI-driven agent integrating Confluence, Jira, and GitHub custom agents to automate feature release note creation, reducing effort by 95%.",
    fullDescription: `Engineered a multi-agent AI system integrating Confluence, Jira, and GitHub to automate feature release documentation. The agents analyze requirements, documentation, and customer value to generate React UI code, create GitHub pull requests, and produce context-aware release notes.

Key Features:
- Multi-agent AI workflow with specialized GitHub and Jira agents
- Automated retrieval of context from Jira epics, Confluence pages, and GitHub repositories
- AI-powered analysis of feature requirements and customer value
- Automated React UI code generation and GitHub pull request creation
- Context-aware release note generation from engineering artifacts
- Reduced manual engineering effort by ~95% through workflow automation

Technologies Used: React.js, TypeScript, GitHub MCP, Atlassian MCP, LLMs, Go, Jira, Confluence`,
    technologies: ["React.js", "TypeScript", "GitHub MCP", "Atlassian MCP", "LLMs", "Go", "Jira", "Confluence"],
    link: "#",
    challenge: "Engineering teams spend significant time translating Jira requirements and Confluence documentation into code changes, pull requests, release notes, and documentation updates, resulting in repetitive manual effort and slower feature delivery.",
    solution: "Developed a multi-agent AI system that leverages GitHub, Jira, and Confluence context to understand requirements, identify customer value, generate React UI code, create GitHub pull requests, and automatically produce release documentation.",
    impact: "Reduced manual effort by ~95%, shortened feature implementation cycles, and standardized release documentation through AI-driven workflow automation.",
  },
  {
    id: 2,
    imageUrl: "portfolio-2.jpg",
    category: "AI AGENT",
    title: "AI-Powered Figma-to-Code Agent",
    description:
      "Built an AI-powered Figma-to-code agent achieving 80% code generation accuracy, reducing UI development effort by 60-70%.",
    fullDescription: `A powerful AI agent that transforms Figma designs directly into production-ready React code. This agent bridges the gap between design and development by automatically generating components with high accuracy.

Key Features:
- 80% code generation accuracy from Figma designs
- Generates a complete page scaffold (TSX, SCSS, i18n, tests, RTK Query slice) from a single Figma design URL
- Automatically maps every Figma component to the correct snow-react-ds Design System component using Code Connect snippets
- Produces dual-cloud API hooks for both Azure and AWS environments with automatic feature flag switching
- Runs lint and unit tests after generation and fixes all failures before writing the final commit
- Creates a feature branch, commits all generated files, and opens a draft PR against develop without any manual Git steps

Technologies Used: Figma MCP, Figma Code Connect, React.js, TypeScript, SCSS, Redux Toolkit, RTK Query, GitHub MCP`,
    technologies: ["Figma MCP", "Figma Code Connect", "React.js", "TypeScript", "SCSS", "Redux Toolkit", "RTK Query", "GitHub MCP"],
    link: "#",
    challenge: "Automating the conversion of complex Figma designs into production-ready frontend code while maintaining design system compliance, scalability, and code quality.",
    solution: "Built an AI-powered design-to-code pipeline that transforms Figma designs into production-ready React applications by combining Figma MCP, Code Connect, automated code generation, validation, and GitHub workflow automation.",
    impact: "Achieved ~80% code generation accuracy, reduced frontend development effort by 60–70%, minimized repetitive coding tasks, and accelerated design-to-development workflows.",
  },
  {
  id: 3,
  imageUrl: "portfolio-3.jpg",
  category: "DEEP LEARNING",
  title: "Redefining Dental Radiology using Deep Learning",
  description:
    "Contributed to an IEEE-published deep learning research project leveraging YOLOv7 and YOLOv8 for automated dental disease detection from panoramic radiographs.",
  fullDescription: `Developed and evaluated deep learning models for automated dental disease detection using panoramic dental X-rays (OPGs). The project involved dataset preparation, annotation, model training, and performance evaluation using state-of-the-art YOLO architectures. The research was published in IEEE and presented at the 2nd World Conference on Communication & Computing (WCONF 2024).

Key Features:
- Automated object detection of multiple dental conditions from panoramic radiographs (OPGs)
- Dataset preparation, annotation, augmentation, and preprocessing for robust model training
- Comparative evaluation of YOLOv7 and YOLOv8 object detection models
- Performance analysis using standard object detection evaluation metrics
- Research published in IEEE and presented at WCONF 2024

Technologies Used: Python, PyTorch, YOLOv7, YOLOv8, Roboflow, OpenCV, Jupyter Notebook`,
  technologies: [
    "Python",
    "PyTorch",
    "YOLOv7",
    "YOLOv8",
    "Roboflow",
    "OpenCV",
    "Jupyter Notebook"
  ],

  link: "#",

  challenge:
    "Developing a reliable deep learning pipeline capable of detecting multiple dental conditions from panoramic dental X-rays while handling limited annotated medical imaging data.",

  solution:
    "Prepared and annotated a dental radiograph dataset, trained and evaluated YOLOv7 and YOLOv8 models, and compared their detection performance for automated dental disease identification.",

  impact:
    "Published in IEEE and presented at the 2nd World Conference on Communication & Computing (WCONF 2024), demonstrating the application of deep learning for automated dental image analysis."
},
  {
  id: 4,
  imageUrl: "portfolio-4.jpg",
  category: "IoT",
  title: "Smart RFID-Based Pet Feeder",
  description:
    "Designed and developed an IoT-enabled automated pet feeding system using ESP32 and RFID technology for secure, hands-free pet identification and food dispensing.",

  fullDescription: `Built an IoT-powered smart pet feeder that automatically dispenses food when an authorized pet wearing an RFID-enabled collar approaches the device. The project combines embedded systems, RFID authentication, and real-time hardware control to provide a reliable, contactless feeding solution.

Key Features:
- RFID-based pet identification using a collar-mounted RFID tag
- ESP32-powered embedded system for real-time device control
- Automated food dispensing through a servo motor upon successful authentication
- Contactless and secure feeding mechanism to prevent unauthorized access
- Modular architecture with support for future enhancements such as scheduled feeding and IoT monitoring

Technologies Used: ESP32, RFID (MFRC522), Arduino IDE, C++, Servo Motor, Embedded Systems`,

  technologies: [
    "ESP32",
    "RFID (MFRC522)",
    "Arduino IDE",
    "C++",
    "Servo Motor",
    "Embedded Systems"
  ],

  link: "#",

  challenge:
    "Designing a reliable embedded system capable of accurately identifying an authorized pet and dispensing food automatically while preventing false activations and ensuring consistent hardware performance.",

  solution:
    "Integrated an ESP32 microcontroller with an RFID reader and servo-controlled dispensing mechanism to authenticate pets in real time and automate the feeding process.",

  impact:
    "Demonstrated the practical application of IoT and embedded systems to automate pet care through secure RFID-based authentication and real-time hardware control."
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
      

      {/* Content Section */}
      <div className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto">

          {/* Image + Overview side by side */}
          <div className="flex flex-col lg:flex-row gap-10 mb-16">
            <div className="relative shrink-0 w-full lg:w-[26rem] h-[26rem] rounded-2xl overflow-hidden bg-gray-200">
              <Image
                src={`/portfolio/${project.imageUrl}`}
                fill
                className="object-cover"
                alt={project.title}
                priority
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                {project.fullDescription}
              </p>
              {project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 p-button bg-primary-500 hover:bg-primary-600 border-primary-500 hover:border-primary-600 font-bold no-underline"
                >
                  Visit Project
                </a>
              )}
            </div>
          </div>

          {/* Challenge, Solution, Impact */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-purple-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Challenge</h3>
              <p className="text-gray-600">{project.challenge}</p>
            </div>
            <div className="bg-purple-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Solution</h3>
              <p className="text-gray-600">{project.solution}</p>
            </div>
            <div className="bg-purple-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Impact</h3>
              <p className="text-gray-600">{project.impact}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="border-t border-gray-200 pt-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {previousProject ? (
                <Link
                  href={`/projects/${previousProject.id}`}
                  className="group block p-6 bg-gray-50 rounded-lg no-underline hover:bg-gray-100 transition"
                >
                  <div className="mb-2 flex items-center gap-3 font-semibold text-primary-500 no-underline">
                    <ArrowLeftIcon className="size-5" />
                    Previous Project
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 no-underline group-hover:text-primary-500">
                    {previousProject.title}
                  </h4>
                </Link>
              ) : (
                <div />
              )}

              {nextProject ? (
                <Link
                  href={`/projects/${nextProject.id}`}
                  className="group block p-6 bg-gray-50 rounded-lg text-right no-underline hover:bg-gray-100 transition"
                >
                  <div className="mb-2 flex items-center justify-end gap-3 font-semibold text-primary-500 no-underline">
                    Next Project
                    <ArrowRightIcon className="size-5" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 no-underline group-hover:text-primary-500">
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
