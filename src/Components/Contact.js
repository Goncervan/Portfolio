import React, { useRef } from 'react';
import emailjs from 'emailjs-com'
import './Styles/Contact.modules.css'

export default function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_agrx87v', 'template_j5x0jag', form.current, '_CSI2FYbP0lxTWEJF')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
    };


    return (
        <div className='container-form'>
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
