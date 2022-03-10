import React from "react";
import H1s from "../H1s";

export default function Contact() {
  const contact = {
    h1: "Contact",
  };
  return (
    <div className="contact">
      <div className="contact-container">
        <H1s h1={contact.h1} />
        aaa
      </div>
    </div>
  );
}
