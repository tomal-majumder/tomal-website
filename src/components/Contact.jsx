import React from "react";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

function Contact(){
  return (
      <div className="text-center flex flex-col gap-5 max-[426px]:mt-44 h-auto my-20" id="contact">
        <div className="text-5xl mb-10 max-[500px]:text-3xl max-[500px]:mb-5">Contact Me</div>
        <p className="text-[#7e9199] text-base">
          DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.
        </p>
        {/* <a href="tel:+19515489695" className={`inline-block w-full text-[#7e9199] hover:text-black dark:hover:text-white max-md:hover:border-none max-md:active:bg-purple-500 max-md:active:text-white max-md:px-2 hover:border-b pb-1 text-lg`}>+1-951-548-9695</a> */}
        <a href="mailto:tomalmajumder094@gmail.com" className={`inline-block w-full text-[#7e9199] hover:text-black dark:hover:text-white max-md:hover:border-none max-md:active:bg-purple-500 max-md:active:text-white max-md:px-2 hover:border-b pb-1 text-lg`}>tomalmajumder094@gmail.com</a>
        <div className="flex justify-center gap-5 mt-10">
          <a href="https://github.com/tomal-majumder" target="_blank" className="text-4xl cursor-pointer " rel="noreferrer" >
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/tomal-02a00918a/" target="_blank" className="text-4xl cursor-pointer " rel="noreferrer" >
            <FaLinkedin />
          </a>
        </div>
      </div>
  )
}

export default Contact;