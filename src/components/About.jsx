import React from 'react'
import margherita from "../assets/margherita.jpg"
import style from "../styles/about.module.css"

function About() {
  return (
    <div id={style.about}>
      <section>
        <img src={margherita} alt="" />
      </section>
      <article>
          <h1>About Us</h1>
          <p>Indulge in a mouthwatering pizza experience like no other at our pizzeria! Our artisanal pizzas are crafted with passion and precision, using only the finest, freshest ingredients. Every bite is a symphony of flavors, from the perfectly crispy crust to the rich and savory tomato sauce, and the generous toppings that burst with taste in every bite. Whether you're a fan of classic Margherita, a meat lover craving our hearty pepperoni, or a vegetarian savoring our garden-fresh options, our diverse menu has something to delight every palate. Join us for a slice of perfection and experience pizza bliss like never before. With our commitment to quality and flavor, you'll soon discover why we're the go-to destination for pizza enthusiasts in town!</p>
      </article>
    </div>
  )
}

export default About