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

  onSubmit = (e) => {
    console.error('asd');
    e.preventDefault();

    const { title, description, author } = this.state;

    axios.post('/members')
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
                        <label>First name </label>
                          <Input
                            placeholder="Narmandakh"
                            type="text"
                            required="true"
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
                            required="true"
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
                                    required="true"
                                    />
                          </FormGroup>
                         </Col>
                      </Row>
                      <Row>
                        <Col className="pr-md-1" md="5">
                          <FormGroup>
                            <label>Rank</label>
                            <Input placeholder="1" type="number" />
                          </FormGroup>
                         </Col>
                      </Row>  
                      <Row>
                        <Col className="pr-md-1" md="5">
                          <FormGroup>
                            <label>Image</label>
                            <Input placeholder="" type="text" />
                          </FormGroup>
                         </Col>
                      </Row>
                      <Row>
                        <Col className="pr-md-1" md="5">
                          <FormGroup>
                            <label>Joined Date</label>
                            <Input type="Date" />
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
