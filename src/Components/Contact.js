import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com'
import './Styles/Contact.modules.css'
import Modal from './Modal';

export default function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_agrx87v', 'template_j5x0jag', form.current, '_CSI2FYbP0lxTWEJF')
            .then(() => {
                setShowModal(true)
                setResult("Mensaje enviado! Gracias!")
            }, (error) => {
                setShowModal(true)
                setError(error.text);
            });
            e.target.reset();
    };
    const [error,setError] = useState("");
    const [result,setResult] = useState("Mensaje enviado! Gracias!");
    const [showModal,setShowModal] = useState(true);

    return (
        <div className='container-form'>
            <Modal showModal={showModal} result={result} error={error} setShowModal={setShowModal}/>
            <h1 className="form-title">Contact Me!</h1>
            <form onSubmit={(e) => sendEmail(e)} ref={form} className="contact-form">
                <div className="form-row">
                    <div className="input-data">
                        <input required autoComplete="off" className="input" name="name" type="text" />
                        <div className="underline"></div>
                        <label>Your  Name</label>
                    </div>
                    <div className="input-data">
                        <input required autoComplete="off" className="input" name="email" type="email" />
                        <div className="underline"></div>
                        <label>Your  Email</label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="input-data textarea">
                        <textarea required className="inputText" name="message" type="text" />
                        <div className="underline"></div>
                        <label>Your Mesagge</label>
                    </div>
                </div>
                <div className="form-row submit-btn">
                    <div className="input-data">
                        <input className="input" type="submit" value="submit"/>
                    </div>
                </div>
            </form>
        </div>
    )
}
