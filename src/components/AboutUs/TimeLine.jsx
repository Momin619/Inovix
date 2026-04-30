import { motion } from "framer-motion";
import { timeline } from "./data/aboutData";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Timeline() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={fadeUp}
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -60px 0px" }}
    >
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 text-white drop-shadow-[0_0_25px_#00ffceaa]">
        Our Journey
      </h2>

      {/* Mobile */}
      <div className="flex flex-col items-center gap-6 md:hidden">
        {timeline.map((event, index) => (
          <motion.div
            key={index}
            className="w-full max-w-sm p-5 rounded-2xl bg-black/70 border border-[#00ffce]/40 shadow-[0_0_40px_#00ffce77] text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            viewport={{ once: true, amount: 0.3, margin: "0px 0px -40px 0px" }}
          >
            <h3 className="text-base font-semibold text-white">
              {event.year} — {event.title}
            </h3>
            <p className="text-gray-400 text-sm mt-2">{event.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Desktop */}
      <div className="relative max-w-4xl mx-auto hidden md:block">
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00ffce] to-purple-600 -translate-x-1/2 rounded-full shadow-[0_0_40px_#00ffceaa]" />
        {timeline.map((event, index) => (
          <motion.div
            key={index}
            className={`relative mb-10 flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            viewport={{ once: true, amount: 0.3, margin: "0px 0px -40px 0px" }}
          >
            <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-[#00ffce] rounded-full shadow-[0_0_30px_#00ffce] border-2 border-white z-10" />
            <div
              className={`w-[46%] p-6 rounded-2xl bg-black/70 border border-[#00ffce]/40 shadow-[0_0_40px_#00ffce77] ${index % 2 === 0 ? "text-left" : "text-right"}`}
            >
              <h3 className="text-lg font-semibold text-white drop-shadow-[0_0_20px_#ffffffaa]">
                {event.year} — {event.title}
              </h3>
              <p className="text-gray-400 text-base mt-2">{event.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
