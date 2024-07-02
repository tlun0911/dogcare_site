import { useEffect } from "react";
import testimonials from "./assets/testimonials.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

const Testimonials = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrambleTextPlugin);

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

    gsap.to("#testimonial1", { duration: 1, scrambleText: "THIS IS NEW TEXT" });
  }, []);

  return (
    <div className="flex flex-col md:flex-row md:max-h-screen bg-pink-300 ">
      <div
        id="image2-container"
        className="overflow-hidden md:w-1/2 order-last md:order-first"
      >
        <img
          src={testimonials}
          alt="testimonials"
          className="object-scale-down md:object-cover object-center scale-150 md:min-h-screen"
        />
      </div>
      <div
        id="testimonial1"
        className="flex flex-col justify-center md:items-center mx-auto w-full md:w-1/2 origin-top"
      >
        <h2 className="justify-self-start text-center text-2xl md:text-3xl font-bold mt-16 md:mt-0 mb-8">
          What Our Clients Say -{" "}
        </h2>
        <p className="md:text-base py-4 px-1 text-center md:text-start md:px-8">
          “Lucky had the best two nights with the Foster family and Moose. Would{" "}
          <strong>recommend</strong> to anyone looking for a loving home for
          their fur baby while you're away or busy. You can rest assured that
          they are being <strong>well cared for</strong> and{" "}
          <strong>having fun</strong> running around the fenced in backyard. If
          you weren't sure, the pictures and text message updates will certainly
          help!”
          <br />
          <br />
        </p>
        <div className="place-self-end text-xl mr-24 mb-4 md:md-0">
          <strong>- Kenzie A.</strong>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
