import { motion } from "framer-motion"
import { IHero } from "../../typings"


type Props = {
  pageInfo: IHero;
}

export function About({ pageInfo }: Props) {

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
        src={pageInfo?.profilePicture.url}
        className="mb-0 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
          md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] transition-all"
      />

      <div className="space-y-2 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a <span className="underline decoration-cyan-200/50">little</span> background
        </h4>
        <p className=" text-sm">{pageInfo.backgroundInformation}</p>
      </div>

    </motion.div>
  )
}