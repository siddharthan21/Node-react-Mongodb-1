import React, { useState } from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
const Sginup = () => {

    const history = useNavigate()

    const [email,setemail] = useState("") 
    const [password,setpassword] = useState("") 

    const Check = async (e)=>{
        e.preventDefault()
        if(email !== "" && password !==""){
            try {
                await axios({
                    method:"post",
                    url:"http://localhost:7676/sginup/",
                    data:{
                        mail:email,
                        password:password
                    }
                })
                .then(res=>{
                    if(res.data === "exits"){
                        alert("user alreasy exits")
                    }
                    if(res.data.message === "ok"){
                        history("/home")
                    }
                    console.log(res.data)
                })
            } catch (error) {
                console.log(error)
            }
        }
    }

  return (
    <div>
        <h1>Sginup</h1>
        <form method='post'>
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
    </div>
  )
}
export default Sginup
