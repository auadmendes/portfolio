import { motion } from "framer-motion"

type Props = {
  directionLeft?: boolean;
}

export function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src="https://logodix.com/logo/1858340.png"
        className="rounded-full border border-gray-500 object-cover 
        object-center w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 
        filter group-hover:grayscale group-hover:bg-white"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 
      transition-all duration-300 ease-in-out h-24 w-24 md:w-28 
      md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            100%
          </p>
        </div>
      </div>
    </div>
  )
}