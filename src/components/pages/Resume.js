import React from "react";
import resume from "../../assets/files/resume1.pdf"

function Resume(){
    return(
        <section>
        <div className="d-flex flex-column align-items-center" id="skills">
            <div id="front-end" className="m-1"><h4>Front-End Skills</h4>         
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Responsive Design</li>
            </ul>
            </div>
            <div id="back-end" className="m-1">
            <h4>Back-End Skills</h4>           
        <ul>
                <li>Node</li>
                <li>Express.js</li>
                <li>MongoDb, Mongoose</li>
                <li>MySql, Sequelize</li>
                <li>RESTful APIs</li>
            </ul>
            </div>
      </div>
      <div className="text-center mt-5" style={{fontStyle: "italic", fontSize: "3ex"}}><a className="link-custom" href={resume} download>Download my resume</a><div> | </div><a className="link-custom" href={resume} target="blank">View my resume</a></div>
      </section>
    )
}
export default Resume;