import { motion } from "framer-motion";
import {
  Code2,
  PenTool,
  MonitorSmartphone,
  Rocket,
  Workflow,
  Users,
} from "lucide-react";
import { HiMiniArrowLongDown } from "react-icons/hi2";

import Footer from "../ui/Footer";
import Navbar from "../ui/Navbar";

export default function WorkFlow() {
  const steps = [
    {
      icon: <PenTool className="w-10 h-10 text-cyan-400" />,
      title: "Research & Planning",
      desc: "We start with brainstorming, requirement gathering, and market research to define a strong foundation for your product.",
    },
    {
      icon: <Workflow className="w-10 h-10 text-purple-400" />,
      title: "UI/UX Design",
      desc: "Our creative team designs user-friendly interfaces with stunning visuals, focusing on aesthetics and seamless usability.",
    },
    {
      icon: <Code2 className="w-10 h-10 text-green-400" />,
      title: "Development",
      desc: "We bring your idea to life with clean code, modern frameworks, and scalable architecture for web, mobile, or desktop apps.",
    },
    {
      icon: <Users className="w-10 h-10 text-yellow-400" />,
      title: "Testing & QA",
      desc: "Our QA engineers ensure your project is bug-free, responsive, and works flawlessly across all platforms and devices.",
    },
    {
      icon: <MonitorSmartphone className="w-10 h-10 text-pink-400" />,
      title: "Deployment",
      desc: "We deploy your app on secure servers or app stores, ensuring smooth launch and zero downtime.",
    },
    {
      icon: <Rocket className="w-10 h-10 text-red-400" />,
      title: "Growth & Support",
      desc: "Post-launch, we provide updates, monitoring, and support to ensure long-term success and growth.",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="bg-black text-white min-h-screen">
        {/* HERO */}
        <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-b from-zinc-900 via-black to-zinc-900">
          <h1 className="text-3xl sm:text-5xl font-extrabold my-10 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Our Workflow
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-2xl text-gray-300 text-lg"
          >
            A seamless process that transforms your ideas into world-class
            products. Transparent, efficient, and client-focused at every stage.
          </motion.p>
        </section>

        {/* STEPS */}
        <section className="relative px-4 sm:px-6 py-20 flex flex-col items-center gap-12">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative w-[90%] sm:w-4/5 flex flex-col items-center"
            >
              {/* CARD (UNCHANGED STRUCTURE) */}
              <div className="bg-zinc-900/70 backdrop-blur-lg rounded-2xl shadow-lg p-6 sm:p-8 w-full">
                {/* ICON */}
                <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-zinc-800 shadow-lg mb-6">
                  {step.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-xl sm:text-2xl font-bold mb-3">
                  {step.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* ARROW */}
              {index < steps.length - 1 && (
                <HiMiniArrowLongDown className="w-8 sm:w-10 h-8 sm:h-10 text-[#00ffce] mt-6" />
              )}
            </div>
          ))}
        </section>
      </div>

      <Footer />
    </>
  );
}
