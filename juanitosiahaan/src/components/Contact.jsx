import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const socials = [
    {
      name: "linkedin.com/in/juanitoaldebaransiahaan/",
      link: "https://www.linkedin.com/in/juanitoaldebaransiahaan/",
      icon: <FaLinkedin />,
    },
    {
      name: "github.com/juanitoaldebaran",
      link: "https://github.com/juanitoaldebaran",
      icon: <FaGithub />,
    },
    {
      name: "@juanitoaldebaran_",
      link: "https://www.instagram.com/juanitoaldebaran_/",
      icon: <FaInstagram />,
    },
    {
      name: "juanitosiahaan1711@gmail.com",
      link: "mailto:juanitosiahaan1711@gmail.com",
      icon: <FaEnvelope />,
    },
  ];

  return (
    <motion.section
      id="contact"
      className="min-h-screen bg-black flex items-center justify-center px-4 py-16"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl w-full">
        <div className="flex flex-col gap-4 w-full">
          <h1 className="text-white text-center md:text-left font-bold text-5xl sm:text-6xl">
            Contact<span className="blink-fast text-blue-800">|</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl text-white text-center md:text-left font-light mt-2">
            Let's Connect!
          </h2>
           <button className="relative font-mono text-blue-400 mt-2 border border-blue-500 bg-black/40 px-4 py-2 sm:px-6 sm:py-3 rounded-md overflow-hidden group hover:bg-blue-500/20 transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.4)] text-sm sm:text-base">
              <span className="relative z-10 flex items-center flex-wrap gap-2 justify-center md:justify-start">
                <span className="text-gray-400">(base)</span>
                <span className="text-blue-600 font-semibold">
                  juanitoaldebaransiahaan@cv:
                </span>
                <span className="text-white">~$</span>
                <span className="text-blue-600 group-hover:text-blue-200 transition-colors duration-300">
                  download_cv.pdf
                </span>
                <span className="text-blue-400 animate-pulse">▮</span>
              </span>
            </button>

          <div className="w-full mt-8">
            <h4 className="text-white text-xs sm:text-sm mb-4 text-center md:text-left">
              Connect with me through my social platforms:
            </h4>

            <div className="grid grid-cols-1 gap-4 w-full">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between sm:justify-start gap-4 border border-white/20 hover:border-blue-600 bg-gray-900/50 hover:bg-blue-600/20 px-4 sm:px-6 py-4 rounded-lg transition-all duration-300 text-white"
                >
                  <span className="flex items-center gap-4">
                    <span className="text-2xl text-white group-hover:scale-110 transition-transform duration-200">
                      {social.icon}
                    </span>
                    <span className="text-xs sm:text-sm truncate group-hover:text-blue-300 transition-colors duration-200">
                      {social.name}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
