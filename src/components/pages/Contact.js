import React, { useState } from "react";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log("Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const re = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
      const isValid = re.text(String(e.target.value));
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
  };

  return (
    <section className="h-screen">
      <div className="md:mt-28 mt-40 flex justify-center md:justify-start">
        <h1 className=" md:ml-10 cursor-default text-shadow md:text-8xl text-6xl text-left text-green-400 hover:text-green-500   ">
          Contact Me
        </h1>
      </div>
      <div className="flex flex-col items-center mt-12 ">
        <div className="flex flex-col items-center bg-green-200 border-4 p-6">
          <h1 className="cursor-default md:text-6xl text-4xl">Email:</h1>
          <div className="md:text-4xl text-2xl hover:text-green-500"><a href="mailto: nicholas.easter17@gmail.com">nicholas.easter17@gmail.com</a></div>

        </div>
        <div className="flex flex-col items-center mt-6 bg-green-200 border-4 p-6">
          <h1 className="cursor-default md:text-6xl text-4xl">Call:</h1>
          <a className="md:text-4xl text-2xl hover:text-green-500" href="tel:909-268-6080">(909)-268-6080</a>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
