import { motion } from "framer-motion"
import Image from "next/image"
import { urlFor } from "../../../sanity";
import { IExperience } from "../../typings"

type Props = {
  experience: IExperience;
}

export function ExperienceCard({ experience }: Props) {
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
        className="w-32 h-32 xl:w-[200px] xl:h-[200px] 
        transition-all object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
        alt="logo"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl rounded-md font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience.company}</p>
        <div className="flex space-x-2 my-2">
          {experience?.technologies.map((technology) => (
            <Image
              key={technology.id}
              className="h-10 w-10 rounded-full object-cover object-center"
              src={urlFor(technology?.image).url()}
              alt=""
              width={150}
              height={150}
            />
          ))}


        </div>
        <p className="uppercase p-5 text-gray-300">
          {new Date(experience.dateStarted).toDateString()} - {""}
          {experience.isCurrentWorkingHere ? "Present" : experience.dateEnded}
        </p>

        <ul className="list-disc space-y-4 text-lg text-left text-gray-300 h-80">
          {experience.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}