import { useEffect, useState } from "react";
import { useTrail, animated, easings } from "@react-spring/web";
import { GRIDS } from "../constants";

export default function ProjectsGrid({ setCurrentGrid, animatedStyles }) {
  const [nameIdx, setNameIdx] = useState(0);
  const name = "Projects".split("");

  const [subheadingIdx, setSubheadingIdx] = useState(0);
  const subheading =
    "Here are a few personal projects I've worked on over the years".split("");

  useEffect(() => {
    const id = setInterval(() => {
      if (nameIdx < name.length) {
        setNameIdx(nameIdx + 1);
      }
      if (subheadingIdx < subheading.length) {
        setSubheadingIdx(subheadingIdx + 1);
      }
    }, 100);

    return () => {
      clearInterval(id);
    };
  });

  const trails = useTrail(7, {
    from: { scale: 0 },
    to: { scale: 1 },
    leave: { scale: 1 },
    config: {
      easing: easings.easeInBack,
      delay: 300,
    },
  });

  return (
    <animated.div className="grid grid-cols-1 lg:grid-cols-9 lg:grid-rows-9 w-screen lg:h-screen p-5 gap-5 bg-stone-200">
      <animated.div
        style={animatedStyles}
        className="row-start-4 lg:row-span-3 lg:col-span-5"
      >
        <animated.div
          style={trails[1]}
          className="w-full h-full bg-[#A7C957] border border-black flex items-center justify-center"
        >
          <p className="text-center text-black text-lg">
            Project 1: I Created a s3 Bucket and have given all the required s3 Bucketpolicies and have deployed my Static website on s3 bucket
          </p>
          <div className="flex justify-center items-center w-full h-full">
            <a
              href="https://github.com/gauravanand2600"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-pink-500 text-white rounded-md shadow-md hover:bg-pink-600 hover:shadow-lg transition-all"
            >
              View Project
            </a>
          </div>
        </animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        className="lg:row-span-3 lg:col-span-4"
      >
        <animated.div
          style={trails[3]}
          className="w-full h-full relative bg-[#BC4749] border border-black flex items-center justify-center"
        >
          <p className="text-center text-white text-lg">
            Project 2: I have implemented VPC Peering between two different VPC that are created in various availability zones <br /> After creating VPC, I have also checked the demonstration for it by creating ec2 instances.
          </p>
          <div className="flex justify-center items-center w-full h-full">
            <a
              href="https://github.com/gauravanand2600"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-yellow-500 text-black rounded-md shadow-md hover:bg-yellow-600 hover:shadow-lg transition-all"
            >
              View Project
            </a>
          </div>
        </animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        className="lg:col-span-3 lg:row-span-6"
      >
        <animated.div
          style={trails[2]}
          className="w-full h-full relative bg-[#6A994E] border border-neutral-900 flex items-center justify-center"
        >
          <p className="text-center text-white text-lg">
            Project 3: I have created a Spotify Playlist using terraform, That allows us to create playlists in spotify using terraform. which helps in adding songs to the playlists, creating an album and making the required playlists
          </p>
          <div className="flex justify-center items-center w-full h-full">
            <a
              href="https://github.com/gauravanand2600"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-[#D8BFD8] text-black rounded-md shadow-md hover:bg-[#E6E6FA] hover:shadow-lg transition-all"
            >
              View Project
            </a>
          </div>
        </animated.div>
      </animated.div>

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
            <span className="text-5xl font-bold text-[#BC4749]" id="home">
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

      <animated.div
        style={animatedStyles}
        className="lg:row-span-3 lg:col-span-3"
      >
        <animated.div
          style={trails[4]}
          className="w-full h-full relative bg-[#6A994E] border border-neutral-900 flex items-center justify-center"
        >
          <p className="text-center text-white text-lg">
            Project 4: This Terraform project automates Snowflake user creation using loops (for_each), reducing code duplication and improving efficiency. Users are customized with attributes like passwords, default warehouses, roles, and namespaces.
          </p>
           <div className="flex justify-center items-center w-full h-full">
            <a
              href="https://github.com/ambatibhargavi/terraformloops"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-[#D8BFD8] text-black rounded-md shadow-md hover:bg-[#E6E6FA] hover:shadow-lg transition-all"
            >
              View Project
            </a>
          </div>
        </animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        className="lg:row-span-3 lg:col-span-4"
      >
        <animated.div
          style={trails[5]}
          className="w-full h-full relative bg-[#BC4749] border border-neutral-900 flex items-center justify-center"
        >
          <p className="text-center text-white text-lg">
            Project 5: Creating a docker file and containerizing an docker application for a flask based application 
          </p>
          <div className="flex justify-center items-center w-full h-full">
            <a
              href="https://github.com/gauravanand2600"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-yellow-500 text-black rounded-md shadow-md hover:bg-yellow-600 hover:shadow-lg transition-all"
            >
              View Project
            </a>
          </div>
        </animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        className="lg:row-span-3 lg:col-span-2"
      >
        <animated.div
          style={trails[4]}
          className="w-full h-full lg:flex justify-between items-center p-10 gap-5 bg-[#A7C957] border border-black"
        >
          <p className="text-center text-black text-lg">
            Project 6: Deploying a simple web app on kubernetes 
          </p>
           <div className="flex justify-center items-center w-full h-full">
            <a
              href="https://github.com/gauravanand2600"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-pink-500 text-white rounded-md shadow-md hover:bg-pink-600 hover:shadow-lg transition-all"
            >
              View Project
            </a>
          </div>
        </animated.div>
      </animated.div>
    </animated.div>
  );
}
