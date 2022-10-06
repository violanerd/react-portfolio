import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function NavTabs() {
    return (
        
        <header className='d-flex align-items-center justify-content-between'>
        <h2 className='m-3'>Madalyne</h2>
        <nav>
        <Tabs
            defaultActiveKey="about"
            id="uncontrolled-tab-example"
            className="justify-content-end"
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