import { useEffect, useState } from "react"
import { useTrail, animated, easings } from "@react-spring/web"

import WorkExperience from "./WorkExperience"
import Projects from "./Projects"
import Education from "./Education"
import Resume from "./Resume"
import Blog from "./Blog"
import Contact from "./Contact"
import Misc from "./Misc"
import { GRIDS } from "../constants"

export default function WorkGrid({ setCurrentGrid, animatedStyles }) {
  const [nameIdx, setNameIdx] = useState(0)
  const name = "Work Experience".split("")

  const [subheadingIdx, setSubheadingIdx] = useState(0)
  const subheading = "Here are the places I've worked at over the years".split(
    ""
  )

  useEffect(() => {
    const id = setInterval(() => {
      if (nameIdx < name.length) {
        setNameIdx(nameIdx + 1)
      }
      if (subheadingIdx < subheading.length) {
        setSubheadingIdx(subheadingIdx + 1)
      }
    }, 100)

    return () => {
      clearInterval(id)
    }
  })

  const trails = useTrail(5, {
    from: { scale: 0 },
    to: { scale: 1 },
    leave: { scale: 1 },
    config: {
      easing: easings.easeInBack,
      delay: 300,
    },
  })

  return (
    <animated.div className='grid grid-cols-1 lg:grid-cols-9 lg:grid-rows-9 w-screen lg:h-screen p-5 gap-5 bg-stone-200'>
      <animated.div
        style={animatedStyles}
        className='row-start-4 lg:row-span-3 lg:col-span-4'
      >
        <animated.div
          style={trails[1]}
          className='w-full h-full bg-[#BC4749] border border-black'
        >
          <img
            src="https://i.pinimg.com/736x/b2/c8/8c/b2c88cc60c9dd46457c7aa11564f07f6.jpg"
            className="w-full h-full object-cover"
          />
        </animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        className='lg:row-span-3 lg:col-span-5'
      >
        <animated.div
          style={trails[3]}
          className='w-full h-full relative bg-[#A7C957] border border-black'
        >
          <img
            src="https://i.pinimg.com/736x/28/3b/7d/283b7d4ba51e2674d0b192b26353bc28.jpg"
            className="w-full h-full object-cover"
          />
        </animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        className='lg:col-span-3 lg:row-span-6'
      >
        <animated.div
          style={trails[2]}
          className='w-full h-full relative bg-[#6A994E] border border-neutral-900'
        >
          <img
            src="https://i.imgur.com/pN2blzP.png"
            className="w-full h-full object-cover"
          />
        </animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        onClick={() => setCurrentGrid(GRIDS[0])}
        className='row-start-1 lg:col-span-3 lg:row-span-3'
      >
        <animated.div
          style={trails[0]}
          className='w-full h-full p-10 bg-[#386641] border border-black flex flex-col items-center justify-center gap-3'
        >
          <div className='border border-neutral-900 bg-[#F2E8CF] w-fit px-5 py-3'>
            <span className='text-4xl font-bold text-[#BC4749]' id='home'>
              {name.slice(0, nameIdx).join("")}
              <span className='inline-block mx-2 w-6 h-1 bg-[#2A9D8F] animate-pulse'></span>
            </span>
          </div>
          <div className='border text-center border-neutral-900 bg-[#F2E8CF] w-fit px-5 py-2'>
            <span className='lg:text-md text-[#BC4749]'>
              {subheading.slice(0, subheadingIdx).join("")}
              <span className='inline-block w-3 h-0.5 mx-1 bg-[#2A9D8F] animate-pulse'></span>
            </span>
          </div>
        </animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        className='lg:row-span-6 lg:col-span-3'
      >
        <animated.div
          style={trails[4]}
          className='w-full h-full relative bg-[#6A994E] border border-neutral-900'
        >
          <img
            src="https://i.pinimg.com/736x/a1/a3/2d/a1a32da7a27b1880e80287311cea3973.jpg"
            className="w-full h-full object-cover"
          />
        </animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        className='lg:row-span-3 lg:col-span-3'
      >
        <animated.div
          style={trails[4]}
          className='w-full h-full relative bg-[#6A994E] border border-neutral-900 flex flex-col items-center justify-center p-6'
        >
          <p className="text-center text-white text-lg mb-4">
            At Cloudpal, I worked as a DevOps Engineer where I was responsible for designing, deploying, and maintaining scalable infrastructure solutions using a combination of cloud tech.
          </p>
          <a
            href="https://www.linkedin.com/in/ambatibhargavi/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 bg-[#FFDAB9] text-black rounded-md shadow-md hover:scale-105 hover:shadow-lg hover:ring-4 hover:ring-[#FFA07A] transition-all"
          >
            View
          </a>
        </animated.div>
      </animated.div>
    </animated.div>
  )
}
