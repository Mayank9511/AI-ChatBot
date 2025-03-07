import HeroSection from "./components/HeroSection";
import ContactUs from "./components/ContactUs";
import ChatBot from "./components/ChatBot";

const App = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto pt-5 px-6">
        <ChatBot/>
        <HeroSection />
        <ContactUs />
      </div>
    </>
  );
};

export default App;
