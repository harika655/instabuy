import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ProductGallery({searchTerm}) {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        async function getProducts() {
            const response = await axios.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=50');
            
            setProducts(response.data);
            
        }
        getProducts();

    }, [])
    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

    return (
        <div style={{padding:50}}>
            <h3>Select a product</h3>
            <div style={{display:'flex', flexWrap:'wrap'}}>
                {filteredProducts.map((product) => {
                    return (
                        <Card key={product.id} style={{width:"18rem", border:'none', margin:20,}} className="product-card" >
                            <Card.Img src={product.images[0]}/>
                            <Card.Title style={{margin: 5}}>{product.title}</Card.Title>
                            <Card.Text style={{margin: 5,}}>$ {product.price}</Card.Text>
                            <Button onClick={() => navigate(`/products/${product.id}`, {state:product})} style={{width:120, margin: 5}}>View Item</Button>
                        </Card>
                    )
                })}
            </div>

        </div>
    )
}