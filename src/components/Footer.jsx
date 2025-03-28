import React from "react";

function Footer (){

    const date = new Date();
    const year = date.getFullYear();


    return (
        <footer>
            <p>C@pyRight {year} My Portfolio.</p>
        </footer>
    );
}

export default Footer;