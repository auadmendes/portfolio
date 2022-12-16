import { motion } from "framer-motion"

import Image from "next/image"
import { IProjectProps } from "../../typings"

type Props = {
  projects: IProjectProps[]
}

export function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-center    
    md:flex-row max-w-full justify-evenly mx-auto items-center scroll-smooth">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden
        snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-cyan-300/80"
      >
        {projects?.map((project, i) => (
          <div
            key=""
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
          items-center justify-center p-20 md:p-44 h-screen"
          >

            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={project?.image.url}
              className="object-cover max-w-full max-h-96"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-cyan-400/20">Case Study {i + 1} of {projects.length}</span> {project.title}
              </h4>

              <div className="flex items-center space-x-2 justify-center">
                {project?.skills.map((skill) => (
                  <Image
                    className='rounded-md h-8 w-8'
                    key={skill.id}
                    src={skill?.skillImage.url}
                    height={100}
                    width={100}
                    alt=""
                  />
                ))}
              </div>
              <p className="text-lg text-center md:text-left">{project.summary}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-cyan-400/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  )
}