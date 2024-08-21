import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { PiBabyLight } from "react-icons/pi";
function Navbar() {
  const isUserSignedin = !!localStorage.getItem('token');
  const navigate = useNavigate();
  const handleSignout = (e)=>{
    e.preventDefault();
    localStorage.removeItem('token');
    navigate('/login')
  }
  return (
    <nav className='nav-bar'  >
  
      <Link to="/" ><h1 className='logo'><PiBabyLight />KIDO</h1></Link>
      <Link to="/" ><h1 className='Home'>Home</h1></Link>
      <ul style={{display:"flex", gap: "20px"}}>
        {isUserSignedin ? (<>
        <Link to='/account'><li>Account</li></Link>
        <li><button onClick={handleSignout} className='signout-btn'>Sign OUt</button></li>
        </>): <> 
        <Link to="/login" className='login-btn'><li>Login</li></Link>
        <Link to="/signup" className='signup-btn' ><li>Sign Up</li></Link>
        </>}
       
       
      </ul>
    </nav>
  )
}

export default Navbar