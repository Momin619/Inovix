import CountUp from "react-countup";

export default function CounterCard({ number, label }) {
  return (
    <div className="p-6 rounded-xl bg-black/70 border border-[#00ffce]/40 text-center shadow-[0_0_35px_#00ffce66]">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-[#00ffce] drop-shadow-[0_0_25px_#00ffceaa]">
        <CountUp end={number} duration={3} separator="," />+
      </h2>
      <p className="text-gray-300 mt-2">{label}</p>
    </div>
  );
}
