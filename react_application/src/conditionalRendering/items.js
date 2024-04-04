import ItemsData from "./itemsdata";


const Items = ()=>{
    const isvegetable = true
    return(
        <>
        <h1>Vegetables Lists</h1>
        {
            ItemsData.map(values=>{
                return(
                <>
                <p>{isvegetable ? values.name : values.name1}</p>
                </>
                )
            })
        }
        </>
    )
}


export default Items;