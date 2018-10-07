import React, { Component } from 'react';
import './donation.css';


class Donation extends Component{

    constructor(props)
    {
        super(props);

    }

    render()
    {
        return(
            <div className="container-donation" >
                <div className="row row-sect-3">
                    <div className="col-12 img-3">
                        <div className="row">
                            <div className="col-12 pad-3">
                                <div className="row txt-box-3">
                                    <div className="col-sm-12 txt-3">
                                        <p className="txt-top">
                                            1 year. 100 Forever Families.

                                        </p>
                                        <p className="txt-bot">
                                            Stories need heroes. Join us in the 100 campaign, a year-long journey to provide cancer treatment to 100 children and bring their smiles back.                                         </p>

                                    </div> 
                                </div>    
                            </div>    
                        </div>
                    </div>    
                </div>

                <div className="row row-sect-2">
                    <div className="col-sm-12 img-2">
                        <div className="row txt-box-2">
                            <div className="col-sm-4 txt-top"><p>
                                “If a child in its first thousand days — from conception to two years old — does not have adequate nutrition, the damage is irreversible.”

                                </p></div>
                            <div className="col-sm-4"></div>    
                            <div className="col-sm-4 txt-bot">WHAT IF You can be the one who saves them? What if you can be their knight in shining armour?</div>    

                        </div>


                    </div>




                </div>
                <div className="row row-sect-1" id="donate">
                    <div className="col-12 img-1">
                        <div className="row">
                            <div className="col-12 pad-1">
                                <div className="row txt-box-1">
                                    <div className="col-sm-12 txt-1">
                                        <p className="txt-top">
                                            We envision a world where familiy no lives with the fear of losing their loved ones for lack of affordable health care.

                                        </p>
                                        <p className="txt-bot">

                                            There is no exercise better for the heart than reaching down and lifting people up.
                                        </p>
                                        <div class="modal-1">
                                            <button type="button" class="btn btn-primary button-modal" data-toggle="modal" data-target="#exampleModal">
                                                Let's donate!
                                            </button>
                                        </div>
                                    </div> 
                                </div>    
                            </div>    
                        </div>
                    </div>    
                </div>
           
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Not a real website!</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                While we appreciate your altruism, let us remind you that this is a demo website and is not assciated with any NGO.
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            
                            </div>
                        </div>
                    </div>
                </div>

            </div>);
    }

}
export default Donation