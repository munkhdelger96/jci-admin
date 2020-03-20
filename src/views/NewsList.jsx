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
      news :[],
      isLoading: true
      //TODO: loader
    };
  }

  async componentDidMount() {
    const response = await axios.get('https://us-central1-jci-web-7f23c.cloudfunctions.net/api/news')
    this.setState({news: response.data , isLoading: false})
  }

  render() {
    return (
       this.state.isLoading ?
      <div style = {spinnerContainerStyle}>
      <Spinner/>
     </div>:
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
                        <th>Content</th>
                        <th>Category</th>
                        <th>Title</th>
                        <th>Time</th>
                        <th>Image</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.news.map((news, i) =>
                      <tr key = {news.id} tabIndex="0">
                          <td>{news.data.content}</td>
                          <td>{news.data.category}</td>
                          <td>{news.data.title}</td>
                          <td>{new Date(news.data.time._seconds * 1000).toLocaleDateString("en-US")}</td>
                          <td style= {{backgroundImage: "url(" + news.data.image + ")",backgroundPosition:"center" , backgroundSize: "cover", backgroundRepeat:"no-repeat", width: "250px", height: "180px" }}></td>
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
