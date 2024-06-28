import { useEffect } from "react";
import rates from "./assets/rates.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Rates = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#image4-container img", {
      scrollTrigger: {
        trigger: "#image4-container",
        start: "top bottom", // Start the animation when the top of the trigger hits the bottom of the viewport
        end: "top top", // End the animation when the top of the trigger hits the top of the viewport
        scrub: true, // Smooth scrubbing, consider a small number for slight delay (e.g., 0.5)
      },
      scale: 1, // Target scale. Assuming the image starts larger, e.g., style={{transform: "scale(1.5)"}}
      ease: "none", // Use a linear ease for smooth scaling
    });
  }, []);

  return (
    <div className="flex flex-row max-h-screen bg-cyan-400">
      <div className="flex flex-col justify-center items-center mx-auto">
        Rates
      </div>
      <div id="image4-container" className="overflow-hidden w-1/2">
        <img
          src={rates}
          alt="rates"
          className="object-cover object-center scale-150"
        />
      </div>
    </div>
  );
};

export default Rates;
