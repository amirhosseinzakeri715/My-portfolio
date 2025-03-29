import React from "react";

function Contact() {
    return(
        <div className="contact-container">
            <h1 className="contact-h1">Contact Me</h1>
            <div className="contact-paragraph">
                <p className="contact-p">Email: amirhosseinzakeri715@gmail.com</p>
                <p className="contact-p">Phone: 09908884402</p>
                <p className="contact-p">Address: Tehran, Iran</p>
                <p className="contact-p">LinkedIn: <a href="https://www.linkedin.com/in/john-doe/">Me</a></p>
                <p className="contact-p">GitHub: <a href="https://github.com/johndoe">Me</a></p>                
            </div>
        </div>
    );
}

export default Contact;