import about_us_3 from "./assets/about_us_3.png";

const AboutUs = () => {

  return (
    <div
      id="about-us-container3"
      className="bg-slate-300 min-h-screen grid grid-rows-2
      md:grid-cols-2 md:grid-rows-1 "
    >
      <div id="p3-container" className="p-4 place-content-center ">
        <p
          id="p3-content"
          className="overflow-hidden text-wrap leading-relaxed md:leading-loose 
        text-justify text-xl md:text-2xl"
        >
          To ensure the comfort of your dog we schedule a Meet and Greet prior
          to booking. This ensures all dogs{" "}
          <span className="inline-block font-bold">feel comfortable</span> and
          get along. It allows them to get a sense of us and the environment,
          and builds a good foundation for their initial visit. We also try to
          only book one client at a time (more than one dog per family is
          welcome!!). Overlaps in pickup/drop offs can sometimes happen. You
          will receive plenty of updates and pictures, we know just how hard it
          is to leave behind a little family member!
        </p>
      </div>
      <div
        id="about-us-img-container3"
        className="relative h-full w-full overflow-hidden "
      >
        <img
          src={about_us_3}
          data-speed="auto"
          alt="about us 3"
          id="about-us-img3"
          className="absolute top-0 left-0 h-[115%] w-full"
        />
      </div>
    </div>
  );
};

export default AboutUs;
