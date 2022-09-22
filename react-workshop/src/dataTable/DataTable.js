import React, { useEffect , useState } from 'react';
import Table from './Table';

const DataTable = () => {
    const studentList = { id:1, firstName: "Test", lastName: "Test", age: 0, birthdate: new Date("0000-00-00") };
    const [dataTable, setDataTable] = useState(studentList);

    useEffect( () => {
        console.log('useEffect function hass been executed');
       setDataTable([
        { id:1, firstName: "Sven", lastName: "Svensson", age: 20, birthdate: new Date("2002-08-21") },
        { id:2, firstName: "Tove", lastName: "Tuvesson", age: 25, birthdate: new Date("1997-07-24") },
        { id:3, firstName: "Johan", lastName: "Larsson", age: 30, birthdate: new Date("1992-05-15") }] , [] );
    return (
        <div>
            <b>DataTable info: {dataTable.firstName} {dataTable.lastName}</b>
        </div>
    );
})};

export default DataTable;