import React, { useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function Header({ handlePage }) {
   const [key, setKey] = useState('about');

   useEffect(() => {window.location.hash = key}, [key])

    return (
        <header>
        <h2 className='m-3 mt-0 pt-5'>Madalyne</h2>
        <nav>
        <Tabs
            
            id="controlled-tab"
            className="justify-content-end"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            onClick={(k) => handlePage(k.target.textContent)}
            >
            <Tab eventKey="about" title="About me"></Tab>
            <Tab eventKey="portfolio" title="Portfolio"></Tab>
            <Tab eventKey="contact" title="Contact"></Tab>
            <Tab eventKey="resume" title="Resume"></Tab>
        </Tabs>
      
        </nav>
    </header>

    )
}
export default Header;

