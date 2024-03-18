import React from 'react'
import "./education.css"
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from "framer-motion"

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControld = useAnimation()
  useEffect(() => {
    if (isInView) {
      mainControld.start("visible")
    }
  }, [isInView])

  return (
    <div className='eduPage'>
      <div className="eduHeader" ref={ref}>
        <motion.h1
          variants={{
            hidden: { opacity: 0, x: -600 },
            visible: { opacity: 1, x: 0 }
          }}
          initial="hidden"
          animate={mainControld}
          transition={{ duration: 1, delay: 0.25 }}
        >EDUCATION</motion.h1>
      </div>
      <div className="EduMain">
        <div className="left">
          <div className="content">
            <p>2017-2020</p>
            <h5>Higher Secondary Education</h5>
            <h5>Kendriya Vidyalaya No:2 Kharagpur</h5>

          </div>
          <div className="content">
              <p>2020-2024</p>
              <h5>Bachelor of Engineering - Computer Science Engineering</h5>
              <h5>Chandigarh University</h5>
          </div>
        </div>
        <div className="right">
          <img src="education.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Education