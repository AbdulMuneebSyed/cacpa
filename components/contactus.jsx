"use client"
import { useState } from "react";
import emailjs from "emailjs-com";
import Image from "next/image";
export default function ContactUs() {
  const servicesItems = [
    "Business Management & Consultancy",
    "Human Resource Management",
    "Digital Marketing & Business Consultant",
    "Warehouse Management",
    "Governance, Risk Management & Compliance",
    "Web Development & Hosting Services",
  ];

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    services: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        services: checked
          ? [...prev.services, value]
          : prev.services.filter((service) => service !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Map formData to match the EmailJS template structure
    const emailParams = {
      to_name: "Sadmuneeb786@gmail.com", 
      from_name: "samuneeb786@gmail.com", 
      message: `Name:${formData.fullName}\n Email: ${formData.email}\nPhone: ${
        formData.phone
      }\nServices: ${formData.services.join(", ")}\nMessage: ${
        formData.message
      }`, // Combine all details into the message
    };

    emailjs
      .send(
        "service_znyyw56", // Your EmailJS service ID
        "muneeb_iqciy5o", // Your EmailJS template ID
        emailParams,
        "T4h1H0gjpxDP_OF7r" // Your EmailJS public key
      )
      .then(
        (response) => {
          alert("Message sent successfully!");
          console.log("Success!", response.status, response.text);
        },
        (error) => {
          console.error("Failed to send message", error);
          alert("Failed to send message. Please try again later.");
        }
      );
  };



  return (
    <main className="flex min-h-screen">
      <div className="flex-1 hidden lg:block">
        <Image
          src="https://images.unsplash.com/photo-1697135807547-5fa9fd22d9ec?auto=format&fit=crop&q=80&w=3387&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="photo"
          width={100}
          height={100}
          className="w-full h-full object-cover"
          priority
        />
      </div>
      <div className="flex-1 lg:flex lg:justify-center pt-16 md:pt-0 lg:min-h-screen">
        <div className="max-w-lg flex-1 mx-auto px-4 text-gray-600">
          <div>
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Get in touch
            </h3>
            <p className="mt-3">
              We’d love to hear from you! Please fill out the form below.
            </p>
          </div>
          <form onSubmit={sendEmail} className="space-y-5 mt-12 lg:pb-12">
            <div>
              <label className="font-medium">Full name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Phone number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Services</label>
              <ul className="grid gap-y-2 gap-x-6 flex-wrap grid-cols-2 mt-3">
                {servicesItems.map((item, idx) => (
                  <li key={idx} className="flex gap-x-3 text-sm">
                    <div>
                      <input
                        id={`service-${idx}`}
                        type="checkbox"
                        className="checkbox-item peer hidden"
                      />
                      <label
                        htmlFor={`service-${idx}`}
                        className="relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
                      ></label>
                    </div>
                    <label
                      htmlFor={`service-${idx}`}
                      className="cursor-pointer"
                    >
                      {item}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <label className="font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              ></textarea>
            </div>
            <button className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150">
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
//checked