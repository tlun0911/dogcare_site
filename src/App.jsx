import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Landing from "./Landing";
import AboutUs from "./AboutUs";
import Testimonials from "./Testimonials";
import Rates from "./Rates";
import Contact from "./Contact";
import Footer from "./Footer";
import Testimonials2 from "./Testimonials2";
import Testimonials3 from "./Testimonials3";

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
    gsap.to("#testimonials2", {
      y: -100, // Adjust the movement speed and direction
      scrollTrigger: {
        trigger: "#testimonials2",
        start: "top top", // When the top of the trigger hits the center of the viewport
        end: "bottom top", // When the bottom of the trigger hits the top of the viewport
        scrub: true, // Smooth scrubbing, true for 0.1 seconds of lag
      },
    });
    gsap.to("#testimonials3", {
      y: -100, // Adjust the movement speed and direction
      scrollTrigger: {
        trigger: "#testimonials3",
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
    <div className="font-poppins bg-zinc-400 text-sky-800 overflow-x-hidden">
      <section id="landing" className="min-h-screen">
        <Landing />
      </section>
      <section id="about" className="min-h-screen">
        <AboutUs />
      </section>
      <section id="testimonials" className="min-h-screen">
        <Testimonials />
      </section>
      <section id="testimonials2" className="min-h-screen">
        <Testimonials2 />
      </section>
      <section id="testimonials3" className="min-h-screen">
        <Testimonials3 />
      </section>
      <section id="rates" className="min-h-screen">
        <Rates />
      </section>
      <section id="contact" className="min-h-screen">
        <Contact />
      </section>
      <footer id="footer" className="h-1/2">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
