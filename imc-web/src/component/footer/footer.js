import React, { Component } from 'react';
import './footer.css'; 


class Footer extends Component{
    render(){
        return(
            <div className="container-footer">
                <div className="row">

                    <div className="col-md-2"> <a href="#">Contact Us</a></div>
                    <div className="col-md-3"> <a href="#">Your comments</a></div>
                    <div className="col-md-3"> <a href="#">Terms of Services</a> </div>
                    <div className="col-md-1"> <a href="#">Privacy</a></div>
                    <div className="col-md-3"> <a href="#" data-toggle="modal" data-target="#exampleModalLong">I am an admin</a></div>
                    

                </div>     
                <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6">
                        <p className="footer-statement">Copyright © 2018. All Rights Reserved. Iqra Medical Centre</p>    
                    </div>
                    <div className="col-sm-3"></div>
                </div>


            </div>


        );
    }    


}

export default Footer;