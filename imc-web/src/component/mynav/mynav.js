import React, { Component } from 'react';
import './mynav.css'; 




class MyNav extends Component{

    render(){

        return(
            <div className="container-nav">
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Active</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                </ul>
            </div>


        );
    }

}

export default MyNav;
