import React from "react";
import successimage from '../assets/success.png'

export default function Checkout() {
    
    return (
        <div>
            <img src={successimage} height={400} style={{ display: "flex", justifyContent:"center",margin:'90px  450px', marginBottom: 0, marginTop: 10}}/>
            <h1 style={{marginLeft: 550, color:'green'}}><b>SUCCESS</b></h1>

        </div>
    )
}