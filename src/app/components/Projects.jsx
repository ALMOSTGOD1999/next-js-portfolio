import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import SlideUp from "./SlideUp";

const Myprojects = [
  {
    name: "Grave the Crave",
    description:
      "Grave the Crave is a web app that says a lot about the bakery and the items of it.",
    image: "/gtc.png",
    github: "https://github.com/ALMOSTGOD1999/grave-the-crave",
    link: "https://grave-the-crave.vercel.app/",
  },
  {
    name: "COSMOS RedSHIFT",
    description:
      "COSMOS RedSHIFT is a physics tutorial app, made with Next.JS and react",
    image: "/cosmos.webp",
    github: "https://github.com/ALMOSTGOD1999/cosmosredshift",
    link: "https://platoio.com/register",
  },
  {
    name: "Mesopoptemia",
    description: "Mesopotemia is a blog app build on next.js and react.",
    image: "/m.png",
    github: "https://github.com/ALMOSTGOD1999/MegaBlogAppwrite",
    link: "https://appwriteblog-kappa-gules.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>
      <div className="flex flex-col space-y-28">
        {Myprojects.map((projects, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="md:w-1/2">
                    <Link href={projects.link}>
                      <Image
                        width={1000}
                        height={1000}
                        src={projects.image}
                        alt=""
                        className="rounded-xl  shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{projects.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {projects.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={projects.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={projects.link} target="_blank">
                        {" "}
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
