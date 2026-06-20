import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import { Badge, Button } from 'react-bootstrap';
import Logo from './assets/logo.png';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup'
import ProductGallery from './components/ProductGallery';
import ProductDetailes from './components/ProductDetailes';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import cartimg from './assets/8.png';
import logoutimg from './assets/logout.png';
import OrderSuccess from './components/Ordersuccess';

function App() {

  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [cartItems, setcartItems] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const userEmail = JSON.parse(localStorage.getItem('user'));

    if (userEmail) {
      setUser(userEmail);
   }
  }, []);
  useEffect(() => {
  localStorage.setItem(
    "cartItems",
    JSON.stringify(cartItems)
  );
}, [cartItems]);

  const handleAddToCart = (item) => {
    setcartItems({...cartItems, ...item})
  }
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };
  

  return (
    <div>
      <Navbar className='instabuy-navbar'>
        <Navbar.Brand onClick={() => navigate('/')} style={{color:"#216ad9", fontWeight:700}}>
          <img
          src={Logo}
          alt=''
          width="30"
          height="30"
          className='d-inline-block align-top'
          
          />{''} INSTABUY!
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">

          
          {user && 
          <div
            style={{
              position: "relative",
              display: "inline-block",
              cursor: "pointer",
            }}
            onClick={() => navigate("/cart")}
          >
            <img
              src={cartimg}
              alt="cart"
              className="cart-float"
              style={{ height: 40 }}
            />

            {Object.keys(cartItems).length > 0 && (
              <Badge
                bg="success"
                style={{
                  position: "absolute",
                  top: "-5px",
                  right: "-10px",
                }}
              >
                {Object.keys(cartItems).length}
              </Badge>
            )}
          </div>}
          &nbsp; &nbsp; &nbsp; &nbsp;
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              marginRight: "20px",
              padding: "8px",
              borderRadius: "30px",
              border: "1px solid #ccc"
            }}
          />
          {user ? (
          <img
            src={logoutimg}
            alt="Logout"
            style={{ height: "40px", cursor: "pointer" }}
            onClick={handleLogout}
          />
            ) : (
          <Button
            onClick={() => navigate("/login")}
            style={{ border: "1px solid grey" }}
          >
            Login
          </Button>
        )}
        </Navbar.Collapse>
        
      </Navbar>
      <Routes>
        <Route path='/' element={<Home user={user}/>}/>
        <Route path='/login' element={<Login setUser={setUser}/>}/>
        <Route path='/signup' element={<Signup setUser={setUser}/>}/>
        <Route path='/products' element={<ProductGallery searchTerm={searchTerm} />}/>
        <Route path='/products/:id' element={<ProductDetailes handleAddToCart={handleAddToCart} cartItems={cartItems} />}/>
        <Route path='/cart' element={<Cart cartItems={cartItems} setcartItems={setcartItems}/>}/>
        <Route path='/checkout' element={<Checkout setcartItems={setcartItems}/>}/>
        <Route path="/success" element={<OrderSuccess />} />
      </Routes>

    


    </div>
  )
}

export default App
