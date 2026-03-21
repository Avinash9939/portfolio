import { Mail, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#020b08] text-white py-12 relative border-t border-green-500/20">

      {/* 🔝 Scroll to top */}
      <div className="absolute left-1/2 -top-8 -translate-x-1/2">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-green-500 text-black shadow-lg p-2 rounded-full hover:scale-110 transition"
        >
          ↑
        </button>
      </div>

      {/* 🔹 TOP CONTENT (FIXED SPACING) */}
      <div className="text-center mb-10 -mt-8">
        <h2 className="text-xl font-semibold text-green-400">
          Avinash Verma
        </h2>

        <p className="text-gray-400 text-sm mt-1">
          Software Engineer || Full stack developer
        </p>

        <a
          href="mailto:akkumar1082004@gmail.com"
          className="text-green-400 text-sm hover:underline mt-2 inline-block"
        >
          akkumar1082004@gmail.com
        </a>
      </div>

      {/* 🔥 BOTTOM ROW */}
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-end mt-6">

        {/* © LEFT */}
        <p className="text-gray-500 text-sm">
          © 2026 Avinash Verma. All rights reserved.
        </p>

        {/* 🔗 RIGHT ICONS */}
        <div className="flex gap-5 text-green-400">

          <a 
            href="mailto:akkumar1082004@gmail.com"
            target="_blank"
            className="hover:scale-110 transition"
          >
            <Mail />
          </a>

          <a 
            href="https://www.linkedin.com/in/avinashverma108/?skipRedirect=true"
            target="_blank"
            className="hover:scale-110 transition"
          >
            <Linkedin />
          </a>

          <a 
            href="https://github.com/Avinash9939"
            target="_blank"
            className="hover:scale-110 transition"
          >
            <Github />
          </a>

        </div>

      </div>

    </footer>
  );
}