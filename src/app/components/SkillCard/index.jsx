import { faPython } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SkillCard({ }) {
    return (
        <div className='bg-gray-800 w-[8rem] p-5 rounded flex gap-3 grid justify-center grow'>
            <FontAwesomeIcon icon={faPython} className='w-[3rem] h-[3rem] ml-2' />
            <h5> Name </h5>
        </div>
    )
}