import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Experiences() {

  const jobList = [
    {
      id: "verint",
      name: "Verint",
      link: "https://www.verint.com/",
      date: "July 2024 - August 2025",
      role: "Software Engineer Intern",
      description: [
        "Built CLI using Go-Gin framework to automate backend endpoints workflow to Gravitee.io, leveraging Cobra CLI for user interface, containerized the features with Docker and Podman, resulting in a project efficiency by 85%",
        "Engineered production grade CI/CD pipeline using Harness and GitHub Actions for Verint’s Cloud Platform Team, reducing automation process time, monitoring metrics for 3 core projects workflow using Datadog and Terraform",
        "Implemented BDD Testing using Ginkgo to assess metrics distribution performance from Kafka and store metrics into InfluxDB, enhancing code test coverage from 55% to overall coverage performance by 87%",
      ],
      tech: ["Go (Gin, CobraCLI, Ginkgo), Docker, Podman, GitHub Actions, Harness, Kafka, InfluxDB, Datadog, Terraform"]
    },
    {
      id: "mitratech",
      name: "Mitratech Indonesia",
      link: "https://mitratechindonesia.co.id/#/",
      date: "July 2023 - September 2023",
      role: "Software Engineer Intern",
      description: [
        "Designed web applications of Jakarta Public and Government Service project using ReactJS, integrate chatbot AI with WhatsApp platform access to provide 10+ information features",
        "Engineered geospatial location using ArcGIS technology data through Figma 3D data visualization, enhancing project efficiency by 75%",
      ],
      tech: ["ReactJS, ArcGIS, Figma"]
    },
    {
      id: "bright-network",
      name: "Bright Network",
      link: "http://brightnetwork.co.uk/",
      date: "June 2023 - Jul 2023",
      role: "Technology Summer Intern",
      description: [
        "Created a full stack application using ReactJS and Spring Boot to showcase information for Lloyds Banking Group related technology innovation for SMEs to achieve Net Zero Carbon Emission",      ],
      tech: ["ReactJS, SpringBoot, PostgreSQL, Docker"]
    }
  ];

  const [activeJob, setActiveJob] = useState(jobList[0]);

  return (
    <motion.section
      id="experiences"
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center py-20 px-6"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl">
        <h1 className="font-bold text-4xl text-center md:text-left">Work Experiences <span className="blink-fast text-blue-800">|</span></h1>

        <div className="flex flex-col md:flex-row gap-10 mt-8">
          <div className="flex md:flex-col flex-row md:w-1/4 gap-4 overflow-x-auto pb-2 md:pb-0">
            {jobList.map((job) => (
              <button
                key={job.id}
                onClick={() => setActiveJob(job)}
                className={`text-left cursor-pointer font-mono px-4 py-2 border-b-2 md:border-l-2 md:border-b-0 transition-all duration-200
                  ${activeJob.id === job.id ? "border-blue-800 text-blue-700" : "border-transparent hover:text-blue-300 text-gray-400"}
                  `}
              >
                {job.name}
              </button>
            ))}
          </div>  

           <motion.div
            key={activeJob.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="md:w-3/4"
          >
            <h2 className="text-2xl font-bold">
              {activeJob.role}{" "}
              <a
                href={activeJob.link}
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                @ {activeJob.name}
              </a>
            </h2>
            <p className="text-gray-400 text-sm mb-4">{activeJob.date}</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {activeJob.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              {activeJob.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
