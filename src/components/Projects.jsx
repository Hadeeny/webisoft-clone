import ProjectContainer from "./ProjectContainer";
import plus from '../assets/smallplus.svg'

const Projects = () => {
  return (
    <section className="w-full py-[6rem] bg-gray-200  mt-[5rem] ">
      <div className=" w-[98%] md:w-11/12 border border-transparent pt-[6rem] items-center px-4 border-t-black mx-auto">
        <div className="flex flex-col gap-y-8 md:flex-row-reverse">
          <div className="w-full flex justify-start text-xl md:justify-end md:w-1/3">
            Our Projects
          </div>
          <div className="w-full space-y-6 md:w-2/3">
            <h2 className="text-2xl md:text-4xl">
              We've built some incredible things with people like you!
            </h2>
            <p className="text-md">
              Being a full-service agency we’ve served a wide range of
              organizations, from full-fledged enterprises to early staged
              startups who are now disrupting the market within their sectors.
            </p>
            <p className="text-lg">
              From web applications, mobile apps to much complex bespoke
              software development like custom CRM tailored to a specific
              market.
            </p>
            <p className="text-lg">
              Some of our esteemed clients who are happily flaunting our core
              development in in their markets are:
            </p>
          </div>
        </div>
        <ProjectContainer />
      <div className='flex my-[2rem] justify-end'>
        <div className='flex space-x-8'>
          <h3 className='text-2xl'>View all projects</h3>
          <div className='w-[3rem] h-[3rem] flex justify-center items-center bg-black/60 rounded-full'>
            <img className='h-[1.5rem] w-[1.5rem]' src={plus}/>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Projects;
