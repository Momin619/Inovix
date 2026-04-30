import { features } from "./data/features";

const Features = () => {
  return (
    <section className="relative z-30 w-full py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Our <span className="text-cyan-400">Features</span>
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="bg-neutral-900 p-6 rounded-2xl shadow-lg transition duration-500 transform hover:scale-105 hover:brightness-125 brightness-90 flex flex-col items-center text-center border-b-2 border-transparent hover:border-b-[#00FFCE]"
              >
                <Icon className={`w-8 h-8 mb-3 ${feature.iconColor}`} />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
