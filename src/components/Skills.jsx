import React from "react";

function Skills() {
  const cards = [
    {
      title: "Language",
      items: ["C", "C++", "Java", "Python", "HTML", "CSS", "SQL", "Bash", "Assembly", "JavaScript", "Scala"],

    },
    {
      title: "Library and Frameworks",
      items: ["AsterixDB", "MongoDB", "Maven", "PostgreSQL", "Spark", "Hadoop", "Scikit-learn", "Node.js", "Django", "Android"],
    },
    {
      title: "Version Control",
      items: ["Git", "Github"],
    },
    {
      title: "Other tools & Services",
      items: ["IntelliJ IDEA", "Visual Studio Code", "LaTeX", "Docker", "LLVM", "Flex & Bison", "MATLAB", "Jupyter Notebook"],
    },
  ];

  return (
    <div className="pb-5 h-auto my-20" id="skills">
      <div className="text-center font-bold flex justify-between items-center">
        <h1 className="text-6xl max-md:text-4xl">Skills</h1>
        {/* Optional placeholder for subtitle or animation */}
        <div className="text-[#7e9199] text-6xl max-md:text-4xl"></div>
      </div>

      <div className="flex max-sm:flex-col items-center justify-between mt-14 gap-10 flex-wrap">
        {cards.map((value, index) => (
          <div
            className="flex flex-col gap-10 max-sm:gap-5 max-md:w-full w-5/12"
            key={index}
          >
            <div className="flex flex-col gap-5">
              <h4 className="text-2xl">{value.title}</h4>
              <ul className="list-disc list-inside text-lg">
                {value.items.map((item, id) => (
                  <li key={id}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
