import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import signupimage from '../assets/signup.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



export default function Signup({setUser}) {
    
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const handleSignup = (e) => {
        e.preventDefault();

        const userData = {
            name,
            email,
            password,
        };

        localStorage.setItem("registeredUser", JSON.stringify(userData));
        
        

        

        navigate('/login'); // Home page
        };



    return (
        <div className="animated-bg">
            <Row style={{padding:'55px'}}>
                <Col style={{padding:100}}>
                    <div>
                        <h1 className="logo-glow" style={{color:"white"}}>
                         Instabuy!
                        </h1>
                        <h3 style={{color:"white"}}>one place for all you needs</h3>
                        <Form>
                            <div style={{  display:"flex", justifyContent:"space-between", width:'95%'}}>
                                <Form.Group className="mb-3" controlId="formBasicEmail" style={{width:'49%'}}>
                                
                                    <Form.Control type="email" onChange={(e) => setEmail(e.currentTarget.value)} placeholder="Enter email" />
                                
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword" style={{width:'49%'}}>
                                    <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                                </Form.Group>
                                
                            </div>
                            <div>
                                <Form.Group className="mb-3" controlId="formBasicText" style={{width:'95%'}}>
                                    <Form.Control type="text" placeholder="Enter Fullname" onChange={(e) => setName(e.target.value)} />
                                </Form.Group>
                            </div>
                            
                            <Button onClick={handleSignup} className="glow-btn"
                            variant="outline-primary"  style={{marginBottom:26, width:'95%', backgroundColor:'#216ad9', border:'1px solid white', color:"white"}}>
                                Join the Club!
                            </Button>
                            <div style={{color:"white"}}>
                                Already a Member ? <a onClick={()=>navigate('/login')} style={{color:"white"}}>Join here</a>
                            </div>
                        </Form>
                    </div>
                </Col>
                <Col><img src={signupimage} style={{height:'80vh'}}/></Col>
            </Row>
        </div>
    )
}