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
    name: Joi.string().alphanum().min(3).max(30).required().messages({
      "string.base": `Texte attendu`,
      "string.empty": `Champ requis`,
      "string.min": `3 lettres minimum`,
      "any.required": `Champ requis`,
    }),
    subject: Joi.string().alphanum().min(3).max(50).required().messages({
      "string.base": `Texte attendu`,
      "string.empty": `Champ requis`,
      "string.min": `3 lettres minimum`,
      "any.required": `Champ requis`,
    }),
    phone: Joi.number().min(8).max(10).messages({
      "number.base": `Numéro attendu`,
      "number.min": `Minimum 8 chiffres`,
      "number.min": `Maximum 10 chiffres`,
    }),
    message: Joi.string().alphanum().min(3).max(245).required().messages({
      "string.base": `Texte attendu`,
      "string.empty": `Champ requis`,
      "string.min": `3 lettres minimum`,
      "any.required": `Champ requis`,
    }),

    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "fr"] } })
      .required(),
  }).with("name", "email");
  const { error, value } = schema.validate({
    name: "Erreur de saisie",
    subject: "Erreur de saisie",
    phone: "Erreur de saisie",
    message: "Erreur de saisie",
    email: "Invalide",
  });
  const validationResult = schema.validate({
    name: name,
    subject: subject,
    phone: phone,
    message: message,
    email: email,
  });
  //   Form validation state
  const [errors, setErrors] = useState({
    name: name,
    subject: subject,
    phone: phone,
    message: message,
    email: email,
  });

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
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
    }
  };
  const handleCloseAlert = () => setShowSuccessMessage(false);

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
                  className="rounded-xl"
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
                    <label className="uppercase text-sm py-2">Nom*</label>
                    <input
                      required
                      className="border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none focus:border-[#519657] focus:ring-1 focus:ring-[#519657]
                       disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                       invalid:border-pink-500 invalid:text-pink-600
                      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && (
                      <p class="mt-2 text-sm text-pink-500 dark:text-pink-500">
                        Renseignez votre nom
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Téléphone</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300  focus:outline-none focus:border-[#519657] focus:ring-1 focus:ring-[#519657]
                      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                      required:border-pink-500 invalid:border-pink-500 invalid:text-pink-600
                      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email*</label>
                  <input
                    required
                    className="border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none focus:border-[#519657] focus:ring-1 focus:ring-[#519657]
                     disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && (
                    <p class="mt-2 text-sm text-pink-500 dark:text-pink-500">
                      Rensignez votre email
                    </p>
                  )}
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Objet*</label>
                  <input
                    required
                    className="border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none focus:border-[#519657] focus:ring-1 focus:ring-[#519657]
                    required disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                  {errors.subject && (
                    <p class="mt-2 text-sm text-pink-500 dark:text-pink-500">
                      Renseignez un objet
                    </p>
                  )}
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message*</label>
                  <textarea
                    required
                    className="border-2 rounded-lg p-3  border-gray-300 focus:outline-none focus:border-[#519657] focus:ring-1 focus:ring-[#519657]
                    required disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    rows="5"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  {errors.message && (
                    <p class="mt-2 text-sm text-pink-500 dark:text-pink-500">
                      Ecrivez votre message
                    </p>
                  )}
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full p-4 text-gray-100 mt-4"
                >
                  Envoyer
                </button>
                {!!showSuccessMessage && (
                  <div
                    id="alert-border-3"
                    class="flex p-4 mb-4 text-green-800 border-t-4 border-green-300 bg-green-50 dark:text-green-400 dark:border-green-800"
                    role="alert"
                  >
                    <svg
                      class="flex-shrink-0 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <div class="ml-3 text-sm font-medium">
                      Votre message a été envoyé
                    </div>
                    <button
                      type="button"
                      class="ml-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex h-8 w-8  dark:text-green-400 "
                      data-dismiss-target="#alert-border-3"
                      aria-label="Close"
                      onClick={handleCloseAlert}
                    >
                      <span class="sr-only">Dismiss</span>
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-6">
          <Link href="/">
            <div className="animate-bounce rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 bg-white">
              <HiOutlineChevronDoubleUp className="text-[#519657]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
