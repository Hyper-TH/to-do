import { useState, useEffect } from 'react';
import Axios from 'axios';

export const ExcusePage = () => {
    const [excuses, setExcuses] = useState([]);
    const [error, setError] = useState("");
    
    useEffect(() => {
        const fetchExcuses = async () => {
            try {
                // Fetch excuses from the server
                const response = await Axios.get('http://localhost:8000/getExcuses');

                if (response.data && response.data.documents) {
                    setExcuses(response.data.documents);
                    setError("");
                } else {
                    setError("Error retrieving excuses");
                }
            } catch (error) {
                console.error(`Error: ${error}`);
                setError("Internal Server Error");
            }
        };

        // Call function to fetch once component mounts
        fetchExcuses();
    }, []);

    return (
        <>
        <div>
            <h1>Excuses Page</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}

            {excuses.map((excuse, index) => (
                <div key={index}>
                    <p>Category: {excuse.category}</p>
                    <p>Excuse: {excuse.excuse}</p>
                </div>
            ))}
        </div>
        </>
    )
};  