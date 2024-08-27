import { FaMicrochip } from "react-icons/fa6";
import Image from "next/image";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <section id="hero" className="pb-20 pt-36 relative">
      {/**
       *  UI: Spotlights
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="green"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid background
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
        absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
          bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/**
       *  Main Content
       */}
      <div className="flex flex-col md:flex-row justify-center items-center relative z-10 space-y-10 md:space-y-0 md:space-x-10">
        {/* Text and Buttons */}
        <div className="text-center md:text-left md:max-w-lg lg:max-w-2xl">
          <p className="uppercase tracking-widest text-xs text-green-100 mb-4">
            Innovating the Future
          </p>

          <TextGenerateEffect
            words="Engineering Solutions for Tomorrow's Challenges"
            className="text-[32px] md:text-4xl lg:text-5xl mb-4"
          />

          <p className="md:tracking-wider mb-6 text-sm md:text-lg lg:text-2xl">
            An Electronic and Telecommunication Engineering undergraduate from
            the University of Moratuwa.
          </p>

          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#projects">
              <MagicButton
                title="Explore My Work"
                icon={<FaMicrochip />}
                position="right"
              />
            </a>
            <a href="/CV.pdf" download>
              <MagicButton
                title="Download CV"
                icon={<FaMicrochip />}
                position="right"
              />
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
          <img
            src="/image.jpg" // Replace with the actual image path
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            className="rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
