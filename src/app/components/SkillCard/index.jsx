"use client"
import ImportIcons from "@/app/functions/ImportIcons.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function SkillCard({ icon = "faPython", description = "Name", photo = false }) {
    return (
        <div className='bg-gray-800 w-[8rem] p-5 rounded gap-3 grid justify-center grow'>
            {photo == false ? (
                <FontAwesomeIcon icon={ImportIcons(icon)} className='w-[3rem] h-[3rem] m-auto' />
            ) : (
                <Image src={icon} width={3840} height={2160} className='w-[3rem] h-[3rem] m-auto pointer-events-none select-none' alt="A project card image" />
            )}
            <h5 className="text-center"> {description} </h5>
        </div>
    )
}