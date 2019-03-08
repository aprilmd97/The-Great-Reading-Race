import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Footer from "../components/Footer";
import LibraryTitle from "../components/SVG/mylibrary.svg";

const imageStyle = {
    borderRadius: "7%",
    width: "300px",
    height:"300px",
    margin: "20px"
}

class Books extends Component {
    state = {
        books: [],
        title: "",
        author: "",
        synopsis: ""
    };

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
            .then(res =>
                this.setState({ books: res.data, title: "", author: "", synopsis: "" })
            )
            .catch(err => console.log(err));
    };

    deleteBook = id => {
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
    };



    render() {
        return (
            <>
                <Container fluid>
                    <Row>
                        <Col size="md-12">
                                <img src={LibraryTitle} />
                            {this.state.books.length ? (
                                <div>
                                    {this.state.books.map(book => (
                                        <div key={book._id}>
                                            <img src={book.image} alt={book.title + "Image"} style={imageStyle} />
                                            <Link to={"/book/" + book._id}>
                                                <strong>
                                                    {book.title} by {book.author}
                                                </strong>
                                            </Link>
                                            <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                    <h3>No Books to Display</h3>
                                )}
                        </Col>
                    </Row>
                </Container>

                <Footer></Footer>
            </>
        );
    }
}

export default Books;
