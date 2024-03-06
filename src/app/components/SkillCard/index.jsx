"use client"
import { faPython } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

export default function SkillCard({ icon = "/images/img1.png", description = "Name", photo = false }) {
    return (
        <div className='bg-gray-800 w-[8rem] p-5 rounded gap-3 grid justify-center grow'>
            <Image src={icon} width={78} height={78} className='w-[3rem] h-[3rem] m-auto pointer-events-none select-none' alt="A project card image" />
            <h5 className="text-center"> {description} </h5>
        </div>
    )
}