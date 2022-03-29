import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Styles/Modal.modules.css'
import { AiOutlineClose } from 'react-icons/ai';
const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
}
const modal = {
    hidden: {
        y: "-100vh",
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: { delay: 0.5 }
    }
}

export default function Modal({ showModal, closeModal, result, error }) {
    return (
        <AnimatePresence exitBeforeEnter>
            {showModal ? (
                <motion.div className="backdrop" exit="hidden" variants={backdrop} initial="hidden" animate="visible">
                    <motion.div className="modal" variants={modal}>
                        <p>{result ? result : error}</p>
                        <button onClick={() => {closeModal()}}><AiOutlineClose /></button>
                    </motion.div>
                </motion.div>
            ) : (<></>)}
        </AnimatePresence>
    )
}
