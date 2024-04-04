import TableData from "./tabledata";


const Table =()=>{

    return(
        <>
        <table>
            <tr>
                <th>Name</th>
                <th>Designation</th>
                <th>Salary</th>
            </tr>
                {
                    TableData.filter(data =>data.salary===50000).map(data=>
                        <>
                        <tr>
                            <td>{data.name}</td>
                            <td>{data.designation}</td>
                            <td>{data.salary}</td>
                        </tr>
                        </>
                        )
                }
        
        </table>
        </>
    );
};


export default Table;