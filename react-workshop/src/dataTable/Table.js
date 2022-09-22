import React from 'react';
import DataTable from './DataTable';

const TableHeader = () => {
    return ( <thead>
        <tr>
            <th>Id</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Age</th>
            <th>Birthdate</th>
            <th>Action</th>
        </tr>
    </thead>);
}

const TableAction = () => {
    return (
        <>
        <button type='button'>Details</button>
        <button type='button'>Delete</button>
        <button type='button'>Edit</button>
        </>
        
    );
}

const TableRow = () => {
    return ( <tbody>
        <tr>
            <td>1</td>
            <td>Sven Svensson</td>
            <td>ss@vv.se</td>
            <td>
                <TableAction />
            </td>
        </tr>
        <tr>
            <td>2</td>
            <td>Tove Toresson</td>
            <td>dd@vv.se</td>
            <td>
                <TableAction />
            </td>
        </tr>
    </tbody>);
}

const Table = () => {
    return (
        <div>
            <table border='1'>
                <TableHeader />
                <TableRow />
            </table>
        </div>
    );
};

export default Table;