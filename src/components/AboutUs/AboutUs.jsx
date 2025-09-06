import { motion } from "framer-motion";
import CountUp from "react-countup";
import TeamCard from "./TeamCard";

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

  const counters = [
    { number: 50, label: "Projects Delivered" },
    { number: 10, label: "Countries Served" },
    { number: 100, label: "Client Satisfaction %" },
  ];

  const team = [
    {
      id: 1,
      img: "https://i.pravatar.cc/100?img=11",
      name: "Alex Johnson",
      role: "Frontend Developer",
      description: "Specializes in building modern, responsive UIs with React.",
    },
    {
      id: 2,
      img: "https://i.pravatar.cc/100?img=5",
      name: "Sara Ahmed",
      role: "Backend Engineer",
      description:
        "Loves working with Node.js & Express to craft scalable APIs.",
    },
    {
      id: 3,
      img: "https://i.pravatar.cc/100?img=20",
      name: "Mike Smith",
      role: "UI/UX Designer",
      description: "Passionate about creating delightful user experiences.",
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
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,255,206,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,255,206,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Neon Orbs */}
      <div className="absolute top-16 left-4 w-28 sm:w-36 h-28 sm:h-36 bg-[#00ffce]/50 rounded-full blur-3xl shadow-[0_0_140px_70px_#00ffceaa]" />
      <div className="absolute bottom-16 right-4 w-36 sm:w-48 h-36 sm:h-48 bg-purple-600/50 rounded-full blur-3xl shadow-[0_0_160px_80px_rgba(168,85,247,0.6)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 flex flex-col gap-12 sm:gap-16">
        {/* Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center drop-shadow-[0_0_30px_#00ffceaa]"
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
          className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 text-center max-w-3xl mx-auto leading-relaxed"
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
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
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
              className="p-5 sm:p-6 lg:p-8 bg-black/60 border border-[#00ffce]/50 rounded-2xl shadow-[0_0_35px_#00ffce77]"
              initial={{ opacity: 0, y: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 text-white drop-shadow-[0_0_18px_#ffffffaa]">
                {item.title}
              </h2>
              <p className="text-gray-400 text-sm sm:text-base lg:text-lg">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Core Values */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 text-white drop-shadow-[0_0_25px_#00ffceaa]">
            Core Values
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((val, i) => (
              <motion.div
                key={i}
                className="p-5 sm:p-6 bg-black/70 border border-[#00ffce]/50 rounded-xl text-center shadow-[0_0_40px_#00ffce88] group"
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-2 drop-shadow-[0_0_25px_#00ffceaa]">
                  {val.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base lg:text-lg">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 text-white drop-shadow-[0_0_25px_#00ffceaa]">
            Our Journey
          </h2>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00ffce] to-purple-600 transform -translate-x-1/2 rounded-full shadow-[0_0_40px_#00ffceaa]" />

            {timeline.map((event, index) => (
              <motion.div
                key={index}
                className={`relative mb-10 flex flex-col items-center 
          sm:flex-row 
          ${index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 sm:w-6 sm:h-6 bg-[#00ffce] rounded-full shadow-[0_0_30px_#00ffce] border-2 border-white" />

                {/* Card */}
                <div
                  className={`w-full sm:w-[46%] p-4 sm:p-6 rounded-2xl bg-black/70 border border-[#00ffce]/40 shadow-[0_0_40px_#00ffce77] 
            text-center sm:text-left ${
              index % 2 === 0 ? "sm:text-left" : "sm:text-right"
            }`}
                >
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white drop-shadow-[0_0_20px_#ffffffaa]">
                    {event.year} — {event.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base lg:text-lg mt-2">
                    {event.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Counters */}
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-white drop-shadow-[0_0_25px_#00ffceaa]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Key Milestones
        </motion.h1>
        <motion.div
          className="mt-10 grid sm:grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          {counters.map((c, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-black/70 border border-[#00ffce]/40 text-center shadow-[0_0_35px_#00ffce66]"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#00ffce] drop-shadow-[0_0_25px_#00ffceaa]">
                <CountUp
                  end={c.number}
                  duration={3}
                  separator=","
                  enableScrollSpy
                  scrollSpyOnce
                />
                +
              </h2>
              <p className="text-gray-300 mt-2 text-sm sm:text-base lg:text-lg">
                {c.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 text-white drop-shadow-[0_0_25px_#00ffceaa]">
            Meet Our Team
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
            {team.map((member) => (
              <TeamCard
                key={member.id}
                name={member.name}
                role={member.role}
                img={member.img}
                description={member.description}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
