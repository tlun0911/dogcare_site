import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Landing from "./Landing";
import AboutUs from "./AboutUs";
import Testomonials from "./Testimonials";
import Rates from "./Rates";
import Contact from "./Contact";

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Parallax effect for the Landing section
    gsap.to("#landing", {
      y: -100, // Adjust the movement speed and direction
      scrollTrigger: {
        trigger: "#landing",
        start: "top top", // When the top of the trigger hits the top of the viewport
        end: "bottom top", // When the bottom of the trigger hits the top of the viewport
        scrub: true, // Smooth scrubbing, true for 0.1 seconds of lag
      },
    });

    // Parallax effect for the About section
    gsap.to("#about", {
      y: -100, // Adjust the movement speed and direction
      scrollTrigger: {
        trigger: "#about",
        start: "top top", // When the top of the trigger hits the center of the viewport
        end: "bottom top", // When the bottom of the trigger hits the top of the viewport
        scrub: true, // Smooth scrubbing, true for 0.1 seconds of lag
      },
    });

    gsap.to("#testimonials", {
      y: -100, // Adjust the movement speed and direction
      scrollTrigger: {
        trigger: "#testimonials",
        start: "top top", // When the top of the trigger hits the center of the viewport
        end: "bottom top", // When the bottom of the trigger hits the top of the viewport
        scrub: true, // Smooth scrubbing, true for 0.1 seconds of lag
      },
    });

    gsap.to("#rates", {
      y: -100, // Adjust the movement speed and direction
      scrollTrigger: {
        trigger: "#rates",
        start: "top top", // When the top of the trigger hits the center of the viewport
        end: "bottom top", // When the bottom of the trigger hits the top of the viewport
        scrub: true, // Smooth scrubbing, true for 0.1 seconds of lag
      },
    });

    gsap.to("#contact", {
      y: -100, // Adjust the movement speed and direction
      scrollTrigger: {
        trigger: "#contact",
        start: "top top", // When the top of the trigger hits the center of the viewport
        end: "bottom top", // When the bottom of the trigger hits the top of the viewport
        scrub: true, // Smooth scrubbing, true for 0.1 seconds of lag
      },
    });

  }, []);

  return (
    <div className="font-poppins bg-zinc-400 text-sky-800">
      <section id="landing" className="max-h-screen">
        <Landing />
      </section>
      <section id="about" className="max-h-screen">
        <AboutUs />
      </section>
      <section id="testimonials" className="max-h-screen">
        <Testomonials />
      </section>
      <section id="rates" className="max-h-screen">
        <Rates />
      </section>
      <section id="contact" className="max-h-screen">
        <Contact />
      </section>
    </div>
  );
}

export default App;
