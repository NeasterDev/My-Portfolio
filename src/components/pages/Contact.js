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
      <div className="mt-28 flex justify-center md:justify-start">
        <h1 className=" md:ml-10 cursor-default text-shadow md:text-8xl text-6xl text-left text-green-400 hover:text-green-500   ">
          Contact Me
        </h1>
      </div>
      <div className="flex flex-col items-center md:items-start md:ml-10">
        <form id="contact-form" onSubmit={handleSubmit}>
          <div>
            <input
              className="m-2 text-3xl shadow-sm border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400"
              type="text"
              name="name"
              placeholder="Name"
              defaultValue={name}
              onBlur={handleChange}
            />
          </div>
          <div>
            <input
              className="m-2 text-3xl rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400"
              type="email"
              name="email"
              placeholder="Email"
              defaultValue={email}
              onBlur={handleChange}
            />
          </div>
          <div>
            <textarea
              className="m-2 text-3xl rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400"
              name="message"
              rows="5"
              placeholder="Enter Message..."
              defaultValue={message}
              onBlur={handleChange}
            />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text text-2xl">{errorMessage}</p>
            </div>
          )}
          <button data-testid="button" type="submit" className="text-4xl bg-green-200 shadow-md hover:bg-green-400 rounded-lg p-2 mt-2">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
