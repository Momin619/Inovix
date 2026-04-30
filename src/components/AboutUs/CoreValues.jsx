import { motion } from "framer-motion";
import { values } from "./data/aboutData";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function CoreValues() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={fadeUp}
      viewport={{ once: true, amount: 0.25, margin: "0px 0px -80px 0px" }}
    >
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 text-white drop-shadow-[0_0_25px_#00ffceaa]">
        Core Values
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
        {values.map((val, i) => (
          <motion.div
            key={i}
            className="p-5 sm:p-6 bg-black/70 border border-[#00ffce]/50 rounded-xl text-center shadow-[0_0_40px_#00ffce88]"
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
  );
}
