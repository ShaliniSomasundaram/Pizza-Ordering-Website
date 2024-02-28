import React, { useState } from 'react';
import style from "../styles/nav.module.css";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";

function Nav({count,warning}) {

  const [isOpen,setIsOpen] = useState(false)

  let clk = ()=>{
    setIsOpen(!isOpen)
  }
  
  return (
    <div id={style.nav}>
        <section>
            <h1>SofT</h1>
            <p>Slice of Toppings</p>
        </section>
        <article>
          <main>
            <button onClick={clk}><AiOutlineMenu/></button>
          </main>
          <section className={isOpen ? style.open : style.close}>
            <Link to={"/"}>Home</Link>
            <Link to={"/menu"}>Menu</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
          </section>
          <div>
            <button><Link to={"/cart"}><AiOutlineShoppingCart/></Link> <span>{warning}</span></button>
            <span>{count}</span>
          </div>
        </article>
    </div>
  )
}

export default Nav