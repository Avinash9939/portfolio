import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function Resume() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    let particles = []
    const count = 80

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener("resize", resize)

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 2 + 1
      })
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = "#22c55e"
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y)

          if (dist < 120) {
            ctx.strokeStyle = "rgba(34,197,94,0.2)"
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      })

      requestAnimationFrame(animate)
    }

    animate()
    return () => window.removeEventListener("resize", resize)
  }, [])

  const handleDownload = async () => {
    try {
      const response = await fetch("/Avinash_Resume.pdf")
      const blob = await response.blob()

      const url = window.URL.createObjectURL(blob)

      const link = document.createElement("a")
      link.href = url
      link.download = "Avinash_Resume.pdf"
      link.target = "_blank"

      document.body.appendChild(link)
      link.click()

      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (err) {
      alert("PDF not loading. Check file in public folder.")
      console.error(err)
    }
  }

  return (
    <section id="resume" className="min-h-screen bg-[#020b08] text-white py-24 relative overflow-hidden">

      {/* PARTICLES */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* GLOW */}
      <div className="absolute w-[400px] h-[400px] bg-green-400/20 blur-[120px] top-[30%] left-[30%] z-0" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">Resume</h1>
          <p className="text-gray-400">
            Download my resume to know more about my skills, projects, and experience.
          </p>
        </motion.div>

        {/* 🔥 GLASS CARD (UPDATED) */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-10 
          transition-all duration-300 hover:bg-white/10 hover:border-green-400 
          shadow-[0_0_30px_rgba(34,197,94,0.1)]"
        >

          <div className="flex flex-col md:flex-row items-center gap-8">

            {/* IMAGE */}
            <img
              src="/resume.png"
              className="w-40 md:w-52 rounded-lg shadow-[0_0_25px_rgba(34,197,94,0.3)]"
            />

            {/* CONTENT */}
            <div className="text-center md:text-left">

              <h2 className="text-2xl font-semibold mb-3">
                My Professional Resume
              </h2>

              <p className="text-gray-400 mb-4">
                A detailed overview of my technical skills, projects, and achievements.
              </p>

              <div className="flex justify-center md:justify-start gap-6 text-sm text-gray-300 mb-6">
                <span>💻 Projects</span>
                <span>⚡ Skills</span>
                <span>🏆 Achievements</span>
              </div>

              <button
                onClick={handleDownload}
                className="px-8 py-3 rounded-full bg-green-500 text-black font-semibold 
                hover:scale-105 hover:shadow-[0_0_25px_#22c55e] transition duration-300"
              >
                ⬇ Download Resume
              </button>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  )
}