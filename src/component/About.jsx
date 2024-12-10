import React from 'react'
// import { NavLink } from 'react-router-dom'
import Contact from '../component/Contact'

const About = () => {
  return (
    <div>
      <section class="bg-secondary m-3 p-3">
    <h1 class="text-center">About Shopify</h1>
    <p>Shopify is an ecommerce platform that makes it easy for anyone to start, run, and grow a business. With Shopify, you can create a beautiful online store, sell products anywhere in the world, and manage your business from anywhere.</p>
    <p>Shopify is used by over 1 million businesses around the world, and we're committed to helping our merchants succeed. We offer a wide range of features and tools to help you sell online, including a powerful checkout system, a mobile-friendly storefront, and a variety of marketing and analytics tools.</p>
    <p>We're also committed to providing our merchants with the best possible support. Our team of experts is available 24/7 to help you with any questions you have.</p>
    {/* <NavLink to="/Contact">Contact us today to learn more about Shopify</NavLink> */}
    <u>Contact us today to learn more about Shopify</u>
   
  </section>
  <Contact/>
    </div>
  )
}

export default About
