"use client";
import Image from "next/image";
import React from "react";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "MySQL" },
];

const About = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left ">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Rahul and I am a{" "}
              <span className="font-bold ">{"highly ambitious"}</span>,
              <span className="font-bold "> and {"self-motivated"}</span>,
              <span className="font-bold ">{" driven"}</span> Frontend Developer
              based on Kolkata, India.
            </p>
            <br />

            <p>
              I graduated from Camellia Institute of Technology & Management, in
              2023 in Civil Engineering, and later at the end of the year 2023 I learned Web Development and have been working in the field ever
              since.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From reading, playing chess, traveling, to making dishes, I am
              always seeking new experiences and love to keep myself engaged and
              learning new things.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
          </div>

          <div>
            <h1 className="text-gray-900 font-bold">My Skills</h1>
            <div>
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold "
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>

            <Image
              height={350}
              width={350}
              src="/pr.jpg"
              alt="image"
              className="mt-10 hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
