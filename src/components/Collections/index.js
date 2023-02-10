import React from 'react';
import {Button} from '../ButtonElement';
import Zoom from 'react-reveal/Zoom';
import img1 from './graphics/coll-6.jpg'
import img2 from "./graphics/author-6.jpg";

import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img,
   
} from './CollectionElements';
import logo from '../../images/crypto.svg'; // Tell webpack this JS file uses this image
import collec from '../../images/collection.svg'; // Tell webpack this JS file uses this image


const Collections = () => {
    return (
        <> 
        <InfoContainer lightBg={false} id="collections">
            <InfoWrapper >
               {/* starts here */}
               <div className="container">
                    {/* <!-- hot collection --> */}
                    <div className="container-fluid my-5">

                        <h2 className="text-light mb-4">Hot Collections</h2>
                        <div className="row justify-content-center" >

                            <div className="col-lg-2 col-md-6 col-sm-12 shadow rounded-3 mx-2" style={{background: "#212529", width:"19rem"}}>
                                <div className="mt-2 "><img className="img-fluid" style={{borderRadius : "10px 10px"}}
                                        src={img1} alt=""/></div>
                                <div className="text-center " style={{position: "relative", bottom: "2rem"}}>
                                    <img className="imgcircle img-fluid rounded-pill" style={{width: "10vh"}}
                                        src={img2} alt=""/>
                                </div>
                                <div style={{position: "relative", bottom: "0.5rem"}}>
                                    <h4 className="text-center text-light">Papercut</h4>
                                    <p className="text-center" style={{color: "#A2A2A2 !important"}}>ERC-42</p>
                                </div>
                            </div>



                            <div className="col-lg-2 col-md-6 col-sm-12 shadow rounded-3 mx-2" style={{background: "#212529" , width:"19rem"}}>
                                <div className="mt-2 "><img className="img-fluid" style={{borderRadius: "10px 10px"}}
                                       src={img1} alt=""/></div>
                                <div className="text-center " style={{position: "relative", bottom: "2rem"}}>
                                    <img className="imgcircle img-fluid rounded-pill" style={{width: "10vh"}}  src={img2}
                                        alt=""/>
                                </div>
                                <div  style={{position: "relative", bottom: "0.5rem"}}>
                                    <h4 className="text-center text-light">Papercut</h4>
                                    <p className="text-center" style={{color: "#A2A2A2 !important"}}>ERC-42</p>
                                </div>
                            </div>


                            <div className=" col-lg-2 col-md-6 col-sm-12 shadow rounded-3  mx-2" style={{background: "#212529" , width:"19rem"}}>
                                <div className="mt-2 "><img className="img-fluid "  style={{borderRadius: "10px 10px"}}
                                       src={img1} alt=""/></div>
                                <div className="text-center " style={{position: "relative", bottom: "2rem"}}>
                                    <img className="imgcircle img-fluid rounded-pill" style={{width: "10vh"}}  src={img2}
                                        alt=""/>
                                </div>
                                <div  style={{position: "relative", bottom: "0.5rem"}}>
                                    <h4 className="text-center text-light">Papercut</h4>
                                    <p className="text-center" style={{color: "#A2A2A2 !important"}}>ERC-42</p>
                                </div>
                            </div> 

                            <div className="col-lg-2 col-md-6 col-sm-12 shadow rounded-3  mx-2" style={{background: "#212529" , width:"19rem"}}>
                                <div className="mt-2 "><img className="img-fluid" style={{borderRadius: "10px 10px"}}
                                       src={img1} alt=""/></div>
                                <div className="text-center " style={{position: "relative", bottom: "2rem"}}>
                                    <img className="imgcircle img-fluid rounded-pill" style={{width: "10vh"}}  src={img2}
                                        alt=""/>
                                </div>
                                <div  style={{position: "relative", bottom: "0.5rem"}}>
                                    <h4 className="text-center text-light">Papercut</h4>
                                    <p className="text-center" style={{color: "#A2A2A2 !important"}}>ERC-42</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!--Top seller  --> */}
                    <div className="container-fluid my-5 ">
                        <h2 className="text-light mb-4">Top Sellers</h2>
                        <div className="row justify-content-center ms-5  pt-5 ">
                            <div className="col-lg-3 col-md-6 col-sm-10 mb-2">
                                <div className="d-flex">
                                    <div>
                                        <img className="imgcircle img-fluid rounded-pill" style={{width: "10vh"}}
                                           src={img2} alt=""/>
                                    </div>
                                    <div className=" ms-3 mt-1">
                                        <h4 className="text-light pb-0 ">Monica Lucas</h4>
                                        <p style={{color: "#A2A2A2 !important"}}>ERC-42</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-3 col-md-6 col-sm-10 mb-2">
                                <div className="d-flex">
                                    <div>
                                        <img className="imgcircle img-fluid rounded-pill" style={{width: "10vh"}}
                                            src={img2} alt=""/>
                                    </div>
                                    <div className=" ms-3 mt-1">
                                        <h4 className="text-light pb-0 ">Monica Lucas</h4>
                                        <p style={{color: "#A2A2A2 !important"}}>ERC-42</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-10 mb-2">
                                <div className="d-flex">
                                    <div>
                                        <img className="imgcircle img-fluid rounded-pill" style={{width: "10vh"}}
                                            src={img2} alt=""/>
                                    </div>
                                    <div className=" ms-3 mt-1">
                                        <h4 className="text-light pb-0 ">Monica Lucas</h4>
                                        <p style={{color: "#A2A2A2 !important"}}>ERC-42</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-3 col-md-6 col-sm-10 mb-2">
                                <div className="d-flex">
                                    <div>
                                        <img className="imgcircle img-fluid rounded-pill" style={{width: "10vh"}}
                                            src={img2} alt=""/>
                                    </div>
                                    <div className=" ms-3 mt-1">
                                        <h4 className="text-light pb-0 ">Monica Lucas</h4>
                                        <p style={{color: "#A2A2A2 !important"}}>ERC-42</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-10 mb-2">
                                <div className="d-flex">
                                    <div>
                                        <img className="imgcircle img-fluid rounded-pill" style={{width: "10vh"}}
                                            src={img2} alt=""/>
                                    </div>
                                    <div className=" ms-3 mt-1">
                                        <h4 className="text-light pb-0 ">Monica Lucas</h4>
                                        <p style={{color: "#A2A2A2 !important"}}>ERC-42</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-3 col-md-6 col-sm-10 mb-2">
                                <div className="d-flex">
                                    <div>
                                        <img className="imgcircle img-fluid rounded-pill" style={{width: "10vh"}}
                                            src={img2} alt=""/>
                                    </div>
                                    <div className=" ms-3 mt-1">
                                        <h4 className="text-light pb-0 ">Monica Lucas</h4>
                                        <p style={{color: "#A2A2A2 !important"}}>ERC-42</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-10 mb-2">
                                <div className="d-flex">
                                    <div>
                                        <img className="imgcircle img-fluid rounded-pill" style={{width: "10vh"}}
                                           src={img2} alt=""/>
                                    </div>
                                    <div className=" ms-3 mt-1">
                                        <h4 className="text-light pb-0 ">Monica Lucas</h4>
                                        <p  style={{color: "#A2A2A2 !important"}}>ERC-42</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-3 col-md-6 col-sm-10 mb-2">
                                <div className="d-flex">
                                    <div>
                                        <img className="imgcircle img-fluid rounded-pill" style={{width: "10vh"}}
                                           src={img2} alt=""/>
                                    </div>
                                    <div className=" ms-3 mt-1">
                                        <h4 className="text-light pb-0 ">Monica Lucas</h4>
                                        <p  style={{color: "#A2A2A2 !important"}}>ERC-42</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               {/* ends here */}
            </InfoWrapper>

        </InfoContainer>
            
        </>
    )
}

export default Collections;
