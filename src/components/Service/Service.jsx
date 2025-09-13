import { motion } from "framer-motion";
import { Code, Smartphone, Globe, Brain, Cloud, Shield } from "lucide-react";
import Tilt from "react-parallax-tilt";

const services = [
  {
    title: "Web Development",
    desc: "Modern websites & web apps tailored for performance and scalability.",
    icon: <Globe className="w-12 h-12 text-[#00ffce]" />,
  },
  {
    title: "App Development",
    desc: "Cross-platform mobile apps delivering smooth experiences.",
    icon: <Smartphone className="w-12 h-12 text-[#00ffce]" />,
  },
  {
    title: "AI Solutions",
    desc: "Smarter business decisions with Artificial Intelligence & ML.",
    icon: <Brain className="w-12 h-12 text-[#00ffce]" />,
  },
  {
    title: "Cloud Services",
    desc: "Future-ready cloud infrastructure that scales with your business.",
    icon: <Cloud className="w-12 h-12 text-[#00ffce]" />,
  },
  {
    title: "Cybersecurity",
    desc: "Advanced protection against digital threats & vulnerabilities.",
    icon: <Shield className="w-12 h-12 text-[#00ffce]" />,
  },
  {
    title: "Custom Software",
    desc: "Unique solutions tailored to your workflows & industry.",
    icon: <Code className="w-12 h-12 text-[#00ffce]" />,
  },
];

// Variants for animation
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Service() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 left-10 w-72 h-72 bg-[#00ffce33] rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-purple-600/40 rounded-full blur-[140px] animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl my-10 font-extrabold text-center text-white drop-shadow-[0_0_35px_#00ffceaa]"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          Our <span className="text-[#00ffce]">Services</span>
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="mt-4 text-center text-gray-400 max-w-2xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
        >
          Combining creativity, technology, and innovation to build
          next-generation digital solutions.
        </motion.p>

        {/* Services Grid */}
        <motion.div
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {services.map((service, i) => (
            <motion.div key={i} variants={item}>
              <Tilt
                glareEnable={window.innerWidth > 640}
                glareMaxOpacity={0.3}
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
              >
                <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-[#0a0f1f]/90 to-[#1a1f2f]/90 border border-[#00ffce]/40 shadow-[0_0_35px_#00ffce55] backdrop-blur-xl transition-all duration-500 hover:shadow-[0_0_15px_#00ffce]">
                  {/* Neon border animation */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#00ffce] group-hover:shadow-[0_0_40px_#00ffceaa] transition-all duration-700 pointer-events-none"></div>

                  <div className="flex justify-center">{service.icon}</div>
                  <h3 className="mt-6 text-xl font-bold text-center text-white drop-shadow-[0_0_25px_#00ffceaa]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-gray-400 text-sm text-center leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
