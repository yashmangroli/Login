import React, { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
// import navigate from 'navigate';
import { Link, useNavigate } from "react-router-dom";



const Get = () => {
    const navigate = useNavigate('/view');
    const [data, setdata] = useState([])

    useEffect(() => {
        get();
    }, [])

    var get = () => {
        axios.get('http://localhost:5050/get')
            .then(function (response) {
                console.log(response.data.data);
                setdata(response.data.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const hanledelete = (e) => {
        var id = e.target.getAttribute('data-id');
        axios.delete(`http://localhost:5050/delete/${id}`)
            .then(function (response) {
                console.log(response.data.data);
                get();
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    return (
        <>
            <h1>
                <Link to="/">Add to product</Link>
            </h1>
            <table border={2} align="center">
                <tr>
                    <td>id</td>
                    <td>name</td>
                    <td>email</td>
                    <td>product_quantity</td>
                    <td>city</td>
                    <td>delete</td>
                </tr>
                {
                    data.map((i) => {
                        return (
                            <>
                                <tr>
                                    <td>{i._id}</td>
                                    <td>{i.name}</td>
                                    <td>{i.email}</td>
                                    <td>{i.product_quantity}</td>
                                    <td>{i.city}</td>
                                    <td><button type="button" onClick={hanledelete} data-id={i._id} >delete</button></td>
                                </tr>
                            </>
                        )
                    })
                }
            </table>
        </>
    )
}

export default Get;