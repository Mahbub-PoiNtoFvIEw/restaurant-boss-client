import React from "react";
import Cover from "../Shared/Cover/Cover";
import img from "../../assets/contact/banner.jpg";
import OurLocation from "./OurLocation";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <div>
      <Cover
        img={img}
        title="Contact us"
        content="Would You like to try a dish?"
        btn={false}
      ></Cover>
      <div className="md:max-w-3xl mx-auto md:px-0 px-4 mb-14">
        <OurLocation></OurLocation>
        <ContactForm></ContactForm>
      </div>
    </div>
  );
};

export default ContactUs;
