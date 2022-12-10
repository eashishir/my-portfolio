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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, eos magnam sint voluptas excepturi vero blanditiis eaque, nam alias numquam debitis doloribus nisi ducimus earum aspernatur ullam. Corrupti, aut at.
                        </p>
                        <Tab.Container id='projects-tabs'defaultActiveKey='first'>
                        <Nav variant="pills" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link ventKey="First" >Tab One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Second">Tab Two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Third">
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
                            <Tab.Pane eventKey='Third'>10rem</Tab.Pane>
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