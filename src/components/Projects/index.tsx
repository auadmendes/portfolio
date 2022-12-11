import { motion } from "framer-motion"

import Image from "next/image"
import { urlFor } from "../../../sanity"
import { IProject } from "../../typings"

type Props = {
  projects: IProject[]
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
              src={urlFor(project?.image).url()}
              className="object-cover max-w-full max-h-96"
            />

            {/* <Image src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlJTIwYXBwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" width={300} height={300} alt=""
              className="h-[250px] w-[600px] object-cover"
            /> */}
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-cyan-400/20">Case Study {i + 1} of {projects.length}</span> {project.title}
              </h4>

              <div className="flex items-center space-x-2 justify-center">
                {project?.technologies.map((technology) => (
                  <Image
                    className='rounded-md h-8 w-8'
                    key={technology.id}
                    src={urlFor(technology?.image).url()}
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