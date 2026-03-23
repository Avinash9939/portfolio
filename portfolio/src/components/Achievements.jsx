import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Achievements() {
  const canvasRef = useRef(null);

  // PARTICLES
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

  return (
    <section  id="achievements" className="min-h-screen bg-[#020b08] text-white py-24 relative overflow-hidden">

      {/* PARTICLES */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Glow */}
      <div className="absolute w-[400px] h-[400px] bg-green-400/20 blur-[120px] top-[20%] left-[40%] z-0" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 110 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">
            Experience & Achievements
          </h1>
          <p className="text-gray-400">
            A collection of milestones reflecting consistency and growth.
          </p>
        </motion.div>

        {/* MAIN */}
        <div className="flex flex-col lg:flex-row gap-10">

          {/* LEFT */}
          <div className="flex-1 relative pl-10">

            {/* 🔥 SECTION TITLE */}
            <h2 className="text-2xl font-semibold mb-8">
              Internship & Training
            </h2>

            {/* LINE */}
            <div className="absolute left-4 top-16 h-[85%] w-[2px] bg-gradient-to-b from-green-400/60 via-green-400/20 to-transparent blur-[1px] shadow-[0_0_15px_rgba(34,197,94,0.5)]"></div>

            {/* INTERNSHIP */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative mb-10"
            >
              <div className="absolute -left-[7px] top-10 w-4 h-4 bg-green-400 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.9)]"></div>

              <div className="card-hover bg-white/5 border border-white/10 rounded-2xl p-5">
                <p className="text-xs text-gray-500 mb-1">
                  Nov 2025 – Present
                </p>
                <h2 className="text-green-400 font-semibold text-lg">
                  Data Analyst Intern
                </h2>
                <p className="text-sm text-gray-400 mt-2">
                 Worked on data-driven dashboards and automated reporting processes to improve efficiency and support better decision-making. 
                </p>
              </div>
            </motion.div>

            {/* TRAINING */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -left-[7px] top-10 w-4 h-4 bg-green-400 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.9)]"></div>

              <div className="card-hover bg-white/5 border border-white/10 rounded-2xl p-5">
                <p className="text-xs text-gray-500 mb-1">
                  July 2025 (Completed)
                </p>
                <h2 className="text-green-400 font-semibold text-lg">
                  C++ with Data Structures & Algorithms – CipherSchools
                </h2>
                <p className="text-sm text-gray-400 mt-2">
                  Completed training in C++ and Data Structures & Algorithms. 
                  Built strong problem-solving skills, learned time complexity, 
                  and practiced real-world coding problems.
                </p>
              </div>
            </motion.div>

          </div>

          {/* RIGHT */}
          <div className="flex-1">

            <h2 className="text-2xl font-semibold mb-6 text-center lg:text-left">
              Achievements
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">

              {[
                { icon: "</>", title: "100+ LeetCode", desc: "Problems solved" },
                { icon: "🏆", title: "6.64 CGPA", desc: "Academic excellence" },
                { icon: "📦", title: "10+ Projects", desc: "Production apps" },
                { icon: "🎓", title: "Certifications", desc: "Cloud & ML" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="card-hover relative p-[2px] rounded-2xl bg-gradient-to-r from-green-400 via-transparent to-green-400 animate-spin-slow"
                >
                  <div className="bg-[#020b08] rounded-2xl p-6 text-center h-full">
                    <div className="text-2xl mb-3 text-green-400">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-lg">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-2">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}

            </div>
          </div>

        </div>

      </div>

      {/* STYLES */}
      <style>
        {`
          .animate-spin-slow {
            background-size: 200% 200%;
            animation: spinBorder 4s linear infinite;
          }

          @keyframes spinBorder {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
          }

          .card-hover {
            transition: all 0.3s ease;
          }

          .card-hover:hover {
            transform: translateY(-6px) scale(1.02);
            box-shadow: 0 0 25px rgba(34, 197, 94, 0.6),
                        0 0 50px rgba(34, 197, 94, 0.3);
            border-color: rgba(34, 197, 94, 0.6);
          }
        `}
      </style>

    </section>
  );
}