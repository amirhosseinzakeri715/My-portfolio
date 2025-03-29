import React from "react";
import DarkModeToggle from "./DarkMode";

function Header() {
    return (
        <header className="header">
            <div>
                <nav className="navbar">
                    <div className="header-container">
                        <svg className="logo" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-briefcase" viewBox="0 0 16 16">
                            <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5"/>
                        </svg>
                        <a className="header-title" href="/">My-Portfolio</a>
                        <div>
                            <div><a className="header-a" href="/About">About</a></div>
                            <div><a className="header-a" href="/Projects">Projects</a></div>
                            <div><a className="header-a" href="/Contact">Contact</a></div>
                        </div>
                        <div>
                            <DarkModeToggle />
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;