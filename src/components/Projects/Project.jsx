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
          img: "/images/Projects-images/web/e-commerce.png",
        },
        {
          name: "Portfolio Platform",
          tech: "Next.js, Tailwind",
          img: "/images/Projects-images/web/portfolio.png",
        },
        {
          name: "SaaS Dashboard",
          tech: "React, Express.js, PostgreSQL",
          img: "/images/Projects-images/web/saas.jpg",
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
          img: "/images/Projects-images/app/food-app.jpg",
        },
        {
          name: "Fitness Tracker",
          tech: "React Native, Node.js",
          img: "/images/Projects-images/app/fitness-tracker-app.jpg",
        },
        {
          name: "FinTech Wallet",
          tech: "Swift, Kotlin, AWS",
          img: "/images/Projects-images/app/wallet-app.jpg",
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
          img: "/images/Projects-images/ai/aichatbot.webp",
        },
        {
          name: "Recommendation Engine",
          tech: "Scikit-learn, Flask",
          img: "/images/Projects-images/ai/recommended-engine.png",
        },
        {
          name: "Image Recognition",
          tech: "TensorFlow, Keras",
          img: "/images/Projects-images/ai/image-recognition.jpg",
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
          img: "/images/Projects-images/ui/redesign.webp",
        },
        {
          name: "E-commerce UI Kit",
          tech: "Sketch, Tailwind",
          img: "/images/Projects-images/ui/e-commerce.jpg",
        },
        {
          name: "Landing Page Design",
          tech: "Figma, Webflow",
          img: "/images/Projects-images/ui/landing.png",
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
          img: "/images/Projects-images/cloud/kubernetes.png",
        },
        {
          name: "Serverless Functions",
          tech: "AWS Lambda, DynamoDB",
          img: "/images/Projects-images/cloud/serverless.png",
        },
        {
          name: "CI/CD Pipeline",
          tech: "GitHub Actions, Jenkins",
          img: "/images/Projects-images/cloud/ci.png",
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
          img: "/images/Projects-images/cybersecurity/penteration.avif",
        },
        {
          name: "Secure Cloud Storage",
          tech: "Azure, AWS Shield",
          img: "/images/Projects-images/cybersecurity/secure-cloud.png",
        },
        {
          name: "Identity Management",
          tech: "OAuth2, Keycloak",
          img: "/images/Projects-images/cybersecurity/identity.webp",
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
          img: "/images/Projects-images/data-science/sales.png",
        },
        {
          name: "BI Dashboard",
          tech: "PowerBI, Tableau",
          img: "/images/Projects-images/data-science/dashboard.png",
        },
        {
          name: "Big Data Pipeline",
          tech: "Spark, Hadoop",
          img: "/images/Projects-images/data-science/data-pipeline.png",
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
          img: "/images/Projects-images/games/2d-game.jpg",
        },
        {
          name: "Multiplayer Shooter",
          tech: "Unreal Engine, C++",
          img: "/images/Projects-images/games/shooter-multiplayer.jpg",
        },
        {
          name: "Hyper-Casual Mobile",
          tech: "Unity, Firebase",
          img: "/images/Projects-images/games/hyper.webp",
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
          img: "/images/Projects-images/iot/home-automation.png",
        },
        {
          name: "Wearable Tracker",
          tech: "Raspberry Pi, BLE",
          img: "/images/Projects-images/iot/wearable-tracker.webp",
        },
        {
          name: "Industrial IoT",
          tech: "ESP32, AWS IoT",
          img: "/images/Projects-images/iot/industry.jpeg",
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
          img: "/images/Projects-images/blockchain/nft-marketplace.png",
        },
        {
          name: "Crypto Wallet",
          tech: "Web3.js, Node.js",
          img: "/images/Projects-images/blockchain/cryto-wallet.png",
        },
        {
          name: "DeFi Protocol",
          tech: "Solidity, Hardhat",
          img: "/images/Projects-images/blockchain/defi-protocol.png",
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
          img: "/images/Projects-images/ar_vr/ar-shopping.webp",
        },
        {
          name: "VR Training Simulator",
          tech: "Unity, Oculus SDK",
          img: "/images/Projects-images/ar_vr/vr-simulator.avif",
        },
        {
          name: "AR Navigation",
          tech: "ARCore, Flutter",
          img: "/images/Projects-images/ar_vr/ar-navigation.png",
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
          img: "/images/Projects-images/robots/industry-robot.jpeg",
        },
        {
          name: "Delivery Drone",
          tech: "C++, PX4",
          img: "/images/Projects-images/robots/delivery-drone.jpg",
        },
        {
          name: "Humanoid Robot",
          tech: "TensorFlow, ROS",
          img: "/images/Projects-images/robots/human-robot.avif",
        },
      ],
      gradient: "from-rose-500/20 via-black to-black",
    },
  ];

  return (
    <div className="bg-black min-h-screen text-white px-4 sm:px-6 md:px-16 lg:px-20  py-20 md:py-24">
      <motion.h1
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-center my-10 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 leading-tight"
      >
        Our Projects
      </motion.h1>

      <div className="grid my-20 gap-8 sm:gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
