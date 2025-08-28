import { motion } from "framer-motion";
import {
  Code2,
  PenTool,
  MonitorSmartphone,
  Rocket,
  Workflow,
  Users,
} from "lucide-react";
import { Fa1, Fa2, Fa3, Fa4, Fa5, Fa6 } from "react-icons/fa6";
import { HiMiniArrowLongDown } from "react-icons/hi2"; // Long arrow

export default function WorkflowPage() {
  const steps = [
    {
      numIcon: <Fa1 className="text-black text-lg" />,
      icon: <PenTool className="w-10 h-10 text-cyan-400" />,
      title: "Research & Planning",
      desc: "We start with brainstorming, requirement gathering, and market research to define a strong foundation for your product.",
    },
    {
      numIcon: <Fa2 className="text-black text-lg" />,
      icon: <Workflow className="w-10 h-10 text-purple-400" />,
      title: "UI/UX Design",
      desc: "Our creative team designs user-friendly interfaces with stunning visuals, focusing on aesthetics and seamless usability.",
    },
    {
      numIcon: <Fa3 className="text-black text-lg" />,
      icon: <Code2 className="w-10 h-10 text-green-400" />,
      title: "Development",
      desc: "We bring your idea to life with clean code, modern frameworks, and scalable architecture for web, mobile, or desktop apps.",
    },
    {
      numIcon: <Fa4 className="text-black text-lg" />,
      icon: <Users className="w-10 h-10 text-yellow-400" />,
      title: "Testing & QA",
      desc: "Our QA engineers ensure your project is bug-free, responsive, and works flawlessly across all platforms and devices.",
    },
    {
      numIcon: <Fa5 className="text-black text-lg" />,
      icon: <MonitorSmartphone className="w-10 h-10 text-pink-400" />,
      title: "Deployment",
      desc: "We deploy your app on secure servers or app stores, ensuring smooth launch and zero downtime.",
    },
    {
      numIcon: <Fa6 className="text-black text-lg" />,
      icon: <Rocket className="w-10 h-10 text-red-400" />,
      title: "Growth & Support",
      desc: "Post-launch, we provide updates, monitoring, and support to ensure long-term success and growth.",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-b from-zinc-900 via-black to-zinc-900">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
        >
          Our Workflow
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl text-gray-300 text-lg md:text-xl"
        >
          A seamless process that transforms your ideas into world-class
          products. Transparent, efficient, and client-focused at every stage.
        </motion.p>
      </section>

      {/* Workflow Steps */}
      <section className="relative px-4 sm:px-6 py-20 flex flex-col items-center gap-12">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center w-full">
            {/* Step Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex flex-col items-center text-center bg-zinc-900/70 backdrop-blur-lg rounded-2xl shadow-lg p-6 sm:p-8 w-[90%] sm:w-4/5 hover:scale-105 transition-transform duration-500"
            >
              {/* Step Number */}
              <span className="absolute -top-4 -left-4 bg-white w-10 h-10 flex items-center justify-center rounded-full shadow-md">
                {step.numIcon}
              </span>

              {/* Main Icon */}
              <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-zinc-800 shadow-lg mb-6">
                {step.icon}
              </div>

              {/* Title + Description */}
              <h3 className="text-xl sm:text-2xl font-bold mb-3">
                {step.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {step.desc}
              </p>
            </motion.div>

            {/* Arrow (only between steps, no animation) */}
            {index < steps.length - 1 && (
              <HiMiniArrowLongDown className="w-8 sm:w-10 h-8 sm:h-10 text-[#00ffce] mt-6" />
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
