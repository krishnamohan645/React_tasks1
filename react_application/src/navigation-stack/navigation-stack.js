import React, { useState, createContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from '../pages/home-screen';
import InvalidScreen from '../pages/invalid-screen';
import ContactSCreen from '../pages/contack';
import Listing from '../pages/products';
import ProductDetails from '../pages/productDetails';
import LoginScreen from '../pages/login-screen';


export const DataShare = createContext();

function NavigationStack() {
  const [login,setLogin]= useState(true)
  
  const [data, setData] = useState({
    border: '1px solid black',
    height:'100px' ,
    width: '100%',
    backgroundColor: 'aqua'
    
  });


  const changeColor = () => {
setData({...data,backgroundColor:"black"})
}
  return (
    <DataShare.Provider value={{
      data,
      changeColor
    }}>

    <BrowserRouter>
        {login ? (
          <Routes>
            <Route path="/" Component={HomeScreen}/>
            <Route path="*" Component={InvalidScreen} />
            <Route path="/contact" Component={ContactSCreen} />
            <Route path="/recipes" Component={Listing} />
            <Route path="/recipes/:name/:recipeId" Component={ProductDetails} />

          </Routes>
        ) : (
          <Routes>
            <Route  path="/login" Component={LoginScreen}/>
          </Routes>
        )}
      </BrowserRouter>
    
      </DataShare.Provider>
    );
}

export default NavigationStack;
