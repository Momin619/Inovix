import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Palette,
  Cloud,
  Brain,
  Shield,
  Gamepad2,
  Cpu,
  Blocks,
  Sparkles,
  Bot,
  BarChart3,
} from "lucide-react";

export default function Project() {
  const categories = [
    {
      icon: <Code className="w-10 h-10 text-cyan-400" />,
      title: "Web Development",
      desc: "High-performance websites, portals & SaaS platforms with cutting-edge technologies.",
      projects: [
        {
          name: "E-Commerce Store",
          tech: "React, Node.js, MongoDB",
          img: "https://picsum.photos/id/1015/500/300",
        },
        {
          name: "Portfolio Platform",
          tech: "Next.js, Tailwind",
          img: "https://picsum.photos/id/1005/500/300",
        },
        {
          name: "SaaS Dashboard",
          tech: "React, Express.js, PostgreSQL",
          img: "https://picsum.photos/id/1011/500/300",
        },
      ],
      gradient: "from-cyan-500/20 via-black to-black",
    },
    {
      icon: <Smartphone className="w-10 h-10 text-pink-400" />,
      title: "App Development",
      desc: "Mobile-first apps for Android & iOS with sleek UI and smooth performance.",
      projects: [
        {
          name: "Food Delivery App",
          tech: "Flutter, Firebase",
          img: "https://picsum.photos/id/1021/500/300",
        },
        {
          name: "Fitness Tracker",
          tech: "React Native, Node.js",
          img: "https://picsum.photos/id/1025/500/300",
        },
        {
          name: "FinTech Wallet",
          tech: "Swift, Kotlin, AWS",
          img: "https://picsum.photos/id/1022/500/300",
        },
      ],
      gradient: "from-pink-500/20 via-black to-black",
    },
    {
      icon: <Brain className="w-10 h-10 text-purple-400" />,
      title: "AI & Machine Learning",
      desc: "Next-gen solutions with AI, ML, and automation tools.",
      projects: [
        {
          name: "AI Chatbot",
          tech: "Python, FastAPI, LangChain",
          img: "https://picsum.photos/id/1033/500/300",
        },
        {
          name: "Recommendation Engine",
          tech: "Scikit-learn, Flask",
          img: "https://picsum.photos/id/1085/500/300",
        },
        {
          name: "Image Recognition",
          tech: "TensorFlow, Keras",
          img: "https://picsum.photos/id/1035/500/300",
        },
      ],
      gradient: "from-purple-500/20 via-black to-black",
    },
    {
      icon: <Palette className="w-10 h-10 text-yellow-400" />,
      title: "UI/UX Design",
      desc: "Creative, user-centric designs with focus on seamless experiences.",
      projects: [
        {
          name: "Mobile App Redesign",
          tech: "Figma, Adobe XD",
          img: "https://picsum.photos/id/1050/500/300",
        },
        {
          name: "E-commerce UI Kit",
          tech: "Sketch, Tailwind",
          img: "https://picsum.photos/id/1055/500/300",
        },
        {
          name: "Landing Page Design",
          tech: "Figma, Webflow",
          img: "https://picsum.photos/id/1051/500/300",
        },
      ],
      gradient: "from-yellow-500/20 via-black to-black",
    },
    {
      icon: <Cloud className="w-10 h-10 text-blue-400" />,
      title: "Cloud & DevOps",
      desc: "Scalable cloud infrastructure, CI/CD pipelines & DevOps automation.",
      projects: [
        {
          name: "Kubernetes Setup",
          tech: "AWS, Docker, Kubernetes",
          img: "https://picsum.photos/id/1060/500/300",
        },
        {
          name: "Serverless Functions",
          tech: "AWS Lambda, DynamoDB",
          img: "https://picsum.photos/id/1062/500/300",
        },
        {
          name: "CI/CD Pipeline",
          tech: "GitHub Actions, Jenkins",
          img: "https://picsum.photos/id/1065/500/300",
        },
      ],
      gradient: "from-blue-500/20 via-black to-black",
    },
    {
      icon: <Shield className="w-10 h-10 text-red-400" />,
      title: "Cybersecurity",
      desc: "Robust security solutions to safeguard data and digital assets.",
      projects: [
        {
          name: "Penetration Testing",
          tech: "Kali Linux, OWASP",
          img: "https://picsum.photos/id/1070/500/300",
        },
        {
          name: "Secure Cloud Storage",
          tech: "Azure, AWS Shield",
          img: "https://picsum.photos/id/1072/500/300",
        },
        {
          name: "Identity Management",
          tech: "OAuth2, Keycloak",
          img: "https://picsum.photos/id/1075/500/300",
        },
      ],
      gradient: "from-red-500/20 via-black to-black",
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-green-400" />,
      title: "Data Science & Analytics",
      desc: "Data-driven insights with AI models, dashboards, and analytics tools.",
      projects: [
        {
          name: "Sales Forecasting",
          tech: "Python, TensorFlow",
          img: "https://picsum.photos/id/1080/500/300",
        },
        {
          name: "BI Dashboard",
          tech: "PowerBI, Tableau",
          img: "https://picsum.photos/id/1082/500/300",
        },
        {
          name: "Big Data Pipeline",
          tech: "Spark, Hadoop",
          img: "https://picsum.photos/id/1083/500/300",
        },
      ],
      gradient: "from-green-500/20 via-black to-black",
    },
    {
      icon: <Gamepad2 className="w-10 h-10 text-orange-400" />,
      title: "Game Development",
      desc: "Engaging games for mobile, PC, and web platforms.",
      projects: [
        {
          name: "2D Platformer",
          tech: "Unity, C#",
          img: "https://picsum.photos/id/1090/500/300",
        },
        {
          name: "Multiplayer Shooter",
          tech: "Unreal Engine, C++",
          img: "https://picsum.photos/id/1091/500/300",
        },
        {
          name: "Hyper-Casual Mobile",
          tech: "Unity, Firebase",
          img: "https://picsum.photos/id/1092/500/300",
        },
      ],
      gradient: "from-orange-500/20 via-black to-black",
    },
    {
      icon: <Cpu className="w-10 h-10 text-teal-400" />,
      title: "IoT & Hardware",
      desc: "Smart devices, embedded systems, and IoT cloud integrations.",
      projects: [
        {
          name: "Smart Home Hub",
          tech: "Arduino, MQTT",
          img: "https://picsum.photos/id/1093/500/300",
        },
        {
          name: "Wearable Tracker",
          tech: "Raspberry Pi, BLE",
          img: "https://picsum.photos/id/1094/500/300",
        },
        {
          name: "Industrial IoT",
          tech: "ESP32, AWS IoT",
          img: "https://picsum.photos/id/1095/500/300",
        },
      ],
      gradient: "from-teal-500/20 via-black to-black",
    },
    {
      icon: <Blocks className="w-10 h-10 text-indigo-400" />,
      title: "Blockchain",
      desc: "Decentralized apps, smart contracts, and Web3 solutions.",
      projects: [
        {
          name: "NFT Marketplace",
          tech: "Solidity, React",
          img: "https://picsum.photos/id/1037/500/300",
        },
        {
          name: "Crypto Wallet",
          tech: "Web3.js, Node.js",
          img: "https://picsum.photos/id/1039/500/300",
        },
        {
          name: "DeFi Protocol",
          tech: "Solidity, Hardhat",
          img: "https://picsum.photos/id/1040/500/300",
        },
      ],
      gradient: "from-indigo-500/20 via-black to-black",
    },
    {
      icon: <Sparkles className="w-10 h-10 text-lime-400" />,
      title: "AR/VR Solutions",
      desc: "Immersive augmented and virtual reality experiences.",
      projects: [
        {
          name: "AR Shopping App",
          tech: "ARKit, Swift",
          img: "https://picsum.photos/id/1100/500/300",
        },
        {
          name: "VR Training Simulator",
          tech: "Unity, Oculus SDK",
          img: "https://picsum.photos/id/1101/500/300",
        },
        {
          name: "AR Navigation",
          tech: "ARCore, Flutter",
          img: "https://picsum.photos/id/1102/500/300",
        },
      ],
      gradient: "from-lime-500/20 via-black to-black",
    },
    {
      icon: <Bot className="w-10 h-10 text-rose-400" />,
      title: "Robotics",
      desc: "Smart robots and automation hardware for industries.",
      projects: [
        {
          name: "Warehouse Robot",
          tech: "ROS, Python",
          img: "https://picsum.photos/id/1106/500/300",
        },
        {
          name: "Delivery Drone",
          tech: "C++, PX4",
          img: "https://picsum.photos/id/1107/500/300",
        },
        {
          name: "Humanoid Robot",
          tech: "TensorFlow, ROS",
          img: "https://picsum.photos/id/1108/500/300",
        },
      ],
      gradient: "from-rose-500/20 via-black to-black",
    },
  ];

  return (
    <div className="bg-black min-h-screen text-white px-4 sm:px-6 md:px-16 lg:px-20 py-16 md:py-24">
      <motion.h1
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r leading-tight from-cyan-400 via-pink-400 to-purple-400"
      >
        Our Projects
      </motion.h1>

      <div className="grid gap-8 sm:gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className={`flex flex-col h-full rounded-2xl p-6 sm:p-8 shadow-lg bg-gradient-to-b ${cat.gradient} border border-gray-800 hover:border-cyan-400 hover:shadow-cyan-500/20 transition`}
          >
            {/* Category heading */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-black/20 text-cyan-300">
                {cat.icon}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold">{cat.title}</h2>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm sm:text-base mb-6">
              {cat.desc}
            </p>

            {/* Projects inside category */}
            <div className="grid gap-5">
              {cat.projects.map((p, j) => (
                <motion.div
                  key={j}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative group rounded-xl overflow-hidden shadow-md"
                >
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-44 sm:h-48 object-cover transform group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center text-center p-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-cyan-300">
                      {p.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300">{p.tech}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
