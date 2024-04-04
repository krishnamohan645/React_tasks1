import { Component, Fragment } from "react";


class CustomTable extends Component{
    render(){
        return(
            <Fragment>
                <h2>Table</h2>
                <table>
                    <tr>
                        <th>S.NO</th>
                        <th>Name</th>
                        <th>Role</th>
                    </tr>
                    <tr>
                        <th>1</th>
                        <th>Chris Hemsworth</th>
                        <th>Thor</th>
                    </tr>
                    <tr>
                        <th>2</th>
                        <th>Eric Bana</th>
                        <th>Hulk</th>
                    </tr>                    
                    <tr>
                        <th>3</th>
                        <th>Robert Downey Jr.</th>
                        <th>IronMan</th>
                    </tr>                    
                    <tr>
                        <th>4</th>
                        <th>Tom holland</th>
                        <th>SpiderMan</th>
                    </tr>                    
                    <tr>
                        <th>5</th>
                        <th>Tom hiddleston</th>
                        <th>Loki</th>
                    </tr>
                </table>
            </Fragment>
        )
    }
}


export default CustomTable;