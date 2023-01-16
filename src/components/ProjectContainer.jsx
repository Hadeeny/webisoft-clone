import arrow from '../assets/arrowdown.svg'
const ProjectContainer = () => {
const project = [1, 2, 3, 4, 5, 6, 7]
    return (
        <div className='w-full mt-[7rem] divide-y divide-solid divide-black'>
            {project.map((prj,i)=>(
                <div className='flex justify-between items-center border-t border-black py-10'>
                <div className='text-2xl'>Styllar</div>
                <div>
                    <img src={arrow}/>
                </div>
            </div>
            ))}
            
        </div>
    )
}

export default ProjectContainer
