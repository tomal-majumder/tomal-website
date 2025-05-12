// components/Education.jsx
import React from "react";
import { FaUniversity } from "react-icons/fa";

const education = [
  {
    degree: "Masters in Computer Science and Engineering (MSC)",
    school: "University of California, Riverside (UCR)",
    date: "June 2025 (expected)",
    gpa: "GPA: 3.89/4.0",
  },
  {
    degree: "Bachelor of Science in Computer Science and Engineering (CSE)",
    school: "Bangladesh University of Engineering and Technology (BUET)",
    date: "2015 - 2019",
    gpa: "GPA: 3.85/4.0",
  },
];

const Education = () => {
  return (
    <section id="education" className="my-20">
      <h1 className="text-6xl max-md:text-4xl font-bold mb-10">Education</h1>
      <div className="space-y-8">
        {education.map((edu, i) => (
          <div key={i} className="flex justify-between items-start gap-6">
            <div className="flex items-center gap-3">
              <div>
                <h3 className="text-xl font-semibold">{edu.school}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{edu.degree}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{edu.gpa}</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">{edu.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
