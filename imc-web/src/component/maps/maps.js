import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './maps.css';
const style = {
    width: '50%',
    height: '50%',
    right: '20px',
    display: 'block',
    position: 'none',
    left: ''
}

const position = {
    lat: '24.964824',
    lng: '67.050612'
}

class Location extends Component {


    render() {
        return (
            
            
               

                    <Map google={this.props.google} zoom={14} style={style}
                        initialCenter={position}>

                        <Marker onClick={this.onMarkerClick}
                            name={'Current location'} />

                        <InfoWindow onClose={this.onInfoWindowClose}>

                        </InfoWindow>
                    </Map>
                 



        
        );
    }
}



export default GoogleApiWrapper({
    apiKey: ("AIzaSyBOs6kNlBpthWy4CmtvXdF2Ycbe1SHggmQ")
})(Location)
