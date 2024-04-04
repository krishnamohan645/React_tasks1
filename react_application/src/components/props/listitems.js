// Remove the Fragment import if not needed
// import React, { Fragment } from "react";

function List(props) {
    return (
        <div>
            <li>
                <img src={props.imageURL} alt="image_not_found"/>
            </li>
        </div>
    );
}

export default List;
