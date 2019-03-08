import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";


class Detail extends Component {
  state = {
    book: {}
  };

  componentDidMount() {
    API.getBook(this.props.match.params.id)
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
  }

  render() {

    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
              <h1>
                {this.state.book.title} by {this.state.book.author}
              </h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Details</h1>
              <p>
                {this.state.book.synopsis}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
              <h1>Images</h1>
              <img alt={this.state.book.title + " Image"} src={"../components/books/" + this.state.book.title + "/images/01.jpg"} />
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Authors</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
