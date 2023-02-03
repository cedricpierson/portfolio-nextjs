/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import Typing from "../components/Typing";

const Main = () => {
  return (
    <div id="home" className="main  w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Portfolio
          </p>
          <h1 className="py-4 text-gray-700">
            <span className="text-[#519657]">Cédric PIERSON</span>
          </h1>
          <h1 className="py-2 text-gray-700">
            <Typing />
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Je suis spécialisé dans la conception et parfois le design
            d'expériences digitales de qualité. <br />
            Actuellement, je m'occupe d'applications responsives et me forment
            sur les technologies back-end.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link href="https://www.linkedin.com/in/cedricpierson01/">
              <div className="bg-white  rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </Link>
            <Link href="https://github.com/cedricpierson">
              <div className="bg-white rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </Link>
            <Link href="/CV-Cédric-PIERSON-2023.pdf" target="blank">
              <div className="font-bold text-sm bg-white rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                CV
              </div>
            </Link>
            <Link href="/#contact">
              <div className="bg-white rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
