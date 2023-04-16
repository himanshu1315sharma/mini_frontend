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
  Link,
  Navigate
  
} from 'react-router-dom';
import { useSelector } from "react-redux";
const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
  
    <Routes>
          <Route exact path='/' element={< Register />}></Route>
          <Route exact path="/login" element={user ? <Navigate replace to="/home" /> : <Login />}></Route>
        <Route exact path="/register"
          element={<Register />}>
        </Route>
        <Route exact path='/home' element={< Home />}></Route>
          <Route exact path='/product/643b9cd29ee076187ad91130' element={< Product1 />}></Route>
          <Route exact path='/productlist' element={< ProductList />}></Route>
          <Route exact path='/product2/643b9e259ee076187ad91132' element={< Product2 />}></Route>
          <Route exact path='/product3/643b9ea29ee076187ad91134' element={< Product3 />}></Route>
          <Route exact path='/product4/643b9f3a9ee076187ad91136' element={< Product4 />}></Route>
          <Route exact path='/product5/643b9f7d9ee076187ad91138' element={< Product5 />}></Route>
          <Route exact path='/product6/643b9fcf9ee076187ad9113a' element={< Product6 />}></Route>
          <Route exact path='/product7/643ba0139ee076187ad9113c' element={< Product7 />}></Route>
          <Route exact path='/product8/643ba0579ee076187ad9113e' element={< Product8 />}></Route>

   </Routes>

</Router>
  );
};

export default App;