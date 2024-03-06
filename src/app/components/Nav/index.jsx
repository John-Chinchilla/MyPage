import Link from "next/link";

export default function Nav({ }) {
    return (
        <header className="fixed w-screen px-[11vw] opacity-90 bg-gray-900">
            <nav>
                <ul className="flex justify-around">
                    <li> <Link href={"#MyProjects"}> My Projects </Link> </li>
                    <li> <Link href={"#Experience"}> Experience </Link> </li>
                    <li> <Link href={"#Skills"}> Skills </Link> </li>
                    <li> <Link href={"#AboutMe"}> About Me </Link> </li>
                </ul>
            </nav>
        </header>
    )
}