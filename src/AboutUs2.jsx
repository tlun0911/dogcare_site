import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import about_us_2 from "./assets/landing_page.png";

const AboutUs2 = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(SplitText);
  }, []);
  return (
    <div
      id="about-us-container2"
      className="bg-rose-400 relative grid grid-rows-2
      md:grid-cols-2 md:grid-rows-1 h-screen"
    >
      <div
        id="about-us-img2-container"
        className="relative h-full overflow-hidden order-last md:order-first "
      >
        <img
          id="about-us-img2"
          src={about_us_2}
          alt="About Us 2"
          data-speed="auto"
          className="absolute top-0 left-0 h-[115%] w-full"
        />
      </div>
      <div id="p2-container" className="px-4 place-content-center my-4 md:my-8 ">
        <p
          id="p2-content"
          className="overflow-hidden text-wrap leading-relaxed md:leading-loose 
          text-justify text-xl md:text-2xl"
        >
          We strive to make all our guests feel like family when they visit! We
          understand that separation anxiety can be a real issue for some pups,
          but when they stay here, we treat them like <span className="inline-block font-bold">family.</span>
          {"  "}We make sure your pup gets all the same love and attention as they
          would get at their own home.        
        </p>
      </div>
    </div>
  );
};

export default AboutUs2;
