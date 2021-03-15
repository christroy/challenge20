import React from 'react'
import "./Contact.css"

function Contact() {
    return (
        <div className= "contact">
            <h1>Contact</h1>
            <div className="contact_container">
                <div className="left">
                    <h2>Chris P</h2>
                    <h3>Phone: <a href="tel:18324541188">+1.832.454.1188</a></h3>
                    <h3>E-mail: <a href="mailto:chrispodoba@gmail.com">chrispodoba@gmail.com</a></h3>
                </div>
                <div className="right">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443090.1957006508!2d-95.68216206858317!3d29.816880955037323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1615401565078!5m2!1sen!2sus" width={600} height={450} style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    )
}


export default Contact
