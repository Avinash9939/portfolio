import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const skillsData = [
  {
    title: "Languages",
    skills: [
      { name: "C++", level: 80, icon: "💠" },
      { name: "C", level: 75, icon: "🔹" },
      { name: "Python", level: 85, icon: "🐍" },
      { name: "JavaScript", level: 85, icon: "🟨" },
      { name: "PHP", level: 70, icon: "🐘" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 85, icon: "⚛️" },
      { name: "Next.js", level: 75, icon: "▲" },
      { name: "Tailwind CSS", level: 90, icon: "💨" },
      { name: "Bootstrap", level: 80, icon: "🅱️" },
      { name: "GSAP", level: 70, icon: "🎬" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Python Backend", level: 80, icon: "🐍" },
      { name: "Express.js", level: 75, icon: "🚀" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", level: 85, icon: "🗄️" },
      { name: "MongoDB", level: 80, icon: "🍃" },
      { name: "Redis", level: 70, icon: "⚡" },
    ],
  },
  {
    title: "Generative AI",
    skills: [
      { name: "Pinecone", level: 70, icon: "🌲" },
      { name: "RAG", level: 75, icon: "🧠" },
      { name: "LangChain", level: 75, icon: "🔗" },
    ],
  },
  {
    title: "Cloud",
    skills: [
      { name: "AWS", level: 70, icon: "☁️" },
      { name: "GCP", level: 65, icon: "🌐" },
      { name: "Railway", level: 75, icon: "🚆" },
      { name: "Vercel", level: 85, icon: "▲" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: 85, icon: "🔧" },
      { name: "GitHub", level: 90, icon: "🐙" },
      { name: "Postman", level: 85, icon: "📮" },
      { name: "Figma", level: 75, icon: "🎨" },

      // ✅ ADDED
      { name: "Excel", level: 90, icon: "📊" },
      { name: "Power BI", level: 85, icon: "📈" },
    ],
  },

  // ✅ NEW CATEGORY ADDED
  {
    title: "Python Libraries",
    skills: [
      { name: "NumPy", level: 85, icon: "🔢" },
      { name: "Pandas", level: 90, icon: "🐼" },
      { name: "Matplotlib", level: 80, icon: "📉" },
      { name: "Seaborn", level: 80, icon: "🌊" },
      { name: "Scikit-learn", level: 75, icon: "🤖" },
    ],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("All");
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];
    const count = 80;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 2 + 1,
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "#22c55e";
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);

          if (dist < 120) {
            ctx.strokeStyle = "rgba(34,197,94,0.2)";
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    }

    animate();
    return () => window.removeEventListener("resize", resize);
  }, []);

  const filteredData =
    activeTab === "All"
      ? skillsData
      : skillsData.filter((cat) => cat.title === activeTab);

  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-b from-black via-green-900/20 to-black text-white py-24 relative overflow-hidden"
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="absolute w-[400px] h-[400px] bg-green-500/10 blur-[180px] rounded-full top-[10%] left-[5%]" />
      <div className="absolute w-[300px] h-[300px] bg-green-500/10 blur-[180px] rounded-full bottom-[10%] right-[10%]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl font-bold mb-4 text-white"
        >
          Skills & Technologies
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-400 mb-10"
        >
          A comprehensive overview of my technical skills
        </motion.p>

        {/* ✅ ONLY ADDITION HERE */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {[
            "All","Languages","Frontend","Backend","Databases",
            "Generative AI","Cloud","Tools","Python Libraries"
          ].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              className={`px-5 py-2 rounded-full transition-all duration-300 relative overflow-hidden
                ${
                  activeTab === tab
                    ? "bg-green-500 text-black shadow-[0_0_25px_#22c55e]"
                    : "border border-green-400 text-green-400 hover:bg-green-500/10 hover:shadow-[0_0_15px_rgba(34,197,94,0.5)]"
                }
              `}
            >
              {tab}
              <span className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-md" />
            </motion.button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {filteredData.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="
                bg-white/5
                backdrop-blur-md
                border border-white/10
                rounded-2xl
                p-6
                overflow-hidden
                transition-all duration-300
                hover:-translate-y-3
                hover:scale-[1.05]
                hover:bg-white/10
                hover:border-green-400/60
                shadow-[0_0_30px_rgba(34,197,94,0.1)]
                hover:shadow-[0_0_15px_#22c55e]
              "
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();

                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const rotateX = -(y / rect.height - 0.5) * 8;
                const rotateY = (x / rect.width - 0.5) * 8;

                card.style.transform = `
                  perspective(1000px)
                  rotateX(${rotateX}deg)
                  rotateY(${rotateY}deg)
                  translateY(-12px)
                  scale(1.05)
                `;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)";
              }}
            >
              <h3 className="text-lg font-semibold text-green-400 mb-6">
                {category.title}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="flex items-center gap-2">
                        {skill.icon} {skill.name}
                      </span>
                      <span className="text-green-400">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full bg-white/10 h-2 rounded">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1 }}
                        className="h-2 rounded bg-gradient-to-r from-green-400 to-green-500"
                      />
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}