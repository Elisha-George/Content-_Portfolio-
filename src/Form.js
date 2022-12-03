import React from 'react'
import './Style.css'

export const Form = () => {
  return (
    <section className="form_Sec">

            <div className="container form_container">

                    <div className="row">
                        <div className="col-md-12">
                        <h1 className="form_Head text-center">
                            Get In Touch
                        </h1>
                        </div>
                    </div>

                    <div className="row row_form_intro">
                        <div className="col-md-12 ">
                            <h4 className="form_para text-center">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse dolor, neque corrupti ex perspiciatis minus vero voluptates doloribus ipsam cum nemo repudiandae commodi! Eveniet ut nihil reprehenderit dolores, sunt fugiat.
                            </h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                        <h4 className="lable text-center" id='lable_name'>
                            Name
                        </h4>
                        <div class="form-group">
                            <input type="text" class="form-control form_input" id="exampleFormControlInput1"  placeholder="John Mark" />
                        </div>
                        </div>
                    </div>


                    <div className="row">
                    <div className="col-md-12">
                        <h4 className="lable text-center" id='lable_email'>
                            Email
                        </h4>
                        <div class="form-group">
                            <input type="email" class="form-control form_input" id="exampleFormControlInput1"  placeholder="John@example.com" />
                        </div>
                        </div>
                    </div>

                    
                    <div className="row">

                    <div className="col-md-12">
                        <h4 className="lable text-center" id='lable_message'>
                            Message
                        </h4>
                        <div class="form-group">
                        <textarea class="form-control form_area" id="exampleFormControlTextarea1" rows="6" placeholder='Your Message'></textarea>
                        </div>
                        </div>
                    </div>
                    <div className="row">

                    <button type="button" class="btn btn-primary btn-lg btn-block btn_send">Send Message</button>
                   
                    </div>
            </div>

        <div className="container social_container">
            <div className="row">
                <div className="col-md-12">
                    
                </div>
            </div>
        </div>

    </section>
  )
}
