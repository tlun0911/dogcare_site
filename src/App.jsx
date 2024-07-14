import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Landing from "./Landing";
import AboutUs from "./AboutUs";
import AboutUs2 from "./AboutUs2";
import AboutUs3 from "./AboutUs3";
import Testimonials from "./Testimonials";
import Rates from "./Rates";
import Contact from "./Contact";
import Footer from "./Footer";
import Testimonials2 from "./Testimonials2";
import Testimonials3 from "./Testimonials3";

function App() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    gsap.registerPlugin(SplitText);

    const smoother = ScrollSmoother.create({
      content: "#smooth-content",
      wrapper: "#smooth-wrapper",
      effects: true,
      speed: 0.75,
      normalizeScroll: true,
      smooth: 1,
    });

    // Target all <p> tags
    document.querySelectorAll("p").forEach((p) => {
      // Split the text of each <p> tag into lines
      const split = new SplitText(p, { type: "lines" });

      // Animate each line
      split.lines.forEach((line) => {
        gsap.from(line, {
          scrollTrigger: {
            trigger: line,
            start: "top bottom", // Start the animation when the top of the line hits the bottom of the viewport
            end: "+=200", // End after 100 pixels of scrolling
            scrub: true, // Smooth scrubbing
            toggleActions: "play none none reverse",

          },
          y: 30, // Start 30 pixels below its final position
          opacity: 0,
          duration: 0.8,
          ease: "power1.out",
        });
      });
    });

    

    // smoother.effects("img", { speed: "auto" });
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <div className="relative overflow-x-hidden">
          <section id="landing" className="relative max-h-screen w-screen">
            <Landing />
          </section>
          <section id="about" className="relative min-h-screen">
            <AboutUs />
          </section>
          <section id="about2" className="relative min-h-screen">
            <AboutUs2 />
          </section>
          <section id="about3" className="relative min-h-screen">
            <AboutUs3 />
          </section>
          <section id="test-one" className="min-h-screen">
            <Testimonials />
          </section>
          <section id="test-two" className="min-h-screen">
            <Testimonials2 />
          </section>
          <section id="test-three" className="min-h-screen">
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
      </div>
    </div>
  );
}

export default App;
