import React, { useState } from 'react'
import style from "../styles/contact.module.css"
import axios from 'axios'
import toppizza from "../assets/images.jpeg"
function Contact() {
  let [name,setName] = useState("")
  let [email,setEmail] = useState("")

  let submit = ()=>{
    let load = {
      name:name,
      email:email,
    }
    axios.post("http://localhost:3000/respond",load)
    .then(()=>{
      console.log("posted successfully");
    }).catch(()=>{
      console.log("error in posting");
    })
  }

  return (
    <div id={style.contact}>
        <section>
          <img src={toppizza} alt="" />
        </section>
        <article>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id='name' placeholder='Enter your name' autoComplete="none" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <label htmlFor="email">Email</label>
            <input type="text" id='email' placeholder='Enter your email Id' autoComplete="none" value={email} onChange={(e)=>{setEmail(e.target.value)}}/> <br />
            <button onClick={submit}>Submit</button>
          </div>
        </article>
    </div>
  )
}

export default Contact