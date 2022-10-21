import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Table from './Table';

const CrudDemo = () => {
    const API_URL = "http://localhost:8080/api/v1/person"
    const [persons, setPersons] = useState([]);
    const [alert, setAlert] = useState({type: '', message: ''});

    useEffect(()=> {
        getAllPersonsAction();

    }, []);

    const getAllPersonsAction = async () => {
        await axios.get(API_URL).then(response => {
            if(response.status === 200) {
                console.log(response.data)
                setPersons(response.data);
                setAlert({type: 'alert-success', message: 'Get API operation is done.'})
            }else{
                setAlert({type: 'alert-warning', message: 'API error ' + response.status})
                }
            }).catch(err => {
                setAlert({type: 'alert-danger', message: 'Error'})
            })
    }


    return (<div>
        <Table persons={persons} />
    </div>)
};

export default CrudDemo;