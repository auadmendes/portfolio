import { motion } from "framer-motion"
import { ISkillProps } from "../../typings";

type Props = {
  directionLeft?: boolean;
  skill: ISkillProps;
}

export function Skill({ directionLeft, skill }: Props) {

  return (
    <div className="w-full group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={skill?.skillImage.url}
        className="rounded-full border border-gray-500 
        object-cover object-center w-20 h-20 lg:w-20 lg:-h-28
     
        filter group-hover:grayscale-0 group-hover:bg-gray-500"
      />
      <div className="absolute opacity-0 group-hover:opacity-100 
      transition-all duration-300 ease-in-out h-24 w-24 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p title={String(skill.progress)}
            className="flex items-center text-3xl bg-gray-800 
            py-4 px-2 rounded-full font-bold text-gray-100 opacity-100">

            {String(skill.progress)}%

          </p>
        </div>
      </div>
    </div>
  )
}