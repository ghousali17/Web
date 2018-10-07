import React, { Component } from 'react';
import Doc1 from './doctor-1.jpg';
import Doc2 from './doctor-2.jpg';
import Doc3 from './doctor-3.jpg';
import Doc4 from './doctor-4.jpg';
import Doc5 from './doctor-5.jpg';
import Doc6 from './doctor-6.jpg';
import './people.css'; 


class People extends Component{
    render(){

        return(
            <div className="container-people">
                <div className="heading-main" id="doctors">Our Doctors</div>

                <div className="row">
                    <div  className="col-sm-1"></div>
                    <div  className="col-sm-10">
                        <div className="row row-people">

                            <div className="col-lg-4">
                                <div className="card-people">
                                    <div className="img-card-container">
                                        <img class="img-fluid img-card rounded-circle" src={Doc2} alt="Card image cap"/>
                                    </div>
                                    <div className="heading-card">Doctor Connor</div>
                                    <div className="subheading-card"><p>Gynaecologist</p></div>
                                    <div className="text-card"><p>It  is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p></div>

                                </div>    
                            </div>
                            <div className="col-lg-4">
                                <div className="card-people">
                                    <div className="img-card-container">
                                        <img class="img-fluid img-card rounded-circle" src={Doc3} alt="Card image cap"/>
                                    </div>
                                    <div className="heading-card">Doctor Gupta</div>
                                    <div className="subheading-card"><p>Cardiologist</p></div>
                                    <div className="text-card"><p>It  is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p></div>
                                </div>    
                            </div>

                            <div className="col-lg-4">
                                <div className="card-people">
                                    <div className="img-card-container">
                                        <img class="img-fluid img-card rounded-circle" src={Doc1} alt="Card image cap"/>
                                    </div>
                                    <div className="heading-card">Doctor Saddler</div>
                                    <div className="subheading-card"><p>Urologist</p></div>
                                    <div className="text-card"><p>It  is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p></div>

                                </div>    
                            </div>



                        </div> </div>
                    <div  className="col-sm-1"></div>
                </div>


                <div className="row">
                    <div  className="col-sm-1"></div>
                    <div  className="col-sm-10">
                        <div className="row row-people">

                            <div className="col-lg-4">
                                <div className="card-people">
                                    <div className="img-card-container">
                                        <img class="img-fluid img-card rounded-circle" src={Doc5} alt="Card image cap"/>
                                    </div>
                                    <div className="heading-card">Doctor Winslet</div>
                                    <div className="subheading-card"><p>Oncologist</p></div>
                                    <div className="text-card"><p>It  is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p></div>

                                </div>    
                            </div>
                            <div className="col-lg-4">
                                <div className="card-people">
                                    <div className="img-card-container">
                                        <img class="img-fluid img-card rounded-circle" src={Doc4} alt="Card image cap"/>
                                    </div>
                                    <div className="heading-card">Doctor Khabib</div>
                                    <div className="subheading-card"><p>Pediatrician</p></div>
                                    <div className="text-card"><p>It  is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p></div>
                                </div>    
                            </div>

                            <div className="col-lg-4">
                                <div className="card-people">
                                    <div className="img-card-container">
                                        <img class="img-fluid img-card rounded-circle" src={Doc6} alt="Card image cap"/>
                                    </div>
                                    <div className="heading-card">Doctor Jemima</div>
                                    <div className="subheading-card"><p>Neurologist</p></div>
                                    <div className="text-card"><p>It  is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p></div>

                                </div>    
                            </div>



                        </div> </div>
                    <div  className="col-sm-1"></div>
                </div>





            </div>


        );
    }

}
export default People;