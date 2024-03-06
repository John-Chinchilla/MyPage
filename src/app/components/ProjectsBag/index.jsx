import { myData } from "../../../../myData";
import ProjectCard from "../ProjectCard";

export default function ProjectsBag({ }) {
    return (
        <section className="text-center">
            <h3 className="my-3 text-blue-400" id="MyProjects"> My Projects </h3>
            <div className="flex flex-wrap justify-around m-auto max-w-[65vw] rounded">
                {myData.projects.map((project, key) => (
                    <ProjectCard key={key} image={project.image} title={project.title} githubURL={project.githubURL} />
                ))}
            </div>
        </section>
    )
}
