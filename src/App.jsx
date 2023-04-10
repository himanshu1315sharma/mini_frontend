import {Product1} from "./pages/Product";
import {Product2, Product3,Product4,Product5,Product6,Product7,Product8} from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
//import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
const App = () => {
  const user = false;
  return (
    <Router>
  
    <Routes>
          <Route exact path='/' element={< Register />}></Route>
          <Route exact path='/login' element={< Login />}></Route>
          <Route exact path='/home' element={< Home />}></Route>
          <Route exact path='/product' element={< Product1 />}></Route>
          <Route exact path='/productlist' element={< ProductList />}></Route>
          <Route exact path='/product2' element={< Product2 />}></Route>
          <Route exact path='/product3' element={< Product3 />}></Route>
          <Route exact path='/product4' element={< Product4 />}></Route>
          <Route exact path='/product5' element={< Product5 />}></Route>
          <Route exact path='/product6' element={< Product6 />}></Route>
          <Route exact path='/product7' element={< Product7 />}></Route>
          <Route exact path='/product8' element={< Product8 />}></Route>

   </Routes>

</Router>
  );
};

export default App;