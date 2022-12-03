import React from "react";
import { ReactDOM } from "react";
import "./Style.css"
import blog from './images/blog.jpg'
import copywriting from './images/copywriting.jpg'
import web_content from './images/web_content.jpg'



export const Services = () => {

    return (

        <section className="services_sec">
            <div className="container container_sec" id="service_page">
            <div className="row service_head">

            <div className="col-md-12">
                <h1 className="service_heading text-center">Services I offer </h1>
            </div>

            </div>
            <div className="row services_desc">

            <div className="col-md-12 description">
                <h4 className="text-center">
                  "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolorem, nulla unde cumque quia aliquid suscipit quaerat ad iste blanditiis aspernatur quis provident! Excepturi minus doloribus reprehenderit inventore! Dolorum, doloremque? "
                </h4>
            </div>

            </div>
            <div className="row services_pics_row">

            <div className="col-md-3 service_1 services_pics" >
               
                    <h3 className="service_title text-center">
                            Blog Writing
                        </h3>
                        <img src={blog} alt="" />

                    </div>


            <div className="col-md-3 service_2 services_pics">
           
                    <h3 className="service_title text-center">
                            Copy Writing </h3>

                    <img src={copywriting} alt="" />

                    </div>


            <div className="col-md-3 service_3 services_pics">
               
            <h3 className="service_title text-center">
                    Web Content
                </h3>
                <img src={web_content} alt="" />
                

            </div>

            </div>

            <div className="row service_button text-center">
            <button>
              <h4>  Get Offers</h4>
            </button>
            </div>

            <div className="row service_end">
            <div className="col-md-12 description_2">
          <h4 className="text-center">" We are Ladies and Gentelmen  Serving Ladies and Gentelmen " </h4>
            </div>
            <div/>

        </div>
        </div>
        </section>

       
    )


}