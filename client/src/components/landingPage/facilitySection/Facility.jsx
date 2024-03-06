import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import "./facility.css";


const Facility = () => {

    const {auth,signupOtp, toggleAuthDiv,toggleSignupOtp,loginOtp,toggleLoginOtp} = useContext(AuthContext);

    return (
        <div className='landingPageFacilityDiv' onClick={()=>{
           if(auth){
            toggleAuthDiv()
           } 
           if(signupOtp){
           toggleSignupOtp(false)
           }
            if(loginOtp){
                toggleLoginOtp(false)
            }


        }} style={{opacity: auth ? "0.9" : "1", backgroundColor: auth ? "rgb(112, 112, 112)" : "#2b1e16"}}>
           <div id="flexContentDiv">
            <div className="facilityDivItems">
                <img src="landingImages/noMinOrder.png" alt="" />
                <p className="facilityTitle">Your Customized itinerary</p>
                <p className="facilityContent">Plan your day with us, and enjoy without any hassle</p>
            </div>
            <div className="facilityDivItems">
                <img src="landingImages/bhai.png" alt="" />
                <p className="facilityTitle">Book your Stay</p>
                <p className="facilityContent">Get best place to stay, under your  budget!</p>
            </div>
            <div className="facilityDivItems">
                <img src="landingImages/flexContentDiv.png" alt="" />
                <p className="facilityTitle">Get your vehicle on the go</p>
                <p className="facilityContent">Experience best inner beauty of the city, and explore at your own</p>
            </div>
            </div>
        </div>
    );
};

export default Facility;