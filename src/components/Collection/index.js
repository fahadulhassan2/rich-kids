import React from 'react'
import {
    FaqContainer,
    FaqWrapper,
    Accord
}
from "./CollectionElement"
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';

import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

import opensea from "./graphics/opensea.png"
import g3 from "./graphics/gallery3.png"
import g1 from "./graphics/gallery1.png"
import g2 from "./graphics/gallery2.png"
import styled from "styled-components";

const Hide = styled.div`

@media screen and (max-width: 768px){
    display: none;
}
`
const STDIV = styled.div`
// margin-left: 300px;
@media screen and (max-width: 768px){
    // margin-left: 0px;
}
`
const Collection = () => {
    return (
        <FaqContainer id="collection">
        {/* <FaqWrapper> */}
       
         <div className="containter py-5 img-fluid"
        style={{  backgroundPosition: "top right", height: "auto", objectFit: "contain"}}>
          
           
            <div style={{textAlign: "center"}}>
     
                <Zoom left>
                <p className="fw-bold " style={{fontSize: "4rem", color:"#fff" , lineHeight: " "}}>
               Coll<span style={{color:"#DA0000"}}>ectio</span>n
           </p>
           </Zoom>
       
           </div>
    
        <div className="container-fluid d-flex "> 
            <div className=" ">
            <div className=" row justify-content-center">
              
                <div className="col-xl-8 col-lg-8 col-sm-12 ">
                    <div className="row justify-content-center my-5 mx-5">
                        <div className="col-10">
                        <Fade left>
                            <img className="img-fluid" src={g1} alt=""/>
                        </Fade>
                        </div>
                        <div className="col-12">
                        <Fade right>
                            <img className="img-fluid" src={g2} alt=""/>
                            </Fade>
                        </div>
                        <div className=" col-10">
                        <Fade left>
                            <img className="img-fluid" src={g3} alt=""/>
                            </Fade>
                        </div>
                    </div>
                    <div className="text-center">
                        <p className="text-light fs-5">Discover the entire collection on</p>
                        <img className="img-fluid" style={{width: "10rem"}} src={opensea} alt=""/>
                    </div>
                </div>
            </div>
        </div>

  


        </div>
    </div>

        {/* </FaqWrapper> */}
        </FaqContainer>
    
    )
}

export default Collection
