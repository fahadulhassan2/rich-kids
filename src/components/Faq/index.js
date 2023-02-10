import React from 'react'
import {
    FaqContainer,
    FaqWrapper,
    Accord
}
from "./FaqElements"
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import './bg.css';
import img2 from "./duck.jpg"
import styled from "styled-components";

const Hide = styled.div`

@media screen and (max-width: 768px){
    display: none;
}
`
const STDIV = styled.div`
margin-left: 300px;
@media screen and (max-width: 768px){
    margin-left: 0px;
}
`
const Faq = () => {
    return (
        <FaqContainer id="faq">
        {/* <FaqWrapper> */}

         <div className="containter-fluid justify-content-around py-5 img-fluid"
        style={{backgroundImage: `url(${img2})`, backgroundRepeat: "no-repeat", backgroundPosition: "top right", height: "auto",backgroundSize:"47%", objectFit: "contain"}}>
             
             <div style={{textAlign: "center"}}>
             <p className="fw-bold " style={{fontSize: "3rem", color:"#fff" , lineHeight: " "}}>
               QU<span style={{color:"#DA0000"}}>ESTI</span>ONS 
           </p>
           </div>
        <div className="container d-flex ">
           

        

            <STDIV className="col-lg-7  col-md-8 col-sm-10 " 
             style={{
                //  marginLeft: "300px"
               
                }}
            >

                <div className="accordion " id="accordionExample">
                <Fade left>
                    <div className="accordion-item mb-3">
                        
                        <h2 className="accordion-header" id="headingOne">
                            <button className=" text-light accordion-button collapsed" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false"
                                aria-controls="collapseOne">
                                1&#41; What is Bullseum?
                            </button>
                        </h2>

                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body  p-0 m-0">
                                <p className="text-light pt-3  p-0 m-0">Bullseum is an Art project, which will create 5.000
                                    collectible
                                    NFTs, which will be
                                    randomly generated at the time of mining with more than 110 attributes available!
                                    Each NFT will be made with the deepest dedication, as each attribute is hand-drawn
                                    by our professional artists.</p>
                            </div>
                        </div>

                    </div>
                </Fade>
                <Fade right>
                    <div className="accordion-item mb-3 ">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className=" text-light accordion-button collapsed" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                                aria-controls="collapseTwo">
                                2&#41; When do you drop?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body p-0 m-0">
                                <p className="text-light pt-3  p-0 m-0">The official drop day will be Friday, August 27,
                                    21hs
                                    UTC.
                                </p>
                            </div>
                        </div>
                    </div>
                    </Fade>
                    <Fade left>
                    <div className="accordion-item mb-3">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="text-light accordion-button collapsed" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                                aria-controls="collapseThree">
                                3&#41; How can i get a bull?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body  p-0 m-0">
                                <p className="text-light pt-3  p-0 m-0">If you're having any problem, you can open a support
                                    ticket in our
                                    Discord, there is
                                    a text channel called ticket-tool where you can contact our team of professionals.
                                </p>
                            </div>
                        </div>
                    </div>
                    </Fade>
                    <Fade right>
                    <div className="accordion-item mb-3">
                        <h2 className="accordion-header" id="headingFour">
                            <button className="text-light accordion-button collapsed" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false"
                                aria-controls="collapsefour">
                                4&#41; i have an issue, what do i do?
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body  p-0 m-0">
                                <p className="text-light pt-3  p-0 m-0">Our bulls will be able to be bought through our
                                    website in an
                                    initial sale, at the time of purchase a totally random bull will be assigned, when
                                    the initial sale ends, you can buy the collection in Open Sea.
                                </p>
                            </div>
                        </div>
                        </div>
                        </Fade>
                        <Fade left>
                        <div className="accordion-item mb-3">
                        <h2 className="accordion-header" id="headingFive">
                            <button className="text-light accordion-button collapsed" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false"
                                aria-controls="collapsefive">
                                5&#41; What is the price of each bull?
                            </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body  p-0 m-0">
                                <p className="text-light pt-3  p-0 m-0">Our bulls will be able to be bought through our
                                    website in an
                                    initial sale, at the time of purchase a totally random bull will be assigned, when
                                    the initial sale ends, you can buy the collection in Open Sea.
                                </p>
                            </div>
                            </div>
                        </div>
                        </Fade>
                        <Fade right>
                    <div className="accordion-item mb-3">
                        <h2 className="accordion-header" id="headingSix">
                            <button className="text-light accordion-button collapsed" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false"
                                aria-controls="collapseSix">
                                6&#41; Will there be a maximum Mint per Tx?
                            </button>
                        </h2>
                        <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body  p-0 m-0">
                                <p className="text-light pt-3  p-0 m-0">Our bulls will be able to be bought through our
                                    website in an
                                    initial sale, at the time of purchase a totally random bull will be assigned, when
                                    the initial sale ends, you can buy the collection in Open Sea.
                                </p>
                            </div>
                        </div>
                        </div>
                        </Fade>
                        <Fade left>
                        <div className="accordion-item mb-3">
                        <h2 className="accordion-header" id="headingSeven">
                            <button className="text-light accordion-button collapsed" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false"
                                aria-controls="collapseSeven">
                                7&#41; How can i see my collection of bulls?
                            </button>
                        </h2>
                        <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body  p-0 m-0">
                                <p className="text-light pt-3  p-0 m-0">Our bulls will be able to be bought through our
                                    website in an
                                    initial sale, at the time of purchase a totally random bull will be assigned, when
                                    the initial sale ends, you can buy the collection in Open Sea.
                                </p>
                            </div>
                        </div>
                        </div>
                        </Fade>
                        <Fade right>
                        <div className="accordion-item mb-3">
                        <h2 className="accordion-header" id="headingEight">
                            <button className="text-light accordion-button collapsed" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false"
                                aria-controls="collapseEight">
                                8&#41; Why there are bulls already minted?
                            </button>
                        </h2>
                        <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body  p-0 m-0">
                                <p className="text-light pt-3  p-0 m-0">Our bulls will be able to be bought through our
                                    website in an
                                    initial sale, at the time of purchase a totally random bull will be assigned, when
                                    the initial sale ends, you can buy the collection in Open Sea.
                                </p>
                            </div>
                        </div>
                        </div>
                        </Fade>
                        <Fade left>
                        <div className="accordion-item mb-3">
                        <h2 className="accordion-header" id="headingNine">
                            <button className="text-light accordion-button collapsed" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false"
                                aria-controls="collapseNine">
                                9&#41; What are the fees on OpenSea?
                            </button>
                        </h2>
                        <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body  p-0 m-0">
                                <p className="text-light pt-3  p-0 m-0">Our bulls will be able to be bought through our
                                    website in an
                                    initial sale, at the time of purchase a totally random bull will be assigned, when
                                    the initial sale ends, you can buy the collection in Open Sea.
                                </p>
                            </div>
                        </div>
                        </div>
                        </Fade>
                  
               

                </div>
            </STDIV>


        </div>
        
    </div>

        {/* </FaqWrapper> */}
        </FaqContainer>
    
    )
}

export default Faq
