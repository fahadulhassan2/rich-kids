import React,{useEffect,useState} from 'react'
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import Roll from 'react-reveal/Roll';

import Fade from 'react-reveal/Fade';
import { RoadContainer,RoadWrapper } from './MemberElements';
import Rotate from 'react-reveal/Rotate';
import styled from 'styled-components';
import img2 from "./graphics/member4.png";
const Hide = styled.div`

@media screen and (max-width: 768px){
    display: none;
}
`


const Members = () => {

    return (
        <RoadContainer id="services">
        <RoadWrapper>
        <div className="container justify-content-around" style={{ }}>
             <div style={{textAlign: "center"}}>
             <p className="fw-bold " style={{fontSize: "4rem", color:"#fff" , lineHeight: " "}}>
               TE<span style={{color:"#DA0000"}}>AMS</span>
           </p>
           </div>
          
 

       
              
               {/* {TEAMS DATA HERE} */}
               <div class="">
               
            <div class=" row justify-content-center" >
            <Fade left>
                <div class="col-xl-7 col-lg-8 col-sm-12 ml-5" >
                    <div class="newrow row m-0 p-0 justify-content-xl-evenly" >
                       
                        <div class="col-lg-4 col-md-6 col-sm-6 col-auto">
                            {/* <p class="text-light ver fw-bold text-uppercase fs-6" style={{writingMode: "vertical-rl",
                            textOrientation: "mixed", position: "relative", top: "9rem", left: "14rem"}}>Project Lead</p> */}
                            <div class="box w-75">
                                <img class="img-fluid " src={img2} alt=""/>
                            </div>
                            <p class="text-light mt-2 fs-5">Minzur</p>
                        </div>

                        <div class="col-lg-4 col-md-6 col-sm-8 col-auto">
                            {/* <p class="text-light ver fw-bold text-uppercase fs-6" style={{writingMode: "vertical-rl",
                            textOrientation: "mixed", position: "relative", top: "9rem", left: "14rem"}}>Project Lead</p> */}
                            <div class="box w-75">
                                <img class="img-fluid " src={img2} alt=""/>
                            </div>
                            <p class="text-light mt-2 fs-5">Minzur</p>
                        </div>

                       
                    </div>
                    <div class="newrow row m-0 p-0 justify-content-xl-evenly">
                    <div class="col-lg-4 col-md-6 col-sm-8 col-auto">
                            {/* <p class="text-light ver fw-bold text-uppercase fs-6" style={{writingMode: "vertical-rl",
                            textOrientation: "mixed", position: "relative", top: "9rem", left: "14rem"}}>Project Lead</p> */}
                            <div class="box w-75">
                                <img class="img-fluid " src={img2} alt=""/>
                            </div>
                            <p class="text-light mt-2 fs-5">Minzur</p>
                        </div>

                        <div class="col-lg-4 col-md-6 col-sm-8 col-auto">
                            {/* <p class="text-light ver fw-bold text-uppercase fs-6" style={{writingMode: "vertical-rl",
                            textOrientation: "mixed", position: "relative", top: "9rem", left: "14rem"}}>Project Lead</p> */}
                            <div class="box w-75">
                                <img class="img-fluid " src={img2} alt=""/>
                            </div>
                            <p class="text-light mt-2 fs-5">Minzur</p>
                        </div>

                     
                    </div>
                </div>
                </Fade>
            </div>
           
        </div> 
         
 
               {/* Team */}
              
               
         
       
            
            
        </div>
         </RoadWrapper>
         </RoadContainer>
    )
}

export default Members
