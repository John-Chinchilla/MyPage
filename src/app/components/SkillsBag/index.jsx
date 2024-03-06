import { myData } from "../../../../myData";
import SkillCard from "../SkillCard";

export default function SkillsBag({ }) {
  return (
    <section>
      <h3 className='mb-3 mt-10 text-blue-400 text-center'> Skills </h3>
      <div className='max-w-[65vw] m-auto flex flex-wrap gap-3 px-4'>
        {myData.skills.map((skill) => (
          <SkillCard icon={skill.icon} description={skill.description} photo={skill.photo}/>
        ))}
      </div>
    </section>
  )
}
