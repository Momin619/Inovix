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

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="relative pt-10 bg-gradient-to-br from-black via-[#0a0f1f] to-black text-[#00ffce] overflow-hidden">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,255,206,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,255,206,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Neon Glow Orbs */}
      <div className="absolute top-16 left-2 sm:top-20 sm:left-6 w-36 h-36 sm:w-40 sm:h-40 bg-[#00ffce]/50 rounded-full blur-3xl shadow-[0_0_180px_90px_#00ffceaa] z-0" />
      <div className="absolute bottom-16 right-2 sm:bottom-32 sm:right-10 w-48 h-48 sm:w-56 sm:h-56 bg-purple-600/50 rounded-full blur-3xl shadow-[0_0_200px_100px_rgba(168,85,247,0.6)] z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 flex flex-col gap-12 sm:gap-16">
        {/* Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-center drop-shadow-[0_0_30px_#00ffceaa]"
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          About{" "}
          <span className="text-white drop-shadow-[0_0_25px_#ffffffaa]">
            Inovix
          </span>
        </motion.h1>

        {/* Intro */}
        <motion.p
          className="text-sm sm:text-base md:text-lg text-gray-300 text-center max-w-3xl mx-auto leading-relaxed"
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.2 }}
        >
          At{" "}
          <span className="text-[#00ffce] font-semibold drop-shadow-[0_0_20px_#00ffceaa]">
            Inovix
          </span>
          , we are a team of innovators, engineers, and creators dedicated to
          building software that redefines industries and empowers businesses
          worldwide.
        </motion.p>

        {/* Mission + Vision */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {[
            {
              title: "Our Mission",
              desc: "To deliver scalable, innovative, and future-ready solutions that fuel business growth.",
            },
            {
              title: "Our Vision",
              desc: "To lead globally by creating ecosystems that push the boundaries of technology.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="relative p-5 sm:p-6 bg-black/60 border border-[#00ffce]/50 rounded-2xl shadow-[0_0_35px_#00ffce77] overflow-hidden"
              initial={{ opacity: 0, y: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4 text-white drop-shadow-[0_0_18px_#ffffffaa]">
                {item.title}
              </h2>
              <p className="text-gray-400 text-sm sm:text-base md:text-base leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Core Values */}
        <motion.div
          className="mt-12 sm:mt-16"
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-center mb-6 sm:mb-8 text-white drop-shadow-[0_0_25px_#00ffceaa]">
            Core Values
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {values.map((val, i) => (
              <motion.div
                key={i}
                className="relative p-5 sm:p-6 bg-black/70 border border-[#00ffce]/50 rounded-xl text-center shadow-[0_0_40px_#00ffce88] overflow-hidden group"
                whileHover={{ scale: 1.06, y: -4 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                {/* Neon overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-all duration-500 bg-gradient-to-tr from-[#00ffce]/30 to-purple-600/30 rounded-xl blur-xl"></div>
                <h3 className="relative z-10 text-lg sm:text-xl md:text-xl font-semibold text-white mb-1 sm:mb-2 drop-shadow-[0_0_25px_#00ffceaa]">
                  {val.title}
                </h3>
                <p className="relative z-10 text-gray-400 text-sm sm:text-base md:text-base">
                  {val.desc}
                </p>
                <div className="absolute inset-0 border-2 border-[#00ffce] rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="mt-12 sm:mt-16"
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-center mb-8 sm:mb-12 text-white drop-shadow-[0_0_25px_#00ffceaa]">
            Our Journey
          </h2>
          <div className="relative max-w-4xl mx-auto">
            {/* Central glowing line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00ffce] to-purple-600 transform -translate-x-1/2 rounded-full shadow-[0_0_50px_#00ffceaa]"></div>

            {timeline.map((event, index) => (
              <motion.div
                key={index}
                className={`relative mb-10 flex flex-col sm:flex-row items-center ${
                  index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Connector dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 sm:w-6 h-5 sm:h-6 bg-[#00ffce] rounded-full shadow-[0_0_35px_#00ffce] border-2 border-white"></div>

                {/* Event Card */}
                <div
                  className={`w-full sm:w-[46%] p-4 sm:p-6 rounded-2xl bg-black/70 border border-transparent bg-clip-padding relative bg-gradient-to-r from-[#00ffce44] to-[#6d28d944] backdrop-blur-md shadow-[0_0_45px_#00ffce77] mb-4 sm:mb-0 ${
                    index % 2 === 0 ? "text-left" : "text-right"
                  }`}
                >
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white drop-shadow-[0_0_20px_#ffffffaa]">
                    {event.year} — {event.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base md:text-base mt-1">
                    {event.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
