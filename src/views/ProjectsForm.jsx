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

class ProjectsForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      content: '',
      image: ''
    };
  }
  // https://us-central1-jci-web-7f23c.cloudfunctions.net/api/members
  onChangeHandler = (e) => {
    var fileReader = new FileReader();
    fileReader.readAsDataURL(e.target.files[0]);    
    fileReader.onload = () => {
      const state = this.state
      state['image'] = fileReader.result;
      this.setState(state);
    };
    fileReader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }
 
  onSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/jci-web-7f23c/us-central1/api/projects', {
      title: this.state.title,
      content: this.state.content,
      image:this.state.image
    })
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    }
  
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="8">
              <Card>
                <CardHeader>
                  <h5 className="title">Add new project</h5>
                </CardHeader>
                <CardBody>
                  <Form onSubmit={this.onSubmit}>
                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                        <label>Title</label>
                          <Input
                            placeholder="Title"
                            type="text"
                            required={true}
                            name="title"
                            value={this.title} 
                            onChange={this.onChange}
                          />
                        </FormGroup>
                      </Col>
                      </Row>
                      <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                          <label>Content</label>
                          <Input
                            placeholder="Project content"
                            type="text"
                            required={true}
                            name="content"
                            value={this.content} 
                            onChange={this.onChange}
                          />
                        </FormGroup>
                      </Col>
                      </Row>  
                      <Row>
                        <Col className="pr-md-1" md="5">
                          <FormGroup>
                            <label>Add Picture</label>
                              <Input type="file"
                                   name="image"
                                   value={this.image}
                                   onChange={this.onChangeHandler}
                              />
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

export default ProjectsForm;
