import React from "react";

function Header() {
    return (
        <header className="App-header">
            <nav className="navbar">
                <a href="/">My-Portfolio</a>
                <div>
                    <a href="/About">About Me</a>
                    <a href="/Projects">Projects</a>
                    <a href="/Contact">Contact</a>
                </div>
            </nav>
        </header>
    );
}

export default Header;