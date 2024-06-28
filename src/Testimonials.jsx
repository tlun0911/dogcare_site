import { useEffect } from "react";
import testimonials from "./assets/testimonials.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Testimonials = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#image2-container img", {
      scrollTrigger: {
        trigger: "#image2-container",
        start: "top bottom", // Start the animation when the top of the trigger hits the bottom of the viewport
        end: "top top", // End the animation when the top of the trigger hits the top of the viewport
        scrub: true, // Smooth scrubbing, consider a small number for slight delay (e.g., 0.5)
      },
      scale: 1, // Target scale. Assuming the image starts larger, e.g., style={{transform: "scale(1.5)"}}
      ease: "none", // Use a linear ease for smooth scaling
    });
  }, []);

  return (
    <div className="flex flex-row max-h-screen bg-pink-300">
      <div id="image2-container" className="overflow-hidden w-1/2">
        <img
          src={testimonials}
          alt="testimonials"
          className="object-cover object-center scale-150"
        />
      </div>
      <div className="flex flex-col justify-center items-center mx-auto">
        Testimonials
      </div>
    </div>
  );
};

export default Testimonials;
