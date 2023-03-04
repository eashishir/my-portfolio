import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/img/meter1.svg'
import meter2 from '../assets/img/meter2.svg'
import meter3 from '../assets/img/meter3.svg'
import colorSharp from '../assets/img/pexels-gradienta-6984984.jpg'


const Skills = () => {
    const mongodb = 60;
    const jWT = 50;
    const firebase = 90;
    const expressJs = 95;

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div>
            <section className='skill' id='skills'>
                <Container>
                    <Row>
                        <Col>
                            <div className='skill-bx'>
                                <h2>
                                    Skills
                                </h2>
                                <p>I have experience coding websites and modern HTML,CSS ,JAVA SCRIPT ,REACT JS  , NODE JS, EXPRESS JS, and firebase Authentication as a fresher.</p>
                                <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                    <div className='item'>
                                        <img src={meter1} alt="Image" />
                                        <h5>Bootstrap & Tailwind</h5>

                                    </div>
                                    <div className='item'>
                                        <img src={meter2} alt="Image" />
                                        <h5>Java Script</h5>

                                    </div>
                                    <div className='item'>
                                        <img src={meter3} alt="Image" />
                                        <h5>React.js</h5>

                                    </div>
                                    <div className='item'>
                                        <img src={meter1} alt="Image" />
                                        <h5>Node JS</h5>

                                    </div>
                                </Carousel>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <img className='background-image-left' src={colorSharp} alt="" />

            </section>
            <section>

                <div className=' justify-content-center m-5' style={{width: '20rem' }}>
                    <h2>JWT</h2>
                    <ProgressBar striped now={jWT} label={`${jWT}%`} animated />
                    <h2>MongoDb</h2>
                    <ProgressBar striped variant="info" now={mongodb} label={`${mongodb}%`} animated />
                    <h2>Firebase</h2>
                    <ProgressBar striped variant="warning" now={firebase} label={`${firebase}%`} animated />
                    <h2>Express JS</h2>
                    <ProgressBar striped variant="danger" now={expressJs} label={`${expressJs}%`} animated />
                </div>
            </section>
        </div>
    );
};

export default Skills;