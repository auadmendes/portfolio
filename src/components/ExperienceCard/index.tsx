import { motion } from "framer-motion"
import Image from "next/image"
import { IExperienceProps } from "../../typings"

type Props = {
  experience: IExperienceProps;
}

export function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
      w-[400px] md:w-[600px] xl:w-[600px] snap-center bg-gray-700 py-6 px-12
      transition-opacity duration-200 overflow-hidden -mt-20 cursor-pointer">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-20 h-20 xl:w-[200px] xl:h-[200px] 
        transition-all object-cover object-center"
        src={experience?.companyImage.url}
        alt="logo"
      />

      <div className="px-0 md:px-10 mx-8 my-8">
        <h4 className="text-lg lg:text-4xl rounded-md font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience.company}</p>
        <div className="flex space-x-2 my-2">
          {experience.experienceSkills.map((skill) => (

            <Image
              key={skill.id}
              className="h-10 w-10 rounded-full object-cover object-center"
              src={skill.skillImage.url}
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

        <ul className="list-disc space-y-4 text-lg text-left text-gray-300 h-56 w-full overflow-scroll">
          {experience.experiencePoints.map((point) => (
            <li
              key={point.id}
            >
              {point.point}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}