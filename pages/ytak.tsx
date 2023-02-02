import Image from "next/image";
import React from "react";
import ytakImg from "../public/assets/projects/ytak.jpg";

import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const Ytak = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={ytakImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 ">
          <h2 className="py-2">YTAK</h2>
          <h3>Next JS / MUI / Sequelize</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Projet</p>
          <h2>Description</h2>
          <p>
            Ytak est un projet de plateforme OTT sur les thèmes du développement
            web, du travail indépendant et de la nature. Conçu en Fullstack, il
            inclut le process signup-signin-signout d&apos;authentification et
            le signin Google, ainsi qu&apos;un back-office CMS de gestion du
            contenu et des utilisateurs.
          </p>
          <Link href="https://github.com/WildCodeSchool/092022-project3-video-front">
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </Link>
          <Link href="#">
            <button className="px-8 py-2 mt-4">Projet en cours...</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Next
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                MUI
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Sequelize
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Architecture MVC
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Formik+Yup
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Retour</p>
        </Link>
      </div>
    </div>
  );
};

export default Ytak;
