import React from "react";
import resume from "../../assets/files/resume.pdf"

function Resume(){
    return(
        <section>
        <div className="d-flex flex-column align-items-center">
            <h4>Front-End Skills</h4>         
            <ul className="m-1">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Responsive Design</li>
            </ul>
            <h4>Back-End Skills</h4>           
        <ul className="m-1">
                <li>Node</li>
                <li>Express.js</li>
                <li>MongoDb, Mongoose</li>
                <li>MySql, Sequelize</li>
                <li>RESTful APIs</li>
            </ul>
      </div>
      <div className="text-center" style={{fontStyle: "italic"}}><a className="link-custom" href={resume} download>Download my resume</a></div>
      </section>
    )
}
export default Resume;