import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function AboutMe({ }) {
  return (
    <section className="pb-10 mt-10">
      <h3 className='text-blue-400 my-3 text-center' id="AboutMe"> About Me </h3>
      <p className="w-[65vw] m-auto px-4">
        I have collaborated on the development of several projects, including a car insurance 
        policy management system, a student and activity management system, and a prototype environment 
        for working with a data flow-based computing language.
      </p>
      <br />
      <p className="w-[65vw] m-auto px-4">
        I am a student of Information Systems Engineering at the National University of Costa Rica. 
        Throughout my studies, I have acquired skills in various programming languages such as C, C++, Java, 
        JavaScript, TypeScript and Python, as well as databases like Oracle, MySQL, and MariaDB. I have also
        worked with tools like React, NextJS, Django, Docker and GitHub.
      </p>
      <div className="flex justify-center gap-5">
        <Link href={"https://github.com/John-Chinchilla"} target="_blank"> <FontAwesomeIcon icon={faGithub} width={78} height={78} className="w-[2rem] hover:brightness-75"/> </Link>
        <Link href={"https://www.linkedin.com/in/john-alejandro-rojas-chinchilla-a68639297/"} target="_blank"> <FontAwesomeIcon icon={faLinkedin} width={78} height={78} className="w-[2rem] hover:brightness-75"/></Link>
      </div>
    </section>
  )
}