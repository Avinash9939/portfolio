import { useEffect, useState } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

import { motion } from "framer-motion"

import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/skills"
import Projects from "./components/Projects"
import Certifications from "./components/certifications"
import Achievements from "./components/Achievements";
import Resume from "./components/Resume";
import University from "./components/University";
import Contact from "./components/Contact";
import Footer from "./components/Footer";   // ✅ added

const dockItems = [
  { icon: "🏠", label: "Home", id: "home" },
  { icon: "⚒", label: "Skills", id: "skills" },
  { icon: "💼", label: "Projects", id: "projects" },
  { icon: "📜", label: "Certifications", id: "certifications" },
  { icon: "🏆", label: "Achievements", id: "achievements" },
  { icon: "📄", label: "Resume", id: "resume" },
  { icon: "✉", label: "Contact", id: "contact" }
];

function App() {

  const [active, setActive] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications /> 
      <Achievements />
      <University />
      <Resume />
      <Contact />

      <Footer /> {/* ✅ added */}

      {/* 🔥 DOCK */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">

        <div className="flex gap-6 px-6 py-3 rounded-2xl bg-white/5 backdrop-blur-md border border-green-400/20">

          {dockItems.map((item, i) => {

            let scale = 1;

            if (active === i) scale = 1.8;
            else if (active === i - 1 || active === i + 1) scale = 1.3;
            else if (active === i - 2 || active === i + 2) scale = 1.1;

            return (
              <a
                key={i}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();

                  const section = document.getElementById(item.id);

                  if (section) {
                    section.scrollIntoView({
                      behavior: "smooth",
                      block: "start"
                    });
                  }
                }}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className="relative group"
              >

                <span className="absolute -top-11 left-1/2 -translate-x-1/2 text-xs text-green-400 opacity-0 group-hover:opacity-100 transition">
                  {item.label}
                </span>

                <motion.div
                  animate={{
                    scale,
                    y: active === i ? -20 : 0,
                    x: active !== null && active !== i ? (i < active ? -12 : 12) : 0
                  }}
                  transition={{ type: "spring", stiffness: 900, damping: 15 }}
                  style={{
                    textShadow:
                      active === i
                        ? "0 0 12px #16a34a, 0 0 25px #16a34a, 0 0 45px #16a34a"
                        : "none"
                  }}
                  className="text-green-400 text-xl cursor-pointer"
                >
                  {item.icon}
                </motion.div>

              </a>
            );
          })}

        </div>
      </div>

    </>
  )
}

export default App