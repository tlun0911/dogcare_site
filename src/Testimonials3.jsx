import testimonials3 from "./assets/testimonials3.png";

const Testimonials3 = () => {

  return (
    <div
      id="test3-container"
      className="bg-indigo-400 min-h-screen grid grid-rows-2
      md:grid-cols-2 md:grid-rows-1 "
    >
      <div
        id="test3-image-container"
        className="relative h-full w-full overflow-hidden order-last md:order-first"
      >
        <img
          src={testimonials3}
          alt="testimonials3"
          loading="lazy"
          id="test3-img"
          className=" h-full"
        />
      </div>
      <div id="test3-content-container" className="p-4 place-content-center">
        <p
          className="overflow-hidden text-wrap leading-relaxed md:leading-loose 
        text-justify text-xl md:text-2xl"
        >
          “The Fosters took{" "}
          <span className="inline-block font-bold">amazing</span> care of our
          baby, Peanut when we were away for a few days. Peanut had a lot of fun
          playing with Moose. They kept us updated daily on how Peanut was doing
          and super accommodating with her diet and daily routines. They also
          have a nice fenced in backyard for the dogs to play outside when the
          weather is nice. I would{" "}
          <span className="inline-block font-bold">highly recommend</span> the
          Fosters!”
        </p>
        <div className="text-right font-bold">
          <span className="text-xl pr-12 mt-4">- Lihn C.</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonials3;
