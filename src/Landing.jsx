import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import gsap from "gsap";
import DogVideo from "./assets/dog_background.mp4";

const Landing = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(SplitText);
    gsap.registerPlugin(TextPlugin);

    let t1 = gsap.timeline();
    let master = gsap.timeline({});
    let split = new SplitText("#landing-h1", { type: "chars, words" });
    let split2 = new SplitText("#landing-h2", { type: "chars, words" });
    let split3 = new SplitText("#heading-span1", { type: "chars, words" });

    function start() {
      let t1 = gsap.timeline({});
      t1.from(split.chars, {
        delay: 0.5,
        x: -100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.02,
      });
      return t1;
    }

    function middle() {
      let t1 = gsap.timeline({});
      t1.from(split2.chars, {
        x: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.02,
      });
      return t1;
    }

    function end() {
      let t1 = gsap.timeline({});
      t1.to(split3.chars, {
        duration: 0.75,
        rotationY: 360,
        ease: "bounce.out",
        stagger: 0.05,
      }).set(split3.chars, {
        color: "#DC2626",
        fontWeight: "bold",
        duration: 0.5,
        stagger: 0.05,
      }, "-=0.5");
      return t1;
    }

    master.add(start()).add(middle()).add(end());
  }, []);

  return (
    <div id="landing-page" className="relative h-screen">
      <video
        autoPlay
        muted
        loop
        playsInline
        id="dog-video"
        className="fixed -z-10 inset-0 h-screen w-auto md:w-screen object-cover lg:object-fill brightness-75"
      >
        <source src={DogVideo} type="video/mp4" />
      </video>
      <div className="flex flex-col justify-around items-center h-full my-auto ">
        <h1
          id="landing-h1"
          className="text-6xl lg:text-8xl text-gray-200 font-semibold text-center"
        >
          Foster Family Dog Care
        </h1>
        <h2
          id="landing-h2"
          className="text-4xl md:text-7xl text-gray-200 font-semibold text-center"
        >
          Where every dog is{" "}
          <span id="heading-span1" className="inline">
            family
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Landing;
