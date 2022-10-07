import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

//defaultActiveKey="about"
function NavTabs({ handlePage }) {
   const [key, setKey] = useState('about');

    return (
        <header>
        <h2 className='m-3 mt-0'>Madalyne</h2>
        <nav>
        <Tabs
            
            id="controlled-tab-example"
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
export default NavTabs;

