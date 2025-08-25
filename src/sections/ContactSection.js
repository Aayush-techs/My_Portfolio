import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./ContactSection.css";

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oz5bzpw",   
        "template_oyn4i6v",   
        form.current,
        "2uOGv9IR4jQlr0qth"  
      )
      .then(
        (result) => {
          alert("Message sent successfully ✅");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message ❌");
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactSection;
