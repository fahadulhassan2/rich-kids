import React from 'react'
import {
    FaqContainer,
    FaqWrapper,
    Accord
}
from "./HistoryElements"
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import img2 from './dordgeboy.jpg'


const History = () => {
    return (
        <FaqContainer id="history">
        {/* <FaqWrapper> */}
       
         <div className="containter py-5 img-fluid"
        style={{  backgroundPosition: "top right", height: "auto", objectFit: "contain"}}>
          
           
            <div style={{textAlign: "center"}}>
     
                <Zoom left>
                <p className="fw-bold " style={{fontSize: "4rem", color:"#fff" , lineHeight: " "}}>
               Hist<span style={{color:"#DA0000"}}>ory</span>
           </p>
           </Zoom>
       
           </div>
    
        <div className="container py-5"> 
        
        
        
        <div className="row mt-5 justify-content-center">
            <div className="col-lg-4 col-md-8 col-sm-10 fs-5 " >
            <Fade left>
            <p className="px-2 fs-5 mb-5 pe-4 pt-2" style={{borderTop: "1px solid #ffff" ,borderRight: "1px solid #ffff"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Fade>
            </div>
            <div className="col-lg-3 col-md-8 col-sm-10  mx-auto">
            <Fade top>
            <img className="img-fluid" style={{width:"100%", height:"80%"}} src={img2} />    
            </Fade>
        </div>
            <div className="col-lg-4 col-md-8  col-sm-10 ">
            <Fade right>
            <p className="px-2 fs-5 pt-2 ps-4 " style={{borderTop: "1px solid #ffff" ,borderLeft: "1px solid #ffff"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Fade>
            </div>
        </div>

        </div>
    </div>

        {/* </FaqWrapper> */}
        </FaqContainer>
    
    )
}

export default History;