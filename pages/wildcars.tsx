import Image from "next/image";
import React from "react";
import wildcarsImg from "../public/assets/projects/wildcars.jpg";

import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const Wildcars = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={wildcarsImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 ">
          <h2 className="py-2">WILDCARS</h2>
          <h3>Next JS / MUI / MapBox</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Projet</p>
          <h2>Description</h2>
          <p>
            WildCars est le résultat d&apos;un hackathon de 48h en partenariat
            avec AWS. Le résultat est une application de location de véhicule
            avec géolocalisation, choix intuitif, authentification via Facebook,
            back-office pour la flotte de véhicules via API.
          </p>
          <Link href="https://github.com/cedricpierson/hackathon-CYG">
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </Link>
          <Link href="#">
            <button className="px-8 py-2 mt-4">
              Migration BDD en cours...
            </button>
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
                MongoDB
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                MapBox
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                DynamoDB
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

export default Wildcars;
