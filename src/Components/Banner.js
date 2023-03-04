import ReactToPrint from 'react-to-print';
import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {ArrowDownCircle} from 'react-bootstrap-icons'
import headerImg from '../assets/img/header-img3.jpg'



const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["Web Developer", "MERN Stack Developer", "Font-End Developer"] ;
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;


    useEffect ( () => {
      let ticker = setInterval( () => {
        tick();
      }, delta)
      return() => { clearInterval(ticker)}
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length- 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if(isDeleting){
            setDelta(prevDelta => prevDelta/2)

        }

        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }
        else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }

    }

 

     
    return (
        <section  className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>About Me</span>
                        <h1>{`Hi I'm`} <span className='wrap'>{text}</span> </h1>
                        <p>My-self Eftekhar Ahmed Shishir.
                            I am a Front End developer with projects experience building websites and web applications.
                            I specialize in JavaScript and have professional experience working with React.js and Express.js , Mongodb .
                            I also have experience working with HTML .CSS, Tailwind CSS ,Bootstrap. Take a look at my work or get in touch.</p>
                     <a  className='tagline' style={{ textDecoration: "none" }} href="resume.pdf" download><button >Download Resume <ArrowDownCircle></ArrowDownCircle> </button></a>
                    </Col>
                    <Col xs={12} md={6} xl={5} >
                     <img src={headerImg} alt="Header Img" />

                    </Col>
                </Row>
            </Container>

        </section>
    );
};

export default Banner;