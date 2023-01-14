const Services = () => {
  return (
    <section className="w-11/12 border border-transparent py-8 border-t-black mx-auto my-[5rem] items-center px-4 flex flex-col md:flex-row">
      <div className="flex flex-col md:flex-row-reverse">
        <div className="w-full flex justify-start text-xl md:justify-end md:w-1/2">
          Our Services
        </div>
        <div className="w-full space-y-6 md:w-1/2">
          <h2 className="text-4xl">
            Webisoft, a technology partner with a knowledge based approach to
            building the future.
          </h2>
          <p className="text-lg">
            We are a full-service product development agency from branding to
            programming. Design, web applications and mobile applications are
            our tools reach new audience and build long lasting products. Let's
            work together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
