import React from 'react'
import { ReactDOM } from 'react'
import  './Style.css'
import GB_lab from './images/GB_lab.png'
import GBA from './images/GBA.png'
import grace_logo from './images/grace-logo.png'
import price_moving from './images/price_moving.png'
import techi from './images/techigator.jpg'
import W_USA from './images/Writers_ofUSa.png'




export const Brands = () => {
  return (
   <section className="brands_sec">

        <div className="container brands_container" id='brands_page'>
        <div className="row">
         
         <div className="col-md-12">
         <h1 className="brand_heading text-center">
            Brands I have Worked With
           </h1>

           <h3 className='text-center brands_quote'>
           “ Give Words to your Thoughts.” 
           </h3>
         </div>
         
        </div>
            <div className="row brands_pics">
                <div className="col-md-4">

                <div className="brand_name" id="brand_1">

                <img src={GBA} alt="" />

                </div>
                    
                </div>
                <div className="col-md-4">
                
                <div className="brand_name" id="brand_2">
                <img src={GB_lab} alt="" />
                    
                    </div>
                        

                </div>

                <div className="col-md-4">
                
                <div className="brand_name" id="brand_2">
                <img src={W_USA} alt="" />
                    
                    </div>
                        

                </div>

                
                
            </div>



            <div className="row brands_pics">
            <div className="col-md-4">
                   
            <div className="brand_name" id="brand_4">

            <img src={grace_logo} alt="" />

                    
                    </div>
                        

                </div>
                <div className="col-md-4">
               
                <div className="brand_name" id="brand_5">
                <img src={price_moving} alt="" />
                    
                </div>
                    

                </div>
                <div className="col-md-4">
             
                <div className="brand_name" id="brand_6">

                <img src={techi} alt="" />


                    </div>
                        
                </div>
            </div>

            
            <div className="row service_button brand_button text-center">
            <button>
              <h4>  Get Offers</h4>
            </button>
            </div>

            
         

        </div>

   </section>
  )
}
