import React from "react";

function About() {
    return (
        <div className="about-container">
            <h1 className="about-h1">💻 About Me</h1>
            <h3 className="about-h3">My name is Amir Hossein zakeri</h3>
            <div className="about-paragraph">
                <p className="about-p">
                
                I'm a passionate computer science student and aspiring full-stack web developer with a deep love for technology and programming. Since childhood, I've been fascinated by computers and the endless possibilities they offer. Currently, I'm pursuing my bachelor's degree in Computer Science while honing my skills in web development and exploring the exciting world of artificial intelligence.                </p>  
                <h3>
                🛠 Skills & Technologies
                </h3>
                <ul className="about-ul">
                    <li className="about-li">HTML</li>
                    <li className="about-li">CSS</li>
                    <li className="about-li">JavaScript</li>
                    <li className="about-li">React</li>
                    <li className="about-li">Node.js</li>
                    <li className="about-li">Express</li>
                    <li className="about-li">Postgres SQL</li>
                    <li className="about-li">REST APIs</li>
                    <li className="about-li">EJS</li>
                    <li className="about-li">Git </li>
                    <li className="about-li">React</li>
                </ul>
                <h3>🌱 Currently Learning </h3>
                <ul className="about-ul">
                    <li className="about-li">Advanced JavaScript: ES6+, Asynchronous Programming</li>
                    <li className="about-li">Next.js</li>
                    <li className="about-li">Tailwind</li>
                    <li className="about-li">Advanced React</li>
                </ul>
                <h3> 📫🎓 Certifications & Courses </h3>
                <ul className="about-ul">
                    <li className="about-li">The Complete 2023 Web Development Bootcamp by Dr. Angela Yu (Udemy)</li>
                    <li className="about-li">FreeCodeCamp several Courses to getting better MERN stack</li>
                </ul>

                <h3>💼 Projects and experiences </h3>
                <p>I'm constantly working on personal projects to improve my skills. You can see some of my recent projects in github that in <a href="/Contact">contact</a></p>

            </div>
            
        </div>
    );
}

export default About;