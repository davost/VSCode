import React from 'react';
import { useHistory } from 'react-router-dom';

const Table = (props) => {

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
    )
}
const TableRow = () => {
    return (
        <tbody>
            {
                props.persons.map(person => {
                    const row = (
                        <tr key={person.id}>
                            <td>{person.id}</td>
                            <td>{person.name}</td>
                            <td>{person.email}</td>
                            <td>
                                <TableAction id={person.id} />
                            </td>
                        </tr>
                    );
                    return row;
                })
            }
        </tbody>
    )
}

const TableAction = (props) => {
    const history = useHistory();
    const goToDetails = (id) => {
        history.push("/personDetails/"+id)
    }
    
}
    return (
        <div className="container">
                <table className="table table-striped">
                    <TableHeader />
                    <TableRow />
                </table>
            </div>
    );
};

export default Table;