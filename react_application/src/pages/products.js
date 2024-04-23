import ProductsFetching from "../components/products";
import ColorSchemeExample from "../components/header"
import "./pages.css"
const Listing =()=>{
    return(
        <div className="list">
            <ColorSchemeExample/>
        <h1>Recipes Hub</h1>
        <ProductsFetching/>
        </div>
    )
}

export default Listing;