import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contact(){
  
    const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    let name = event.target.elements.formName.value;
    let email = event.target.elements.formEmail.value;
    let message = event.target.elements.formMessage.value;
    alert(`Hey ${name} at ${email}, thank you for filling out the form with this message: ${message}`)
    //event.preventDefault();
    //event.stopPropagation();
    
    setValidated(true);
  };

    return(
        <div>
            <Form noValidate validated={validated} className='m-3' onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name: </Form.Label>
        <Form.Control required type="text" placeholder="Enter your name" />
        <Form.Control.Feedback type="invalid">
            Please provide a name.
          </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email address: </Form.Label>
        <Form.Control required type="email" placeholder="Enter email" />
        <Form.Control.Feedback type="invalid">
            Please provide a valid email address.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMessage">
        <Form.Label>Message: </Form.Label>
        <Form.Control as="textarea" rows={3} />
        <Form.Control.Feedback type="invalid">
            Please provide a message.
          </Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
    )
}
export default Contact;


