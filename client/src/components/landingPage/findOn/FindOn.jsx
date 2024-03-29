import React from 'react';
import "./findOn.css"

const FindOn = () => {
    return (
        <div className='findOnDiv'>
            <div id="findOnContainer">
                <div className="findOnDivItems findOnDivItems1">
                 <h2 className="findOnTitle">
                 Travel in your pocket
                 </h2>  
                 <h3 className="findOnContent">
                 Visit your favorite places & track on the go, with the all-new Trippyfy  app.
                 </h3>   

                 <div id="downloadButtons">
                     <img src="landingImages/googlePlay.png" alt="" />
                     <img src="landingImages/appStore.png" alt="" />
                 </div>                                   
                </div>

                <div className="findOnDivItems" style={{marginLeft:"10vw"}}>
                <img src="landingImages/mob1.png" alt="" />       
                </div>
                <div className="findOnDivItems findOnDivItems3">
                <img src="landingImages/mob2.png" alt="" />
                </div>

            </div>
        </div>
    );
};

export default FindOn;