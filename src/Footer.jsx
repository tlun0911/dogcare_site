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

    </div>
  );
};

export default Footer;
