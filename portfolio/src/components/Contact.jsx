import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"

export default function Contact() {
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

  return (
    <section id="contact" className="min-h-screen bg-[#020b08] text-white py-24 relative overflow-hidden">

      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* TOP */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-green-400 font-medium mb-2">Let's connect</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm always open to new opportunities, collaborations, or just a friendly chat about tech. 
            Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* 🔥 LEFT CARD */}
          <div className="relative rounded-2xl">

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden p-4 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-green-400 transition"
            >

              <div className="h-1 w-14 bg-green-400 rounded mb-4"></div>

              <h2 className="text-xl font-semibold mb-6">Contact Information</h2>

              <div className="flex items-center gap-4 mb-4 p-2 rounded-lg hover:bg-white/5 transition">
                <div className="p-3 bg-green-500/20 rounded-xl">
                  <Mail className="text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-medium text-green-400">akkumar1082004@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-4 p-2 rounded-lg hover:bg-white/5 transition">
                <div className="p-3 bg-green-500/20 rounded-xl">
                  <Phone className="text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="font-medium text-green-400">+91-9939205015</p>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6 p-2 rounded-lg hover:bg-white/5 transition">
                <div className="p-3 bg-green-500/20 rounded-xl">
                  <MapPin className="text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="font-medium text-green-400">Phagwara, Punjab, India</p>
                </div>
              </div>

              <hr className="border-white/10 mb-4" />

              <p className="mb-3 text-gray-300">Find me on</p>

              <div className="space-y-3">
                <a href="https://github.com/Avinash9939" target="_blank"
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition">
                  <div className="flex items-center gap-3">
                    <Github className="text-green-400" />
                    <div>
                      <p>GitHub</p>
                      <p className="text-sm text-gray-400">@Avinash9939</p>
                    </div>
                  </div>
                  <span className="text-green-400">↗</span>
                </a>

                <a href="https://www.linkedin.com/in/avinashverma108/" target="_blank"
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition">
                  <div className="flex items-center gap-3">
                    <Linkedin className="text-green-400" />
                    <div>
                      <p>LinkedIn</p>
                      <p className="text-sm text-gray-400">Avinash Verma</p>
                    </div>
                  </div>
                  <span className="text-green-400">↗</span>
                </a>
              </div>

            </motion.div>
          </div>

          {/* 🔥 RIGHT FORM */}
          <div className="relative rounded-2xl">

            <motion.form
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden p-4 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-green-400 transition"
            >

              <h2 className="text-xl font-semibold mb-6">Send a Message</h2>

              <input type="text" placeholder="Enter your name"
                className="w-full p-3 mb-4 rounded-lg bg-white/10 border border-white/10 outline-none focus:border-green-400" />

              <input type="email" placeholder="Enter your email"
                className="w-full p-3 mb-4 rounded-lg bg-white/10 border border-white/10 outline-none focus:border-green-400" />

              <textarea rows="5" placeholder="Enter your message"
                className="w-full p-3 mb-4 rounded-lg bg-white/10 border border-white/10 outline-none focus:border-green-400"></textarea>

              <button className="w-full py-3 rounded-lg bg-green-500 text-black font-semibold hover:scale-[1.02] transition">
                ✈ Send Message
              </button>

            </motion.form>
          </div>

        </div>

      </div>

    </section>
  )
}