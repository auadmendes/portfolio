import { motion } from "framer-motion"
import { ISkillProps } from "../../typings"
import { Skill } from "../Skill"

type Props = {
  skills: ISkillProps[];
}


export function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative overflow-hidden flex-col text-center 
    md:text-left md:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 
    mx-auto items-center scroll-smooth">

      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500">
        Skills
      </h3>

      <h3
        className="absolute top-36 uppercase tracking-[3px] text-gray-300 text-sm">Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-5 gap-5">
        {skills?.map((skill) => (
          <Skill key={skill.id} skill={skill} />
        ))}
        {/* {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill.id} skill={skill} />
        ))}

        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill.id} skill={skill} directionLeft />
        ))} */}

      </div>
    </motion.div>
  )
}