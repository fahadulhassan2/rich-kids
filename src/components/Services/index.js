import React from 'react';
import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-1.svg"
import Icon3 from "../../images/svg-1.svg"
import Zoom from 'react-reveal/Zoom';
import img1 from '../Collections/graphics/static-1.jpg'
import img2 from "../Collections/graphics/author-6.jpg";
import { collectionObj } from './collectionObject';

import{
    ServicesContainer,
    ServicesCard,
    ServicesH1,
    ServicesH2,
    ServicesIcon,
    ServicesP,
    ServicesWrapper

} from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer >
            <ServicesH1>New Items</ServicesH1>
            <Zoom >
            <ServicesWrapper>
               
                    {/* <ServicesIcon src={Icon1}/>
                    <ServicesH2>Reduce expanses</ServicesH2>

                    <ServicesP>We help reduce fuss and increase your income from nfts</ServicesP> */}
                       
                       {collectionObj.map((user,index) => (
                            <ServicesCard>
                    <div key={index}>
                    <img className="img-fluid shadow" style={{borderRadius: "10px 10px",width: "28.5vh"}}
                    src={img1} alt=""/>

                    <div>
                    <img className="img-fluid text-start rounded-pill"
                    style={{position: "relative", bottom: "17.5rem", right: "0.1rem", width: "6vh ", border: "4px solid #FF343F"}}
                    src={img2} alt=""/>
                    </div>
                    <div className="m-0 p-0" style={{position: "relative",right: "0.1rem", bottom: "2.8rem"}}>
                    <p className=" text-light m-0 p-0 fw-bold fs-6">Sunny Day</p>
                    <p className="p-0 mt-2  fs-7" 
                    style={{color: "white", paddingTop: "50%"}}
                    >0.08ETC <span className="text-light fs-6 "> &nbsp; 1/20</span></p>
                    <p className="p-0 mt-0 fs-6" style={{ position: "relative",bottom: "0.7rem",color: "#FF343F"}}>Place a bid</p>
                    </div>

                        </div>
                        </ServicesCard>
       
      
      
      ))}

                                 

                                ))
                               
                    

                    {/* test */}
                {/* </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Reduce expanses</ServicesH2>
                    <ServicesP>We help reduce fuss and increase your income from nfts</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Reduce expanses</ServicesH2>
                    <ServicesP>We help reduce fuss and increase your income from nfts</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Reduce expanses</ServicesH2>
                    <ServicesP>We help reduce fuss and increase your income from nfts</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Reduce expanses</ServicesH2>
                    <ServicesP>We help reduce fuss and increase your income from nfts</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Reduce expanses</ServicesH2>
                    <ServicesP>We help reduce fuss and increase your income from nfts</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Reduce expanses</ServicesH2>
                    <ServicesP>We help reduce fuss and increase your income from nfts</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Reduce expanses</ServicesH2>
                    <ServicesP>We help reduce fuss and increase your income from nfts</ServicesP>
                </ServicesCard> */}
            </ServicesWrapper>
            </Zoom >
        </ServicesContainer>
    )
}

export default Services
