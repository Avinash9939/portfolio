import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaBrain, FaLaptopCode, FaBookOpen } from "react-icons/fa";

export default function About() {
  const cards = [
    {
      icon: <FaCode />,
      title: "Data Analysis",
      text: "Transforming raw data into actionable insights using analytical and problem-solving skills."
    },
    {
      icon: <FaBrain />,
      title: "Continuous Learning",
      text: "Continuously exploring new tools, technologies, and techniques in data analytics and data science.."
    },
    {
      icon: <FaLaptopCode />,
      title: "Database Management",
      text: "Skilled in SQL for querying, cleaning, and managing large datasets efficiently."
    },
    {
      icon: <FaBookOpen />,
      title: "Data Visualization",
      text: "Building clear and impactful dashboards using Power BI and Excel to communicate insights."
    }
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-b from-black via-green-900/30 to-black text-white py-20 px-10 relative overflow-hidden"
    >

      {/* background glow */}
      <div className="absolute w-[500px] h-[500px] bg-green-400/10 blur-[150px] rounded-full top-[10%] left-[5%]" />
      <div className="absolute w-[400px] h-[400px] bg-green-500/10 blur-[150px] rounded-full bottom-[10%] right-[10%]" />

      {/* heading */}
      <div className="text-center mb-16 relative z-10">
        <p className="text-green-400 text-sm tracking-[4px] uppercase mb-3">
          Get to know me
        </p>
        <h2 className="text-4xl font-bold">
          About <span className="text-green-400">Me</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 relative z-10">

        {/* LEFT TEXT (animation from left) */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-gray-300 space-y-6 leading-relaxed"
        >
          <p>
            I'm Avinash — an aspiring Data Analyst who enjoys working with data, uncovering insights, and solving real-world problems through analytical thinking and data-driven approaches.
          </p>

          <p>
            Currently in my final year of Computer Science, I focus on building data-driven projects and strengthening my skills in Python, SQL, Excel, and data analysis through continuous learning and practice.
          </p>

          <p>
            I've solved 100+ Data Structures and Algorithms problems and
            continuously work on improving my development skills.
          </p>

          <p>
          I'm always eager to learn new tools and technologies and apply them to analyze data, uncover insights, and support data-driven decision-making.
          </p>
        </motion.div>

        {/* RIGHT CARDS (animation from right) */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative rounded-xl overflow-hidden bg-green-900/30 backdrop-blur-md p-6"
            >

              {/* border animation */}
              <motion.span
                animate={{ x: ["-100%", "100%"] }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                className="absolute top-0 left-0 w-full h-[2px] bg-green-400"
              />
              <motion.span
                animate={{ y: ["-100%", "100%"] }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear", delay: 2 }}
                className="absolute top-0 right-0 w-[2px] h-full bg-green-400"
              />
              <motion.span
                animate={{ x: ["100%", "-100%"] }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear", delay: 4 }}
                className="absolute bottom-0 left-0 w-full h-[2px] bg-green-400"
              />
              <motion.span
                animate={{ y: ["100%", "-100%"] }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear", delay: 6 }}
                className="absolute top-0 left-0 w-[2px] h-full bg-green-400"
              />

              {/* icon + title */}
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-500/10 text-green-400 text-xl">
                  {card.icon}
                </div>
                <h3 className="text-white font-semibold text-lg">
                  {card.title}
                </h3>
              </div>

              {/* text */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {card.text}
              </p>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}