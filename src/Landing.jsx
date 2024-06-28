import landing_img from "./assets/landing_page.png";
import React, { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaDog } from "react-icons/fa6";

const Landing = () => {
  // Create refs for the elements you want to animate
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      "#heading1",
      {
        y: -150,
        duration: 2,
        ease: "power1.in",
      },
      {
        y: 0,
        duration: 2,
        ease: "power1.out",
      }
    );
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
    <div className="flex flex-row max-h-screen">
      <div className="overflow-hidden  w-1/2">
        <img
          src={landing_img}
          alt="landing"
          className="object-none object-center"
        />
      </div>
      <div className="flex flex-col justify-center items-center mx-auto">
        <h1
          ref={headingRef}
          id="heading1"
          className="leading-relaxed text-6xl mb-14 font-bold text-center tracking-wide"
        >
          Foster Family <br />
          Dog Care <br/>
          <FaDog className="inline-block text-6xl" />
        </h1>
        <p ref={paragraphRef} id="paragraph1" className="text-3xl font-bolder">
          Where Every Dog Feels Like <span id="span1">Family</span>
        </p>
      </div>
    </div>
  );
};

export default Landing;
