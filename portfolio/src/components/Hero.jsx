import profile from "../assets/profile.png";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const roles = ["Full Stack Developer", "Software Engineer"];

export default function Hero() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];

    const typing = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1));
        if (text === current) setIsDeleting(true);
      } else {
        setText(current.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 80 : 90);

    return () => clearTimeout(typing);
  }, [text, isDeleting, index]);

  const item = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-start pt-24 bg-black text-white relative"
    >

      {/* Logo */}
      <div className="absolute top-6 left-10 text-lg font-semibold">
        <span className="text-white">Avinash</span>
        <span className="text-green-400"> Portfolio</span>
      </div>

      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-green-500/20 blur-[150px] rounded-full top-[-200px] left-[-200px]" />
      <div className="absolute w-[500px] h-[500px] bg-green-500/20 blur-[150px] rounded-full bottom-[-200px] right-[-200px]" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-10 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.25
              }
            }
          }}
        >

          <motion.p variants={item} className="text-green-400 text-xl mb-3">
            Hello, I'm
          </motion.p>

          <motion.h1 variants={item} className="text-7xl font-bold mb-6">
            Avinash Verma
          </motion.h1>

          <motion.h2 variants={item} className="text-3xl">
            And I'm a{" "}
            <span className="text-green-400">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </motion.h2>

          <motion.p variants={item} className="text-gray-400 mt-6 max-w-lg">
            I build intelligent, real-time systems that solve complex problems
            with clean code and scalable design.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={item} className="flex gap-4 mt-8">

            {/* ✅ CONTACT BUTTON */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact").scrollIntoView({
                  behavior: "smooth"
                });
              }}
              className="px-6 py-3 bg-green-500 text-black rounded-lg font-semibold hover:bg-green-400 transition"
            >
              Get In Touch
            </a>

            {/* ✅ PROJECT BUTTON FIXED */}
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects").scrollIntoView({
                  behavior: "smooth"
                });
              }}
              className="px-6 py-3 border border-green-400 text-green-400 rounded-lg hover:bg-green-400 hover:text-black transition hover:shadow-[0_0_25px_#22c55e]"
            >
              View My Work
            </a>

          </motion.div>

          {/* SOCIAL ICONS */}
          <motion.div
            className="flex gap-6 mt-8 text-green-400 text-2xl"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >

            <motion.a
              href="mailto:yourmail@gmail.com"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.25, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="transition hover:drop-shadow-[0_0_18px_#22c55e]"
            >
              <FaEnvelope />
            </motion.a>

            <motion.a
              href="https://linkedin.com"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.25, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="transition hover:drop-shadow-[0_0_18px_#22c55e]"
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              href="https://github.com"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.25, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="transition hover:drop-shadow-[0_0_18px_#22c55e]"
            >
              <FaGithub />
            </motion.a>

          </motion.div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="flex justify-end"
        >

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative w-[300px] h-[300px]"
          >

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              className="absolute -inset-2 border border-green-500 rounded-xl shadow-[0_0_25px_#22c55e]"
            />

            <img
              src={profile}
              alt="Avinash Verma"
              className="w-full h-full object-cover rounded-xl"
            />

          </motion.div>

        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-500">
        <p className="text-sm tracking-wide">
          Scroll to explore
        </p>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-lg"
        >
          ↓
        </motion.div>
      </div>

    </section>
  );
}