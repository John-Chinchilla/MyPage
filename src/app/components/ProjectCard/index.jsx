import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function ProjectCard({ }) {
    return (
        <div className="bg-gray-600 w-[30vw] bg-gray-500 p-2 rounded m-3">
            <Image src="/images/img1.jpg" width={3840} height={2160} className="rounded" />
            <div className="flex justify-between items-center px-2 bg-gray-700 mt-3 rounded">
                <h5>
                    Title
                </h5>
                <div className='flex py-2'>
                    <button>
                        <FontAwesomeIcon icon={faGithub} width={100} height={100} className='w-[2.2vw] h-[2.2vw]' />
                    </button>
                </div>
            </div>
        </div>
    )
}