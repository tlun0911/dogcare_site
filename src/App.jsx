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
      smooth: 1,
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
