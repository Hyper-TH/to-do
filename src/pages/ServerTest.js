import Axios from 'axios';
import { useState, useEffect } from 'react';

export const ServerTest = () => {
    const [message, setMessage] = useState("");
    const [category, setCategory] = useState("");
    const [excuse, setExcuse] = useState("");
    const [error, setError] = useState("");

    const categoryChange = (event) => {
        setCategory(event.target.value);
    };

    const generateExcuse = async () => {
        try {
            const response = await Axios.get(`http://localhost:8000/excuse?category=${encodeURIComponent(category)}`);
    
            console.log(response);
            if (response) {
                setExcuse(response.data[0].excuse);
                setError("");
            } else {
                setExcuse("");
                setError("Error retrieving excuse");
            }
        } catch (error) {
            console.error(`Error: ${error}`);
            setExcuse("");
            setError("Internal Server Error");
        }
    };

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

        <div>
            <label>
                Input a category:
                <input type="text" value={category} onChange={categoryChange} />
            </label>
            <button onClick={generateExcuse}>Generate an excuse!</button>

            {excuse && <p>Ecxuse: {excuse}</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
        </>
    );
};