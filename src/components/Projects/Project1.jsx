import project1 from "../../assets/project1.png";
const Project1 = () => {
  return (
    <div
      className="w-full p-6 md:p-0 mb-[5rem] justify-between flex flex-col-reverse items-center 
    md:flex-row rounded-2xl bg-blue-400"
    >
      <div className="w-full md:w-1/2">
        <div>
          <img src={project1} />
        </div>
      </div>
      <div className="w-full flex flex-col h-[18rem] md:h-[15rem] text-white justify-between md:w-1/2">
        <h3 className="text-xl md:text-2xl">
          A revolutionary NFT avatar project inspired by popular culture.
        </h3>
        <p className="text-md md:text-lg">
          Styllar is an NFT marketplace built upon the Terra blockchain platform
          for NFT avatars. The overall design, functionality, and usability are
          so optimized that Styllar got nominated for the “Website of the day”
          on Awwwards.
        </p>
        <div className="text-lg">View this project</div>
      </div>
    </div>
  );
};

export default Project1;
