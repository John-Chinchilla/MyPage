import { faPython } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SkillCard({ }) {
    return (
        <div className='w-[65vw] m-auto flex gap-3 justify-around'>
            <div className='bg-gray-800 w-[40rem] p-5 rounded flex gap-3 grid justify-center'>
                {/* <Image src={"/images/img1.jpg"} width={3840} height={2160} /> */}
                <FontAwesomeIcon icon={faPython} className='w-[3rem] h-[3rem] ml-2' />
                <h5> Name </h5>
            </div>
        </div>
    )
}