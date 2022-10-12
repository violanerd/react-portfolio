import React from "react";
import { IconContext } from "react-icons";
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaStackOverflow} from "react-icons/fa"

function Footer(){
    return(
        <footer className="d-flex flex-column align-items-center justify-content-center ">
            <div className="m-1">             
            <a href="https://github.com/violanerd" target="_blank" rel="noreferrer"><IconContext.Provider value={{ size: 30, className:"git-icon m-1" }}><FaGithub/></IconContext.Provider></a>
            <a href="https://www.linkedin.com/in/madalyne-a-cross-634303236/" target="_blank" rel="noreferrer"><IconContext.Provider value={{ color: "blue", size: 30, className:"m-1 linked-icon"}}><FaLinkedin/></IconContext.Provider></a>
            <a href="https://stackoverflow.com/users/18635184/violanerd" target="_blank" rel="noreferrer"><IconContext.Provider value={{ size: 30, className:"m-1 stack-icon" }}><FaStackOverflow/></IconContext.Provider></a>
            </div>
            <div className="mt-2"> &copy; Madalyne Cross {new Date().getFullYear()}</div>
        </footer>
    )
}
export default Footer;