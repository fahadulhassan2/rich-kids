
import styled from 'styled-components';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';

export const HeroContainer = styled.div`
    background: #0b0e11;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0px;
    height: 1000px;
  
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
    @media screen and (max-width: 768px){
        height: 800px;
    }
`;

export const HeroBg = styled.div`
    postion: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;


export const HeroContent = styled.div`
    z-index: 3;
    max-width: 100%;
    position: absolute;
  
     display: flex;
    flex-direction: column;


    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    grid-gap: 5px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
        
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;
export const DivCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 800px;
    margom-top: 50px;
    padding: 0 0px 0px 0px ;
    transition: all 0.2s ease-in-out;

    @media screen and (max-width: 768px){
        display: none;
    }


`;
export const DivCardI = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 800px;
    margom-top: 50px;
    padding: 0 0px 0px 0px ;
    transition: all 0.2s ease-in-out;



`;
export const HeroSlider = styled.div`
    z-index: 3;
    max-width: 100%;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeroH1 = styled.h1`
    color: #fff;
    text-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }

`

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`

`

export const ImageTag = styled.img`
    width: "700px";
    height:"600px";
    object-fit: "cover";


    
`
