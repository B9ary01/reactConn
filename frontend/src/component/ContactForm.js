import React from 'react';
import '../App.css'
import { useHistory } from "react-router-dom";

import { Button, Form, FormGroup, Label, Input, FormText, Container} from 'reactstrap';


class contactForm extends React.Component {



    render() {
        return (
            <Form action="http://localhost:3000/home" method="GET" className="contactForm">
                <Container>
                    <div class="row justify-content-center">
                    
                        <div class="col-md-4">
                            <FormGroup>
                                <Label for="firstName">First Name</Label>
                                <Input type="text" className="form-control" name="firstName" id="firstName" placeholder="Enter your first name" required/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="lastName">Last Name</Label>
                                <Input type="text" className="form-control" name="lastName" id="lastName" placeholder="Enter your last name" required/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="Email">Email</Label>
                                <Input type="email" className="form-control" name="email" id="Email" placeholder="Enter your email address" required/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="eventDate">Date</Label>
                                <Input type="date" className="form-control" name="eventDate" id="eventDate" placeholder="Please select date" required/>
                            </FormGroup>
                            <FormGroup>
                            <label htmlFor="exampleFormControlTextarea1">Message </label>
                       <textarea className="form-control" placeholder="write something... " className="form-control" id="exampleFormControlTextarea1" rows="5"/>
            
                            </FormGroup>
                            <Button>Submit</Button>
                            
                        </div>
                    </div>
                </Container>
            </Form>

        );
    }
}

export default contactForm;