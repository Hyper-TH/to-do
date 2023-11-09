import Axios from 'axios';
import { useState, useEffect } from 'react';

export const ServerTest = () => {
    const [message, setMessage] = useState("");

    // Using in-built library
    // useEffect(() => {
    //     fetch('http://localhost:8000/message')
    //     .then((res) => res.json())
    //     .then((data) => setMessage(data.message));
    // }, []);

    // Using axios
    useEffect(() => {
        Axios.get(`http://localhost:8000/message`)
        .then((res) => {
            setMessage(res.data);
        })
    }, []);
    
    return (
        <>
        <div>
            <h1>{message?.message}</h1>  
        </div>
        </>
    );
};