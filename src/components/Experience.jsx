// components/Experience.jsx
import React from "react";
import ucrLogo from "../assets/images/ucr.png";

const experiences = [
  {
    title: "Research Assistant",
    company: "University of California, Riverside",
    tags: ["Apache AsterixDB", "Big Database Management Systems", "Geospatial Query Optimization"],
    date: "Sep 2021 - Present",
    description:
      "Led integration of ESRI Shapefile parser into Apache AsterixDB for direct spatial query support, achieving up to 10x query performance gain. Developed a scalable trajectory pattern matcher that sped up execution over 3x through redundant state optimization, and is being extended with spatial proximity-based techniques.",
  },
  {
    title: "Graduate Teaching Assistant",
    company: "University of California, Riverside",
    tags: ["Database Systems", "Big Data", "Spark", "PostgreSQL", "NoSQL"],
    date: "Sep 2022 - Jun 2023",
    description:
      "Instructed core Computer Science courses including Database Management and Big Data. Designed labs, created instructional tutorials, and guided students in hands-on assignments using SQL, Spark, and NoSQL frameworks.",

  },
  {
    title: "Lecturer",
    company: "United International University, Bangladesh",
    tags: ["OOP", "Compilers", "Theory of Computation", "Simulation"],
    date: "Apr 2019 - Sep 2021",
    description:
      "Delivered undergraduate lectures on programming and theoretical computer science. Designed course content and assessments across subjects like Compiler Design and Simulation, using tools like LLVM, Flex & Bison, and MATLAB.",
    }
];

const Experience = () => {
  return (
    <section id="experience" className="my-20">
      <h1 className="text-6xl max-md:text-4xl font-bold mb-10">Experience</h1>
      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <div key={i} className="flex justify-between items-start gap-6">
            <div className="flex items-center gap-3">
              <div>
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{exp.company}</p>
                <div className="flex gap-2 mt-1 flex-wrap">
                  {exp.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-200 dark:bg-gray-700 text-sm px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {exp.description && (
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                    {exp.description}
                  </p>
                )}
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">{exp.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;