import React, { useEffect, useState } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import cartimage from '../assets/cart.png';
import { useNavigate } from "react-router-dom";

export default function Cart({cartItems, setcartItems}) {
    console.log(cartItems);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const navigate = useNavigate();
    useEffect(() => {
    let tempPrice = 0;
    let tempQuantity = 0;

    Object.keys(cartItems).forEach((cartItemId) => {
        const details = cartItems[cartItemId];
        tempQuantity += details.quantity;
        tempPrice += details.quantity * details.price;
    });

    setTotalQuantity(tempQuantity);
    setTotalPrice(tempPrice);
}, [cartItems]);
    const handleRemove = (cartItemId) => {
        const updatedCart = { ...cartItems };
        delete updatedCart[cartItemId];
        setcartItems(updatedCart);
    };
    const handlePlaceOrder = () => {
        setcartItems({});
        localStorage.removeItem("cartItems");

        alert("Order placed successfully!");
        navigate('/checkout')
        };
    return (
        <div style={{margin:60}}>
            
            <Row>
                <Col style={{margin:40}}>
                <h2>Your Cart: </h2>
                <div>
                    
                    <Table>
                        <thead>
                            <tr>
                                <th>NAME</th>
                                <th>QUANTITY</th>
                                <th>PRICE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(cartItems).map((cartItemId) => {
                                const itemDetails = cartItems[cartItemId];
                                return (
                                    <tr>
                                        <td>{itemDetails.title}</td>
                                        <td>
                                        
                                            {itemDetails.quantity}
                                            
                                            </td>
                                        <td>$ {itemDetails.quantity * itemDetails.price}</td>
                                        <td>
                                            <Button
                                                variant="danger"
                                                size="sm"
                                                onClick={() => handleRemove(cartItemId)}
                                            >
                                                Remove
                                            </Button>
                                        </td>
                                    </tr> 
                                )
                            })}
                            <tr>
                                <td>Total</td>
                                <td>{totalQuantity}</td>
                                <td>$ {totalPrice}</td>

                            </tr>
                        </tbody>
                    </Table>
                    </div>
                    <Button onClick={handlePlaceOrder}>Checkout</Button>
                </Col>
                <Col>
                    <img src={cartimage} style={{height:'80vh'}}/>
                </Col>
            </Row>
        </div>
    )
}