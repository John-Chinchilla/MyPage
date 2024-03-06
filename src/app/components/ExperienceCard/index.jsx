
export default function ExperienceCard({ date = "aaaa - aaaa", title = "Title", description = "Description"}) {
    return (
        <div className='bg-gray-800 p-3 mx-4 rounded'>
            <h5 className="text-blue-400"> {date}: {title} </h5>
            <hr className='border-gray-700 my-2' />
            <p>
                {description}
            </p>
        </div>
    )
}
