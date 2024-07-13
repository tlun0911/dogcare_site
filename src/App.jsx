import gsap from "gsap";
import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

    const smoother = ScrollSmoother.create({
      content: "#smooth-content",
      wrapper: "#smooth-wrapper",
      effects: true,
      normalizeScroll: true,
      smooth:2,
      smoothTouch:0.1,

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
          <div
            id="testimonials-wrapper"
            style={{ minWidth: "300vw" }}
            className=" relative min-h-screen flex flex-col md:flex-nowrap md:flex-row content-center overflow-x-hidden"
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
      </div>
    </div>
  );
}

export default App;
