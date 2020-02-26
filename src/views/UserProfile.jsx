import React from "react";
import axios from "axios";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

class UserProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      position: '',
      joinedDate: '',
      image: '',
      rank: ''
    };
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }


  onSubmit = (e) => {
    e.preventDefault();

    const member = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      position: this.state.position,
      joinedDate: this.state.joinedDate,
      image: this.state.image,
      rank: this.state.rank
    };

    console.log(member);
    
    axios.post('https://us-central1-jci-web-7f23c.cloudfunctions.net/api/members', {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      position: this.state.position,
      joinedDate: this.state.joinedDate,
      image: this.state.image,
      rank: this.state.rank
    })
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        console.log('here');
        // always executed
      });
    }
  
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="8">
              <Card>
                <CardHeader>
                  <h5 className="title">Add member</h5>
                </CardHeader>
                <CardBody>
                  <Form onSubmit={this.onSubmit}>
                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                        <label>First name</label>
                          <Input
                            placeholder="Narmandakh"
                            type="text"
                            required={true}
                            name="firstName"
                            value={this.firstName} 
                            onChange={this.onChange}
                          />
                        </FormGroup>
                      </Col>
                      </Row>
                      <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                          <label>Last name</label>
                          <Input
                            defaultValue=""
                            placeholder="Lkhagvajav"
                            type="text"
                            required={true}
                            name="lastName"
                            value={this.lastName} 
                            onChange={this.onChange}
                          />
                        </FormGroup>
                      </Col>
                      </Row>
                      <Row>
                        <Col className="pr-md-1" md="5">
                          <FormGroup>
                            <label>Position</label>
                            <Input placeholder="Director" 
                                    type="text"
                                    required={true}
                                    name="position"
                                    value={this.position} 
                                    onChange={this.onChange}
                                    />
                          </FormGroup>
                         </Col>
                      </Row>
                      <Row>
                        <Col className="pr-md-1" md="5">
                          <FormGroup>
                            <label>Rank</label>
                            <Input placeholder="1" 
                                    type="number"
                                    name="rank"
                                    value={this.rank} 
                                    onChange={this.onChange} />
                          </FormGroup>
                         </Col>
                      </Row>  
                      <Row>
                        <Col className="pr-md-1" md="5">
                          <FormGroup>
                            <label>Image</label>
                            <Input placeholder=""
                                   type="text"
                                   name="image"
                                   value={this.image} 
                                   onChange={this.onChange} />
                          </FormGroup>
                         </Col>
                      </Row>
                      <Row>
                        <Col className="pr-md-1" md="5">
                          <FormGroup>
                            <label>Joined Date</label>
                            <Input type="Date"
                                  name="joinedDate"
                                  value={this.joinedDate} 
                                  onChange={this.onChange} />
                          </FormGroup>
                         </Col>
                      </Row>  
                      <Button className="btn-fill" color="primary" type="submit">
                        Бүртгэх
                      </Button>     
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default UserProfile;
