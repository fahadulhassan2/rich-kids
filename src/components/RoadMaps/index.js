import React from 'react'
import { MdBorderBottom } from 'react-icons/md'
import { ImageArea2,ImageArea, RoadContainer,LeftDiv, RoadWrapper,InfoRow } from './RoadMapElements'
import image2 from "../../images/bg-roadmap.jpg"
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';


const Hide = styled.div`

@media screen and (max-width: 768px){
    display: none;
}
`

const RoadMaps = () => {
    return (
        <RoadContainer id="services">
        <RoadWrapper>
        <div className="container justify-content-around" style={{}}>
        <div style={{textAlign: "center"}}>
        <p className="fw-bold " style={{fontSize: "4rem", color:"#fff" , lineHeight: " "}}>
               Ro<span style={{color:"#DA0000"}}>adma</span>ps
           </p>
           </div>
          
         
 

            <div className="row offset-1">
            <Fade bottom>
                <div className="col-lg-4 col-md-6 col-sm-12 " style={{borderBottom: "1px solid #fff", borderRight: "1px solid #fff", borderLeft: "1px solid #fff" }}>
                <div className="mt-5 pt-5 mx-4" >
                    <h2 className="display-3 fw-bold" style={{color:"#da0000"}} > 20% </h2>
                    <p className="fs-5"> - 10 NFT Bulls giveaway beetween holders</p>
                    <p className="fs-5"> - 10 ETH goes to the Community <br/>  Chest</p>  
                    </div>
                  </div>
                </Fade>
                
                <Fade top>
                <div className="col-lg-4 col-md-6 col-sm-12" style={{borderBottom: "1px solid #fff"}}>
                    <div className="mt-5 pt-5 mx-4" >
                    <h2 className="display-3 fw-bold" style={{color:"#da0000"}} > 40% </h2>
                    <p className="fs-5"> - 10 NFT Bulls giveaway beetween holders</p>
                    <p className="fs-5"> - 10 ETH goes to the Community <br/>  Chest</p>  
                    </div>
                </div>
                </Fade>
                <Fade bottom>
                <div className="col-lg-4 col-md-6 col-sm-12"  style={{borderRight: "1px solid #fff", borderLeft: "1px solid #fff" , borderBottom: "1px solid #fff"}}>
                
                <div className="mt-5 pt-5 mx-4" >
                    <h2 className="display-3 fw-bold" style={{color:"#da0000"}} > 60% </h2>
                    <p className="fs-5"> - Art Contest with 2.5ETH in prices Start (Check the Discord Channel for more information)</p>
                    <p className="fs-5"> - NFT Bulls giveaway between</p>  
                    <p className="fs-5"> - We are going to us 10ETH to raise the floor price of bulls on OpenSea</p>  
                    </div>
                 </div>
                 </Fade>
                 <Fade top>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-5" style={{borderRight: "1px solid #fff" , borderBottom: "1px solid #fff"}}>
                <div className="mt-5 pt-5 mx-4" >
                    <h2 className="display-3 fw-bold" style={{color:"#da0000"}} > 80% </h2>
                    <p className="fs-5"> - 10 ETH goes to the Community <br/>  Chest</p> 
                    <p className="fs-5"> - Polls for decide the best idea for the Community Chest util starts</p>  
                    </div>
               </div> 
               </Fade> 
               <Fade bottom>
                <div className="col-lg-4 col-md-6 col-sm-12 " style={{ }}>
                <div className="mt-5 pt-5 mx-4" >
                    <h2 className="display-3 fw-bold" style={{color:"#da0000"}}> 100% </h2>
                    <p className="fs-5"> - The polls of the community chest utitily ends and start to have effect</p>
                    <p className="fs-5"> - 40ETH are reserved</p>  
                    </div>
                </div>
                </Fade>
               
         
            </div>
            
            
        </div>
        </RoadWrapper>
        </RoadContainer>
    )
}

export default RoadMaps
