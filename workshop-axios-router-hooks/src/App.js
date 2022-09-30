import axios from 'axios';
import React from 'react';

const App = () => {
    const API_URL = "http://localhost:8080/api/v1/person";
    const getAllPersonsAction = async () => {
        console.log("1. getAllPersonsAction");
        await axios.get(API_URL).then(response => {
            console.log("2. RESPONSE:", response)
            if(response.status === 200) {
                console.log("Persons: ", response.data);
            }
        })
        console.log("3. Done");
    }

    return (
        <div className='container'>
           <h1>Axios Ex</h1>
            <div className='row'>
                <div className='col'>
                    <button type='button' className='btn btn-primary' onClick={getAllPersonsAction}>Get all</button>
                </div>
            </div>
        </div>
    );
};

export default App;