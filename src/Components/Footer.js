import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
import navIcon from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'


const Footer = () => {
    return (
        <div>
            <CDBFooter className="shadow ">
                <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
                    <CDBBox display="flex" justifyContent="between" className="flex-wrap">
                        <CDBBox>
                            <a href="/" className="d-flex align-items-center p-0 text-dark">
                              
                                <span className="ml-3 h5 text-white  font-weight-bold">Eftekhar Ahmed Shishir</span>
                            </a>
                            <p className="my-3 text-white" style={{ width: '250px' }}>
                                I am creating High Quality Resources and tools to Aid developers during the
                                developement of their projects
                            </p>
                            <div className='social-icon'>
                                <a href="https://www.linkedin.com/in/eftekhar-ahmed-shishir/"><img src={navIcon} alt="" /></a>
                                <a href="https://web.facebook.com/Eftekhar.Ahmed20"><img src={navIcon2} alt="" /></a>
                                <a href="https://www.instagram.com/ea_shishir/?fbclid=IwAR0cJRrj3Qh1bzb_EzU3hi8hOzx49NzKy1ME78bgxPEwSw26OiWlp-mwDqI"><img src={navIcon3} alt="" /></a>

                            </div>
                        </CDBBox>
                        <CDBBox>
                            <p className="h5 mb-4 text-white" style={{ fontWeight: '600' }}>
                                Portfolio
                            </p>
                            <div flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                                <a style={{ textDecoration: "none" }} href="/">Contact</a> <br />
                                <a style={{ textDecoration: "none" }} href="/">about</a> <br />
                                <a style={{ textDecoration: "none" }} href="/">Blogs</a> <br />
                            </div>
                        </CDBBox>
                        <CDBBox>
                            <p className="h5 mb-4 text-white" style={{ fontWeight: '600' }}>
                                Help
                            </p>
                            <div flex="column" className='text-white' >
                                <a style={{ textDecoration: "none" }} href="/">Support</a> <br />
                                <a style={{ textDecoration: "none" }} href="/">SignIn</a> <br />
                                <a style={{ textDecoration: "none" }} href="/">SignUp</a> <br />


                            </div>
                        </CDBBox>
                       
                    </CDBBox>
                    <small className="text-center mt-5 text-white">&copy; Shishir, 2022. All rights reserved.</small>
                </CDBBox>
            </CDBFooter>

        </div>

    );
};

export default Footer;
