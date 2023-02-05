import telegram from "../assets/telegram.svg";
import whatsapp from "../assets/whatsapp.svg";

const Contact = () => {
  return (
    <section className="w-11/12 border-t border-black py-[4rem]  mx-auto my-[5rem] items-center">
      <div className="w-full flex flex-col gap-y-4 md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2 flex gap-y-4 flex-col">
          <h3 className="text-[2rem] font-semibold">
            Ready to turn your idea into reality?
          </h3>
          <p className="text-lg max-w-md">
            Get in touch with our expert tech consultants to vet your
            idea/project in depth.
          </p>
          {/* <br/> */}
          <p className="text-lg max-w-md">
            Let's brainstorm on potential solutions with a precise estimate and
            then you decide if we're a match.
          </p>
          <div className="hidden md:flex my-4 space-x-4">
            <div>
              <img className="w-[3rem] h-[3rem]" src={telegram} />
            </div>
            <div>
              <img className="w-[3rem] h-[3rem]" src={whatsapp} />
            </div>
          </div>
          <p className="hidden md:block text-lg">
            (514) 874-3224
            <br />
            info@webisoft.com
          </p>
          <p className="text-lg hidden md:block">
            (514) 874-3224
            <br />
            info@webisoft.com
          </p>
        </div>
        <form className="w-full gap-y-8 md:w-1/2 flex flex-col">
          <input
            className="outline-none border-b border-black py-2"
            placeholder="Your First Name"
          />
          <input
            className="outline-none border-b border-black py-2"
            placeholder="Your Last Name"
          />
          <input
            className="outline-none border-b border-black py-2"
            placeholder="Phone Number"
          />
          <input
            className="outline-none border-b border-black py-2"
            placeholder="Email"
          />
          <textarea
            placeholder="tell us about your company and its needs"
            className="outline-none p-2 h-[15rem] border border-black"
          >
            {/* Tell us about your company and its needs */}
          </textarea>
          <div className="flex md:hidden my-4 space-x-4">
            <div>
              <img className="w-[3rem] h-[3rem]" src={telegram} />
            </div>
            <div>
              <img className="w-[3rem] h-[3rem]" src={whatsapp} />
            </div>
          </div>
          <p className="block md:hidden text-lg">
            (514) 874-3224
            <br />
            info@webisoft.com
          </p>
          <p className="text-lg block md:hidden">
            (514) 874-3224
            <br />
            info@webisoft.com
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
