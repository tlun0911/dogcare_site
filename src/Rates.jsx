import rates from "./assets/rates.png";

const Rates = () => {

  return (
    <div id="rates-container" className="min-h-screen grid grid-rows-2
      md:grid-cols-2 md:grid-rows-1 bg-cyan-400">
      <div
        id="rates-content-container"
        className="p-4 place-content-center"
      >
        <h2 className="overflow-hidden font-bold text-center text-4xl mb-12">Our Services:</h2>
        <p className="overflow-hidden text-wrap leading-relaxed md:leading-loose 
        text-center text-xl md:text-2xl">
          Dog Boarding - $30 Per Night (per dog) <br />
          <br />
          House/Pet Sitting - $30 Per Night (per dog)
          <br/>
          <br/>
        </p>
      </div>
      <div id="rates-image-container" className="relative h-full w-full overflow-hidden">
        <img
          src={rates}
          alt="rates"
          loading="lazy"
          id="rates-img"
          data-speed="auto"
          className="absolute top-0 left-0 h-auto w-full"
        />
      </div>
    </div>
  );
};

export default Rates;
