import React from 'react'
import "./skills.css"
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from "framer-motion"

const Skills = () => {
    const ref=useRef(null)
    const isInView=useInView(ref, {once:true})
    const mainControld=useAnimation()
    useEffect(() => {
        if(isInView){
        mainControld.start("visible")
        }
    }, [isInView])
  return (
    <div className='skills-page'>
        <div className="header" ref={ref}>
        <motion.h1 
          variants={{
            hidden:{opacity:0,x:-600},
            visible:{opacity:1,x:0}
          }}
          initial="hidden"
          animate={mainControld}
          transition={{duration:1,delay:0.25}}
          >SKILLS</motion.h1>
        </div>
        <div className="skills">
            <div className="item">
                <img src="html.png" alt="" />
                <p>HTML</p>
            </div>
            <div className="item">
                <img src="css.png" alt="" />
                <p>CSS</p>
            </div>
            <div className="item">
                <img src="js.png" alt="" />
                <p>Javascript</p>
            </div>
            <div className="item">
               <img src="react.png" alt="" />
               <p>React.js</p>
            </div>
            <div className="item">
                <img src="python.png" alt="" />
                <p>Python</p>
            </div>
            <div className="item">
                <img src="figma.png" alt="" />
                <p>Figma</p>
            </div>
            <div className="item">
                <img src="mysql.png" alt="" />
                <p>MySQL</p>
            </div>
            <div className="item">
                <img src="node.png" alt="" />
                <p>Node.js</p>
            </div>
            <div className="item">
                <img src="express.png" alt="" />
                <p>Express.js</p>
            </div>
        </div>
    </div>
  )
}

export default Skills