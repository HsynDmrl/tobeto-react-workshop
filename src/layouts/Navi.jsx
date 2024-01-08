import React, {useState} from "react";
import CartSummary from "./CartSummary";
import { Container, Menu } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import SignedIn from "./SingedIn";
import SignedOut from "./SingedOut";
import { useSelector } from 'react-redux';

export default function Navi() {

  const {cartItems} = useSelector(state => state.cart)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const navigate = useNavigate();

  function handleSignOut() {
    setIsAuthenticated(false)
    navigate('/')
  }

  function handleSignIn() {
    setIsAuthenticated(true)
    navigate('/')
  }

  function carsOpen() {
    setIsAuthenticated(true)
    navigate('/cars')
  }
  function homeOpen()
  {
    navigate('/')
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" onClick={homeOpen}/>
          {isAuthenticated ? <Menu.Item name="cars"  onClick={carsOpen}/>:<Menu.Item style={{ display: 'none' }} name="cars" />}

          <Menu.Menu position="right">
            {cartItems.length>0&&<CartSummary/>}
            {isAuthenticated ? <SignedIn signOut={handleSignOut} />
            :<SignedOut signIn={handleSignIn}/>}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}