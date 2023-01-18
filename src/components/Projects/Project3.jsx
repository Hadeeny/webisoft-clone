import arrow from "../../assets/arrowproject.svg";

import project3 from "../../assets/project3.png";
const Project3 = () => {
  return (
    <div
      className="w-full p-6 md:p-0 mb-[5rem] justify-between flex flex-col-reverse items-center 
      md:flex-row rounded-2xl bg-[#1E1F23]"
    >
      <div className="w-full md:w-1/2">
        <div>
          <img src={project3} />
        </div>
      </div>
      <div className="w-full px-8 flex flex-col h-[18rem] md:h-[15rem] text-white justify-between md:w-1/2">
        <h3 className="text-xl md:text-2xl">
          Buy a choreography for the season, or for any reason
        </h3>
        <p className="text-md md:text-lg">
          Choreography Online is an online platform that sells performance
          rights for dance choreography on behalf of choreographers all over the
          world.
        </p>
        <div className="text-lg space-x-4 flex justify-end">
          <a>View this project</a>
          <div className="w-[2rem] h-[2rem]">
            <img className="w-full h-full" src={arrow} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project3;
