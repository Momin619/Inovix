import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Alice Johnson",
    review:
      "This platform completely transformed our workflow. The intuitive design and smooth experience made everything effortless.",
  },
  {
    name: "Michael Smith",
    review:
      "I was impressed by the speed and reliability. Customer support was responsive and went above expectations.",
  },
  {
    name: "Sophie Lee",
    review:
      "The attention to detail in the interface and the unique features set this apart from anything I’ve used before.",
  },
  {
    name: "David Brown",
    review:
      "I highly recommend this service to anyone looking for a robust solution that actually delivers.",
  },
];

const Testimonials = () => {
  return (
    <section className="relative z-30 py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative bg-neutral-900 rounded-2xl shadow-lg flex flex-col h-full p-6 overflow-hidden"
            >
              {/* Quote Icons with fixed color */}
              <FaQuoteLeft
                style={{ color: "#00FFCE" }}
                className="text-4xl md:text-5xl mb-4"
              />

              <p className="text-gray-300 text-lg leading-relaxed flex-grow">
                {t.review}
              </p>

              <FaQuoteRight
                style={{ color: "#00FFCE" }}
                className="text-4xl md:text-5xl mt-4 self-end"
              />

              <div className="mt-6 text-right font-semibold text-white">
                {t.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
