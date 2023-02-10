import React,{useEffect,useState} from 'react'
import { MdBorderBottom } from 'react-icons/md'
import { ImageArea2,ImageArea, RoadContainer,LeftDiv, RoadWrapper,InfoRow } from './TeamElements'

import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import Roll from 'react-reveal/Roll';

import Fade from 'react-reveal/Fade';
import img1 from "./graphics/img-team-3-360x360.jpg";
import img2 from "./graphics/img-team-2-360x360.jpg";
import img3 from "./graphics/img-team-2-360x360.jpg";
import Rotate from 'react-reveal/Rotate';
import styled from 'styled-components';

const Hide = styled.div`

@media screen and (max-width: 768px){
    display: none;
}
`


const Teams = () => {
    const [media, setMedia] = useState(false);
    useEffect(() => {   
        //setMedia(window.matchMedia("(min-width: 768px)").matches)

    }, [window.matchMedia("(min-width: 768px)").matches])
    return (
        // <RoadContainer id="services">
        // <RoadWrapper>
        <div className="container-fluid d-flex justify-content-around" style={{
            background: "black",
            width: "100%" }}>
            <Zoom>
            <div className="me-5 " style={{background:"#da0000" , width: "50px", height: "700px" ,marginTop:"30px"  }}>
            </div>
            </Zoom>
            <div>
        
            <Hide>
            <Fade left>
            <p className="fw-bold pt-5 mt-5" style={{fontSize: "8rem", color:"#da0000" , lineHeight: "8.5rem "}}>
               TE <br/> 
               A <br/>
               M <br/>
               S <br/>
             
           </p>
             </Fade> 
             </Hide>

    
            </div>
 

            <div className="row offset-1">
              
               {/* {TEAMS DATA HERE} */}
               <div class="container my-3 mx-lg-auto mx-sm-5 " style={{ background: "rgb(255,255,255)", background: "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(129,16,16,1) 78%)", borderRadius: "20px 20px"}}>
       
        <h4 class="display-6 fw-bold text-light  pt-4 text-center px-3">
        <Rotate top left>
            About Us
            </Rotate>
        </h4>
     
        <p class="text-center px-3" style=  {{color: "#ffffff"}}>______</p>
        <p class="text-center fs-8 px-3 pb-5" style= {{color: "#ffffff"}}>
        <Fade left>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consectetur numquam sequi ullam <br/>
            doloribus dolorum, repellat voluptatibus unde placeat soluta architecto quod
            </Fade>
        </p>
      
        <div class="row pb-4">
            
            <div class="col-lg-4 col-12 animate__animated animate__zoomInLeft">
                <Bounce left>
                <div class="couples" style={{ overflow: "hidden"}} >
                    <img src={img3}
                        class="couple border w-50 rounded-circle mx-auto d-block shadow-lg p-1 mb-5 bg-body rounded"
                        alt="..." />
                </div>
                </Bounce>
                <Roll left>
                <h4 class="display-8 pt-3 text-center px-3" style={{ color: "#ffffff"}}>
                    Melissa Gilmore
                </h4>
                <p class="text-center fs-8 px-3 pb-3" style= {{color: "#ffffff"}}>
                    Contrary to popular belief, Lorem Ipsum is not
                    simply random text. It has roots in a piece
                </p>
                </Roll>

            </div>


            <div class="col-lg-4 col-12 animate__animated animate__zoomInUp">
                 <Bounce left>
                <div class="couples" style={{overflow: "hidden"}} >
                    <img src={img2}
                        class="couple w-50 border rounded-circle mx-auto d-block shadow-lg p-1 mb-5 bg-body rounded"
                        alt="..." />
                </div>

                </Bounce>
                <Roll left>
                <h4 class="display-8 pt-3 text-center px-3" style={{color: "#ffffff"}}>
                    Melissa Gilmore
                </h4>
                <p class="text-center fs-8 px-3 pb-3" style={{color: "#ffffff"}}>
                    Contrary to popular belief, Lorem Ipsum is not
                    simply random text. It has roots in a piece
                </p>
                </Roll>
            </div>
            
            
            <div class="col-lg-4 col-12 animate__animated animate__zoomInUp">
                 <Bounce left>
                <div class="couples" style={{overflow: "hidden"}} >
                    <img src={img2}
                        class="couple w-50 border rounded-circle mx-auto d-block shadow-lg p-1 mb-5 bg-body rounded"
                        alt="..." />
                </div>

                </Bounce>
                <Roll left>
                <h4 class="display-8 pt-3 text-center px-3" style={{color: "#ffffff"}}>
                    Melissa Gilmore
                </h4>
                <p class="text-center fs-8 px-3 pb-3" style={{color: "#ffffff"}}>
                    Contrary to popular belief, Lorem Ipsum is not
                    simply random text. It has roots in a piece
                </p>
                </Roll>
            </div>
            
          
        </div>
    </div>
               {/* Team */}
              
               
         
            </div>
            
            
        </div>
        // </RoadWrapper>
        // </RoadContainer>
    )
}

export default Teams
