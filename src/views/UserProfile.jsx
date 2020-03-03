import React from "react";
import axios from "axios";
import storage from "../firebase";

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
      rank: '',
      image:null,
      url: ''
      
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }
  handleChange = e => {
   if(e.target.files[0]) {
     const image = e.target.files[0];
     this.setState(() => ({image}));
   }
  } 
  handleUpload = () => {
    const {image} = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image); 
    uploadTask.on('state_changed',
        (snapshot) => {
          //progress
        },
        (error) => {
          //error
          console.log(error);
        },
        () => {
          //complete
          storage.ref('images').child(image.name).getDownloadURL().then(url => {
            console.log(url);
          })
    });
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
      // image: this.state.image,
      rank: this.state.rank,
    };

    console.log(member);
    
    axios.post('https://us-central1-jci-web-7f23c.cloudfunctions.net/api/members', {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      position: this.state.position,
      joinedDate: this.state.joinedDate,
      // image: this.state.image,
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
                  <Form >
                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup onSubmit={this.onSubmit}>
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
                        <FormGroup onSubmit={this.onSubmit}>
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
                          <FormGroup onSubmit={this.onSubmit}>
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
                          <FormGroup onSubmit={this.onSubmit}>
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
                          <label>Add Picture</label>
                            <Input type="file"
                                   onChange={this.handleChange}
                                    />
                                    

                          </FormGroup>
                          </Col>
                          <Col className="pr-md-1" md="5">
                          <FormGroup>
                            <button onClick={this.handleUpload}>Upload</button>
                                    

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
