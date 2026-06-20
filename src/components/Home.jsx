import { Button, Carousel, Col, Row } from "react-bootstrap";
import React, { useState } from "react";
import imageone from '../assets/1.png';
import imagefour from '../assets/4.png';
import imagefive from '../assets/5.png';

import imageten from '../assets/10.png';
import imageleven from '../assets/11.png';
import imagetwelve from '../assets/12.png';
import imagethirteen from '../assets/13.png';
import imagefourteen from '../assets/14.png';
import imagefifteen from '../assets/15.png';
import { useNavigate } from "react-router-dom";



export default function Home({user}) {
    
    const navigate = useNavigate();
    const handleCTAClick = () => {
        if (user) {
            navigate('/products');
        } else {
            navigate('/login');
        }
    }
    return (
        <div className="home-container">
            <Carousel>
                <Carousel.Item>
                    <Row>
                        <Col>
                            <div style={{padding:150}}>
                                <h2 style={{fontWeight:700}}><i>SHOP WITH UTMOST</i></h2>
                                <h2 style={{color:'#216ad9', fontWeight:700}}><i>STYLE</i></h2>
                                <h5 style={{marginBottom:20}}>shop with latest trendy products</h5>
                                <div style={{marginBottom:20}}>
                                    <Button style={{width:200}} onClick={handleCTAClick}>Browse Products</Button>
                                </div>
                            
                                <div>

                                    <h5><i>Products available from:</i></h5>
                                    <img src={imageten} style={{height:50}}/>
                                    <img src={imageleven} style={{height:50}}/>
                                    <img src={imagetwelve} style={{height:50}}/>
                                    <img src={imagethirteen} style={{height:50}}/>
                                    <img src={imagefourteen} style={{height:50}}/>
                                    <img src={imagefifteen} style={{height:50}}/>
                                </div>
                            
                            </div>
                        </Col>
                        <Col><img src={imageone} style={{height:'100vh'}}/></Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col>
                            <div style={{padding:150}}>
                                <h3 style={{fontWeight:700}}><i>SHOP WITH UTMOST</i></h3>
                                <h2 style={{color:'#216ad9', fontWeight:700}}><i>JOY</i></h2>
                                <h5 style={{marginBottom:20}}>shop with latest trendy products</h5>
                                <div style={{marginBottom:20}}>
                                    <Button style={{width:200}} onClick={handleCTAClick}>Browse Products</Button>
                                </div>
                            
                                <div>

                                    <h5><i>Products available from:</i></h5>
                                    <img src={imageten} style={{height:50}}/>
                                    <img src={imageleven} style={{height:50}}/>
                                    <img src={imagetwelve} style={{height:50}}/>
                                    <img src={imagethirteen} style={{height:50}}/>
                                    <img src={imagefourteen} style={{height:50}}/>
                                    <img src={imagefifteen} style={{height:50}}/>
                                </div>
                            
                            </div>
                        </Col>
                        <Col><img src={imagefour} style={{height:'100vh'}}/></Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col>
                            <div style={{padding:150}}>
                                <h3 style={{fontWeight:700}}><i>SHOP WITH UTMOST</i></h3>
                                <h2 style={{color:'#216ad9', fontWeight:700}}><i>DISCOUNTS</i></h2>
                                <h5 style={{marginBottom:20}}>shop with latest trendy products</h5>
                                <div style={{marginBottom:20}}>
                                    <Button style={{width:200}} onClick={handleCTAClick}>Browse Products</Button>
                                </div>
                            
                                <div>

                                    <h5><i>Products available from:</i></h5>
                                    <img src={imageten} style={{height:50}}/>
                                    <img src={imageleven} style={{height:50}}/>
                                    <img src={imagetwelve} style={{height:50}}/>
                                    <img src={imagethirteen} style={{height:50}}/>
                                    <img src={imagefourteen} style={{height:50}}/>
                                    <img src={imagefifteen} style={{height:50}}/>
                                </div>
                            
                            </div>
                        </Col>
                        <Col><img src={imagefive} style={{height:'100vh'}}/></Col>
                    </Row>
                </Carousel.Item>
            </Carousel>

              
      

        </div>
    )
}