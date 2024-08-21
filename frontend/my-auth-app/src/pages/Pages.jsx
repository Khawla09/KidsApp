import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Account from "./Account"
import SignUp from "./SignUp"
import Login from "./Login"
import Product from './Product'
import Type from './Type'
function Pages() {
  const isUserSignedin = !!localStorage.getItem('token')
  return (
    <div>
        <Routes>
  <Route path="/" element={<Home />}  />
  <Route path="/login" element={<Login />}  />
  <Route path="/signup" element={<SignUp />}  />
  {isUserSignedin && <Route path="/account" element={<Account />}  />}
  <Route path='/category/:category' element = {<Type />} />
  <Route path='/products/:id' element ={<Product />} />
</Routes>
    </div>
  )
}

export default Pages