import React from 'react'
import './projects.css'
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from "framer-motion"

const Projects = () => {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControld = useAnimation()
  useEffect(() => {
    if (isInView) {
      mainControld.start("visible")
    }
  }, [isInView])


  return (
    <div className='projects-page'>
      <div className="heading" ref={ref}>
        <motion.h1
          variants={{
            hidden: { opacity: 0, x: 600 },
            visible: { opacity: 1, x: 0 }
          }}
          initial="hidden"
          animate={mainControld}
          transition={{ duration: 1, delay: 0.25 }}
        >PROJECTS</motion.h1>
      </div>
      <div className="cards">
        <div className='card'>
          <img src="weather.png" />
          <p className="legend">Weather App</p>
        </div>
        <div className='card'>
          <img src="emailverification.png" />
          <p className="legend">Email Verification App</p>
        </div>
        <div className='card'>
          <img src="youtube.png" />
          <p className="legend">Youtube Clone</p>
        </div>
        <div className='card'>
          <img src="signature.jpg" />
          <p className="legend">Signature Matching System</p>
        </div>
        <div className='card'>
          <img src="BMI.png" />
          <p className="legend">BMI Calculator</p>
        </div>
        <div className='card'>
          <img src="password.jpg" />
          <p className="legend">Random Password Generator</p>
        </div>
        <div className='card'>
          <img src="textcraft.png" />
          <p className="legend">TextCrafter</p>
        </div>
        <div className='card'>
          <img src="flipkart.jpg" />
          <p className="legend">Flipkart Clone</p>
        </div>

      </div>

    </div>

  )
}

export default Projects