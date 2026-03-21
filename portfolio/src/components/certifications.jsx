import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const certifications = [
  {
    title: "Cloud Computing",
    image: "/certificates/cloud.png",
    issuer: "NPTEL / IIT Kharagpur",
    date: "Jan–Apr 2025",
    skills: ["Cloud", "Infrastructure", "Deployment", "Services"],
    desc: "Built a strong foundation in cloud computing concepts, service models, deployment strategies, and practical infrastructure thinking."
  },
  {
    title: "Data Structures & Algorithms",
    image: "/certificates/dsa.png",
    issuer: "CipherSchools",
    date: "2025",
    skills: ["DSA", "Problem Solving", "Algorithms"],
    desc: "Learned core data structures and problem solving techniques for coding interviews."
  },
  {
    title: "Frontend Development",
    image: "/certificates/frontend.png",
    issuer: "Simplilearn",
    date: "2024",
    skills: ["HTML", "CSS", "JavaScript"],
    desc: "Built responsive UI using modern frontend technologies and best practices."
  },
  {
    title: "Responsive Web Design",
    image: "/certificates/webdesign.png",
    issuer: "freeCodeCamp",
    date: "2023",
    skills: ["Responsive", "Flexbox", "Grid"],
    desc: "Completed 300+ hours certification and mastered responsive layouts."
  }
];

export default function Certifications() {
  const [selected, setSelected] = useState(null);
  const canvasRef = useRef(null);

  // 🔥 AOS ADD KIYA (NEW)
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out"
    });
  }, []);

  // 🔥 PARTICLES (UNCHANGED)
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

  return (
    <section  id="certifications"  className="relative text-white py-20 overflow-hidden bg-gradient-to-br from-black via-[#020b08] to-[#031d14]">

      {/* PARTICLES */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* glow */}
      <div className="absolute w-[300px] h-[300px] bg-green-500/10 blur-[120px] top-20 left-20 z-0"></div>
      <div className="absolute w-[300px] h-[300px] bg-green-400/10 blur-[120px] bottom-20 right-20 z-0"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* 🔥 HEADING (AOS ADD) */}
        <h2 
          data-aos="fade-up"
          className="text-4xl font-bold text-center mb-4"
        >
          Certifications
        </h2>

        {/* 🔥 DESCRIPTION (AOS ADD) */}
        <p 
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-gray-400 text-center max-w-2xl mx-auto mb-12"
        >
          Professional credentials that validate my technical learning, hands-on practice, and continuous learning journey.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">

          {certifications.map((cert, i) => (
            <div 
              key={i} 
              data-aos="fade-up"
              data-aos-delay={i * 150}
              className="perspective w-full max-w-[320px]"
            >

              {/* ORIGINAL STRUCTURE SAME */}
              <div>

                <div
                  className="card"
                  onClick={() => setSelected(cert)}
                >

                  {/* FRONT */}
                  <div className="card-face card-front">

                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-[180px] object-cover"
                    />

                    <div className="glass p-5 rounded-b-xl h-[180px]">

                      <h3 className="text-lg font-semibold text-green-400 mb-2">
                        {cert.title}
                      </h3>

                      <p className="text-gray-300 text-sm mb-3 line-clamp-3">
                        {cert.desc}
                      </p>

                      <p className="text-gray-400 text-sm">
                        {cert.issuer}
                      </p>

                    </div>

                  </div>

                  {/* BACK */}
                  <div className="card-face card-back">

                    <h3 className="text-lg font-semibold text-green-400 mb-3">
                      {cert.title}
                    </h3>

                    <p className="text-sm mb-2">
                      <span className="text-green-400">Issued by:</span> {cert.issuer}
                    </p>

                    <p className="text-sm mb-3">
                      <span className="text-green-400">Date:</span> {cert.date}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {cert.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-green-500/10 border border-green-500/30 px-3 py-1 rounded-full text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed">
                      {cert.desc}
                    </p>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* MODAL */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <img
            src={selected.image}
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-[0_0_40px_#22c55e]"
          />
        </div>
      )}

    </section>
  );
}