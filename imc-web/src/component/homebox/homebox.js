import React, {Component} from 'react';
import './homebox.css';



class HomeBox extends Component{
    render(){
        return(
        <div className="container-homebox container-flex">
        <div className="row">
            
        <div className="col-sm-6">
        <div className="outerbox">
        <div className="middlebox">
        <div className="innerbox">
        <h1 class="display-5" id="home">About Us</h1>
        <p class="text">
          <b>Iqra Medical Centre</b> is a charitable hospital started by Dr.Nargis Fatima. Our branches in Orangi Town and North Karachi have now been serving the local population for more than 20 years. Both of our branches are equipped with state-of-the-art medical equipments. Our faculty ranges from highly accomplished and well reknowned doctors to highly trained junior medical staff members.   
        
 
        </p>
        </div>    
        </div>
            
        </div>    
            
            
        </div>
        <div className="col-sm-6 col-margin"></div>
                
        </div>    
            
            
            
        </div>);
    }
    
}

export default HomeBox;