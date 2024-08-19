import React,{useState, useEffect} from 'react'

import axios from "axios"
import {useNavigate} from "react-router-dom"

function Login() {
  const [user, setUsers] = useState([]);
  const navigate = useNavigate()
  const [username, setUsername] =useState("");
  const [password, setPassword] = useState("");

  useEffect(()=>{
    ftechUsers()
  },[])
  //fetch users
  const ftechUsers =()=>{
   axios
   .get("http://localhost:3005/register")
   .then((res=>{
    console.log(res.data)
   }))
    
  }

  //handle login
  const handleLogin =async(e)=>{
    e.preventDefault();
    try {
      const response =await axios.post('http://localhost:3005/login',{username,password});
       const token = response.data.token
      setUsername('')
       setPassword('')
        ftechUsers();
        navigate("/account");
        window.location.reload();
        localStorage.setItem("token", token)
        alert("Loggedin Successfulyy!")

    } catch (error) {
      
    }
  }
  return (
    <div>
      <div className={formStyle}>
        <form onSubmit={handleLogin}
        style={{display:'flex',flexDirection:"column", justifyContent:"center",alignItems:"center", padding:"10px"}} >
     
      <br />

      <label htmlFor="username">Username</label>
      <input name='username' type='text'  onChange={(e)=>setUsername(e.target.value)} style={{padding:"10px"}}/>
      <br />

      <label htmlFor="password">Password</label> 
      <input name='password' type='password' onChange={e=>setPassword(e.target.value)} style={{padding:"10px"}}/>
<br />
<button type='submit'>SignIn</button>

        </form>
      </div>
      <div>

      </div>
    </div>
  )
}
const formStyle ={
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  border:" 1px solid black",
 
}
export default Login