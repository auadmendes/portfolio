import { motion } from "framer-motion"
import { ExperienceCard } from "../ExperienceCard"

export function WorkExperience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-center    
        md:flex-row max-w-full justify-evenly mx-auto items-center scroll-smooth
        "
    >

      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory mt-28
      scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-cyan-300/80">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  )
}