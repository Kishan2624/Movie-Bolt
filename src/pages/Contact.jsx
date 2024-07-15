import React from "react";
import ContactForm from "../component/ContactForm";

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-16">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-neutral-500 mb-8">
        Have questions, suggestions, or feedback? We'd love to hear from you!
        Please fill out the form below and we'll get back to you as soon as
        possible.
      </p>

      <ContactForm />

      <div>
        <h2 className="text-2xl font-bold">Contact Information</h2>
        <p className="text-neutral-500">
          Feel free to contact us via email or phone:
        </p>
        <ul className="mt-2">
          <li>Email: contact@example.com</li>
          <li>Phone: +123 456 7890</li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
