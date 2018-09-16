import React, { Component } from 'react';
import './header.css'; 
import Logo from './logo-1.png';

class Header extends Component{




    render(){
        return(
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="logo-container container-fluid">
                            <img src={Logo} className="logo" alt="logo" />
                        </div>




                    </div>



                </div>






            </div>



        );
    }


}

export default Header; 