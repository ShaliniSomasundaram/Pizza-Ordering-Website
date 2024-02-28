import React from 'react'
import style from "../styles/footer.module.css"
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div id={style.footer}>
        <section>
            <h4><span style={{fontFamily:"Arial", marginRight:"4px"}}>&copy;</span>We serve you healthy - SofT</h4>
            <p>since 2013</p>
        </section>
        <article>
            <Link to ={"https://twitter.com/"}><FaTwitter/></Link >
            <Link to ={"https://www.facebook.com/"}><FaFacebook/></Link>
            <Link to ={"https://www.instagram.com/"}><FaInstagram/></Link>
            <Link to ={"https://www.linkedin.com/"}><FaLinkedin/></Link>
        </article>
    </div>
  )
}

export default Footer