import { motion } from "framer-motion";
import TeamCard from "./TeamCard";
import { team } from "./data/aboutData";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function TeamSection() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={fadeUp}
      viewport={{ once: true, amount: 0.5, margin: "0px 0px -80px 0px" }}
    >
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 text-white drop-shadow-[0_0_25px_#00ffceaa]">
        Meet Our Team
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {team.map((member) => (
          <div key={member.id} className="flex-shrink-0">
            <TeamCard
              name={member.name}
              role={member.role}
              img={member.img}
              description={member.description}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
