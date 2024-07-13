import about_us from "./assets/about_us.png";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { FaBone } from "react-icons/fa6";

const AboutUs = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(SplitText);

    let split1 = new SplitText("#about-us-heading", {
      type: "chars, words, lines",
    });
    let split2 = new SplitText("#p1-content", { type: "chars, words, lines" });
    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#about-us-container",
        start: "top bottom",
        end: "top center",
        scrub: true,
      },
    });

    t1.from(split1.chars, {
      yPercent: 130,
      stagger: 0.02,
      ease: "back.out",
      duration: 1,
    }).from(split2.chars, {
      yPercent: 130,
      stagger: 0.02,
      ease: "back.out",
      duration: 1,
    });
  }, []);

  return (
    <div
      id="about-us-container"
      className="bg-slate-300 min-h-screen grid grid-rows-2
      md:grid-cols-2 md:grid-rows-1 "
    >
      <div id="p1-container" className="p-4 place-content-center ">
        <h1
          id="about-us-heading"
          className="overflow-hidden text-center text-4xl mb-4"
        >
          About Us
        </h1>
        <p
          id="p1-content"
          className="overflow-hidden text-wrap leading-relaxed md:leading-loose 
        text-justify text-xl md:text-2xl"
        >
          Welcome to{" "}
          <span className="inline-block font-bold">Foster Family Dog Care</span>
          , where our passion is dogs! We are Eric and Alicia Foster. With the
          help of our little daughter Lucy and our rescue dog Moose, we make up
          this small family business that is Foster Family Dog Care. We are a
          full-service dog and house sitting business. Our services are offered
          out of our home in Greece, NY. We welcome all sizes and breeds of
          Dogs!
        </p>
      </div>
      <div
        id="about-us-img-container"
        className="relative h-full w-full overflow-hidden "
      >
        <img
          src={about_us}
          data-speed="auto"
          alt="about us"
          id="about-us-img"
          className="object-none md:object-fill absolute top-0 left-0 w-full"
        />
      </div>
    </div>
  );
};

export default AboutUs;
