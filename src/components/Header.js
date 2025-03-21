import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header({ handlePage }) {
   const [key, setKey] = useState('about');

   useEffect(() => {window.location.hash = key}, [key])

    return (
        <header className='sticky-top'>
            <Navbar id='navbar'>
                    <div onSelect={(k) => setKey(k)}
                        onClick={(k) => handlePage(k.target.textContent)} 
                        eventKey="about">
                        <h1 className='m-3 mt-0 pt-5' 
                            style={{fontFamily: "Roboto", fontStyle: "italic", fontSize: "4rem" }} 
                            href="#About">
                            Madalyne
                        </h1>
                        <div id="tag-line">Software Engineer</div>
                    </div>
                    <Nav id="controlled-tab"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        onClick={(k) => handlePage(k.target.textContent)}
                        style={{fontSize: "1.5rem" }} 
                        >
                        <Nav.Link eventKey="about" href="#About">About</Nav.Link>
                        <Nav.Link eventKey="portfolio" href="#Portfolio">Portfolio</Nav.Link>
                        {/* <Nav.Link eventKey="contact" href="#Contact">Contact</Nav.Link> */}
                        <Nav.Link eventKey="resume" href="#Resume">Resume</Nav.Link>
                    </Nav>
                </Navbar>
        </header>

    )
}
export default Header;



//  <header className='sticky-top' id='navbar'>
//             <div onSelect={(k) => setKey(k)}
//             onClick={(k) => handlePage(k.target.textContent)} eventKey="about">
//     <h1 className='m-3 mt-0 pt-5' style={{fontFamily: "Roboto", fontStyle: "italic", fontSize: "4rem" }} href="#About">Madalyne</h1>
//     <div id="tag-line">Full Stack Developer</div>
//     </div>
//     <nav className='nav-tabs' id="controlled-tab"
                 
//                             activeKey={key}
//                             onSelect={(k) => setKey(k)}
//                             onClick={(k) => handlePage(k.target.textContent)}>
//                         <div eventKey="about" href="#About">About</div>
//                         <div eventKey="portfolio" href="#Portfolio">Portfolio</div>
//                         <div eventKey="contact" href="#Contact">Contact</div>
//                         <div eventKey="resume" href="#Resume">Resume</div>
//                     </nav>
                
//         </header> 