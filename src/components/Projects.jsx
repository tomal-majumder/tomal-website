// components/Projects.jsx
import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { AsterixDB, Project2, Project3, Project4, Project5, Project6, CRUD_App, Portfolio } from "../assets/images/index.js";

function Projects() {
  const projects = [
    {
      id: 1,
      image: AsterixDB,
      imageAlt: "AsterixDB",
      name: "Shapefile Format Suppot in Apache AsterixDB",
      description: [
      "Implemented ESRI Shapefile parser into Apache AsterixDB, allowing direct querying and processing of spatial data.",
      "Improved the speed of spatial data queries by up to 10x by applying projection and filter pushdown."],
      links: {
        gitHub: "https://github.com/talhashah-dev/blogging-app"      
      },
      tags: ["Apache Asterixdb", "Spatial database", "Shapefile", "Query Optimization"],
    },
    {
      id: 2,
      image: Project2,
      imageAlt: "Pattern Matching",
      name: "Real-Time Trajectory Pattern Matching in Spatial Databases (current project)",
      imageStyle: "object-contain h-100 p-1", // 👈 new field
      description: [
        "Developing a scalable system to identify patterns in streams of user trajectory data.",
        "Accelerated large-scale spatial pattern query execution by over 3x by merging redundant state computations.",
        "Currently exploring spatial proximity-based state merging to further enhance performance and scalability."
      ],
      links: {
        gitHub: "https://github.com/talhashah-dev/portfolio"
      },
      tags: ["Finite State Machines", "Spatial Query Optimization", "Pattern Matching"],
    },
    {
      id: 4,
      image: Project3,
      imageAlt: "Wiki Search Engine",
      name: "Wiki Search Engine for Texts & Images",
      imageStyle: "object-contain h-80 p-1", // 👈 new field
      description: [
        "Developed a distributed crawler to process 8 GB of Wikipedia texts and images, achieving an average throughput of 16 ~ 20 pages/second across multiple nodes utilizing a Redis-based task queue.",
        "Engineered a Spark-based inverted index pipeline, and enabled full search functionality with an average query latencies under 20 ms for top-20 ranked results.",
        "Implemented a user-friendly interface, allowing users to search and retrieve relevant Wikipedia articles and images efficiently.",
      ],
      links: {
        gitHub: "https://github.com/talhashah-dev/weather-app-react",
        hosted: "https://weather-app-react-st.netlify.app/",
      },
      tags: ["Python", "Redis", "Spark", "Slurm", "React", "NodJS", "Mongodb"],
    },
    {
      id: 5,
      image: Project4,
      imageAlt: "StackOverflow Data Mining",
      name: "Mining Large-Scale StackOverflow Data",
      imageStyle: "object-contain h-80 p-1", // 👈 new field
      description: [
        "Processed and queried over 50 GB of StackOverflow XML posts using SparkSQL to identify key trending technologies, in-demand skills, and geographical distributions of usage.",
        "Created a visualization dashboard to present insights on technology trends, user engagement, and geographical distributions, aiding in data-driven decision-making.",
        "Utilized MapReduce-based processing to identify frequently co-occurring tags, enabling efficient topic clustering.",
        "Developed a supervised regression model to predict response times (within 3 hours) for new questions."

      ],
      links: {
        gitHub: "https://github.com/talhashah-dev/react-crud-app",
        hosted: "https://react-crud-app-gilt.vercel.app/",
      },
      tags: ['ETL', 'Scala', 'HDFS', 'Spark', 'MLlib'],  
    },
    {
      id: 5,
      image: Project5,
      imageAlt: "test case prioritization",
      name: "Test Case Prioritization Toolkit",
      imageStyle: "object-contain h-90 p-1", // 👈 new field
      description: [
        "Developed a Python toolkit to evaluate test case prioritization strategies (Random, Total, Additional) under different coverage criteria (Statement, Branch)",
        "Studied fault exposure on the reduced test suites, demonstrating that Additional Prioritization with Branch coverage often exposes more faults with fewer tests compared to other strategies"
      ],
      links: {
        gitHub: "https://github.com/talhashah-dev/react-crud-app",
        hosted: "https://react-crud-app-gilt.vercel.app/",
      },
      tags: ['Python', 'OS', 'glob', 'Subprocess', 'gcc', 'gcov', 'json'],  
    },
    {
      id: 5,
      image: Project6,
      imageAlt: "sentiment analysis",
      imageStyle: "object-contain h-60 p-1", // 👈 new field
      name: "Sentiment Analysis of IMDB Movie Reviews",
      description: [
        "Developed a sentiment analysis pipeline using NLTK/spaCy for preprocessing (stop words, lemmatization) and TF-IDF for feature extraction.",
        "Implemented a LinearSVC model for classification, achieving 90% accuracy with optimized hyperparameters through Grid Search.",
        "Enhanced classification performance by fine-tuning a pre-trained RoBERTa model, achieving 91.8% accuracy and an F1-score of 0.92."
      ],
      links: {
        gitHub: "https://github.com/talhashah-dev/react-crud-app",
        hosted: "https://react-crud-app-gilt.vercel.app/",
      },
      tags: ['Pandas', 'scikit-learn', 'PyTorch', 'NLTK', 'spaCy', 'Hugging Face Transformers'],  
    },
  ];

  return (
    <div className="pb-5 h-auto my-20" id="projects">
      <h1 className="text-6xl max-md:text-4xl font-bold mb-10">Projects</h1>

      <div className="flex flex-col gap-6">
        {projects.map((cards) => (
          <div
            className="flex flex-col md:flex-row w-full bg-white dark:bg-[#1e1e1e] shadow-md rounded-lg overflow-hidden border dark:border-gray-700"
            key={cards.id}
          >
            <img
              src={cards.image}
              alt={cards.imageAlt}
              className={`w-full md:w-1/3 ${cards.imageStyle || "object-contain h-64 p-4"}`}
            />


            <div className="p-4 flex flex-col justify-between md:w-2/3">
              <div>
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    {cards.name}
                  </h2>
                  <div className="flex gap-4 text-xl">
                    <a
                      href={cards.links.gitHub}
                      target="_blank"
                      rel="noreferrer"
                      title="GitHub Repo"
                    >
                      <FaGithub className="hover:text-purple-500" />
                    </a>
                    <a
                      href={cards.links.hosted}
                      target="_blank"
                      rel="noreferrer"
                      title="Live Preview"
                    >
                      <FaExternalLinkAlt className="hover:text-purple-500" />
                    </a>
                  </div>
                </div>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
                {Array.isArray(cards.description) ? (
                  cards.description.map((point, idx) => <li key={idx}>{point}</li>)
                ) : (
                  <li>{cards.description}</li>
                )}
              </ul>

              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {cards.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 dark:bg-gray-700 text-sm px-3 py-1 rounded-full text-gray-700 dark:text-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;