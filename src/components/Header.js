import React, { useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function Header({ handlePage }) {
   const [key, setKey] = useState('about');

   useEffect(() => {window.location.hash = key}, [key])

    return (
        <header className='sticky-top'>
        <h1 className='m-3 mt-0 pt-5' style={{fontFamily: "Roboto", fontStyle: "italic", fontWeight: "bolder" }}>Madalyne</h1>
        <nav>
        <Tabs
            
            id="controlled-tab"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            onClick={(k) => handlePage(k.target.textContent)}
            justify
            >
            <Tab eventKey="about" title="About"></Tab>
            <Tab eventKey="portfolio" title="Portfolio"></Tab>
            <Tab eventKey="contact" title="Contact"></Tab>
            <Tab eventKey="resume" title="Resume"></Tab>
        </Tabs>
      
        </nav>
    </header>

    )
}
export default Header;

