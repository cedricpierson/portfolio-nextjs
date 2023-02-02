import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  require("dotenv").config();
  const fs = require("fs");
  const path = require("path");
  const os = require("os");
  const Joi = require("joi");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const schema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    subject: Joi.string().alphanum().min(3).max(50).required(),
    message: Joi.string().alphanum().min(3).max(245).required(),

    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "fr"] } })
      .required(),
  }).with("name", "email");
  const { error, value } = schema.validate({
    name: "Erreur de saisie",
    subject: "Erreur de saisie",
    message: "Erreur de saisie",
    email: "Invalide",
  });

  //   Form validation state
  const [errors, setErrors] = useState({});

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("Send");

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  // Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (name.length <= 0) {
      tempErrors["name"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  //   Handling form submit

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        mode: "cors",
        body: JSON.stringify({
          email: email,
          name: name,
          phone: phone,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(res);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
    }
    console.log(name, email, subject, message);
  };

  return (
    <div className="contact w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-10 w-full ">
        <p className="text-xl tracking-wider uppercase before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#519657] relative inline-block">
          <span className="relative text-white">Contact</span>
        </p>
        <h2 className="py-4">Un p&apos;tit mail ;)</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="bg-white col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  width={640}
                  height={427}
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="/assets/contact2.jpg"
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Cédric PIERSON</h2>
                <p>Développeur Front-End</p>
                <p>Prêt pour des projets en mission ou temps plein. </p>
                <p>On en parle?</p>
              </div>
              <div>
                <p className="uppercase pt-8">+ d&apos;infos</p>

                <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                  <Link href="https://www.linkedin.com/in/cedricpierson01/">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </Link>
                  <Link href="https://github.com/cedricpierson">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </Link>
                  <Link href="/#contact">
                    <div className="rounded-full lg-none shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <AiOutlineMail />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            id="contact"
            className="bg-white col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4"
          >
            <div className="p-4">
              <form className="color">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Nom</label>
                    <input
                      className=" border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none focus:border-[#519657] focus:ring-1 focus:ring-[#519657]
                      required disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                      invalid:border-pink-500 invalid:text-pink-600
                      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Téléphone</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300  focus:outline-none focus:border-[#519657] focus:ring-1 focus:ring-[#519657]
                      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                      invalid:border-pink-500 invalid:text-pink-600
                      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none focus:border-[#519657] focus:ring-1 focus:ring-[#519657]
                    required disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Objet</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none focus:border-[#519657] focus:ring-1 focus:ring-[#519657]
                    required disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3  border-gray-300 focus:outline-none focus:border-[#519657] focus:ring-1 focus:ring-[#519657]
                    required disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    rows="5"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full p-4 text-gray-100 mt-4"
                >
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-6">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 bg-white">
              <HiOutlineChevronDoubleUp className="text-[#519657]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
