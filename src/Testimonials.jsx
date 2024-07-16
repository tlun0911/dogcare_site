import testimonials from "./assets/testimonials.png";

const Testimonials = () => {

  return (
    <div
      id="test1-container"
      className="bg-lime-200 min-h-screen grid grid-rows-2
      md:grid-cols-2 md:grid-rows-1"
    >
      <div
        id="test1-image-container"
        className="relative h-full w-full overflow-hidden order-last md:order-first"
      >
        <img
          src={testimonials}
          alt="testimonials"
          loading="lazy"
          id="test1-img"
          className="object-cover h-full"
        />
      </div>
      <div id="test1-content-container" className="p-4 place-content-center">
        <h2 className="overflow-hidden text-center font-bold text-4xl mb-4">
          What Our Clients Say
        </h2>
        <p
          className="overflow-hidden text-wrap leading-relaxed md:leading-loose 
        text-justify text-xl md:text-2xl"
        >
          “Lucky had the best two nights with the Foster family and Moose. Would{" "}
          <span className="inline-block font-bold">recommend</span> to anyone
          looking for a loving home for their fur baby while you're away or
          busy. You can rest assured that they are being{" "}
          <span className="inline-block font-bold">well cared for</span> and{" "}
          <span className="inline-block font-bold">having fun</span> running
          around the fenced in backyard. If you weren't sure, the pictures and
          text message updates will certainly help!”
          <br />
          <br />
        </p>
        <div className="text-right font-bold">
          <span className="text-xl pr-12 mt-4">- Kenzie A.</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
