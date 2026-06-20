import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import loginimage from '../assets/login.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";


export default function Login({setUser}) {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    
    const [password, setPassword] = useState('');

    const handleLogin = () => {
    const registeredUser = JSON.parse(
        localStorage.getItem("registeredUser")
    );

    if (!registeredUser) {
        alert("No account found. Please sign up first.");
        return;
    }

    if (
        registeredUser.email === email &&
        registeredUser.password === password
    ) {
        localStorage.setItem("user", JSON.stringify(email));
        setUser(email);
        navigate("/");
    } else {
        alert("Email or Password is incorrect");
    }
    };
    return (
        <div style={{backgroundColor:'#216ad9'}} className="animated-bg">
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
                                    <Form.Control type="password" placeholder="Password"   onChange={(e) => setPassword(e.target.value)}   />
                                </Form.Group>
                            </div>
                            
                            <Button className="glow-btn" variant="outline-primary" type="button" onClick={handleLogin} style={{marginBottom:26, width:'95%', backgroundColor:'#216ad9', border:'1px solid white', color:"white"}}>
                                Start Shopping!
                            </Button>
                            <div style={{color:"white"}}>
                                Join the Club, <a onClick={()=>navigate('/signup')} style={{color:"white"}}>Click here</a>
                            </div>
                        </Form>
                    </div>
                </Col>
                <Col><img src={loginimage} style={{height:'80vh'}}/></Col>
            </Row>
        </div>
    )
}