import heroImg from "../assets/img1.jpg";
const Hero = () => {
  return (
    <section className="w-[98%] md:w-11/12 mx-auto h-screen justify-center items-center px-4 flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 space-y-8">
        <h3 className="text-3xl md:text-5xl">
          We design and develop{" "}
          <span className="text-blue-500">innovative products</span> for
          businesses and startups.
        </h3>
        <p className="max-w-lg text-md md:text-lg">
          Webisoft is digital transformation and product development consulting
          firm with core expertise in blockchain and SaaS and software
          development.
        </p>
        <button className="bg-blue-600 md:w-1/3 w-full py-4 herobutton text-white">
          Start Now
        </button>
      </div>
      <div className="hidden md:block w-1/2">
        <img src={heroImg} />
      </div>
    </section>
  );
};

export default Hero;
