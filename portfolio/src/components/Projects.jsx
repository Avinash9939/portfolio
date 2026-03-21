import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "HR Analytics Dashboard",
    category: "Data Science",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    tech: ["Python", "Pandas", "Power BI"],
    desc: "HR data analysis dashboard to track employee insights.",
    stats: "",
    github: "https://github.com/Avinash9939/HR-analytics-dashboard",
    live: "#"
  },
  {
    title: "Sales Dashboard (Bicycle Shop)",
    category: "Data Science",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    tech: ["Python", "Data Visualization"],
    desc: "Interactive sales dashboard showing trends and revenue.",
    stats: "",
    github: "https://github.com/Avinash9939/Interactive-Sales-Dashboard-for-a-Bicycle-shop",
    live: "https://raw.githubusercontent.com/Avinash9939/Interactive-Sales-Dashboard-for-a-Bicycle-shop/main/EXCEL%20PROJECT%20CA%202.xlsx"
  },
  {
    title: "Spotify Data Analysis",
    category: "Data Science",
    image: "https://images.unsplash.com/photo-1511376777868-611b54f68947?q=80&w=1000&auto=format&fit=crop",
    tech: ["Python", "Machine Learning"],
    desc: "Song popularity prediction using ML techniques.",
    stats: "",
    github: "https://github.com/Avinash9939/SPOTIFY-DATA-ANALYSIS-AND-SONG-POPULARITY-PREDICTION",
    live: "#"
  },
  {
    title: "Task Management App",
    category: "Web Apps",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    tech: ["React", "Firebase"],
    desc: "Manage daily tasks with real-time sync.",
    stats: "500+ users",
    github: "#",
    live: "#"
  },
  {
    title: "Animated Button UI",
    category: "UI Components",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
    tech: ["HTML", "CSS"],
    desc: "Beautiful animated UI components.",
    stats: "",
    github: "#",
    live: "#"
  },
  {
    title: "E-Commerce Website",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=1000&auto=format&fit=crop",
    tech: ["React", "Node.js", "MongoDB"],
    desc: "Full stack shopping platform with login & payment.",
    stats: "1000+ users",
    github: "#",
    live: "#"
  }
];

const filters = ["All", "Web Apps", "UI Components", "Full Stack", "Data Science"];

export default function Projects() {
  const [active, setActive] = useState("All");
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
        size: Math.random() * 2 + 1
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

  const filtered =
    active === "All"
      ? projects
      : projects.filter(
          (p) =>
            p.category.toLowerCase().trim() ===
            active.toLowerCase().trim()
        );

  return (
    <section id="projects" className="min-h-screen bg-[#020b08] text-white py-24 relative overflow-hidden">

      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="absolute w-[400px] h-[400px] bg-green-400/20 blur-[120px] top-[20%] left-[40%] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-4"
          >
            Featured Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400"
          >
            Showcasing my best work
          </motion.p>
        </div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {filters.map((f, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(f)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full transition ${
                active === f
                  ? "bg-green-500 text-black shadow-[0_0_30px_#22c55e]"
                  : "bg-[#111] text-gray-300 hover:bg-green-500/20"
              }`}
            >
              {f}
            </motion.button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {filtered.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="group relative rounded-xl overflow-hidden transition-all duration-300 
              bg-white/[0.02] backdrop-blur-2xl border border-white/10
              hover:border-green-400/60 
              hover:shadow-[0_0_15px_#22c55e] 
              hover:-translate-y-2"
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const rotateX = -(y / rect.height - 0.5) * 10;
                const rotateY = (x / rect.width - 0.5) * 10;

                card.style.transform = `
                  perspective(1000px)
                  rotateX(${rotateX}deg)
                  rotateY(${rotateY}deg)
                  scale(1.05)
                `;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-20 pointer-events-none" />

              <img
                src={project.image}
                className="w-full h-[220px] object-cover group-hover:scale-110 transition duration-300"
              />

              <div className="p-5 relative z-10">
                <h3 className="text-lg font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-green-500/10 text-green-400 px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {project.stats && (
                  <p className="text-green-400 text-sm mt-2">
                    ↗ {project.stats}
                  </p>
                )}

                <div className="flex justify-between items-center mt-4 px-1">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 text-xl hover:scale-125 hover:text-white hover:drop-shadow-[0_0_10px_#22c55e] transition"
                  >
                    <i className="fab fa-github"></i>
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 text-xl hover:scale-125 hover:text-white hover:drop-shadow-[0_0_10px_#22c55e] transition"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}