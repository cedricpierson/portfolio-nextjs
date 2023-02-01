import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectItem from "./ProjectItem";
import yoleImg from "../public/assets/projects/yole.jpg";
import apneaImg from "../public/assets/projects/apnea.jpg";
import partyImg from "../public/assets/projects/party.jpg";
import knImg from "../public/assets/projects/kn.jpg";
import ytakImg from "../public/assets/projects/ytak.jpg";
import wildcarsImg from "../public/assets/projects/wildcars.jpg";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16 ">
        <p className="text-xl tracking-widest uppercase text-[#519657]">
          Projets
        </p>
        <h2 className="py-4">Mes petites affaires</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="YTAK"
            backgroundImg={ytakImg}
            projectUrl="/ytak"
            stack="Next MUI"
          />
          <ProjectItem
            title="WildCars"
            backgroundImg={wildcarsImg}
            projectUrl="/wildcars"
            stack="Next MapBox"
          />
          <ProjectItem
            title="Y Olé Flamenco"
            backgroundImg={yoleImg}
            projectUrl="/yole"
            stack="Joomla UIkit"
          />
          <ProjectItem
            title="APNEA"
            backgroundImg={apneaImg}
            projectUrl="/apnea"
            stack="React MUI"
          />
          <ProjectItem
            title="Party Place App"
            backgroundImg={partyImg}
            projectUrl="/party-place"
            stack="React MUI Spotify API"
          />
          <ProjectItem
            title="Karmanota"
            backgroundImg={knImg}
            projectUrl="/karmanota"
            stack="Joomla UIkit"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
