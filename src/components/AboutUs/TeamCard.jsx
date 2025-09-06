import styles from "./TeamCard.module.css";

export default function TeamCard({ img, name, role, description, id }) {
  return (
    <div key={id} className="group w-64 h-80 [perspective:1000px]">
      <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center 
          bg-black/70 border border-[#00ffce]/40 rounded-xl shadow-[0_0_40px_#00ffce66] 
          ${styles["backface-hidden"]}`}
        >
          <img
            src={img}
            alt={name}
            className="w-24 h-24 rounded-full border-2 border-[#00ffce] object-cover"
          />
          <h3 className="mt-4 text-lg font-bold text-white">{name}</h3>
          <p className="text-sm text-gray-400">{role}</p>
        </div>

        {/* Back */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center 
          bg-gradient-to-br from-[#00ffce33] to-purple-600/40 rounded-xl text-white 
          [transform:rotateY(180deg)] ${styles["backface-hidden"]}`}
        >
          <p className="text-sm px-4 text-center">{description}</p>
        </div>
      </div>
    </div>
  );
}
