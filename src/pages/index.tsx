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

import { GetServerSideProps, GetStaticProps } from "next";
import { IExperience, IPageInfo, IProject, ISkill, ISocial } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperience";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocials } from "../utils/fetchSocial";
import { fetchSkills } from "../utils/fetchSkills";

type Props = {
  pageInfo: IPageInfo;
  experiences: IExperience[];
  skills: ISkill[];
  projects: IProject[];
  socials: ISocial[];
}

export default function Home({
  pageInfo,
  experiences,
  skills,
  projects,
  socials,
}: Props) {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll z-0 
    overflow-x-hidden transition-all scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-cyan-300/80"
    >
      <Head>
        <title>{pageInfo.name} | Portfolio</title>
      </Head>

      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
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

export const getStaticProps: GetStaticProps = async () => {
  const pageInfo: IPageInfo = await fetchPageInfo()
  const experiences: IExperience[] = await fetchExperiences()
  const skills: ISkill[] = await fetchSkills()
  const projects: IProject[] = await fetchProjects()
  const socials: ISocial[] = await fetchSocials()

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    }
  }
}