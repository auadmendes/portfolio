import Image from 'next/image'
import Link from 'next/link'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { IHero } from '../../typings'
import { BackgroundCircles } from '../BackgroundCircles'


type Props = {
  hero: IHero;
}

export function Hero({ hero }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, the name is ${hero?.name}`,
      "Guy-who-loves-tea.tsx",
      "<ButLovesToCodeMore/>"
    ],
    loop: true,
    delaySpeed: 2000,
  })

  //console.log(hero)

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center
    text-center overflow-hidden'>
      <BackgroundCircles />
      <Image
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src={hero?.image.url}
        width={200}
        height={200}
        alt={`image of the person ${hero?.name}`} />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 tracking-[15px]'>{hero?.role}</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor />
        </h1>
        <div className='pt-5'>
          <Link href="#about">
            <button className='heroButton'>About</button>
          </Link>
          <Link href="#experience">
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href="#skills">
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href="#projects">
            <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

