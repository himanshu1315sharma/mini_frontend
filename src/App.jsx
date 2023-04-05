import Product from "./pages/Product";
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
          <Route exact path='/product' element={< Product />}></Route>
          <Route exact path='/productlist' element={< ProductList />}></Route>
   </Routes>

</Router>
  );
};

export default App;