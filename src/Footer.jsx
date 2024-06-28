import footer_img from "./assets/footer.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#text6-container", {
      scrollTrigger: {
        trigger: "#text6-container",
        start: "top bottom", // Start the animation when the top of the trigger hits the bottom of the viewport
        end: "top top", // End the animation when the top of the trigger hits the top of the viewport
        scrub: true, // Smooth scrubbing, consider a small number for slight delay (e.g., 0.5)
      },
      scale: 1, // Target scale. Assuming the image starts larger, e.g., style={{transform: "scale(1.5)"}}
      ease: "none", // Use a linear ease for smooth scaling
    });
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
