import React from 'react'
import "./about.css"
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from "framer-motion"


const About = () => {



    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref = useRef(null)
    const driveView = useInView(ref1, { once: true })
    const futureView = useInView(ref2, { once: true })
    const headerView = useInView(ref, { once: true })
    const mainControld1 = useAnimation()
    const mainControld2 = useAnimation()
    const mainControld3 = useAnimation()
    useEffect(() => {
        if (futureView) {
            mainControld1.start("visible")
        }
    }, [futureView])
    useEffect(() => {
        if (driveView) {
            mainControld2.start("visible")
        }
    }, [driveView])
    useEffect(() => {
        if (headerView) {
            mainControld3.start("visible")
        }
    }, [headerView])

    return (
        <div className='about-main'>
            <div className="header" ref={ref}>
                <motion.h1
                    variants={{
                        hidden: { opacity: 0, x: -600 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    initial="hidden"
                    animate={mainControld3}
                    transition={{ duration: 1, delay: 0.25 }}
                >Who am I</motion.h1>
            </div>
            <div className="content">
                <div className="about">
                    <p> Hello, I'm Sagar Patra, a passionate frontend developer enthusiast eager to expand skills into backend development, poised to
                        contribute innovative solutions in the tech sector.
                        My journey in the world of technology has been an exciting one, driven by a relentless curiosity to explore and innovate.</p>
                </div>
                <div className="drive">
                    <div className="left">
                        <img src="drives.png" alt="" />
                    </div>
                    <div className="right" ref={ref1}>
                        <motion.h1 variants={{
                            hidden: { opacity: 0, x: 600 },
                            visible: { opacity: 1, x: 0 }
                        }}
                            initial="hidden"
                            animate={mainControld2}
                            transition={{ duration: 1, delay: 0.25 }}>💡 What Drives Me:</motion.h1> <br />
                        <motion.p variants={{
                            hidden: { opacity: 0, x: 600 },
                            visible: { opacity: 1, x: 0 }
                        }}
                            initial="hidden"
                            animate={mainControld2}
                            transition={{ duration: 1, delay: 0.25 }}>I'm deeply fascinated by the ever-evolving landscape of technology and its power to transform the way we live and work. <br />
                            I thrive on the challenges that come with solving complex problems and crafting elegant solutions.</motion.p>
                    </div>
                </div>
                <div className="goals">
                    <div className="left" ref={ref2}>
                        <motion.h1 variants={{
                            hidden: { opacity: 0, x: -600 },
                            visible: { opacity: 1, x: 0 }
                        }}
                            initial="hidden"
                            animate={mainControld1}
                            transition={{ duration: 1, delay: 0.25 }}>🚀 Future Goals:</motion.h1> <br />
                        <motion.p variants={{
                            hidden: { opacity: 0, x: -600 },
                            visible: { opacity: 1, x: 0 }
                        }}
                            initial="hidden"
                            animate={mainControld1}
                            transition={{ duration: 1, delay: 0.25 }}>As I approach the completion of my Bachelor's degree, I'm eager to transition from academia to the professional world, <br />
                            where I can contribute my skills and knowledge to meaningful projects. I'm particularly interested in web development and
                            software engineering.</motion.p>
                    </div>
                    <div className="right">
                        <img src="future.png" alt="" />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default About