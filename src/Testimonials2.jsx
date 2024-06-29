import { useEffect } from "react";
import testimonials2 from "./assets/testimonial2.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Testimonials2 = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#testimage2-container img", {
      scrollTrigger: {
        trigger: "#testimage2-container",
        start: "top bottom", // Start the animation when the top of the trigger hits the bottom of the viewport
        end: "top top", // End the animation when the top of the trigger hits the top of the viewport
        scrub: true, // Smooth scrubbing, consider a small number for slight delay (e.g., 0.5)
      },
      scale: 1, // Target scale. Assuming the image starts larger, e.g., style={{transform: "scale(1.5)"}}
      ease: "none", // Use a linear ease for smooth scaling
    });

    gsap.to("#testimonial2", {
      scrollTrigger: {
        trigger: "#testimonial2",
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
      <div
        id="testimonial2"
        className="flex flex-col justify-center md:items-center mx-auto w-full md:w-1/2 scale-0 origin-top"
      >
        <p className="md:text-lg py-4 px-1 mt-16 md:mt-0 text-center md:text-start md:px-8">
          “Last week we got married and honestly
          one of the most stressful parts was leaving our dog chocolate for one
          full day and night. All of our family was at the wedding so we could
          not leave him where he feels most comfortable. <br />I found Foster
          Family Dog Care through a mutual friend's Facebook post and decided to
          reach out which led to a meet and greet which led to finding the
          <strong> ABSOLUTE BEST</strong> dog sitters in the world. As much as I
          would like to keep them to myself I want everyone to know about how
          amazing they are. They have a beautiful home and fully fenced in large
          backyard, I did not have to crate chocolate and they even had a buddy
          for him to play and feel at home with. He absolutely loved it there
          and I felt so much better knowing he was in good hands! <br />
          Thank you so much Foster family!! The pictures you sent on my wedding
          day made me so happy!! If you are looking for dog care please reach
          out to them they are super affordable and incredibly
          <strong> kind</strong> and <strong>compassionate</strong>. I will be
          using them in the future because chocolate loved it there so much!!!!”
        </p>
        <div className="place-self-end text-xl mr-24 mb-4 md:md-0">
            <strong>- Hayley P.</strong>
          </div>
      </div>
      <div id="testimage2-container" className="overflow-hidden md:w-1/2 order-last md:order-0">
        <img
          src={testimonials2}
          alt="testimonials2"
          className="object-contain object-center scale-150"
        />
      </div>
    </div>
  );
};

export default Testimonials2;
