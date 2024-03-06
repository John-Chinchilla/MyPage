import { myData } from "../../../../myData";
import ExperienceCard from "../ExperienceCard";

export default function ExperienceBag({ }) {
  return (
    <section>
      <h3 className='mb-3 mt-10 text-blue-400 text-center' id="Experience"> Experience </h3>
      <div className='max-w-[65vw] m-auto grid gap-3'>
        {myData.experience.map((experience) => (
          <ExperienceCard date={experience.date} title={experience.title} description={experience.description} />
        ))}
      </div>
    </section>
  )
}
