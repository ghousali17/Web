import React, { Component } from 'react';
import './header.css'; 
import Logo from './logo-1.png';

class Header extends Component{




    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="logo-container container-fluid">
                            <img src={Logo} className="logo" alt="logo" />
                        </div>




                    </div>



                </div>






            </div>



        );
    }


}

export default Header; 