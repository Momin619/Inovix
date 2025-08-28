import React, { useState, useEffect } from "react";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";
import RatingStars from "./RatingStars";
const testimonials = [
  {
    name: "Alice Johnson",
    review:
      "This platform completely transformed our workflow. The intuitive design and smooth experience made everything effortless.",
    avatar: "https://i.pravatar.cc/100?img=47",
    rating: 5,
  },
  {
    name: "Michael Smith",
    review:
      "I was impressed by the speed and reliability. Customer support was responsive and went above expectations.",
    avatar: "https://i.pravatar.cc/100?img=7",
    rating: 4,
  },
  {
    name: "Sophie Lee",
    review:
      "The attention to detail in the interface and the unique features set this apart from anything I’ve used before.",
    avatar: "https://i.pravatar.cc/100?img=32",
    rating: 5,
  },
  {
    name: "David Brown",
    review:
      "I highly recommend this service to anyone looking for a robust solution that actually delivers.",
    avatar: "https://i.pravatar.cc/100?img=1",
    rating: 4,
  },
];

const Testimonials = () => {
  const [reviewIndex, setReviewIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    let timeoutId;

    const cycleReviews = () => {
      setFade(false);
      timeoutId = setTimeout(() => {
        setReviewIndex((prev) => (prev + 1) % testimonials.length);
        setFade(true);
        timeoutId = setTimeout(cycleReviews, 3100); // auto cycle every 3s
      }, 300);
    };

    cycleReviews();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="relative z-30 py-[clamp(1.5rem,5vw,3.5rem)] bg-black text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8 sm:mb-12">
          What Our Clients Say
        </h2>

        <div className="relative bg-neutral-900 rounded-2xl shadow-lg p-5 sm:p-8 md:p-10 overflow-hidden">
          <div
            className={`transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Avatar + Name + Rating */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4">
              <img
                src={testimonials[reviewIndex].avatar}
                alt={testimonials[reviewIndex].name}
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-cyan-400"
              />
              <div className="text-left">
                <h4 className="text-base sm:text-lg md:text-xl font-bold">
                  {testimonials[reviewIndex].name}
                </h4>
                <RatingStars rating={testimonials[reviewIndex].rating} />
              </div>
            </div>

            {/* Review with Quotes */}
            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed italic flex items-start gap-2 sm:gap-3">
              <FaQuoteLeft
                style={{ color: "#00FFCE" }}
                className="text-lg sm:text-xl mt-1"
              />
              <span className="flex-1">{testimonials[reviewIndex].review}</span>
              <FaQuoteRight
                style={{ color: "#00FFCE" }}
                className="text-lg sm:text-xl mt-1"
              />
            </p>
          </div>

          {/* Prev Button */}

          {/* Next Button */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
