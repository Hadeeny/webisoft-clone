import React from "react";
import phone from "../assets/dark-iphones.png";
const About = () => {
  return (
    <section className="w-full bg-[#1e1e1e] text-white mt-8 items-center p-8 flex flex-col md:flex-row">
      <div className="hidden md:block b md:w-1/2">
        <div className="w-full flex justify-center h-full">
          <img
            className="w-1/2 h-1/2 object-cover"
            src={phone}
            alt="dark iphone"
          />
        </div>
      </div>
      <div className="w-full text-lg space-y-6 md:w-1/2">
        <p>About Webisoft</p>
        <h2 className="text-4xl">
          Digital transformation and product developement company based in
          Montreal
        </h2>
        <p>
          Webisoft was built with the intent of providing your organization with
          a complete tool set of product developement solutions. Leveraging the
          latest technologies and ecosystems available in today's fast moving
          market. For our entreprises and startup customers we build complete
          new ventures and technological based on acquisition channels.
        </p>

        <p>
          We automate your business, connect your systems and assemble tools for
          you and your team so you can focus on the problems that matter the
          most.
        </p>

        <p>
          Because an elegant solution doesn't mean a succesfull business, our
          advice goes beyond technological strategy, cover marketing, business
          models and much more.
        </p>

        <p>
          All built with your culture and the resources at your disposal in
          mind.
        </p>
      </div>
    </section>
  );
};

export default About;
