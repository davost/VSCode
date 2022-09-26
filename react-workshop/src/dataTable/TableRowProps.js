import React from 'react';

  
const TableRowProps = (props) => {
    
    
    return ( 
        <tbody>
        {props.list.map((student) => {
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



export default TableRowProps;