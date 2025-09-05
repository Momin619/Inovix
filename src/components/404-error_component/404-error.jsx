import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="relative flex items-center justify-center min-h-screen text-[#00ffce] bg-black overflow-hidden px-4">
      {/* Grid Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,255,206,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,255,206,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px", // grid size
        }}
      ></div>

      {/* Center Content */}
      <div className="relative z-10 text-center max-w-lg">
        <motion.h1
          className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-widest text-[#00ffce]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          404
        </motion.h1>

        <motion.p
          className="mt-4 text-xl sm:text-2xl font-light"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Page Not Found
        </motion.p>

        <motion.p
          className="mt-3 text-lg sm:text-xl font-light"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Lost in the code space
        </motion.p>

        <motion.p
          className="mt-2 text-sm sm:text-base md:text-lg text-gray-400"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          The page you’re looking for vanished into the void of algorithms.
        </motion.p>

        <motion.a
          href="/"
          className="mt-6 inline-block px-8 py-3 text-lg font-semibold rounded-xl border border-[#00ffce] hover:bg-[#00ffce] hover:text-black transition-all duration-300"
          whileHover={{ scale: 1.1, rotate: 2 }}
        >
          Back to Home
        </motion.a>
      </div>
    </div>
  );
}
