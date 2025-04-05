import React from "react";
import familyTrackerImage from "./images/Screenshot 2025-04-05 143546.png";
import adminDashboardImage from "./images/e203da247fe7721fcbf3b5cf54363dc3df4cad35-1920x1080.png";
import noteKeeperImage from "./images/Screenshot 2025-04-05 143843.png";
import moveIt from "./images/Screenshot 2025-04-05 155217.png";

function Project(){
    return (
        <div className="project-container">
            <div className="project-header">
                <h1 className="project-h1">My Projects</h1>
                <h3 className="project-h3">Here are some of my projects</h3> 
            </div>
            <div className="project-paragraph">
                <p>This is where I will display my projects</p>
            </div>
            
            <div className="project-list">
                <ul className="project-ul">
                    <li className="project-li">
                        <img src={familyTrackerImage} alt="Family tracker project" />
                        <span><a href="https://github.com/amirhosseinzakeri715/Family-tracker">Family tracker</a></span>
                    </li>
                    <li className="project-li">
                        <img src={adminDashboardImage} alt="Admin dashboard project" />
                        <span><a href="https://github.com/amirhosseinzakeri715">Admin dashboard</a></span>
                    </li>
                    <li className="project-li">
                        <img src={noteKeeperImage} alt="Note keeper project" />
                        <span><a href="https://github.com/amirhosseinzakeri715/Note-keeper">Note keeper</a></span>
                    </li>
                    <li className="project-li">
                        <img src={moveIt} alt="Project 4" />
                        <span><a href="https://github.com/amirhosseinzakeri715/move-it">Move it</a></span>
                    </li>
                </ul> 
            </div>
        </div>
    );
}

export default Project;