import React, { useEffect , useState } from 'react';
import TableRowProps from './TableRowProps';

const DataTable = () => {
    const initialState = [
        { id:0, firstName: "Test", lastName: "Test", age: 0, birthdate: new Date("0000-00-00"), country: "Sweden", city: "Stockholm" },
        { id:1, firstName: "Sven", lastName: "Svensson", age: 20, birthdate: new Date("2002-08-21"), country: "Sweden", city: "Kalmar" },
    ];
    const [studentList, setStudentList] = useState(initialState);
    
    // create header component that returns the header information of table
    const TableHeader = () => {
        return ( <thead>
            <tr>
                <th>Id</th>
                <th>First name</th>
                <th>Last name</th>
                <th>Age</th>
                <th>Birthdate</th>
                <th>Country</th>
                <th>City</th>
                <th>Action</th>
            </tr>
        </thead>
        );
    };
    
    const TableRow = () => {
    
    
        return ( 
            <tbody>
            {studentList.map((student) => {
                const row = (
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.firstName}</td>
                        <td>{student.lastName}</td>
                        <td>{student.age}</td>
                        {/*<td>
                        <TableAction student={student} />
                        </td>*/}
                    </tr>
                );
                return row;
            })}
           </tbody>
           );
        };
    
    
    return (
        <div>
            <h1>List of students</h1>
            <table>
                <TableHeader />
                <TableRow />
               <TableRowProps list={studentList} />
            </table>
        </div>
    );
};

export default DataTable;