import React from "react";

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
                    <img className="project-img" src="https://via.placeholder.com/150" alt="Project 1" />
                    <li className="project-li">Project 1</li>
                    <img className="project-img" src="https://via.placeholder.com/150" alt="Project 2" />
                    <li className="project-li">Project 2</li>
                    <img className="project-img" src="https://via.placeholder.com/150" alt="Project 3" />
                    <li className="project-li">Project 3</li>
                    <img className="project-img" src="https://via.placeholder.com/150" alt="Project 4" />
                    <li className="project-li">Project 4</li>
                </ul> 
            </div>


        </div>
    );
}

export default Project;