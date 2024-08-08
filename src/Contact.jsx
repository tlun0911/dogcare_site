import { useState } from "react";
import contact_img from "./assets/contact_img.webp";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const Contact = () => {
  const [formDetails, setFormDetails] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "contact_service",
        "contact_form",
        e.target,
        "Kvkqjxm55yoiCVCzb" // YOUR USER ID HERE
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
          setFormDetails({
            user_name: "",
            user_email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          toast.error(
            "There was an error sending your message. Please try again later."
          );
        }
      );
  };

  return (
    <div
      id="contact-container"
      className="bg-fuchsia-200 min-h-screen grid grid-rows-2
      md:grid-cols-2 md:grid-rows-1"
    >
      <div
        id="contact-image-container"
        className="relative h-full w-full overflow-hidden order-last md:order-first"
      >
        <img
          alt="contact"
          id="contact-img"
          loading="lazy"
          src={contact_img}
          className="object-cover w-full"
        />
      </div>
      <div id="contact-content-container" className="p-4 place-content-center">
        <h1 className="overflow-hidden font-bold text-center text-4xl mb-8">
          Contact Us
        </h1>
        <p
          className="overflow-hidden text-wrap leading-relaxed md:leading-loose 
        text-center text-xl md:text-2xl"
        >
          Have a question? Send us a message!
        </p>

        <form
          className="flex flex-col mx-auto w-11/12 md:w-3/4 items-center justify-center"
          onSubmit={handleSubmit}
        >
          <label
            htmlFor="user_name"
            className="mb-2 font-bold text-xl md:text-lg"
          >
            Name
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            className="w-full mb-2 p-1 focus:outline-none focus:ring-2 focus:ring-sky-800"
            value={formDetails.user_name}
            onChange={handleChange}
          />

          <label
            htmlFor="user_email"
            className="text-start font-bold text-xl md:text-lg mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            className="w-full mb-2 p-1 focus:outline-none focus:ring-2 focus:ring-sky-800"
            value={formDetails.user_email}
            onChange={handleChange}
          />

          <label
            htmlFor="message"
            className="text-start text-xl md:text-lg font-bold mb-2"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="6"
            className="w-full mb-2 p-1 focus:outline-none focus:ring-2 focus:ring-sky-800"
            value={formDetails.message}
            onChange={handleChange}
          />

          <button
            className="border-2 border-sky-800 py-2 px-4 
            mb-2 md:mb-0
          rounded-2xl hover:bg-sky-800 
          hover:text-white
          hover:ring-2 hover:ring-white"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
