import React from 'react'
import './Styles/Tecno.modules.css'
import { FaReact, FaHtml5, FaNode } from 'react-icons/fa';
import { DiCss3 } from 'react-icons/di';
import { SiRedux, SiExpress, SiSequelize, SiPostgresql, SiJavascript, SiTypescript, SiGraphql, SiApollographql } from 'react-icons/si'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function Tecno() {
    const controls = useAnimation();
    const { inView, ref } = useInView();
    if (inView) {
        controls.start({
            x: 0,
            opacity: 1,
            scale: 1,
            rotate: [360, 0],
            transition: {
                duration: 1.5,
                delay: .5,
                staggerChildren: 1
            }
        })
    }
    const arr = [
        {data:<SiJavascript className='Icon' />},
        {data:<SiTypescript className='Icon' />},
        {data:<FaReact className='Icon' />},
        {data:<SiRedux className='Icon' />},
        {data:<FaNode className='Icon' />},
        {data:<SiGraphql className='Icon' />},
        {data:<SiApollographql className='Icon' />},
        {data:<SiSequelize className='Icon' />},
        {data:<SiPostgresql className='Icon' />},
        {data:<SiExpress className='Icon' />},
        {data:<FaHtml5 className='Icon' />},
        {data:<DiCss3 className='Icon' />}
    ]


    return (
        <div className='containerPrincipal'>
            <h1 className='tecnoTitle'>technologies</h1>
            <div className='tecnos'>
                {arr.map((el,i) => (
                <motion.div key={i} ref={ref} initial={{ x: i % 2 === 0 ? -200 : 200, opacity: 0, scale: 0, rotate: 0 }} animate={controls} >
                    {el.data}
                </motion.div>
                ))}
            </div>
        </div>
    )
}
