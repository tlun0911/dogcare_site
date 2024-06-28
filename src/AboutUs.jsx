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

    gsap.to("#text1-container", {
      scrollTrigger: {
        trigger: "#text1-container",
        start: "top bottom", // Start the animation when the top of the trigger hits the bottom of the viewport
        end: "top center", // End the animation when the top of the trigger hits the top of the viewport
        scrub: true, // Smooth scrubbing, consider a small number for slight delay (e.g., 0.5)
      },
      scale: 1, // Target scale. Assuming the image starts larger, e.g., style={{transform: "scale(1.5)"}}
      ease: "none", // Use a linear ease for smooth scaling
     
      });

  }, []);

  return (
    <div className="flex flex-row max-h-screen bg-emerald-400">
      <div id="text1-container" className="flex flex-col justify-center items-center mx-auto w-2/3 scale-0 origin-top">
        <h2 className="text-3xl font-bold mb-2">About Us</h2>
        <p className="text-lg py-4 px-8">
          Welcome to Foster Family Dog Care, where our passion is dogs! We are
          Eric and Alicia Foster. With the help of our little daughter Lucy and
          our rescue dog Moose, we make up this small family business that is
          Foster Family Dog Care. We are a full-service dog and sitting
          business. Our services are offered out of our home in Greece, NY. We
          welcome all sizes and breeds of Dogs! <br />
          <br />
          We strive to make all our guests feel like family when they visit! We
          understand that separation anxiety can be a real issue for some pups,
          but when they stay here, we treat them like <strong className="text-xl">family</strong>. We make sure your
          pup gets all the same love and attention as they would get at their
          own home. To ensure the comfort of your dog and our home we schedule a
          Meet and Greet prior to booking. This ensures all dogs feel
          comfortable and get along. It allows them to get a sense of us and the
          environment. This builds a good foundation for their initial visit. We
          also try to only book one client at a time (more than one dog per
          family is welcome!!). Overlaps in pickup/drop offs can sometimes
          happen.
          <br />
          <br />
          During your dog’s stay you will receive plenty of updates and
          pictures. We know just how hard it is to leave behind a little family
          member and updates always help.
        </p>
      </div>
      <div id="image-container" className="overflow-hidden w-1/3">
        <img
          src={about_us}
          alt="about us"
          className="object-fill object-center scale-150"
        />
      </div>
    </div>
  );
};

export default AboutUs;
