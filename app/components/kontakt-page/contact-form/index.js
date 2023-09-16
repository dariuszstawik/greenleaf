"use client";

import Button from "../../global-components/button";
import SectionTitle from "../../global-components/section-title";

// import React, { useEffect, useRef, useState } from "react";

const ContactForm = ({ about1 }) => {
  //   const form = useRef(null);
  //   console.log("about1 contact form " + about1);

  //   console.log(about1);

  //   const [showNotification, setShowNotification] = useState(false);

  //   useEffect(() => {
  //     if (showNotification) {
  //       const timer = setTimeout(() => {
  //         setShowNotification(false);
  //       }, 3000);
  //       return () => clearTimeout(timer);
  //     }
  //   }, [showNotification]);

  //   const sendEmail = async (e) => {
  //     e.preventDefault();
  //     const response = await fetch("/api/send", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         firstName: e.target.firstName.value,
  //         lastName: e.target.lastName.value,
  //         phone: e.target.phone.value,
  //         email: e.target.email.value,
  //         message: e.target.message.value,
  //       }),
  //     });

  //     console.log("To jest response.body" + response.body);

  //     if (response.status === 200) {
  //       setShowNotification(true);
  //     } else {
  //       console.log("Email not sent");
  //     }

  //     e.target && e.target.reset();
  //   };

  return (
    <section
      className="container pt-[112px] flex flex-col gap-2 relative"
      id="contactSection"
    >
      {/* <h2 className="inline-block text-4xl font-bold text-center uppercase border-b-2 border-primaryGreen mx-auto mb-12">
        Contact me
      </h2> */}
      <SectionTitle>Wyślij wiadomość</SectionTitle>
      <form
        // ref={form}
        // onSubmit={sendEmail}
        className="relative w-1/2 mx-auto flex flex-col gap-2"
      >
        <label
          htmlFor="firstName"
          className="inline-block  mr-auto relative uppercase after:content-['*'] after:text-primaryGreen after:absolute after:-right-[10px] after:-top-[2px]"
        >
          Imię
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          required
          className="relative border border-primaryGreen rounded-xl leading-8 px-4"
        ></input>

        <label
          htmlFor="lastName"
          className="inline-block  mr-auto relative uppercase after:content-['*'] after:text-primaryGreen after:absolute after:-right-[10px] after:-top-[2px]"
        >
          Nazwisko
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          required
          className="border border-primaryGreen rounded-xl leading-8 px-4"
        ></input>

        <label
          htmlFor="email"
          className="inline-block  mr-auto relative uppercase after:content-['*'] after:text-primaryGreen after:absolute after:-right-[10px] after:-top-[2px]"
        >
          email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+"
          className="border border-primaryGreen rounded-xl leading-8 px-4"
        ></input>

        <label htmlFor="phone" className="uppercase">
          telefon
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="border border-primaryGreen rounded-xl leading-8 px-4"
        ></input>

        <label
          htmlFor="message"
          className="inline-block  mr-auto relative uppercase after:content-['*'] after:text-primaryGreen after:absolute after:-right-[10px] after:-top-[2px]"
        >
          wiadomość
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="border border-primaryGreen rounded-xl leading-8 px-4"
        ></textarea>

        <Button isOrange type="submit" className="ml-auto px-8">
          Wyślij
        </Button>
        {/* {showNotification && (
          <div className="text-primaryGreen text-2xl p-2 rounded absolute bottom-0 left-0">
            Wiadomość wysłana. Dziękujemy!
          </div>
        )} */}
      </form>
    </section>
  );
};

export default ContactForm;