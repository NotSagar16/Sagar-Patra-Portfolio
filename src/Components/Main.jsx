"use client"
import React from 'react'
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
const Main = () => {

    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['frontend developer','web developer'],
            typeSpeed: 60,
            backSpeed:60,
            loop:true,
            showCursor:true,
            backDelay: 700,
        });
        
        return () => {
            typed.destroy();
        };
    }, []); 


    return (
        <div className="main">
            <div className="main-content">
                <h2>
                    Hi, I am Sagar, a <span ref={el}>frontend developer</span>
                </h2>
                <h2>
                    with a passion for full-stack development
                </h2>
            </div>
            <div className="developer">
                <div className="image">
                    <img src="me.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Main