import React, { Component } from "react";
import { Col, Row } from "../components/Grid";
import Footer from "../components/Footer";
import WorldWide from "../components/SVG/worldwide.svg";
import Title from "../components/SVG/title.svg";
import Button from "../components/Buttons";

import AboutUs from "../components/SVG/aboutus.svg";
import Astronaut1 from "../components/SVG/astronaut1.svg";
import Astronaut2 from "../components/SVG/astronaut2.svg";
import AboutUsSeed from "../components/SVG/aboutusinfo.svg";
import OurGoals from "../components/SVG/ourgoals.svg";
import OurGoalsSeed from "../components/SVG/ourgoalsinfo.svg";
import Moon from "../components/SVG/moon.svg";



class Landing extends Component {

    render() {

        return (
            <>
                <img src={WorldWide} />
                <img src={Title} />


                <div>
                    <Button href="#">Join The Crew</Button>
                    <Button href="#">Become a Space Cadet</Button>
                </div>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />


                <Row>
                    <Col size="md-4"></Col>

                    <Col size="md-4">
                        <img src={AboutUs} />
                    </Col>

                    <Col size="md-4"></Col>
                </Row>

                <Row>

                    <Col size="md-2"></Col>

                    <Col size="md-4">
                        <img src={Astronaut1} />
                    </Col>

                    <Col size="md-4">
                        <img src={Astronaut2} />
                    </Col>

                    <Col size="md-2"></Col>

                </Row>

                <Row>
                    <Col size="md-2"></Col>

                    <Col size="md-3">
                        <img src={AboutUsSeed} />
                    </Col>

                    <Col size="md-2"></Col>

                </Row>

                <br />
                <br />
                <br />
                <br />

                <br />
                <br />
                <br />
                <br />

                <Row>

                    <Col size="md-4"></Col>

                    <Col size="md-4">
                        <img src={OurGoals} />
                    </Col>

                    <Col size="md-4"></Col>

                </Row>

                <Row>
                    <Col size="md-4"></Col>

                    <Col size="md-4">
                        <img src={Moon} />
                    </Col>

                    <Col size="md-4"></Col>

                </Row>

                <Row>

                    <Col size="md-2"></Col>

                    <Col size="md-3">
                        <img src={OurGoalsSeed} />
                    </Col>

                    <Col size="md-2"></Col>

                </Row>

                <Footer></Footer>
            </>
        );
    }
}

export default Landing;
