import React, { useRef } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Insert = () => {
    const navigate = useNavigate();


    const name = useRef()
    const email = useRef()
    const product_quantity = useRef()
    const city = useRef()

    const hanleckick = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5050/insert', {
            "name": name.current.value,
            "email": email.current.value,
            "product_quantity": product_quantity.current.value,
            "city": city.current.value
        })
            .then(function (response) {
                console.log(response);
                navigate('/view');
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    return (
        <>
            <form method="post" onSubmit={hanleckick}>
                <table border={2} align="center">
                    <tr>
                        <td>name</td>
                        <td><input type="text" name="name" ref={name} /></td>
                    </tr>
                    <tr>
                        <td>email</td>
                        <td><input type="text" name="email" ref={email} /></td>
                    </tr>
                    <tr>
                        <td>product_quantity</td>
                        <td><input type="text" name="product_quantity" ref={product_quantity} /></td>
                    </tr>
                    <tr>
                        <td>city</td>
                        <td><input type="text" name="city" ref={city} /></td>
                    </tr>
                    <tr>
                        <td><input type="submit" /></td>
                    </tr>
                </table>
            </form>
        </>
    )
}


export default Insert;