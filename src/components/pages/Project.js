// this is where the data for the projects will be - export it to portfolio
import React, { useState } from "react";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { IconContext } from "react-icons";
import {FaGithub} from "react-icons/fa"
// src can dynamically render from name property
// src={require(`../../assets/images/${name}.jpg`)}
// alt can be name

// will need to conditionally render if not available

function Project(){


const [projects] = useState([
    {
      title: 'Studio Site',
      built_with: 'Wordpress',
      description: 'website to promote my teaching business',
      name: 'studio-site',
      git: '',
      deploy: 'https://madalynecross.com/'
    },
    {
        title: 'Fam Food Finds',
        built_with: 'Node.js, Express.js, MySql2, Sequelize, Handlebars',
        description: 'small app to share restaurant recommendations from people you know to people you know',
        name: 'fam-food-finds',
        git: 'https://github.com/violanerd/fam-food-finds',
        deploy: 'https://fam-food-finds.herokuapp.com/'
      },
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
      }
])

return (
  <Row>
    {projects.map((project) => (
  <Col sm={12} lg={6}>
    
    <Card className="m-1" key={project.name}>
    
          
          
            <Card.Header><a href={project.deploy} target="_blank" rel="noreferrer">{project.title}</a></Card.Header>
            <Card.Img variant="top" src={require(`../../assets/images/${project.name}.jpg`)} alt={project.name} />
          {/* <Card.Text>
            {project.description}</Card.Text> */}
           
            <Card.Footer className="d-flex flex-wrap justify-content-between align-items-center">
          <a href={project.git} target="_blank" rel="noreferrer"><IconContext.Provider value={{ color: "black", size: 25, className:"m-1" }}><FaGithub/></IconContext.Provider></a>
          <div>{project.built_with}</div>
          </Card.Footer>
                
            
        </Card>
  </Col>
  ))}
  </Row>


)

}

export default Project;

//<Card.Header className="text-center">{project.title}<small>Built with: {project.built_with} </small></Card.Header>
//<Card className="m-1">
{/* <Card.Img variant="top" src={require(`../../assets/images/${project.name}.jpg`)} alt={project.name} />
<Card.Body>
  <Card.Title><a href={project.deploy} target="_blank" rel="noreferrer">{project.title}</a></Card.Title>
<Card.Text>
  {project.description}<br></br>
<a href={project.git} target="_blank" rel="noreferrer"><IconContext.Provider value={{ color: "black", size: 30, className:"m-1" }}><FaGithub/></IconContext.Provider></a>
{project.built_with}</Card.Text>
</Card.Body>
      
  
</Card> */}