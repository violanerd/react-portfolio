// this is where the data for the projects will be - export it to portfolio
import React, { useState } from "react";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

// src can dynamically render from name property
// src={require(`../../assets/images/${name}.jpg`)}
// alt can be name

// will need to conditionally render if not available

function Project(){


const [projects] = useState([
    {
      title: 'Studio Site',
      built_with: 'Wordpress',
      description: 'A website to promote my teaching business',
      name: 'studio-site',
      git: '',
      deploy: 'https://madalynecross.com/'
    },
    {
        title: 'Fam Food Finds',
        built_with: 'Node, Express, MySql, Sequelize, Handlebars, Authentication with Express-sessions and bcrypt',
        description: 'a small app for just family and friends to share restaurant recommendations from people you know to people you know.',
        name: 'fam-food-finds',
        git: 'https://github.com/violanerd/fam-food-finds',
        deploy: 'https://fam-food-finds.herokuapp.com/'
      },
      {
        title: 'Recipe Box',
        built_with: 'Javascript, CSS, HTML',
        description: 'Recipe-Box that allows users to save their favorites, search by ingredient, search by recipe name and get a random recipe.',
        name: 'RecipeBox',
        git: 'https://github.com/violanerd/recipe-box',
        deploy: 'https://violanerd.github.io/recipe-box/'
      },
      {
        title: 'Tech Reads Blog',
        built_with: 'Node, Express, MySql, Sequelize, Handlebars, Authentication with Express-sessions and bcrypt',
        description: 'A blog where developers can publish and comment on posts.',
        name: 'tech-reads-blog-homepage',
        git: 'https://github.com/violanerd/tech-reads-blog',
        deploy: 'https://dry-tor-56763.herokuapp.com/'
      },
      {
        title: 'My Friends API',
        built_with: 'MongoDB, mongoose, express',
        description: 'A social network API',
        name: 'my-friends-api',
        git: 'https://github.com/violanerd/my-friends-api',
        deploy: 'https://watch.screencastify.com/v/1shP155gnS4mZMWekD2m'
      },
      {
        title: 'Show Me The Weather',
        built_with: 'Javascript, HTML, CSS, Bootstrap',
        description: 'Application to display current weather and five day forecast utilizing localStorage',
        name: 'show-me-the-weather',
        git: 'https://github.com/violanerd/Show-Me-The-Weather',
        deploy: 'https://violanerd.github.io/Show-Me-The-Weather/'
      }
])

return (
  <Row>
    {projects.map((project) => (
  <Col sm={12} lg={6}>
    
      <Card className="bg-dark text-white m-1">
            <Card.Img src={require(`../../assets/images/${project.name}.jpg`)} alt={project.name} />
            <Card.ImgOverlay>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>{project.built_with}</Card.Text>
                <Card.Text>{project.description}</Card.Text>
            </Card.ImgOverlay>
        </Card>
  </Col>
  ))}
  </Row>


)

}

export default Project;