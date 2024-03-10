import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ image = "/images/img1.webp", title = "Title", githubURL = "https://www.google.com" }) {
    return (
        <div className="bg-gray-600 w-[30vw] bg-gray-500 p-2 rounded m-3 grow">
            <Image src={image} width={3840} height={2160} className="rounded" alt="A project card image" />
            <div className="flex justify-between items-center px-2 bg-gray-700 mt-3 rounded">
                <h5>
                    {title}
                </h5>
                <div className='flex py-2 hover:brightness-75'>
                    <Link href={githubURL} target="_blank">
                        <FontAwesomeIcon icon={faGithub} width={100} height={100} className='w-[2.2vw] h-[2.2vw]' />
                    </Link>
                </div>
            </div>
        </div>
    )
}