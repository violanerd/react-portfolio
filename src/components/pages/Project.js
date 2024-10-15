
import React, { useState } from "react";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { IconContext } from "react-icons";
import {FaGithub} from "react-icons/fa"


function Project(){
const feature = {
  title: 'Birthday Plan-it',
      built_with: 'MERN Stack, Nodemailer',
      description: 'An app to personalize you birthday invitation and invite guests',
      name: 'birthdayplanit',
      git: 'https://github.com/violanerd/birthday-plan-it',
      deploy: 'https://birthdayplanit.herokuapp.com/'
}

const [projects] = useState([
      {
        title: 'Recipe Box',
        built_with: 'Javascript, CSS, HTML',
        description: 'recipe app to save favorites, search by ingredient, search by recipe name and get a random recipe',
        name: 'RecipeBox',
        git: 'https://github.com/violanerd/recipe-box',
        deploy: 'https://violanerd.github.io/recipe-box/'
      },
      {
        title: 'Tech Reads Blog',
        built_with: 'Node.js, Express.js, MySql2, Sequelize, Handlebars',
        description: 'blog where developers can publish and comment on posts',
        name: 'tech-reads-blog-homepage',
        git: 'https://github.com/violanerd/tech-reads-blog',
        deploy: 'https://dry-tor-56763.herokuapp.com/'
      },
      {
        title: 'My Friends API',
        built_with: 'MongoDB, Mongoose.js, Express.js',
        description: 'social network API',
        name: 'my-friends-api',
        git: 'https://github.com/violanerd/my-friends-api',
        deploy: 'https://watch.screencastify.com/v/1shP155gnS4mZMWekD2m'
      },
      {
        title: 'Show Me The Weather',
        built_with: 'Javascript, HTML, CSS, Bootstrap',
        description: 'app to display current weather and five day forecast utilizing localStorage',
        name: 'show-me-the-weather',
        git: 'https://github.com/violanerd/Show-Me-The-Weather',
        deploy: 'https://violanerd.github.io/Show-Me-The-Weather/'
      },
      {
        title: 'Fam Food Finds',
        built_with: 'Node.js, Express.js, MySql2, Sequelize, Handlebars',
        description: 'small app to share restaurant recommendations from people you know to people you know',
        name: 'fam-food-finds',
        git: 'https://github.com/violanerd/fam-food-finds',
        // deploy: 'https://fam-food-finds.herokuapp.com/'
        deploy: 'https://github.com/violanerd/fam-food-finds'
      },
])

return (
  <Row>
    <Col sm={12} lg={12} id={feature.name}>
  
    
  <Card className="m-1" key={feature.name}>
          <Card.Header><a href={feature.deploy} target="_blank" rel="noreferrer" className="link-custom">{feature.title}</a></Card.Header>
          <Card.Img variant="top" src={require(`../../assets/images/${feature.name}.jpg`)} alt={feature.name} />
         <Card.ImgOverlay style={{visibility: "hidden"}}>{feature.description}</Card.ImgOverlay>
          <Card.Footer className="d-flex justify-content-between align-items-center">
        {feature.git &&<a href={feature.git} target="_blank" rel="noreferrer"><IconContext.Provider value={{ size: 25, className:"git-icon m-1" }}><FaGithub/></IconContext.Provider></a>}
        <div id="built-with">{feature.built_with}</div>
        </Card.Footer>
              
          
      </Card>
</Col>



    {projects.map((project) => (
    <Col sm={12} lg={6} id={project.name}>
  
    
    <Card className="m-1" key={project.name}>
            <Card.Header><a href={project.deploy} target="_blank" rel="noreferrer" className="link-custom">{project.title}</a></Card.Header>
            <Card.Img variant="top" src={require(`../../assets/images/${project.name}.jpg`)} alt={project.name} />
           <Card.ImgOverlay style={{visibility: "hidden"}}>{project.description}</Card.ImgOverlay>
            <Card.Footer className="d-flex justify-content-between align-items-center">
          {project.git &&<a href={project.git} target="_blank" rel="noreferrer"><IconContext.Provider value={{ size: 25, className:"git-icon m-1" }}><FaGithub/></IconContext.Provider></a>}
          <div id="built-with">{project.built_with}</div>
          </Card.Footer>
                
            
        </Card>
  </Col>
  ))}
  </Row>


)

}

export default Project;

