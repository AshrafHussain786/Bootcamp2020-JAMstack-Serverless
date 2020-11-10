import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import Product1 from "../components/product1"
import Product2 from "../components/product2"
import Main from "../components/main"
import { Link } from "gatsby";

const Product = () => {
    return (
        <Layout>
            <div>
                <h2>Products List</h2>
                <Link to="/product/page1">Product1</Link> 
                <br />
                <Link to="/product/page2">Product2</Link> 
            </div>
            <Router basepath="/product">
                <Product1 path="/page1" />
                <Product2 path="/page2" />
                <Main path="/" />
            </Router>
        </Layout>
    )
}

export default Product;