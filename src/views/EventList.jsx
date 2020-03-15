import React from "react";
import axios from "axios";
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
      events :[]
    };
  }

  async componentDidMount() {
    const response = await axios.get('https://us-central1-jci-web-7f23c.cloudfunctions.net/api/events')
    this.setState({events: response.data})
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
                        <th>Event location</th>
                        <th>Event title</th>
                        <th>Time</th>
                        <th>Image</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.events.map((event, i) =>
                      <tr key = {event.id} tabIndex="0">
                          <td>{event.data.Location}</td>
                          <td>{event.data.title}</td>
                          <td>{new Date(event.data.time._seconds * 1000).toLocaleDateString("en-US")}</td>
                          <td style= {{backgroundImage: "url(" + event.data.image + ")",backgroundPosition:"center" , backgroundSize: "cover", backgroundRepeat:"no-repeat", width: "250px", height: "180px" }}></td>
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
