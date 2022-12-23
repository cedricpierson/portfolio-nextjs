import Image from "next/image";
import React from "react";
import partyImg from "../public/assets/projects/party.jpg";

import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const PartyPlace = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={partyImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 ">
          <h2 className="py-2">Party Place App</h2>
          <h3>React / MUI </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Projet</p>
          <h2>Description</h2>
          <p>
            Projet autour de l'organisation de soirées thématiques autour du
            monde avec 3 composants principaux: recette, cocktail et musique.
            Utilisation du local storage pour personnaliser l'expérience,
            utilisation de 2 APIs gratuites pour recettes et cocktails, ainsi
            que de l'API Spotify couplé au lecteur intégré pour chercher des
            playlists, ainsi qu'une playlist par défaut sur le thème choisi.
          </p>
          <Link href="https://github.com/cedricpierson/party-place">
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </Link>
          <Link href="https://party-place.vercel.app/">
            <button className="px-8 py-2 mt-4">Demo</button>
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
                MUI
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

export default PartyPlace;
