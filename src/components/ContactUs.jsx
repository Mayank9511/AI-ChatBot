import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ContactUs = () => {
  return (
    <div
      id="contactUsSection"
      className="flex flex-col justify-between min-h-screen"
    >
      <div className="flex flex-col justify-between md:flex-row gap-5 w-full p-10 md:p-20">
        <div className="w-full pt-20 md:w-1/2">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            Contact
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
              {" "}
              Us
            </span>
          </h1>
        </div>
        <div className="ml-20 w-full md:w-1/3">
          <div className="flex-row mt-10 md:mt-20">
            <a
              className=" text-lg md:text-xl font-light py-5"
              href="mailto:gupta.mayank.mg02@gmail.com"
            >
              <EmailIcon
                className="text-blue-600"
                style={{ height: "35px", width: "35px", marginRight: "15px" }}
              />
              Gmail
              {/* <div className="text-base pl-2 ">gupta.mayank.mg02@gmail.com</div> */}
            </a>
            <a
              className="block text-lg md:text-xl font-light pt-6"
              href="https://www.linkedin.com/in/mayank-gupta-aa1028208/"
            >
              <LinkedInIcon
                className="text-blue-600"
                style={{ height: "35px", width: "35px", marginRight: "15px" }}
              />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className=" flex-row p-10 md:p-20 mt-auto">
        <p className="mt-10 text-lg text-center text-neutral-500">
          I’m happy to offer customized "AI ChatBot" to anyone who needs it.
          I'm eager to hear your thoughts. Your feedback will be invaluable in
          helping me improve it further. You can send me an email or connect on
          LinkedIn. If this project excites you enough and you would like to
          contribute, please reach out, and we will work together to scale it.
        </p>
        <p className="mt-10 text-lg text-center text-neutral-500">
          With Love, MAYANK GUPTA 💙
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
