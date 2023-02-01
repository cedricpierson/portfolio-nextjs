import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  return (
    <div id="contact" className="contact w-full lg:h-screen">
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

          <div className="bg-white col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form className="color">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Nom</label>
                    <input
                      className=" border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none focus:border-[#519657] focus:ring-1 focus:ring-[#519657]
                      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                      invalid:border-pink-500 invalid:text-pink-600
                      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                      type="text"
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
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none focus:border-[#519657] focus:ring-1 focus:ring-[#519657]
                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    type="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Objet</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none focus:border-[#519657] focus:ring-1 focus:ring-[#519657]
                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    type="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3  border-gray-300 focus:outline-none focus:border-[#519657] focus:ring-1 focus:ring-[#519657]
                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    rows="5"
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-6">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#519657]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
