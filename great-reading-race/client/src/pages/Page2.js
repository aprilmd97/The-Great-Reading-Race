import React from "react";
import page2 from "../components/books/Professor_Archie_Makes_A_Bang/images/Professor-Archie-Makes-a-Bang-03.jpg";
import right from "../components/SVG/right-arrow.png";
import { Col, Row } from "../components/Grid";
import { Link } from "react-router-dom";

const imgStyle = {
    margin: "25%",
    width: "1000px",
    height: "500px"
}

const size = {
    width: "100px",
    height: "100px",
}


function PageTwo() {

    return (
        <Row>
            <Col size="md-2"></Col>

            <Col size="md-2">
                <img src={page2} style={imgStyle} />
            </Col>

            <Col size="md-2">
            
            <Link to="/pagethree" ><img src={right} style={size} /></Link>
            </Col>

        </Row>
    );
}

export default PageTwo;