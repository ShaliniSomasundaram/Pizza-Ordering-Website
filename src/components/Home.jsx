import React from 'react'
import style from "../styles/home.module.css"
import { Link } from 'react-router-dom'
import pizza from "../assets/pizza.jpeg"

function Main() {
  return (
    <section id={style.home}>
      <article>
        <h1>Pedro's Pizzeria</h1>
        <h4>Pizza To Fit Any Taste</h4>
        <button><Link to={"/menu"}>Order Now</Link></button>
      </article>
    </section>
  )
}

export default Main