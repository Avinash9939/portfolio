import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function UniversitySection() {
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
    <section className="min-h-screen bg-[#020b08] text-white py-24 relative overflow-hidden">

      {/* PARTICLES */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* GLOW */}
      <div className="absolute w-[400px] h-[400px] bg-green-400/20 blur-[120px] top-[20%] left-[40%] z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-green-500/10 text-green-400 px-4 py-1 rounded-full text-sm mb-3">
            🎓 Academic Journey
          </span>

          <h1 className="text-4xl font-bold mb-3">
            My University Experience
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Exploring my journey at Lovely Professional University where I’ve grown academically and personally.
          </p>
        </motion.div>

        {/* CARD */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden grid md:grid-cols-2"
        >

          {/* IMAGE */}
          <div className="relative h-[350px] overflow-hidden group">
            <img
              src="/lpu.jpg"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition duration-500"></div>
          </div>

          {/* CONTENT */}
          <div className="p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-green-400 mb-4">
              Lovely Professional University
            </h2>

            <div className="grid grid-cols-2 gap-y-2 gap-x-6 text-gray-300 mb-4 text-base">
              <p>📍 Phagwara</p>
              <p>📅 2023-2027</p>
              <p>🎓 B.Tech CSE</p>
              <p>👨‍🎓 30K+ Students</p>
            </div>

            <p className="text-gray-300 mb-5 text-base leading-relaxed">
              My journey at Lovely Professional University has been transformative,
              providing me with both academic excellence and practical experience in computer engineering.
            </p>

            {/* ✅ UPDATED BUTTON */}
            <a
              href="https://www.lpu.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 px-6 py-2.5 rounded-lg hover:bg-green-600 transition text-base font-medium w-fit inline-block"
            >
              Visit Website →
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}