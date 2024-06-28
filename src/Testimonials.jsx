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

    gsap.to("#testimonial1", {
      scrollTrigger: {
        trigger: "#testimonial1",
        start: "top bottom", // Start the animation when the top of the trigger hits the bottom of the viewport
        end: "top top", // End the animation when the top of the trigger hits the top of the viewport
        scrub: true, // Smooth scrubbing, consider a small number for slight delay (e.g., 0.5)
      },
      scale: 1, // Target scale. Assuming the image starts larger, e.g., style={{transform: "scale(1.5)"}}
      ease: "none", // Use a linear ease for smooth scaling
    });
  }, []);

  return (
    <div className="flex flex-row max-h-screen bg-pink-300 ">
      <div id="image2-container" className="overflow-hidden w-1/2">
        <img
          src={testimonials}
          alt="testimonials"
          className="object-contain object-center scale-150"
        />
      </div>
      <div
        id="testimonial1"
        className="flex flex-col justify-center items-center mx-auto w-1/2 scale-0 origin-top"
      >
        <h2 className="justify-self-start text-3xl font-bold mb-8">
          What Our Clients Say -{" "}
        </h2>
        <p className="text-xl px-8">
          <strong>Kenzie A. - </strong>“Lucky had the best two nights with the
          Foster family and Moose. Would recommend to anyone looking for a
          loving home for their fur baby while you're away or busy. You can rest
          assured that they are being well cared for and having fun running
          around the fenced in backyard. If you weren't sure, the pictures and
          text message updates will certainly help!”
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
