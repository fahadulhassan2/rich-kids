import React,{useState,useEffect} from 'react';
 import Video from '../../images/7.jpg';
// import Video from '../../videos/video.mp4';
 import sliderImage1 from '../../images/IMB_FhzIUa.gif';
 import sliderImage3 from '../../images/make-animated-nft-for-you.gif';

 import sliderImage2 from '../../images/nft-art.gif';
 import '@splidejs/splide/dist/css/themes/splide-default.min.css';
// or
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
// or
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

import { Button } from '../ButtonElement';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { 
    HeroContainer,
    HeroBg,
    VideoBg,
    DivCardI,
    HeroContent,
    HeroH1,
    HeroP,
    HeroSlider,
    HeroBtnWrapper,
    ArrowForward,
    DivCard,
    ArrowRight,
    

} from './HeroElements';


const HeroSection = () => {
    const [hover, setHover]= useState(false);
    const [width, setWidth] = useState(window.screen.width);
    let primaryOptions = {
        type      : 'loop',
        width     : 600,
        height    : 600,
    	autoplay     : true,
        perPage   : 1,
        perMove   : 1,
        gap       : '1rem',
        pagination: false,
    };



    const onHover = () => {
        setHover(!hover);
    }
    return (
        <HeroContainer id="home">
            <HeroBg>
                 <VideoBg autoPlay loop muted src={Video} type='video/mp4'/> 
                 {/* <VideoBg  src={Video} /> */}
                </HeroBg>
        <HeroContent className="justify-content-center ">
            <DivCardI>
            <HeroH1>MINTING NFT <span style={{color:"#DA0000"}}>MADE</span> EASIER </HeroH1>
            <HeroP className="">
                Mint a very rare rich kid of NFT for as low as 0.3 ETH  
            </HeroP>
            <HeroBtnWrapper>
                <Button 
                className="text-decoration-none"
                to="collection" 
                onMouseEnter={onHover} 
                onMouseLeave={onHover}
                primary='true'
                dark='true'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                >
                    View Collection {hover? <ArrowForward /> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
            </DivCardI>
            <DivCard>
            {/* <img style={{width: "650px", height:"400px"}} src={Video}></img>
             */}
             <div>

             </div>
             <Splide className=""  options={ primaryOptions } style={{}}>
                <SplideSlide >
                    <img  src={sliderImage2}   alt="Image 1"/>
                </SplideSlide>
                <SplideSlide>
                <img src={sliderImage2}  alt="Image 1"/>
                </SplideSlide>
            </Splide>

        </DivCard>
        </HeroContent>
       
   
        </HeroContainer>

    )  
}

export default HeroSection;
