import React, { Component } from 'react';

import './location.css';
class Location extends Component{





    render(){
        return(
            <div className = "container-location container-fluid">

                <div className="container-flid container-location-inner">
                    <div className="row">
                        <div className="col-lg-6 col-location-outer">
                            <div className="row">
                                <div className="col-lg-12 col-location-inner">
                                    <div className="row">
                                        <div className="col-sm-12"></div>
                                        <p class="subheading" id="nk"><u><b>North Karachi</b></u></p>
                                    </div> 
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="row">
                                                <div className="col-6">
                                                    <p class="text"><u><b>Address:<br/></b></u> A-25,6D-2,<br/>North Karachi,<br/>Karachi<br/>Pakistan.<br/>
                                                        <u><b>Contact:<br/></b></u> +92-308-3137504 <br/>
                                                    </p> 
                                                </div>
                                                <div className="col-6">
                                                    <p class="text">
                                                        <u><b>Emergency:<br/></b></u>
                                                         24 Hours <br/>
                                                        <b>Visitation Hours:<br/></b> 09:00-14:00 <br/> 17:00-22:00 </p> 
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-sm-6">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14468.160068269917!2d67.04345975633576!3d24.964753100000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3408b34105693%3A0x600e1b1f703f0355!2sIqra+Medical+Centre!5e0!3m2!1sen!2shk!4v1537954431571"  allowfullscreen/>   
                                        </div>
                                    </div>    
                                </div>
                            </div>
                        </div>



                        <div className="col-lg-6 col-location-outer">
                            <div className="row">
                                <div className="col-lg-12 col-location-inner">
                                    <div className="row">
                                        <div className="col-sm-12"></div>
                                        <p class="subheading" id="ot"><u><b>Orangi Centre</b></u></p>
                                    </div> 
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="row">
                                                <div className="col-6">
                                                    <p class="text"><u><b>Address:<br/></b></u> A-25,6D-2,<br/>North Karachi,<br/>Karachi<br/>Pakistan.<br/>
                                                        <u><b>Contact:<br/></b></u> +92-308-3137504 <br/>
                                                    </p> 
                                                </div>
                                                <div className="col-6">
                                                    <p class="text">
                                                        <u><b>Emergency:</b></u><br/> 24 Hours <br/>
                                                        <b>Visitation Hours:<br/></b> 09:00-14:00 <br/> 17:00-22:00 </p> 
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-sm-6">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14468.160068269917!2d67.04345975633576!3d24.964753100000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3408b34105693%3A0x600e1b1f703f0355!2sIqra+Medical+Centre!5e0!3m2!1sen!2shk!4v1537954431571"  allowfullscreen/>   
                                        </div>
                                    </div>    
                                </div>
                            </div>
                        </div>

                    </div>
                </div>



            </div>); 

    }

}

export default Location;