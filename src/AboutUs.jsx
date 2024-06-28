import about_us from "./assets/about_us.png";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const AboutUs = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#image-container img", {
      scrollTrigger: {
        trigger: "#image-container",
        start: "top bottom", // Start the animation when the top of the trigger hits the bottom of the viewport
        end: "top top", // End the animation when the top of the trigger hits the top of the viewport
        scrub: true, // Smooth scrubbing, consider a small number for slight delay (e.g., 0.5)
      },
      scale: 1, // Target scale. Assuming the image starts larger, e.g., style={{transform: "scale(1.5)"}}
      ease: "none", // Use a linear ease for smooth scaling
    });
  }, []);

  return (
    <div className="flex flex-row max-h-screen bg-emerald-500">
      <div className="flex flex-col justify-center items-center mx-auto">
        About Us
      </div>
      <div id="image-container" className="overflow-hidden w-1/2">
        <img
          src={about_us}
          alt="about us"
          className="object-none object-center scale-150"
        />
      </div>
    </div>
  );
};

export default AboutUs;
