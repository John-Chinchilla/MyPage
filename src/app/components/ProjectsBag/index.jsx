import ProjectCard from "../ProjectCard";

export default function ProjectsBag({ }) {
    return (
        <section className="text-center">
            <h3 className="my-3 text-blue-400"> My Projects </h3>
            <div className="flex flex-wrap justify-around m-auto max-w-[65vw] rounded">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </section>
    )
}
