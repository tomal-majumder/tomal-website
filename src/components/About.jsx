import React from "react";
import pic from "../assets/images/pic.jpg"

function About() {
  return (
    <div className="mx-auto h-auto my-36 max-xl:my-20" id="about">
      <div className="flex gap-6 justify-between items-center max-md:flex-wrap max-xl:justify-center">
        <div className="w-2/3 max-xl:w-full text-left max-md:text-center">
          <h1 className="text-3xl max-md:text-4xl mb-5">Hi, I'm Tomal 👋</h1>
          <p className="text-1.5xl max-md:text-base mb-5 font-light">
          I'm a Computer Science graduate student at the University of California, Riverside (MSc, 2025), 
          with a strong background in systems, databases, and large-scale data processing.
          I’m passionate about performance, scalability, and turning research ideas into real-world solutions. 
          My strength lies in understanding systems end-to-end — from writing efficient code to optimizing data pipelines and building scalable, 
          fault-tolerant architectures.
          </p>
          <a href="#contact" className="p-2 px-4 rounded-md text-base bg-white text-purple-500 hover:bg-purple-500 hover:text-white transition-all inline-block w-auto">GET IN TOUCH</a>
        </div>
        <img
          className="h-80 w-80 max-xl:h-64 max-xl:w-64 rounded-full object-cover max-[426px]:h-auto max-[426px]:w-full max-[426px]:rounded-full max-[426px]:mb-5"
          src={pic}
          alt=""
        />
      </div>
    </div>
  );
}

export default About;
