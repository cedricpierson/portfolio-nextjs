/* eslint-disable react/no-unescaped-entities */
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5">
            À propos
          </p>
          <h2 className="py-2 text-gray-600">Qui je suis</h2>
          <p className="py-2 text-gray-600">
            Musicien professionnel et webmaster au sein d'une école de danse de
            l’Eurométropole de Strasbourg depuis plus de 11 ans, j’ai acquis des
            connaissances en développement CMS, graphisme et web-design, ainsi
            qu’un savoir faire dans l’enseignement et les disciplines
            artistiques.
          </p>
          <p className="py-2 text-gray-600">
            Je suis sensible à l’ergonomie, la praticité et l’aspect ludique
            d’une interface, et souhaiterais explorer par la suite le
            développement applicatif.{" "}
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Découvrez mes derniers projets.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 ">
          <img className=" rounded-xl" src="assets/about.jpg" />
        </div>
      </div>
    </div>
  );
};

export default About;
