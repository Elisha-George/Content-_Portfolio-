import React from "react";
import { ReactDOM } from "react";
import "./Style.css"
import Logo_png from './images/Logo_png.png'

export const Nav = () => {
  return (
    <div>

    <section className="Hero">
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent" id="nav-Bar">
     <a class="brand" href="#">
     <img src = {Logo_png} alt="Banner" height="120px" width="120px"/>
        </a> 
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNav">
          <ul class="navbar-nav ul_nav">
           
            <li class="nav-item">
              <a class="nav-link text-white" href="#about_page">About</a>
            </li>
         

            <li class="nav-item">
              <a class="nav-link text-white" href="#service_page">Services</a>
            </li>

            <li class="nav-item">
              <a class="nav-link text-white" href="#brands_page">Brands</a>
            </li>

            <li class="nav-item">
              <a class="nav-link text-white" href="#Contact">Contact</a>
            </li>



          </ul>
        </div>
      </nav>



<div className="middle_Section">
  
  {/* <h1 className="logo_head mid_head">  EW </h1> */}
  <img src={Logo_png} alt="" height='150px'/>
  <h2 className="name mid_head"> Elisha Writes </h2>
  <h3 className="ocupation mid_head">  Content Specialist </h3>
  <h4 className="tagline mid_head">Content Writer, copy writer and Blog Specialist</h4>

</div>



    </section>

    </div>
  )
}
