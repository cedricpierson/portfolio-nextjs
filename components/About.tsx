/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="text-xl tracking-wider uppercase before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#519657] relative inline-block">
            <span className="relative text-white">À propos</span>
          </p>
          <h2 className="py-2 text-gray-600">Dans quelle étagère?</h2>
          <p className="py-2 text-gray-600">
            Développeur indépendant, webmaster et musicien professionnel au sein
            d'une école de danse de l’Eurométropole de Strasbourg depuis plus de
            11 ans, j’ai acquis des connaissances en développement Frontend JS,
            CMS, graphisme et web-design, ainsi qu’un savoir faire dans
            l’enseignement et les disciplines artistiques.
          </p>
          De formation professionnelle sur React + Next JS, MUI, Express, je me
          forme à mon compte sur Typescript, Cypress, Tailwind, Framer Motion.
          <p className="py-2 text-gray-600">
            Je suis sensible à l’ergonomie, la praticité et l’aspect ludique
            d’une interface, et souhaiterais explorer par la suite le
            développement applicatif.{" "}
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Découvrez mes derniers projets.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-full flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 ">
          <Image
            width={566}
            height={566}
            className=" rounded-xl"
            src="/assets/Cédric-Dev.png"
            alt="Cédric PIERSON"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
