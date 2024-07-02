import gsap from "gsap";
import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
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
  useGSAP(() => {
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

    const wrapper = document.querySelector("#testimonials-wrapper");
    const totalWidth = wrapper.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollDistance = totalWidth - viewportWidth; // This might need adjustment based on your layout

    if (window.innerWidth > 768) {
      gsap.to(wrapper, {
        x: () => `-${scrollDistance}px`, // Ensure this is a negative value to scroll left
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          endTrigger: "#test-three", // Assuming the ID of the last section is 'test-last'
          end: scrollDistance, // Adjust this based on when you want the scroll to stop
          scrub: true,
          pin: true,
        },
      });
    }

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
      <div
        id="testimonials-wrapper"
        style={{ minWidth: "300vw" }}
        className="min-h-screen flex flex-col md:flex-nowrap md:flex-row content-center overflow-x-hidden"
      >
        <section id="test-one" className="w-screen">
          <Testimonials />
        </section>
        <section id="test-two" className="w-screen">
          <Testimonials2 />
        </section>
        <section id="test-three" className="w-screen">
          <Testimonials3 />
        </section>
      </div>
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
