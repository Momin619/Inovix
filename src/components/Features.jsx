import { FaRocket, FaShieldAlt, FaUsers, FaCogs } from "react-icons/fa";

const features = [
  {
    icon: <FaRocket className="text-cyan-400 text-4xl mb-3" />,
    title: "Fast Performance",
    desc: "Optimized for speed and efficiency to deliver a seamless experience.",
  },
  {
    icon: <FaShieldAlt className="text-purple-400 text-4xl mb-3" />,
    title: "Secure by Design",
    desc: "Advanced security practices ensure your data and workflows are protected.",
  },
  {
    icon: <FaUsers className="text-pink-400 text-4xl mb-3" />,
    title: "User Friendly",
    desc: "Built with simplicity and usability in mind for all types of users.",
  },
  {
    icon: <FaCogs className="text-green-400 text-4xl mb-3" />,
    title: "Customizable",
    desc: "Flexible features that can be tailored to your specific needs.",
  },
];

const Features = () => {
  return (
    <section className="relative z-30 w-full py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Our <span className="text-cyan-400">Features</span>
        </h2>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-neutral-900 p-6 rounded-2xl shadow-lg transition duration-500 transform hover:scale-105 hover:brightness-125 brightness-90 flex flex-col items-center text-center border-b-2 border-transparent hover:border-b-[#00FFCE]"
            >
              {feature.icon}
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
