import arrow from "../../assets/arrowproject.svg";

import project2 from "../../assets/project2.png";
const Project2 = () => {
    return (
        <div
        className="w-full p-6 md:p-0 mb-[5rem] justify-between flex flex-col-reverse items-center 
      md:flex-row rounded-2xl bg-[#291F53]"
      >
        <div className="w-full md:w-1/2">
          <div>
            <img src={project2} />
          </div>
        </div>
        <div className="w-full px-8 flex flex-col h-[18rem] md:h-[15rem] text-white justify-between md:w-1/2">
          <h3 className="text-xl md:text-2xl">
          Know the future: Accurate business & financial forecasting, at scale.
          </h3>
          <p className="text-md md:text-lg">
          Maxa AI is ERP financial intelligence using powerful AI analytics.
          </p>
          <div className="text-lg space-x-4 flex justify-end">
          <a>View this project</a>
          <div className="w-[2rem] h-[2rem]">
            <img className="w-full h-full" src={arrow} />
          </div>
        </div>
        </div>
      </div>
    )
}

export default Project2
