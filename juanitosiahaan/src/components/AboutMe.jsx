import { motion } from "framer-motion"

export default function AboutMe() {
    const images = [
        "JuanitoSiahaan1.jpeg",
        "JuanitoSiahaan2.jpeg",
        "JuanitoSiahaan3.jpeg",
        "JuanitoSiahaan4.jpeg"
    ]

    const technologies = [
        "Java",
        "Go",
        "Python",
        "Typescript",
        "ReactJS",
        "NextJS",
        "Apache Kafka",
        "Docker",
        "PostgreSQL",
        "InfluxDB",
        "Harness",
        "Podman",
        "AWS",
        "Datadog",
        "Terraform"
    ];

  return (
    <motion.section
      id="aboutme"
      className="min-h-screen bg-black flex items-center justify-center"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
        <div className="mt-18 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl items-center w-full">
            <div className="flex flex-col">
                <h1 className="text-white text-center md:text-left font-bold text-5xl">
                    About Me <span className="text-blue-800 blink-fast">|</span>
                </h1>
                <h3 className="text-white text-center md:text-left font-light text-xl md:text-2xl mt-4">My name is Juanito Aldebaran Siahaan 👋🏽</h3>
                <p className="text-white text-lg leading-relaxed max-w-xl mt-4 text-justify">
                    I'm a Final Year student of{" "}
                    <span className="font-bold text-blue-600">
                    BSc Computer Science with Professional Experience at Queen's
                    University Belfast
                    </span>{" "}
                    with hands-on experience in Software Engineering — including
                    Full-Stack Development, Cloud Technologies, DevOps, and Artificial
                    Intelligence / Machine Learning.
                </p>
                <div className="flex flex-col gap-4 mt-4">
                    <h1 className="text-white font-bold text-2xl mt-6">Tech Stack</h1>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-md">
                        {technologies.map((tech, i) => (
                            <motion.div
                            key={i}
                            className="text-white bg-opacity-80 rounded-lg border border-gray-800 p-2 text-center font-semibold shadow-lg shadow-black/30 hover:shadow-blue-400/30 hover:scale-105 transition-all duration-300"
                            whileHover={{ rotate: 1 }}
                            >
                            {tech}
                            </motion.div>
                        ))}
                    </div>
                    <p className="text-white mt-6">Outside of my work and study, i like to play football, going to the gym, playing video games, and listening to music </p>
                </div>
            </div>
            <motion.div
            className="flex flex-wrap justify-center gap-6 md:gap-10"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            >
                {images.map((image, index) => (
                    <motion.img
                    key={index}
                    src={`src/assets/${image}`}
                    alt={`JuanitoSiahaan${index}`}
                    className="w-44 h-44 sm:w-56 sm:h-56 object-cover rounded-2xl border border-blue-900/40 shadow-2xl hover:shadow-blue-400/40 transition-all duration-300"
                    initial={{ rotate: (index - 1.5) * 4, y: 30, opacity: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{
                        scale: 1.1,
                        rotate: 0,
                        zIndex: 99,
                        borderColor: "#3b82f6",
                    }}
                    transition={{ type: "spring", stiffness: 120, damping: 12 }}
                    />
                ))}
            </motion.div>
        </div>
    </motion.section>
  )
}
