import about_us from "./assets/about_us.png";

const AboutUs = () => {
  return (
    <div
      id="about-us-container"
      className="bg-blue-300 md:h-screen grid grid-rows-2
      md:grid-cols-2 md:grid-rows-1 "
    >
      <div id="p1-container" className="p-4 place-content-center ">
        <h1
          id="about-us-heading"
          className="overflow-hidden font-bold text-center text-4xl mb-4"
        >
          About Us
        </h1>
        <p
          id="p1-content"
          className="overflow-hidden text-wrap leading-relaxed md:leading-loose 
        text-justify text-xl md:text-2xl"
        >
          Welcome to{" "}
          <span className="inline-block font-bold">Foster Family Dog Care</span>, 
          where our passion is dogs! We are Eric and Alicia Foster. With the
          help of our little daughter Lucy and our rescue dog Moose, we make up
          this small family business that is Foster Family Dog Care. We are a
          full-service dog and house sitting business. Our services are offered
          out of our home in Greece, NY. We welcome all sizes and breeds of
          Dogs!
        </p>
      </div>
      <div
        id="about-us-img-container"
        className="relative h-full w-full "
      >
        <img
          src={about_us}
          alt="about us"
          loading="lazy"
          id="about-us-img"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default AboutUs;
