"use client";
import Image from "next/image";
import React, { useState } from "react";

function Hero() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section className="text-gray-700 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-3/4 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Before they sold out
            <br className="hidden lg:inline-block" />
            readymade gluten
          </h1>
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className="flex justify-center">
            <button className="button border inline-flex text-white bg-blue-600 py-2 px-6 focus:outline-none hover:bg-transparent hover:text-gray-700 rounded text-lg">
              Instagram
            </button>
            <button className="button border ml-4 inline-flex hover:text-white bg-transparent hover:bg-blue-600 py-2 px-6 focus:outline-none rounded text-lg">
              Telegram
            </button>
          </div>
        </div>
        <Image
          className={`object-contain object-center rounded bg-transparent ${
            isLoading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          }`}
          src="https://o.remove.bg/downloads/0c33b939-d4b5-4949-8c7b-eb07927d44c5/87f2ec93e7e4d9b4a9331a8b7042fae1_1_-removebg-preview.png"
          alt="hero"
          width={400}
          height={300}
          onLoadingComplete={() => setIsLoading(false)}
        />
      </div>
    </section>
  );
}

export default Hero;
