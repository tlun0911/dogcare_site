import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import contact from "./assets/contact.png";

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
        "yaWyunWk6MZdAVQlJ"
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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#image5-container img", {
      scrollTrigger: {
        trigger: "#image5-container",
        start: "top bottom", // Start the animation when the top of the trigger hits the bottom of the viewport
        end: "top top", // End the animation when the top of the trigger hits the top of the viewport
        scrub: true, // Smooth scrubbing, consider a small number for slight delay (e.g., 0.5)
      },
      scale: 1, // Target scale. Assuming the image starts larger, e.g., style={{transform: "scale(1.5)"}}
      ease: "none", // Use a linear ease for smooth scaling

    });

    gsap.to("#form-container", {
      scrollTrigger: {
        trigger: "#form-container",
        start: "top bottom", // Start the animation when the top of the trigger hits the bottom of the viewport
        end: "top top", // End the animation when the top of the trigger hits the top of the viewport
        scrub: true, // Smooth scrubbing, consider a small number for slight delay (e.g., 0.5)
      },
      scale: 1, // Target scale. Assuming the image starts larger, e.g., style={{transform: "scale(1.5)"}}
      ease: "none", // Use a linear ease for smooth scaling
    });
  }, []);

  return (
    <div className="flex flex-row max-h-screen bg-indigo-300">
      <div id="image5-container" className="overflow-hidden w-1/2">
        <img
          src={contact}
          alt="contact"
          className="object-cover object-center scale-150"
        />
      </div>
      <div
        id="form-container"
        className="flex flex-col justify-center items-center mx-auto w-1/2 scale-0 origin-top"
      >
        <h1 className="mb-4 p-2 text-center font-bold text-3xl">Contact Us</h1>
        <p className="text-center text-xl mb-4">
          Have a question or want to work together? Send us a message!
        </p>

        <form
          className="flex flex-col mx-auto w-2/3 items-center justify-center"
          onSubmit={handleSubmit}
        >
          <label htmlFor="user_name" className="mb-2 font-bold text-xl">
            Name
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            className="w-2/3 mb-4 p-1 focus:outline-none focus:ring-2 focus:ring-sky-800"
            value={formDetails.user_name}
            onChange={handleChange}
          />

          <label htmlFor="user_email" className="text-start font-bold text-xl mb-2">
            Email
          </label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            className="w-2/3 mb-4 p-1 focus:outline-none focus:ring-2 focus:ring-sky-800"
            value={formDetails.user_email}
            onChange={handleChange}
          />

          <label htmlFor="message" className="text-start text-xl font-bold mb-2">
            Message
          </label>
          <textarea
            name="message"
            rows="6"
            className="w-2/3 mb-4 p-1 focus:outline-none focus:ring-2 focus:ring-sky-800"
            value={formDetails.message}
            onChange={handleChange}
          />

          <button
            className="border-2 border-sky-800 py-2 px-4 
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
