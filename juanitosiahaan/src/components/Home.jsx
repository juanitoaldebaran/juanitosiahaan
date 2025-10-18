import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"

export default function Home() {
  const word = "Hello, Juanito Siahaan here!";
  const [newWord, setNewWord] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalTime = 50;

    if (currentIndex < word.length) {
      const timeOut = setTimeout(() => {
        setNewWord((prev) => prev + word.charAt(currentIndex));
        setCurrentIndex(currentIndex + 1);
      }, intervalTime);

      return () => clearTimeout(timeOut);
    }
  }, [word, currentIndex]);

  return (
    <motion.section
      id="home"
      className="min-h-screen bg-black flex items-center justify-center px-6 py-10 sm:px-8 md:px-12"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 max-w-6xl w-full">

        <div className="flex flex-col gap-3 max-w-xl text-center md:text-left">
          <h1 className="text-white font-bold text-3xl sm:text-3xl md:text-4xl">
            {newWord}
            <span className="blink-fast text-blue-800">|</span> 
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-blue-600 font-semibold">
            Software Engineer
          </h2>
          <h3 className="text-xl sm:text-2xl text-gray-400">
            based in Belfast, United Kingdom 🇬🇧
          </h3>
          <p className="text-white text-base sm:text-lg mt-4 leading-relaxed">
            Highly passionate in building scalable software systems, web development, managing
            cloud infrastructure, and DevOps technologies.
          </p>
          <p className="text-white text-base sm:text-lg mt-2 leading-relaxed">
            Currently exploring Artificial Intelligence and Machine Learning.
          </p>

          <div className="flex justify-center md:justify-start">
            <button className="relative font-mono text-blue-400 mt-6 border border-blue-500 bg-black/40 px-4 py-2 sm:px-6 sm:py-3 rounded-md overflow-hidden group hover:bg-blue-500/20 transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.4)] text-sm sm:text-base">
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
          </div>

          <div className="flex justify-center md:justify-start mt-6">
            <div className="flex flex-wrap items-center justify-center gap-6 border border-white/30 p-4 rounded-lg">
              <a href="https://github.com/juanitoaldebaran" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-white text-2xl hover:text-blue-800 transition-all duration-200" />
              </a>
              <a href="https://linkedin.com/in/juanitoaldebaransiahaan" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-white text-2xl hover:text-blue-800 transition-all duration-200" />
              </a>
              <a href="mailto:juanitosiahaan1711@gmail.com">
                <FaEnvelope className="text-white text-2xl hover:text-blue-800 transition-all duration-200" />
              </a>
            </div>
          </div>
        </div>

        <motion.div
          className="flex-shrink-0 relative"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="relative group">
            <div className="absolute inset-0 rounded-full border-4 border-blue-600 blur-lg opacity-70 group-hover:opacity-100 transition-all duration-300"></div>
            <motion.img
              src="/assets/JuanitoSiahaan.jpeg"
              alt="Juanito Siahaan"
              className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-full border-4 mt-20 border-white shadow-xl group-hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
