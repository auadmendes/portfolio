import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { About } from "../components/About";
import { ContactMe } from "../components/ContactMe";
import { Header } from "../components/Header/index";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { WorkExperience } from "../components/WorkExperience";


import hLogoImage from '../../public/hLogo.svg'

import { GetServerSideProps } from "next";
import { IExperienceProps, IHero, IProjectProps, ISkillProps, ISocialProps } from "../typings";

import { getSkill } from "../services/getSkills";
import { getHero } from "../services/getHero";
import { getSocials } from "../services/getSocial";
import { getExperience } from "../services/getExperience";
import { getProject } from "../services/getProject";

type Props = {
  hero: IHero;

  experiences: IExperienceProps[];
  skillsData: ISkillProps[];
  projects: IProjectProps[];
  socials: ISocialProps[];
}

export default function Home({
  hero,
  experiences,
  skillsData,
  projects,
  socials,
}: Props) {


  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll z-0 
    overflow-x-hidden transition-all scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-cyan-300/80"
    >
      <Head>
        <title>{`${hero.name} | Portfolio`}</title>
      </Head>

      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero hero={hero} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={hero} />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skillsData} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href={'#hero'}>
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image src={hLogoImage} alt="" className="h-10 w-10 filter grayscale hover:grayscale-0 " />
          </div>
        </footer>
      </Link>

    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {

  const skillsData: ISkillProps[] = await getSkill()
  const hero: IHero = await getHero()
  const socials: ISocialProps = await getSocials()
  const experiences: IExperienceProps[] = await getExperience()
  const projects: IProjectProps[] = await getProject()

  return {
    props: {
      hero,
      experiences,
      skillsData,
      projects,
      socials,
    }
  }
}