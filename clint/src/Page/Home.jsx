import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../Context/Provise'
import axios from 'axios'
import { useParams } from 'react-router-dom'
// import {list,setlist} from '../Context/Context'

const Home = () => {



  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:7676/get/",
      params: {
        id: id
      }
    }).then(res => {
      // console.log(res.data.data.length)
      // const alldata = []
      setlist(res.data.data);
    })
  }, [])



  const id = useParams()
  // console.log(id.id)
  const add = (e) => {
    e.preventDefault()
    if (message !== "") {
      axios.post("http://localhost:7676/add/", {
        message: message,
        mail: id.id
      }).then(res => {
        console.log(res.data)

        if (res.data.message === "upadted") {
          window.location.reload()
        }
      })
    }
  }
  // const list = useContext(UserContext)
  const [list, setlist] = useState([])
  const [message, setmessage] = useState([])
  return (
    <div>
      <div className="">
        <input type="text" name="" onChange={(e) => { setmessage(e.target.value) }} id="" />
        <input type="submit" value="Add" onClick={add} />
      </div>
      <div className="listt"></div>
        <ol>
          {list.map((lists,i)=>{
            return (
              <li key={i} className='list'>
                <p>{lists}</p>
                <button>X</button>  
              </li>
            );
          })}
        </ol>
    </div>
  )
}

export default Home
