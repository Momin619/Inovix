import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { categories } from "./data/projects";
import ProjectImage from "./ProjectImage";

export default function Project() {
  // Tracks which project is currently hovered: "CategoryTitle||ProjectId"
  const [hoveredKey, setHoveredKey] = useState(null);
  const navigate = useNavigate();

  const handleViewProject = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <div className="bg-black min-h-screen text-white px-4 sm:px-6 md:px-16 lg:px-20 py-20 md:py-24">
      <motion.h1
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-center my-10 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 leading-tight"
      >
        Our Projects
      </motion.h1>

      <div className="grid my-20 gap-8 sm:gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => {
          const Icon = cat.icon;

          // Is any project inside THIS category currently hovered?
          const catIsActive = cat.projects.some(
            (p) => hoveredKey === `${cat.title}||${p.id}`,
          );

          return (
            <motion.div
              key={cat.title}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className={`flex flex-col h-full rounded-2xl p-6 sm:p-8 shadow-lg bg-gradient-to-b ${cat.gradient} border transition-all duration-500
                ${
                  catIsActive
                    ? `border-opacity-100 ${cat.borderGlow} shadow-2xl`
                    : "border-gray-800 hover:border-gray-600"
                }`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-black/20">
                  <Icon className={`w-6 h-6 ${cat.iconColor}`} />
                </span>
                <h2 className="text-xl sm:text-2xl font-bold">{cat.title}</h2>
              </div>

              <p className="text-gray-300 text-sm sm:text-base mb-6">
                {cat.desc}
              </p>

              {/* Project Cards */}
              <div className="grid gap-5">
                {cat.projects.map((p) => {
                  const key = `${cat.title}||${p.id}`;
                  const isHovered = hoveredKey === key;
                  // Sibling: another card in same category is hovered
                  const isDimmed = catIsActive && !isHovered;

                  return (
                    <div
                      key={p.id}
                      onMouseEnter={() => setHoveredKey(key)}
                      onMouseLeave={() => setHoveredKey(null)}
                      onClick={() => handleViewProject(p.id)}
                      className={`relative rounded-xl overflow-hidden shadow-md cursor-pointer
                        transition-all duration-500 ease-in-out
                        ${isHovered ? `ring-2 ${cat.ringColor} shadow-lg ${cat.glowShadow}` : "ring-0"}
                        ${isDimmed ? "scale-[0.97]" : "scale-100"}
                      `}
                    >
                      {/* Image with spotlight effects */}
                      <ProjectImage
                        src={p.img}
                        alt={p.name}
                        isHovered={isHovered}
                        isDimmed={isDimmed}
                      />

                      {/* Glassmorphism overlay — slides up on hover */}
                      <div
                        className={`absolute inset-0 rounded-xl flex flex-col items-center justify-center text-center p-4
                          backdrop-blur-sm transition-all duration-400
                          ${isHovered ? "opacity-100 bg-black/40" : "opacity-0 bg-transparent pointer-events-none"}
                        `}
                      >
                        {/* Colored top accent line */}
                        <div
                          className={`absolute top-0 left-0 right-0 h-[2px] ${cat.accentLine} transition-all duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
                        />

                        <h3
                          className={`text-lg sm:text-xl font-bold ${cat.textAccent} transition-all duration-300
                            ${isHovered ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
                          `}
                        >
                          {p.name}
                        </h3>

                        <p
                          className={`text-xs sm:text-sm text-gray-300 mt-2 transition-all duration-300 delay-75
                            ${isHovered ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
                          `}
                        >
                          {p.tech}
                        </p>

                        {/* Decorative tech pill */}
                        <div
                          className={`mt-3 px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase
                            bg-white/10 border border-white/20 transition-all duration-300 delay-100
                            ${isHovered ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
                          `}
                        >
                          View Project →
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
