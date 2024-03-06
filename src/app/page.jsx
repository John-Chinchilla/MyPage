import React from 'react'
import ProjectCard from './components/ProjectCard';
import ExperienceCard from './components/ExperienceCard';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import SkillCard from './components/SkillCard';

export default function Home() {
  return (
    <main className="text-white">
      <article className='bg-gray-700'>
        <section className="text-center">
          <h1 className="text-blue-400 text-[2rem]"> John Rojas Chinchilla </h1>
          <h2 className="text-[1.5rem]"> System Enginnering </h2>
        </section>
        <section className="text-center">
          <h3 className="my-3 text-blue-400"> My Projects </h3>
          <div className="flex flex-wrap justify-around m-auto max-w-[65vw] rounded">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </section>
        <section>
          <h3 className='my-3 text-blue-400 text-center'> Experience </h3>
          <div className='w-[65vw] m-auto grid gap-3'>
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
          </div>
        </section>
        <section className='text-center'>
          <h3 className='my-3 text-blue-400'> Skills </h3>
          <SkillCard />
        </section>
        <section className='text-center'>
          <h3 className='my-3 text-blue-400'> About Me </h3>
        </section>
      </article>
    </main>
  );
}
