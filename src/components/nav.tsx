import React from "react";
import { Link } from "gatsby";
import style from "./nav.module.css";

export default function Navbar() {
    return <div className={style.navbar}>
        <Link to="/">Home</Link>        
        <Link to="/contact">Contact</Link>        
        <Link to="/about">About</Link> 
        <Link to="/product">Product</Link> 
    </div>
}