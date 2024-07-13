import landing_img from "./assets/landing_page.png";
import React, { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";

const Landing = () => {
  // Create refs for the elements you want to animate
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(SplitText);

    let split;
    let split2;
    let split3;
    let svgIcon;
    let animation = gsap.timeline({});
    split = new SplitText("#heading1", { type: "chars" });
    split2 = new SplitText("#paragraph1", {
      type: "chars",
      transformOrigin: "center center -100px",
      // Comment this out to see the backs of letters
      backfaceVisibility: "hidden",
    });
    split3 = new SplitText("#span1", { type: "chars" });
    svgIcon = document.getElementById("svg");

    animation.from(split.chars, {
      duration: 1,
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: 180,
      transformOrigin: "0% 50% -50",
      ease: "back",
      stagger: 0.02,
    });
    animation.from(svgIcon, {
      duration: 1,
      scale: 0,
      transformOrigin: "50% 50%",
      ease: "elastic",
    });

    animation.from(split2.chars, {
      duration: 0.7,
      rotationY: 360,
      transformPerspective: 800,
      transformOrigin: "50% 50%",
      opacity: 0,
      ease: "power3.inOut",
    });

    animation.to(split3.chars, {
      duration: 1,
      fontWeight: "bold",
      textDecoration: "underline",
      transformOrigin: "50% 50%",
      transformPerspective: 800,
      ease: "power3.in",
      stagger: 0.05,
    });
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
            <div
              id="svg-container"
              className="mt-2 md:mt-8 flex justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 576 512"
                id="svg"
                className="text-sky-800 fill-current place-self-center w-8 md:w-16 h-auto"
              >
                <path
                  id="dog"
                  d="M309.6 158.5L332.7 19.8C334.6 8.4 344.5 0 356.1 0c7.5 0 14.5 3.5 19 9.5L392 32h52.1c12.7 0 24.9 5.1 33.9 14.1L496 64h56c13.3 0 24 10.7 24 24v24c0 44.2-35.8 80-80 80H464 448 426.7l-5.1 30.5-112-64zM416 256.1L416 480c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V364.8c-24 12.3-51.2 19.2-80 19.2s-56-6.9-80-19.2V480c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V249.8c-28.8-10.9-51.4-35.3-59.2-66.5L1 167.8c-4.3-17.1 6.1-34.5 23.3-38.8s34.5 6.1 38.8 23.3l3.9 15.5C70.5 182 83.3 192 98 192h30 16H303.8L416 256.1zM464 80a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z"
                />
              </svg>
            </div>
          </h1>
        </div>
        <div id="wrapper2">
          <p
            ref={paragraphRef}
            id="paragraph1"
            className="text-center text-xl md:text-2xl font-bolder"
          >
            Where Every Dog Feels Like <span id="span1">Family</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
