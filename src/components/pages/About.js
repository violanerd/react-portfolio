import React from "react";
import profile from "../../assets/images/profile-pic-edited.jpeg"

function About(){
    return(
        <div>
            <h1>About Me</h1>
            <div className="about-me">
            <img className="w-50 h-50 img-fluid" src={profile} alt="Madalyne"/>
            <p className="text-center m-2">
            My name is Madalyne Cross, I am a Full Stack developer. I recently earned a certificate in Full Stack Web Development from Rice University. As a classically-trained musician and experienced educator, my strengths include breaking down complex tasks, attention to detail, a passion for learning and helping others achieve excellence. When I am not developing or learning, you can find me in a CrossFit class, cooking or traveling. I am excited to bring my creativity, dedication and technical skills to a company to grow and become a valuable asset.
            </p>
            </div>
        </div>
    )
}
export default About;