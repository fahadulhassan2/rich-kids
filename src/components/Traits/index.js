import React from 'react'
import {
    FaqContainer,
    FaqWrapper,
    Accord
}
from "./TraitsElements"
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import bg1 from '../../images/red-tex.jpeg'
import './traits.css';
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
const Traits = () => {
    return (
        <FaqContainer >
       <div className="pt-5">
          
            <div className="row mx-2">
            <Fade left>
                <div className="col-lg-5 col-sm-12 mx-auto">
                    <div className="img-fluid py-4 mx-3"
                        style={{background: `url(${bg1}) no-repeat`, backgroundSize: "cover",backgroundPosition: "cover",borderRadius: "15px 15px"}}>
                        <h1 className="text-center text-light">Trait Rarity</h1>
                        <p className="text-center text-light fs-4 mt-3 mx-4 px-4">All apes are equal, but some apes are more
                            equal
                            than others.
                            That’s why we’ve established a
                            trait rarity system to tell which of our students are likely destined for greatness.</p>
                        <p className="text-center text-light fs-4 mx-4 px-4 my-5">There are 137 total traits in the academy
                            and
                            these have been categorized into a tier based system (seen on the right). Traits are ranked
                            from ‘common’ all the way through to ‘mythic’ and each rank has a corresponding % chance of
                            being minted. All of the Academy’s traits and their rarity % can be viewed over in our
                            ‘traits’ section. Click below to check them out.</p>
                        <div className="d-grid mt-4 col-lg-6 col-sm-4 mb-2 mx-auto" style={{backgroundColor: "#40daca"}}>
                            <LinkS style={{backgroundColor: "#30cfbe !important", borderRadius: "15px 15px !important"}}
                                 to="traits"
                                className=" text-uppercase py-3 fs-4 fw-bold rounded-3 btn btn-primary " type="button">View
                                Traits</LinkS>
                        </div>
                    </div>
                </div>
                </Fade>
                <div className="col-lg-5 col-sm-8">
                    <div className="row justify-content-center mt-3">
                    <Fade right>
                        <div className="col-10 mx-2 mb-4"  style={{backgroundColor: "#c6a890",borderRadius: "10px 10px"}} >
                            <div className="  py-3 px-5 my-2"
                                style={{borderRadius: "10px 10px", border: "5px solid rgb(3, 3, 3)"}}>
                                <h1 className="text-light text-uppercase text-center">
                                    Common
                                </h1>
                            </div>
                        </div>
                        </Fade>
                        <Fade left>
                        <div className="col-10  mx-2 mb-4"  style={{backgroundColor: "#73b6e9",borderRadius: "10px 10px"}} >
                            <div className="  py-3 px-5 my-2"
                                 style={{borderRadius: "10px 10px", border: "5px solid rgb(3, 3, 3) "}}>
                                <h1 className="text-light text-uppercase text-center">
                                    UNCOMMON
                                </h1>
                            </div>
                        </div>
                        </Fade>
                        <Fade right>
                        <div className="col-10  mx-2 mb-4"  style={{backgroundColor: "#fae187",borderRadius: "10px 10px"}} >
                            <div className="  py-3 px-5 my-2"
                               style={{borderRadius: "10px 10px", border: "5px solid rgb(3, 3, 3) "}}>
                                <h1 className="text-light text-uppercase text-center">
                                    RARE
                                </h1>
                            </div>
                        </div>
                        </Fade>
                        <Fade left>
                        <div className="col-10  mx-2 mb-4" style={{backgroundColor: "#ec8c9d",borderRadius: "10px 10px"}} >
                            <div className="  py-3 px-5 my-2"
                       style={{borderRadius: "10px 10px", border: "5px solid rgb(3, 3, 3) "}}>
                                <h1 className="text-light text-uppercase text-center">
                                    SUPER RARE
                                </h1>
                            </div>
                        </div>
                        </Fade>
                        <Fade right>
                        <div className="col-10  m-2 "  style={{backgroundColor: "#40daca",borderRadius: "10px 10px"}} >
                            <div className="  py-3 px-5 my-2"
                               style={{borderRadius: "10px 10px", border: "5px solid rgb(3, 3, 3)"}}>
                                <h1 className="text-light text-uppercase text-center">
                                    MYTHIC
                                </h1>
                            </div>
                        </div>
                        </Fade> 
                    </div>
                </div>
            </div>
        </div>

        </FaqContainer>
    
    )
}

export default Traits
