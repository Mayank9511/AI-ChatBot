import image from "/image.png";

const HeroSection = () => {
  const handleScroll = () => {
    event.preventDefault();
    const section = document.getElementById("contactUsSection");
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide mt-4">
        AI
        <span className="bg-gradient-to-r from-blue-200 to-blue-600 text-transparent bg-clip-text">
          {" "}
          ChatBot 👾
        </span>
      </h1>
      <div className="flex flex-col justify-between mt-3 md:flex-row gap-5 w-full p-10 md:p-20">
        <div className="w-full pt-5 md:w-1/2">
          <p className="mt-2 text-lg text-left text-neutral-500 max-w-4xl">
            This website showcases an AI-powered chatbot designed to answer
            common questions about you, your product, your company, or the
            services you offer. By automating responses to FAQs and basic user
            inquiries, it helps reduce the need for human intervention.
            <br />
            <br />
            <div className=" text-blue-500">
              The chatbot used in this website brings a touch of humor to
              conversations. It can also share some details about me if you ask!
            </div>
            <br />
            <div>
              Contact us, if you want to integrate this type of ChatBot in you
              website or application for <b>FREE</b>.
            </div>
            <div className="flex justify-center mt-6">
              <button
                href="#"
                className="bg-gradient-to-r from-blue-400 to-blue-600 py-3 px-4 mx-3 my-3 rounded-md text-white"
                onClick={handleScroll}
              >
                Start for free
              </button>
            </div>
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center md:mt-0 mt-5">
          <img src={image} className="md:max-w-[70%]" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
