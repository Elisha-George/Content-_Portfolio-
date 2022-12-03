import React from "react";
import { ReactDOM } from "react";
import about_pic from './images/about_pic.jpg'
import "./Style.css"


export const About = () => {
    return(
        <section className="about_us">
        
            <div className="container container_about" id="about_page">
            <div className="row">
                <div className="col-md-7">
                    <h1 className="About_head text-center">About Me</h1>

                    <h4 className="intro_para"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi modi exercitationem officiis eos, facere sapiente impedit possimus assumenda labore reprehenderit ipsam expedita ratione quam numquam aliquid doloribus. Rerum totam liber</h4>  
                    <br />

                    <h4 className="intro_para"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi modi exercitationem officiis eos, facere sapiente impedit possimus assumenda labore reprehenderit ipsam expedita ratione quam numquam aliquid doloribus. Rerum totam libero, beatae ex vitae non, animi, adipisci tempore rem consequuntur ipsam quo </h4>
                    <br />

                    <h4 className="intro_para"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi modi exercitationem officiis eos, facere sapiente impedit possimus assumenda labore reprehenderit ipsam expedita ratione quam numquam aliquid doloribus. Rerum totam libero, beatae ex vitae non, animi, adipisci tempore rem consequuntur ipsam quo </h4>
                    <br />

                </div>

                <div className="col-md-5 col-sm-12">
                    <img src={about_pic} alt="" className="my_pic" />
                </div>
            </div>
        </div>
                
        </section>
    )
}