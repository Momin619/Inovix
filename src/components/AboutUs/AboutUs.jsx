import AboutHero from "./AboutHero";
import MissionVision from "./MissionVision";
import CoreValues from "./CoreValues";
import TimeLine from "./TimeLine";
import Milestones from "./Milestones";
import TeamSection from "./TeamSection";

export default function AboutUs() {
  return (
    <div className="relative pt-10 bg-gradient-to-br from-black via-[#0a0f1f] to-black overflow-hidden">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,255,206,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,255,206,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Neon Orbs */}
      <div className="absolute top-16 left-4 w-28 sm:w-36 h-28 sm:h-36 bg-[#00ffce]/50 rounded-full blur-3xl shadow-[0_0_140px_70px_#00ffceaa]" />
      <div className="absolute bottom-16 right-4 w-36 sm:w-48 h-36 sm:h-48 bg-purple-600/50 rounded-full blur-3xl shadow-[0_0_160px_80px_rgba(168,85,247,0.6)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 flex flex-col gap-12 sm:gap-16">
        <AboutHero />
        <MissionVision />
        <CoreValues />
        <TimeLine />
        <Milestones />
        <TeamSection />
      </div>
    </div>
  );
}
