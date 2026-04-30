import { motion } from "framer-motion";
import { missionVision } from "./data/aboutData";

export default function MissionVision() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
      {missionVision.map((item, i) => (
        <motion.div
          key={i}
          className="p-5 sm:p-6 lg:p-8 bg-black/60 border border-[#00ffce]/50 rounded-2xl shadow-[0_0_35px_#00ffce77]"
          initial={{ opacity: 0, y: i % 2 === 0 ? -40 : 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: i * 0.2 }}
          viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
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
  );
}
