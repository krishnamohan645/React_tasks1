import React from "react";
import ListItems from "./listitems";

const ListComponent = () => {
    const listItems = [
        {
            name: "apple",
            type: "fruit",
            isFruit: true,
            image: "https://www.bing.com/th?id=OIP.HySrCJe7ATbkNjvwko8rwQHaIZ&w=150&h=171&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
            id: 1
        },
        {
            name: "mango",
            type: "fruit",
            isFruit: true,
            image: "https://www.bing.com/th?id=OIP.b3fzCzEek1R_6Z10xSvICgHaE7&w=150&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
            id: 2
        },
        {
            name: "potato",
            type: "vegetable",
            isFruit: false,
            image: "https://www.bing.com/th?id=OIP.FcNO4PI-60RQjMTZKrKYBgHaEo&w=159&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
            id: 3
        }
    ];

    return (
        <React.Fragment>
            <ol>
                {listItems.map((eachObject) => (
                    <ListItems key={eachObject.id} imageURL={eachObject.image} />
                ))}
            </ol>
        </React.Fragment>
    );
};

export default ListComponent;
