import React from 'react'
import ExperienceBag from './components/ExperienceBag';
import ProjectsBag from './components/ProjectsBag';
import SkillsBag from './components/SkillsBag';
import Title from './components/Title';
import AboutMe from './components/AboutMe';

export default function Home() {
  return (
    <main className="text-white">
      <article className='bg-gray-900'>
        <Title />
        <ProjectsBag />
        <ExperienceBag />
        <SkillsBag />
        <AboutMe />
      </article>
    </main>
  );
}
