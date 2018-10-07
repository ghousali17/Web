import React, {Component} from 'react';
import './services.css';
import IMG1 from './mri.jpg';
import IMG2 from './lab.jpg';
import IMG3 from './nicu.JPG';
import IMG4 from './x-ray.jpg';
import IMG5 from './blood.jpg';
import IMG6 from './ot.jpg';


class Services extends Component{
    render(){
        return(
            <div className="container-services container-flex">


                <div className="container-heading">
                    Our Facilities  
                </div>


                <div className="servicesbox">          
                    <div className="row row-gray">
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-sm-12">
                                    <p class="subheading">Magnetic Resonance Imaging (MRI)</p>    
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-md-6 col-inner">
                                    <p className="text">With the aid of latest MRI scanners, our skilled neurologists and uncologists ensure quick and accurate daignosis for our patients.Lets see how it goes.</p>

                                </div>  
                                <div className="col-md-6 col-inner col-img">
                                    <img src={IMG1} class="img-fluid" alt="Responsive image"/>

                                </div>

                            </div>

                        </div>
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-sm-12">
                                    <p class="subheading">X-Ray</p>    
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-md-6 col-inner">
                                    <p className="text">With the aid of latest MRI scanners, our skilled neurologists and uncologists ensure quick and accurate daignosis for our patients.</p>

                                </div>  
                                <div className="col-md-6 col-inner col-img">
                                    <img src={IMG4} class="img-fluid" alt="Responsive image"/>

                                </div>

                            </div>

                        </div>



                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-sm-12">
                                    <p class="subheading">Pathology Lab</p>    
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-md-6 col-inner">
                                    <p className="text">With the aid of latest MRI scanners, our skilled neurologists and uncologists ensure quick and accurate daignosis for our patients.</p>

                                </div>  
                                <div className="col-md-6 col-inner col-img">
                                    <img src={IMG2} class="img-fluid" alt="Responsive image"/>

                                </div>

                            </div>

                        </div>
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-sm-12">
                                    <p class="subheading">Blood Bank</p>    
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-md-6 col-inner">
                                    <p className="text">With the aid of latest MRI scanners, our skilled neurologists and uncologists ensure quick and accurate daignosis for our patients.</p>

                                </div>  
                                <div className="col-md-6 col-inner col-img">
                                    <img src={IMG5} class="img-fluid" alt="Responsive image"/>

                                </div>

                            </div>

                        </div>



                    </div>
                    <div className="row row-gray">
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-sm-12">
                                    <p class="subheading">Netal Intensive Care Unit (NICU)</p>    
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-md-6 col-inner">
                                    <p className="text">With the aid of latest MRI scanners, our skilled neurologists and uncologists ensure quick and accurate daignosis for our patients.</p>

                                </div>  
                                <div className="col-md-6 col-inner col-img">
                                    <img src={IMG3} class="img-fluid" alt="Responsive image"/>

                                </div>

                            </div>

                        </div>
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-sm-12">
                                    <p class="subheading">Operation Theater</p>    
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-md-6 col-inner">
                                    <p className="text">With the aid of latest MRI scanners, our skilled neurologists and uncologists ensure quick and accurate daignosis for our patients.</p>

                                </div>  
                                <div className="col-md-6 col-inner col-img">
                                    <img src={IMG6} class="img-fluid" alt="Responsive image"/>

                                </div>

                            </div>

                        </div>



                    </div>
                </div>

            </div>






        );
    }

}

export default Services;