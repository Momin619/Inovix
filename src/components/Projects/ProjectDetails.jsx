import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { getProjectById, categories } from "./data/projects";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  CheckCircle2,
  Layers,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

// ─── Status badge ────────────────────────────────────────────────────────────
function StatusBadge({ status }) {
  const map = {
    Completed: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    "In Progress": "bg-amber-500/15 text-amber-400 border-amber-500/30",
    Planned: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border uppercase tracking-wider ${map[status] ?? map["Planned"]}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
      {status}
    </span>
  );
}

// ─── Tech pill ───────────────────────────────────────────────────────────────
function TechPill({ label }) {
  return (
    <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300 font-mono">
      {label}
    </span>
  );
}

// ─── Related project card ────────────────────────────────────────────────────
function RelatedCard({ project, category, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      className={`cursor-pointer rounded-xl overflow-hidden border transition-all duration-300
        ${hovered ? `${category.borderGlow} shadow-lg ${category.glowShadow}` : "border-gray-800"}`}
    >
      <div className="relative h-32 overflow-hidden">
        <img
          src={project.img}
          alt={project.name}
          className={`w-full h-full object-cover transition-all duration-500
            ${hovered ? "scale-110 brightness-90 blur-[2px]" : "grayscale brightness-75"}`}
        />
        {hovered && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className={`text-sm font-semibold ${category.textAccent}`}>
              View →
            </span>
          </div>
        )}
      </div>
      <div className="p-3 bg-gray-900/60">
        <p className="text-sm font-semibold text-white truncate">
          {project.name}
        </p>
        <p className="text-xs text-gray-500 mt-0.5 truncate">{project.tech}</p>
      </div>
    </motion.div>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────
export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const result = getProjectById(id);

  // 404 state
  if (!result) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center text-white">
        <div className="text-center">
          <p className="text-6xl font-black text-gray-700 mb-4">404</p>
          <p className="text-gray-400 mb-6">Project not found.</p>
          <button
            onClick={() => navigate("/projects")}
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-sm font-semibold transition-all"
          >
            ← Back to Projects
          </button>
        </div>
      </div>
    );
  }

  const { project, category } = result;
  const Icon = category.icon;

  // Other projects in same category (exclude current)
  const relatedProjects = category.projects.filter((p) => p.id !== project.id);

  // Tech stack array
  const techList = project.tech.split(",").map((t) => t.trim());

  // Meta info items
  const metaItems = [
    { icon: Calendar, label: "Year", value: project.year },
    { icon: Clock, label: "Duration", value: project.duration },
    { icon: User, label: "Client", value: project.client },
    {
      icon: Layers,
      label: "Stack",
      value:
        techList[0] + (techList.length > 1 ? ` +${techList.length - 1}` : ""),
    },
  ];

  return (
    <div className="bg-black min-h-screen text-white">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="relative bg-black border-b border-gray-900">
        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          onClick={() => navigate(-1)}
          className="absolute top-5 left-4 sm:left-8 md:left-16 lg:left-20 z-20 flex items-center gap-2 px-3 py-2 rounded-xl
      bg-black/70 hover:bg-black border border-white/10 hover:border-white/30
      text-sm font-medium text-gray-300 hover:text-white backdrop-blur-sm transition-all duration-300 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Back</span>
        </motion.button>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-14">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 items-center">
            {/* Left content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-wrap items-center gap-3 mb-4"
              >
                <span
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-semibold
              bg-white/5 border border-white/10 ${category.iconColor}`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {category.title}
                </span>

                <StatusBadge status={project.status} />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5"
              >
                {project.name}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="text-gray-400 max-w-2xl leading-relaxed"
              >
                {project.description}
              </motion.p>
            </div>

            {/* Right image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className={`rounded-2xl overflow-hidden border ${category.borderGlow} shadow-2xl ${category.glowShadow}`}
            >
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-[260px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Body ─────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* ── Left / Main content ─────────────────────────────────────── */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl bg-gray-900/40 border border-gray-800 p-6 sm:p-8"
            >
              <h2 className="text-lg sm:text-xl font-bold text-white mb-3">
                About This Project
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="rounded-2xl bg-gray-900/40 border border-gray-800 p-6 sm:p-8"
            >
              <h2 className="text-lg sm:text-xl font-bold text-white mb-5">
                Key Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white/3 border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <CheckCircle2
                      className={`w-4 h-4 mt-0.5 shrink-0 ${category.iconColor}`}
                    />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tech stack */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-2xl bg-gray-900/40 border border-gray-800 p-6 sm:p-8"
            >
              <h2 className="text-lg sm:text-xl font-bold text-white mb-5">
                Technology Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {techList.map((tech) => (
                  <TechPill key={tech} label={tech} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right / Sidebar ─────────────────────────────────────────── */}
          {/* ── Right / Sidebar ─────────────────────────────────────────── */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 flex flex-col gap-6">
              {/* Project Details */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-2xl bg-gray-900/40 border border-gray-800 p-6"
              >
                <h3 className="text-base font-bold text-white mb-5">
                  Project Details
                </h3>

                <div className="flex flex-col gap-4">
                  {metaItems.map(({ icon: MetaIcon, label, value }) => (
                    <div key={label} className="flex items-center gap-3">
                      <span
                        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0
              bg-black/30 border border-white/5"
                      >
                        <MetaIcon className={`w-4 h-4 ${category.iconColor}`} />
                      </span>

                      <div className="min-w-0">
                        <p className="text-xs text-gray-500 uppercase tracking-wider">
                          {label}
                        </p>

                        <p className="text-sm font-semibold text-white truncate">
                          {value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Related Projects */}
              {relatedProjects.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="rounded-2xl bg-gray-900/40 border border-gray-800 p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base font-bold text-white">
                      Related Projects
                    </h3>

                    <button
                      onClick={() => navigate("/projects")}
                      className={`text-xs ${category.textAccent} flex items-center gap-1`}
                    >
                      All <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="flex flex-col gap-3">
                    {relatedProjects.map((p) => (
                      <RelatedCard
                        key={p.id}
                        project={p}
                        category={category}
                        onClick={() => navigate(`/projects/${p.id}`)}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
