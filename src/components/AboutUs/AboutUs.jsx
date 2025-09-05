import { motion } from "framer-motion";

export default function AboutUs() {
  const timeline = [
    {
      year: "2018",
      title: "Founded",
      desc: "Inovix was born with a vision to transform digital solutions.",
    },
    {
      year: "2019",
      title: "First Milestone",
      desc: "Delivered our first enterprise project with great success.",
    },
    {
      year: "2021",
      title: "Global Expansion",
      desc: "Partnered with clients worldwide, expanding our expertise.",
    },
    {
      year: "2023",
      title: "Innovation Hub",
      desc: "Introduced AI-driven solutions to revolutionize industries.",
    },
  ];

  const values = [
    {
      title: "Innovation",
      desc: "We push boundaries to craft next-gen solutions.",
    },
    {
      title: "Integrity",
      desc: "We build trust through transparency and honesty.",
    },
    {
      title: "Excellence",
      desc: "We aim for perfection in every project we deliver.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-[#0a0f1f] to-black text-[#00ffce]">
      {/* Subtle Grid Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,255,206,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,255,206,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        {/* Heading */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-center mb-12"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About <span className="text-white">Inovix</span>
        </motion.h1>

        {/* Intro */}
        <motion.p
          className="text-lg md:text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          At <span className="text-[#00ffce] font-semibold">Inovix</span>, we
          are a team of innovators, engineers, and creators dedicated to
          building software that redefines industries and empowers businesses
          worldwide.
        </motion.p>

        {/* Mission + Vision Cards */}
        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              title: "Our Mission",
              desc: "To deliver scalable, innovative, and future-ready solutions that fuel business growth.",
            },
            {
              title: "Our Vision",
              desc: "To lead globally by creating ecosystems that push the boundaries of technology.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 bg-black/50 border border-[#00ffce]/20 rounded-2xl shadow-lg hover:scale-105 hover:border-[#00ffce] transition-all"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.3, duration: 0.8 }}
              whileHover={{ rotate: 1 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-white">
                {item.title}
              </h2>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Core Values */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-center mb-10 text-white">
            Core Values
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {values.map((val, i) => (
              <motion.div
                key={i}
                className="p-6 bg-black/60 border border-[#00ffce]/20 rounded-xl text-center hover:-translate-y-2 transition-transform"
                whileHover={{ scale: 1.08, borderColor: "#00ffce" }}
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {val.title}
                </h3>
                <p className="text-gray-400">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-center mb-10 text-white">
            Our Journey
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#00ffce]/30 transform -translate-x-1/2"></div>
            {timeline.map((event, index) => (
              <motion.div
                key={index}
                className={`mb-12 flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 80 : -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3 + index * 0.3, duration: 0.8 }}
              >
                <div className="md:w-1/2 p-6 bg-black/60 border border-[#00ffce]/20 rounded-xl shadow-md hover:shadow-[#00ffce]/40 hover:scale-105 transition-all">
                  <h3 className="text-xl font-semibold text-white">
                    {event.year} — {event.title}
                  </h3>
                  <p className="text-gray-400 mt-2">{event.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call To Action */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-white">
            Let’s Build the Future Together
          </h2>
          <p className="text-gray-400 mb-6">
            Partner with Inovix and take your digital vision to the next level.
          </p>
          <motion.a
            href="/contact"
            className="px-8 py-3 text-lg font-semibold rounded-xl border border-[#00ffce] hover:bg-[#00ffce] hover:text-black transition-all duration-300 inline-block"
            whileHover={{ scale: 1.1, rotate: 1 }}
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
