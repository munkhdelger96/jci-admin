/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import axios from "axios";
import Spinner from '../components/Spinner/Spinner';

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

const spinnerContainerStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  marginTop: '25px'
}

class Tables extends React.Component {
  constructor() {
    super(); 
    this.state = {
      members :[],
      isLoading: true
    };
  }

  async componentDidMount() {
    const response = await axios.get('https://us-central1-jci-web-7f23c.cloudfunctions.net/api/members')
    this.setState({members: response.data ,  isLoading: false})
  }

  render() {
    return (
        <div className="content">
          <Row>
            <Col md="12">
              <Card className="card-plain">
                <CardHeader>
                  <CardTitle tag="h4">All Members</CardTitle>
                  {/* <p className="category">Here is a subtitle for this table</p> */}
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Position</th>
                        <th>Joined Date</th>
                        <th>Rank</th>
                        <th>Image</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                      this.state.isLoading ?
                      <div style = {spinnerContainerStyle}>
                      <Spinner/>
                      </div>:
                      this.state.members.map((member, i) =>
                      <tr key = {member.id} tabIndex="0">
                          <td>{member.data.firstName}</td>
                          <td>{member.data.lastName}</td>
                          <td>{member.data.position}</td>
                          <td>{member.data.joinedDate}</td>
                          <td>{member.data.rank}</td>
                          <td style= {{backgroundImage: "url(" + member.data.image + ")",backgroundPosition:"center" , backgroundSize: "cover", backgroundRepeat:"no-repeat", width: "250px", height: "180px" }}></td>
                      </tr>)}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>      
    );
  }
}

export default Tables;
