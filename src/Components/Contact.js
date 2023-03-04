import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg'
import emailJs, { sendForm } from 'emailjs-com';


const Contact = () => {
    const handleSubmit = (value) => {
        value.preventDefault()

        emailJs.sendForm('service_wtt4q0q', 'template_m6dlriz',
         value.target,
         'rIRo8R_w2TPF-kfkx'
         )
         .then(res => {
            
            console.log(res)
            alert('Your message sent successfully')
           sendForm.resetFiled('')
         })
         .catch(err => console.log(err))
    }
    
    
    return (
        <section className='contact' id='connect'>
         <Container>
            <Row className='align-items-center'>
                <Col md={6}>
                 <h2>Contact Me</h2>  
                 <form onSubmit={handleSubmit}>
                    <Row>
                        <Col sm={6} className='px-1'>
                        <input type="text" name='name' placeholder='Name'  />
                        </Col>
                        
                        <Col sm={6} className='px-1'>
                        <input type="email" name='email'  placeholder='Email'  />
                        </Col>
                       
                        <Col >
                            <textarea row='12' name='message' placeholder='Message' >
                            </textarea>
                        </Col>
                        <input type="submit"   />
                      
                       
                    </Row>
                 </form>
                </Col>
                <Col md={6}>
                <img src={contactImg} alt="" />
                </Col>
            </Row>
        </Container>   
        </section>
    );
};

export default Contact;