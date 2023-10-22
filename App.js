
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, } from 'react-router-dom';
import './App.css';
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Navbar from './Components/Navbar/Navbar';
import Cart from './Pages/Cart';
import Loginsignup from './Pages/Loginsignup';
import Item from './Components/items/Item';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'

function App() {
  //   const ProjectRoute=createBrowserRouter([
  //   {path:'/', element:<Shop/>},
  //   {path:'/mens', element:<ShopCategory/>},


  // ])



  return (

    <div >

      {/* <RouterProvider router={ProjectRoute}></RouterProvider> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category='men' />} />
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category='kid' />} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category='women' />} />

          <Route path='/item' element={<Item />} />


          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Loginsignup />} />
        </Routes>
        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
