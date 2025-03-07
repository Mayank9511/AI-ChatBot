import HeroSection from "./components/HeroSection";
import ContactUs from "./components/ContactUs";
import ChatBot from "./components/ChatBot";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <>
      <Analytics />
      <div className="max-w-7xl mx-auto pt-5 px-6">
        <ChatBot />
        <HeroSection />
        <ContactUs />
      </div>
    </>
  );
};

export default App;
