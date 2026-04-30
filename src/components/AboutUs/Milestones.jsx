import { motion } from "framer-motion";
import CountUp from "react-countup";
import { counters } from "./data/aboutData";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Milestones() {
  return (
    <div>
      <motion.h2
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-white drop-shadow-[0_0_25px_#00ffceaa] mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3, margin: "0px 0px -60px 0px" }}
      >
        Key Milestones
      </motion.h2>

      <motion.div
        className="grid sm:grid-cols-1 md:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
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
    </div>
  );
}
