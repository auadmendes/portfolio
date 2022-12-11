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

export default function Home() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll z-0 
    overflow-x-hidden transition-all scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-cyan-300/80"
    >
      <Head>
        <title>Luciano | Portfolio</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>


      <section id="projects" className="snap-start">
        <Projects />
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
