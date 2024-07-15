import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
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
    gsap.registerPlugin(ScrollToPlugin);

    const smoother = ScrollSmoother.create({
      content: "#smooth-content",
      wrapper: "#smooth-wrapper",
      effects: true,
      smooth: 1,
    });

    let links = gsap.utils.toArray("nav a");
    links.forEach((a) => {
      let element = document.querySelector(a.getAttribute("href")),
        linkST = ScrollTrigger.create({
          trigger: element,
          start: "top top",
        }),
        highlightST = ScrollTrigger.create({
          trigger: element,
          start: "top center",
          end: "bottom center",
          onToggle: (self) => self.isActive && setActive(a),
        });
      a.addEventListener("click", function (e) {
        e.preventDefault();
        gsap.to(window, {
          duration: 1,
          scrollTo: linkST.start,
          overwrite: "auto",
        });
      });
    });

    function setActive(link) {
      links.forEach((el) => el.classList.remove("active"));
      link.classList.add("active");
    }

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

    let mm = gsap.matchMedia();

    // Desktop navbar pinning
    mm.add("(min-width: 800px)", () => {
      ScrollTrigger.create({
        trigger: "#navbar",
        start: "top top",
        endTrigger: "#footer",
        end: "bottom top",
        pin: true,
        anticipatePin: 1,
        normalizeScroll: true,
        pinSpacing: false,
      });
    });

    // Mobile navbar pinning
    mm.add("(max-width: 799px)", () => {
      ScrollTrigger.create({
        trigger: "#navbar",
        start: "top top",
        endTrigger: "#footer",
        end: "bottom top",
        pin: true,
        anticipatePin: 1,
        pinType: "fixed",
        normalizeScroll: true,
        pinSpacing: false,
      });
    });

    // smoother.effects("img", { speed: "auto" });
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <div className="relative overflow-x-hidden">
          <section
            id="landing"
            className="panel relative max-h-screen w-screen"
          >
            <Landing />
            <section
              id="navbar"
              className="relative max-h-8 top-0 z-50 max-w-screen"
            >
              <nav
                id="navbar-container"
                className="flex justify-center w-full bg-slate-800 bg-opacity-40 max-h-8"
              >
                <ul
                  id="navbar-list"
                  className="flex space-x-3 md:space-x-8 my-auto justify-center text-lg text-gray-200"
                >
                  <li>
                    <a id="landing-link" href="#landing" className="">
                      Home
                    </a>
                  </li>
                  <li>
                    <a id="about-link" href="#about" className="">
                      About
                    </a>
                  </li>
                  <li>
                    <a id="test-link" href="#test-one" className="">
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a id="rates-link" href="#rates" className="">
                      Services
                    </a>
                  </li>
                  <li>
                    <a id="contact-link" href="#contact" className="">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </section>
          </section>
          <section id="about" className="panel relative min-h-screen">
            <AboutUs />
          </section>
          <section id="about2" className="relative min-h-screen">
            <AboutUs2 />
          </section>
          <section id="about3" className="relative min-h-screen">
            <AboutUs3 />
          </section>
          <section id="test-one" className="panel min-h-screen">
            <Testimonials />
          </section>
          <section id="test-two" className="min-h-screen">
            <Testimonials2 />
          </section>
          <section id="test-three" className="min-h-screen">
            <Testimonials3 />
          </section>
          <section id="rates" className="panel min-h-screen">
            <Rates />
          </section>
          <section id="contact" className="panel min-h-screen">
            <Contact />
          </section>
          <footer id="footer" className="">
            <Footer />
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
