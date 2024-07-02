import footer_img from "./assets/footer.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);


  }, []);

  return (
    <div className="flex flex-row justify-center items-center bg-orange-300 h-1/2">
      <div
        id="text6-container"
        className="leading-relaxed flex flex-col justify-center items-center mx-auto origin-top"
      >
        <h2 className="text-4xl font-bold mb-4">Alicia Foster</h2>
        <h2 className="text-2xl font-bold mb-4">Owner</h2>
        <div className="mb-12">
          <SocialIcon
            url="https://www.facebook.com/fosterfamilydogcare"
            className="border border-white rounded-full hover:ring-2 hover:ring-white hover:scale-125"
            target="_blank"
            fgColor="#fff"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
