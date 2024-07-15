import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div
      id="footer-container"
      className="grid grid-rows-4 items-center justify-items-center bg-orange-300 h-48"
    >
      <div>
        <h1 className="text-2xl font-bold text-center">
          Foster Family Dog Care
        </h1>
      </div>
      <div className="inline-flex items-center space-x-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-4 h-4"
          fill="currentColor"
        >
          <path
            d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 
        50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 
        16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 
        92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 
        64H64c-35.3 0-64-28.7-64-64V128z"
          />
        </svg>
        <h2 className="">Aliciafoster0929@gmail.com</h2>
      </div>
      <div className="inline-flex items-center space-x-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-4 h-4 "
          fill="currentColor"
        >
          <path
            d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 
        0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 
        38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 
        11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 
        11.6-46.3l-40-96z"
          />
        </svg>
        <h2 className="">(585) 313-4278</h2>
      </div>
      <div>
        <SocialIcon
          url="https://www.facebook.com/fosterfamilydogcare"
          className="mx-auto rounded-full hover:ring-2 hover:ring-white hover:scale-125"
          target="_blank"
          fgColor="#fff"
          style={{ height: 35, width: 35 }}
        />
      </div>
    </div>
  );
};

export default Footer;
