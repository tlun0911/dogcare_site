import landing_img from "./assets/landing_page.png";
import React, { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { FaDog } from "react-icons/fa6";

const Landing = () => {
  // Create refs for the elements you want to animate
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(SplitText);
    let split;
    let animation = gsap.timeline({});
    split = new SplitText("#heading1", { type: "chars" });

    animation.from(split.chars, {
      opacity: 0,
      y: 50,
      ease: "back(4)",
      stagger: {
        from: "edges", //try "center" and "edges"
        each: 0.05,
      },
    });

    gsap.fromTo(
      "#paragraph1",
      {
        y: 150,
        duration: 2,
        ease: "power1.in",
      },
      {
        y: 0,
        duration: 2,
        ease: "power1.out",
        onComplete: () => {
          gsap.set("#span1", { fontWeight: 700, fontSize: "2 em" });
        },
      }
    );
  }, []);

  return (
    <div className="flex flex-col md:flex-row max-h-full justify-center items-center">
      <div className="overflow-hidden md:w-1/2 h-auto md:h-screen">
        <img
          src={landing_img}
          alt="landing"
          className="object-contain md:object-none object-center h-auto md:h-screen w-full "
        />
      </div>
      <div className="flex flex-col h-1/2 md:h-full mx-auto">
        <div id="wrapper">
          <h1
            ref={headingRef}
            id="heading1"
            className="md:leading-relaxed text-2xl md:text-5xl mb-4 md:mb-14 font-bold text-center tracking-wide"
          >
            Foster Family <br />
            Dog Care <br />
            <FaDog className="inline-block text-3xl md:text-5xl" />
          </h1>
        </div>
        <div id="wrapper2">
          <p
            ref={paragraphRef}
            id="paragraph1"
            className="text-center text-xl font-bolder"
          >
            Where Every Dog Feels Like <span id="span1">Family</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
