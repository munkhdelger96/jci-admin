import React from "react";
import axios from "axios";

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

class Tables extends React.Component {
  constructor() {
    super(); 
    this.state = {
      projects :[]
    };
  }

  async componentDidMount() {
    const response = await axios.get('https://us-central1-jci-web-7f23c.cloudfunctions.net/api/projects')
    this.setState({projects: response.data})
  }

  render() {
    return (
      <>
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
                        <th>Project content</th>
                        <th>Project title</th>
                        <th>Project date</th>
                        <th>Image</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.projects.map((project, i) =>
                      <tr key = {project.id} tabIndex="0">
                          <td>{project.data.content}</td>
                          <td>{project.data.title}</td>
                          <td>{new Date(project.data.time._seconds * 1000).toLocaleDateString("en-US")}</td>
                          <td style= {{backgroundImage: "url(" + project.data.image + ")",backgroundPosition:"center" , backgroundSize: "cover", backgroundRepeat:"no-repeat", width: "250px", height: "180px" }}></td>
                      </tr>)}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Tables;
