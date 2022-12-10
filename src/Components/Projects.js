import React from 'react';
import { Col, Container, Row, Tab } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import ProjectsCard from './ProjectsCard';
import colorSharp2 from '../assets/img/color-sharp2.png'
import proImg1 from '../assets/img/project1.jpg'
import proImg2 from '../assets/img/project2.webp'
import proImg3 from '../assets/img/project3.jpg'
import proImg4 from '../assets/img/project4.jpg'


const Projects = () => {
    const projects = [
        {
            title: "Mobilemela",
            description: "MERN Stack Project",
            imgUrl: proImg1,
        },
        {
            title: "Mobilemela",
            description: "MERN Stack Project",
            imgUrl: proImg2,
        },
        {
            title: "Mobilemela",
            description: "MERN Stack Project",
            imgUrl: proImg3,
        },
        {
            title: "Mobilemela",
            description: "MERN Stack Project",
            imgUrl: proImg4,
        }
    ]
    return (
        <section className='project' id='project'>
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>
                            *Made Ui:
                            Using React JS Components and Library And Tailwind Css ,DasiyUi.
                            *Made Backend:
                            Using Express,Json Token,MongoDb,Node Js.
                            *Authentication using Firebase.
                        </p>
                        <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                            <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                                <Nav.Item>
                                    <Nav.Link eventKey="first" >Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">
                                        Tab Three
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey='first'>
                                    <Row>
                                        {
                                            projects.map((project, i) => {
                                                return (
                                                    <ProjectsCard
                                                        key={i}
                                                        project={project}
                                                    ></ProjectsCard>
                                                )
                                            })
                                        }
                                    </Row>

                                </Tab.Pane>
                                <Tab.Pane eventKey='second'>l0rem</Tab.Pane>
                                <Tab.Pane eventKey='third'>10rem</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={colorSharp2} alt="" />

        </section>
    );
};

export default Projects;