import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function AboutHero() {
  return (
    <>
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-center text-[#00ffce] drop-shadow-[0_0_30px_#00ffceaa]"
        initial="hidden"
        animate="show"
        variants={fadeUp}
      >
        About{" "}
        <span className="text-white drop-shadow-[0_0_25px_#ffffffaa]">
          Inovix
        </span>
      </motion.h1>

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
    </>
  );
}
