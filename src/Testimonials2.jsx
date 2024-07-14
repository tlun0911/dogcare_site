import testimonials2 from "./assets/testimonial2.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Testimonials2 = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return (
    <div
      id="test2-container"
      className="min-h-screen grid grid-rows-2
      md:grid-cols-2 md:grid-rows-1 bg-pink-300 "
    >
      <div
        id="test2-image-container"
        className="relative h-full w-full overflow-hidden order-last"
      >
        <img
          src={testimonials2}
          alt="testimonials2"
          data-speed="auto"
          className="absolute top-0 left-0 h-[140%] w-full"
        />
      </div>
      <div id="test2-content-container" className="p-4 place-content-center">
        <p
          className="overflow-hidden text-wrap leading-relaxed md:leading-loose 
        text-justify text-xl md:text-2xl"
        >
          “I found Foster Family Dog Care through a mutual friend's Facebook
          post and they are the{" "}
          <span className="inline-block font-bold">ABSOLUTE BEST</span> dog
          sitters in the world. They have a beautiful home and fully fenced in
          large backyard. He absolutely loved it there and I felt so much better
          knowing he was in good hands! If you are looking for dog care please
          reach out to them they are super affordable and incredibly{" "}
          <span className="inline-block font-bold">kind</span> and{" "}
          <span className="inline-block font-bold">compassionate</span>. I will
          be using them in the future because chocolate loved it there so
          much!!!!”
        </p>
        <div className="text-right font-bold">
          <span className="text-xl pr-12 mt-4">- Hayley P.</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonials2;
