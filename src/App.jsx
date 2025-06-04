import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Product from './Pages/Product/Product';
import ProductDetail from './Pages/ProductDetail/ProductDetail';



function App() {
        const [data, setData] = useState(null);

      useEffect(() => {
            axios.get(`https://fakestoreapi.com/products/`) 
              .then((response) => setData(response.data))
              .catch((error) => console.log(error));
        }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<Home data={data}/>}></Route>
        <Route path='/product' element={<Product data={data}/>}></Route>
        <Route path='/productdetail/:id' element={<ProductDetail data={data} />} />
      </Routes>
    </>
  )
}

export default App
