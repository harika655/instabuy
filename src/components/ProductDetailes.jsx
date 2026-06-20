import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Row, Card } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

export default function ProductDetailes({handleAddToCart,cartItems}) {
    const location = useLocation();
    const navigate = useNavigate();
    const {title, price, images, description, category, id} = location.state;
    const [otherProducts, setOtherProducts] = useState([]);
    useEffect(() => {
        async function getData() {
            const response = await axios.get(`https://api.escuelajs.co/api/v1/categories/${category.id || 1}/products?limit=25&offset=0`);
            
            setOtherProducts(response.data);
        }
        getData();
    }, [])
    
    return (
        <div style={{padding: 30}}>
            <Row >
                <Col lg={2}>
                    <div>
                        {images.map((image, index) => {
                            return (
                                <img key={index} src={image} width={150} style={{marginBottom: 20, borderRadius: 8}}/>
                            )
                        })}
                    </div>
                    
                </Col>
                <Col lg={4}>
                    <div>
                        <img src={images[0]} width={380} style={{marginBottom:20, borderRadius: 8}}/>
                        <h3 style={{width: 380}}>{title}</h3>
                        <h3 style={{color: '#216ad9'}}>$ {price}</h3>
                        <div style={{textAlign: "justify", width: 380}}>{description}</div>
                        <Button style={{marginTop:30}} onClick={() => {
                            if (id in cartItems) {
                                const currentItem = cartItems[id];
                                handleAddToCart({[id]:{title, price, quantity: currentItem.quantity + 1}})

                            } else {
                                handleAddToCart({[id]:{title, price, quantity : 1}})
                            }
                            
                        }}>Add to Cart</Button>
                    </div>
                </Col>
                <Col>
                    <h2>Other products in same category</h2>
                    <div style={{display:"flex", flexWrap: "wrap"}}>
                        
                    
                        {otherProducts.map((product) => {
                            if(product.id == id) return
                            return (
                                <Card key={product.id} style={{width:"10rem", border:'none', margin:20}}>
                                <Card.Img src={product.images[0]}/>
                                <Card.Title>{product.title.split("")[0]}</Card.Title>
                                <Card.Text>$ {product.price}</Card.Text>
                                <Button onClick={() => navigate(`/products/${product.id}`, {state:product})} style={{width:120}}>View Item</Button>
                                </Card>
                            )
                        })}
                    </div>
                </Col>
            </Row>
        </div>
    )
}