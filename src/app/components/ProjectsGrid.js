import { useEffect, useState } from "react";
import { useTrail, animated, easings } from "@react-spring/web";
import { GRIDS } from "../constants";

export default function ProjectsGrid({ setCurrentGrid, animatedStyles }) {
  const [nameIdx, setNameIdx] = useState(0);
  const name = "Projects".split("");

  const [subheadingIdx, setSubheadingIdx] = useState(0);
  const subheading = "Here are a few personal projects I've worked on over the years".split("");

  // Typing effect for title and subheading
  useEffect(() => {
    const id = setInterval(() => {
      if (nameIdx < name.length) {
        setNameIdx((prev) => prev + 1);
      }
      if (subheadingIdx < subheading.length) {
        setSubheadingIdx((prev) => prev + 1);
      }
    }, 100);

    return () => clearInterval(id);
  }, [nameIdx, subheadingIdx, name.length, subheading.length]);

  // Spring animation for grid elements
  const trails = useTrail(8, {
    from: { scale: 0 },
    to: { scale: 1 },
    leave: { scale: 1 },
    config: {
      easing: easings.easeInBack,
      delay: 300,
    },
  });

  const projects = [
    {
      title: "Spotify Playlist Automation",
      description: "I created a Spotify playlist automation project using Terraform, leveraging Infrastructure as Code (IaC) to manage playlist creation...",
      link: "https://github.com/ambatibhargavi/TerraformSpotify",
      bgColor: "#A7C957",
      textColor: "black",
      buttonColor: "pink",
    },
    {
      title: "Argo Rollouts Deployment",
      description: "Argo Rollouts is a Kubernetes controller enabling advanced deployment strategies like Canary, Blue-Green, and Progressive Delivery...",
      link: "https://github.com/ambatibhargavi/Kubernetes-Deployment",
      bgColor: "#BC4749",
      textColor: "white",
      buttonColor: "yellow",
    },
    {
      title: "Custom LLM Deployment",
      description: "This project involves creating and deploying a custom Large Language Model (LLM) using Ollama...",
      link: "https://github.com/ambatibhargavi/ollama-deployment",
      bgColor: "#6A994E",
      textColor: "white",
      buttonColor: "#D8BFD8",
    },
    {
      title: "Snowflake Automation",
      description: "This Terraform project automates Snowflake user creation using loops (for_each)...",
      link: "https://github.com/ambatibhargavi/terraformloops",
      bgColor: "#6A994E",
      textColor: "white",
      buttonColor: "#D8BFD8",
    },
    {
      title: "Interactive Chatbot",
      description: "This project is an interactive chatbot using the Llama 2 language model...",
      link: "https://github.com/ambatibhargavi/chatbot",
      bgColor: "#BC4749",
      textColor: "white",
      buttonColor: "yellow",
    },
    {
      title: "Dockerized CI/CD Pipeline",
      description: "This project includes a detailed Dockerized CI/CD pipeline setup for microservices...",
      link: "https://github.com/ambatibhargavi/Dockerized-Pipeline",
      bgColor: "#A7C957",
      textColor: "black",
      buttonColor: "pink",
    },
  ];

  return (
    <animated.div className="grid grid-cols-1 lg:grid-cols-9 lg:grid-rows-9 w-screen lg:h-screen p-5 gap-5 bg-stone-200">
      {/* Title Section */}
      <animated.div
        style={animatedStyles}
        onClick={() => setCurrentGrid(GRIDS[0])}
        className="row-start-1 lg:col-span-3 lg:row-span-3"
      >
        <animated.div
          style={trails[0]}
          className="w-full h-full p-10 bg-[#386641] border border-black flex flex-col items-center justify-center gap-3"
        >
          <div className="border border-neutral-900 bg-[#F2E8CF] w-fit px-5 py-3">
            <span className="text-5xl font-bold text-[#BC4749]">
              {name.slice(0, nameIdx).join("")}
              <span className="inline-block mx-2 w-6 h-1 bg-[#2A9D8F] animate-pulse"></span>
            </span>
          </div>
          <div className="border text-center border-neutral-900 bg-[#F2E8CF] w-fit px-5 py-2">
            <span className="lg:text-md text-[#BC4749]">
              {subheading.slice(0, subheadingIdx).join("")}
              <span className="inline-block w-3 h-0.5 mx-1 bg-[#2A9D8F] animate-pulse"></span>
            </span>
          </div>
        </animated.div>
      </animated.div>

      {/* Project Cards */}
      {projects.map((project, index) => (
        <animated.div
          key={index}
          style={animatedStyles}
          className={`lg:row-span-3 lg:col-span-${index % 2 === 0 ? 5 : 4}`}
        >
          <animated.div
            style={trails[index + 1]}
            className={`w-full h-full relative bg-[${project.bgColor}] border border-black flex items-center justify-center`}
          >
            <p className={`text-center text-${project.textColor} text-lg`}>
              {project.description}
            </p>
            <div className="flex justify-center items-center w-full h-full">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-2 bg-${project.buttonColor}-500 text-white rounded-md shadow-md hover:bg-${project.buttonColor}-600 hover:shadow-lg transition-all`}
              >
                View Project
              </a>
            </div>
          </animated.div>
        </animated.div>
      ))}
    </animated.div>
  );
}
