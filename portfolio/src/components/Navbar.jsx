
import { useState, useEffect } from "react"

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  const links = [
    "home",
    "about",
    "skills",
    "projects",
    "certifications",
    "achievements",
    "resume",
    "contact"
  ]

  return (

    <nav
      className={`fixed w-full z-50 transition-all duration-300 
      ${scrolled ? "bg-black shadow-lg" : "bg-black/70 backdrop-blur-md"}`}
    >

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        {/* Logo */}

        <h1 className="text-2xl font-bold text-green-400 hover:shadow-[0_0_20px_#22c55e] transition">
          Avinash
        </h1>

        {/* Desktop Menu */}

        <ul className="hidden md:flex gap-10 text-white text-lg">

          {links.map((item) => (

            <li key={item}>

              <a
                href={`#${item}`}
                className="relative group capitalize transition hover:text-green-400"
              >
                {item}

                <span
                  className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-400 transition-all duration-300 group-hover:w-full"
                ></span>

              </a>

            </li>

          ))}

        </ul>

        {/* Mobile Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-green-400 text-2xl"
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="md:hidden bg-black text-center py-4 space-y-4 text-white">

          {links.map((item) => (

            <a
              key={item}
              href={`#${item}`}
              className="block hover:text-green-400 transition"
            >
              {item}
            </a>

          ))}

        </div>

      )}

    </nav>

  )

}

