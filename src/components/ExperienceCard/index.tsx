import { motion } from "framer-motion"
import Image from "next/image"

export function ExperienceCard() {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
      w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-gray-700 p-10 
      transition-opacity duration-200 overflow-hidden cursor-pointer">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] 
        transition-all object-cover object-center"
        src="https://logo.clearbit.com/trustly.net"
        alt="logo"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO of HMidias</h4>
        <p className="font-bold text-2xl mt-1">HMidias</p>
        <div className="flex space-x-2 my-2">
          <Image
            className="h-10 w-10 rounded-full"
            src="https://logo.clearbit.com/sanity.io"
            alt=""
            width={10}
            height={10}
          />
          <Image
            className="h-10 w-10 rounded-full"
            src="https://logo.clearbit.com/sanity.io"
            alt=""
            width={10}
            height={10}
          />
          <Image
            className="h-10 w-10 rounded-full"
            src="https://logo.clearbit.com/sanity.io"
            alt=""
            width={10}
            height={10}
          />
          <Image
            className="h-10 w-10 rounded-full"
            src="https://logo.clearbit.com/sanity.io"
            alt=""
            width={10}
            height={10}
          />

        </div>
        <p className="uppercase p-5 text-gray-300">Started work ...</p>

        <ul className="list-disc space-y-4 text-lg">
          <li>SAnity IO</li>
          <li>Typescript</li>
          <li>Tailwind css</li>
          <li>Nextjs</li>
          <li>Motion Framer</li>
          <li>Social Icons</li>
        </ul>
      </div>
    </article>
  )
}