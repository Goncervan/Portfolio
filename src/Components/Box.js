import React from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BsFillGeoAltFill, BsFillKeyboardFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import perfilFoto from '../assets/img/image.jpg'
import './Styles/Box.modules.css'

export default function Box() {
    const controls = useAnimation();

    const { inView, ref } = useInView();
    if (inView) {
        controls.start({
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 60,
                duration: .5,
                delay: .5
            }
        })
    }
// src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
    return (
        <motion.div ref={ref} initial={{ y: "-500px", opacity: 0, scale: 0, }} animate={controls} className="container">
            <img className="img" src={perfilFoto}  alt="user" />
            <h2 className="developer"><BsFillKeyboardFill /> FullStack Developer</h2>
            <h2 className="location"><BsFillGeoAltFill /> Córdoba, Argentina</h2>
            <p className="description">
                I'm a fullstack developer but I lean towards the frontend. I love creating innovative and challenging user interfaces, paying attention to every detail to get the best result
            </p>
            <div className="icons">
                <a href="https://github.com/Goncervan" rel="noreferrer" target="_blank"><FaGithub className="icon"/></a>
                <a href="https://www.linkedin.com/in/gonzalo-cervan/" rel="noreferrer" target="_blank"><FaLinkedin className="icon"/></a>
                <a href="https://api.whatsapp.com/send?phone=543516767860" rel="noreferrer" target="_blank"><FaWhatsapp className="icon" /></a>
            </div>
        </motion.div>
    )
}



// export default function Box() {

//     const boxVariants = {
//         initial: {
//             y: "-100vh",
//             opacity: 0,
//             width: "100px",
//             height: "100px"
//         },
//         visible: {
//             y: 0,
//             opacity: 1,
//             width: "300px",
//             height: "300px",
//             transition: {
//                 delay: 0.5,
//                 type: "spring",
//                 duration:2,
//                 stiffness:50,
//                 damping:100
//             }
//         }
//     }

//     return (
//         <motion.div
//             className="box"
//             variants={boxVariants}
//             initial="initial"
//             animate="visible"
//             whileHover={{
//                 scale:[1.2,0.5,1],
//                 rotate:[360,90,0],
//                 borderRadius:["20px","50%","0px"],
//                 transition:{
//                     duration:1
//                 }
//             }}
//         >

//         </motion.div>
//     )
// }
