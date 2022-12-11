import { motion } from "framer-motion"


type Props = {}

export function About({ }: Props) {

  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center 
       md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,

        }}
        whileInView={{
          x: 0,
          opacity: 1
        }}
        viewport={{ once: true }}
        src="https://avatars.githubusercontent.com/u/5294488?v=4"
        className="mb-0 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
          md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] transition-all"
      />

      <div className="space-y-2 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a <span className="underline decoration-cyan-200/50">little</span> background
        </h4>
        <p className=" text-sm">
          I am Luciano Mendes, Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique alias suscipit quae, harum optio consequuntur fuga dignissimos veniam perspiciatis totam, cumque commodi! Unde, est amet magni aliquid odit corrupti eius Lorem ipsum dolor sit amet consectetur adipisicing elit.
          I am Luciano Mendes, Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique alias suscipit quae, harum optio consequuntur fuga dignissimos veniam perspiciatis totam, cumque commodi! Unde, est amet magni aliquid odit corrupti eius Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

    </motion.div>
  )
}