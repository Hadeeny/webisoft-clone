import ProjectContainer from "./ProjectContainer";

const Projects = () => {
  return (
    <section className="w-full py-[6rem] bg-gray-200  my-[5rem] ">
      <div className=" w-11/12 border border-transparent pt-[6rem] items-center px-4 border-t-black mx-auto">
        <div className="flex flex-col md:flex-row-reverse">
          <div className="w-full flex justify-start text-xl md:justify-end md:w-1/3">
            Our Projects
          </div>
          <div className="w-full space-y-6 md:w-2/3">
            <h2 className="text-4xl">
              We've built some incredible things with people like you!
            </h2>
            <p className="text-lg">
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
      </div>
    </section>
  );
};

export default Projects;
