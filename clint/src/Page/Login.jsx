import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
const Login = () => {

    const  history  = useNavigate()

    const [email,setemail] = useState("") 
    const [password,setpassword] = useState("") 

    const Check = async (e)=>{
        e.preventDefault()
        if(email !== "" && password !==""){
            try {
                await axios({
                    method:"POST",
                    url:"http://localhost:7676/login/",
                    data:{
                        mail:email,
                        password:password
                    }
                })
                 .then(res=>{
                    console.log(res.data.message)
                    if(res.data.message === "ok"){
                        history(`/home/${res.data.data.id}`)
                    }
                })
            } catch (error) {
                
            }
        }
    }

  return (
    <div>
        <form method='post' >
            <div className="label">
                <label htmlFor="">username</label>
                <input type="text" onChange={(e)=>{setemail(e.target.value)}} name="username" id="" />
            </div>
            <div className="label">
                <label htmlFor="">password</label>
                <input type="password"  onChange={(e)=>{setpassword(e.target.value)}}  name="password" id="" />
            </div>
            <input type="submit" value="Login" onClick={Check} />
        </form>
        <div className="s">
            <Link to="/sginup"> SginUp</Link>
        </div>
    </div>
  )
}

export default Login
