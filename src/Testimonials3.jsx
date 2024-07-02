import { useGSAP } from "@gsap/react";
import testimonials3 from "./assets/testimonials3.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Testimonials3 = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#testimage3-container img", {
      scrollTrigger: {
        trigger: "#testimage3-container",
        start: "top bottom", // Start the animation when the top of the trigger hits the bottom of the viewport
        end: "top top", // End the animation when the top of the trigger hits the top of the viewport
        scrub: true, // Smooth scrubbing, consider a small number for slight delay (e.g., 0.5)
      },
      scale: 1, // Target scale. Assuming the image starts larger, e.g., style={{transform: "scale(1.5)"}}
      ease: "none", // Use a linear ease for smooth scaling
    });

    gsap.to("#testimonial3", {
      scrollTrigger: {
        trigger: "#testimonial3",
        start: "top bottom", // Start the animation when the top of the trigger hits the bottom of the viewport
        end: "top top", // End the animation when the top of the trigger hits the top of the viewport
        scrub: true, // Smooth scrubbing, consider a small number for slight delay (e.g., 0.5)
      },
      scale: 1, // Target scale. Assuming the image starts larger, e.g., style={{transform: "scale(1.5)"}}
      ease: "none", // Use a linear ease for smooth scaling
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row md:max-h-screen bg-pink-300 ">
      <div id="testimage3-container" className="overflow-hidden md:w-1/2 order-last md:order-first">
        <img
          src={testimonials3}
          alt="testimonials3"
          className="object-cover object-center scale-150 min-h-screen"
        />
      </div>
      <div
        id="testimonial3"
        className="flex flex-col justify-center md:items-center mx-auto w-full md:w-1/2 scale-0 origin-top"
      >
        <p className="md:text-base mt-16 md:mt-0 py-4 px-1 text-center md:text-start md:px-8">
          “The Fosters took <strong>amazing</strong>{" "}
          care of our baby, Peanut when we were away for a few days. Peanut had
          a lot of fun playing with Moose. They kept us updated daily on how
          Peanut was doing and super accommodating with her diet and daily
          routines. They also have a nice fenced in backyard for the dogs to
          play outside when the weather is nice. I would{" "}
          <strong>highly recommend</strong> the Fosters!”
        </p>
        <div className="place-self-end text-xl mr-24 mb-4 md:md-0">
            <strong>- Lihn C.</strong>
          </div>
      </div>
    </div>
  );
};

export default Testimonials3;
