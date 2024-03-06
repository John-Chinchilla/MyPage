import SkillCard from "../SkillCard";

export default function SkillsBag({ }) {
  return (
    <section className='text-center'>
      <h3 className='mb-3 mt-10 text-blue-400'> Skills </h3>
      <div className='max-w-[65vw] m-auto flex flex-wrap gap-3 px-4'>
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
      </div>
    </section>
  )
}
