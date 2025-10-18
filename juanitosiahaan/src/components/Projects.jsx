import { motion } from "framer-motion";
import { FaGithub, FaLink } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Credit Card Fraud Detection - Final Year Project Dissertation",
      description:
        "Built a full-stack machine learning-powered fraud detection system that accurately identifies credit card fraudulent,	Implemented an interactive dashboard for user to visualize flagged transactions and integrated a payment system for real-time monitoring, leveraging ReactJS with Flask APIs microservices in Dockerized environment",
      tech: ["TypeScript", "Flask", "Docker", "Scikit Learn"],
      github: "",
      demo: "",
      image: "creditcard_img.png",
    },
    {
      id: 2,
      title: "AldebaranHealth",
      description:
        "AldebaranHealth is an AI-powered Virtual Healthcare Assistant that empowers users to access personalized physical and mental health support using cutting-edge technology. With an intelligent AI chatbot, stress analysis tools, and a healthcare facility locator, AldebaranHealth is designed to make healthcare accessible, scalable, and secure for everyone.",
      tech: ["TypeScript", "ReactJS", "Spring Boot", "Flask", "Scikit Learn", "PostgreSQL"],
      github: "https://github.com/juanitoaldebaran/AldebaranHealth",
      demo: "https://aldebaran-health.vercel.app/",
      image: "AldebaranHealth_img.png",
    },
    {
      id: 3,
      title: "AldebaranTutor",
      description:
        "AldebaranTutor is an AI-powered learning platform designed to help students enhance their knowledge and skills in Finance, Technology, and Engineering. The platform integrates Machine Learning, AI Chatbots, and Interactive Quizzes to deliver a personalized and intelligent study experience.",
      tech: ["TypeScript", "ReactJS", "Spring Boot", "Flask", "Scikit Learn", "PostgreSQL"],
      github: "https://github.com/juanitoaldebaran/AldebaranTutor",
      demo: "https://aldebaran-tutor.vercel.app/",
      image: "AldebaranTutor_img.png",
    },
    {
      id: 4,
      title: "eStockPal",
      description:
        "Built a full-stack platform for predicting stock price prediction using Flask and machine learning models using Scikit Learn, and enhancing dashboard visualization of stock growth using NextJS",
      tech: ["NexJS", "Flask", "Scikit Learn"],
      github: "https://github.com/juanitoaldebaran/estockpal",
      demo: "https://e-stock-pal.vercel.app/market",
      image: "eStockPal_img.png",
    },
  ];

  return (
    <motion.section
      id="projects"
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center py-20 px-6"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl w-full">
        <h1 className="font-bold text-4xl mb-10 text-center md:text-left">
          Projects <span className="blink-fast text-blue-800">|</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.03 }}
              className="bg-black rounded-xl shadow-lg border border-gray-800 hover:border-blue-600 transition-all duration-300 flex flex-col"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-xl group-hover:opacity-90 transition-opacity duration-300"
                />
              </div>

              <div className="flex flex-col flex-grow p-6">
                <h2 className="text-xl font-semibold text-blue-600 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-300 text-sm flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-blue-300 border border-blue-400/30 px-3 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-5 mt-5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-500 transition-colors"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-500 transition-colors"
                    >
                      <FaLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
