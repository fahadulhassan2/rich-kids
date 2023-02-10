import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import {
    FooterLink,
    FooterContainer,
    FooterLinkItems,
    FooterWrap,
    FooterLinksWrapper,
    FooterLinkTitle,
    FooterLinksContainer,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
  
} from './FooterElements'
import logo from '../../images/logo.png'
const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    {/* <FooterLinkItems>
                        <FooterLinkTitle>About us </FooterLinkTitle>
                            <FooterLink to="/signin">Partners</FooterLink>
                            <FooterLink to="/signin">How we work?</FooterLink>
                            <FooterLink to="/signin">Testimonals</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of service</FooterLink> 
                    </FooterLinkItems>

                    <FooterLinkItems>
                        <FooterLinkTitle>About us </FooterLinkTitle>
                            <FooterLink to="/signin">Partners</FooterLink>
                            <FooterLink to="/signin">How we work?</FooterLink>
                            <FooterLink to="/signin">Testimonals</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of service</FooterLink> 
                    </FooterLinkItems>

                    <FooterLinkItems>
                        <FooterLinkTitle>About us </FooterLinkTitle>
                            <FooterLink to="/signin">Partners</FooterLink>
                            <FooterLink to="/signin">How we work?</FooterLink>
                            <FooterLink to="/signin">Testimonals</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of service</FooterLink> 
                    </FooterLinkItems>
                    
                    <FooterLinkItems>
                        <FooterLinkTitle>About us </FooterLinkTitle>
                            <FooterLink to="/signin">Partners</FooterLink>
                            <FooterLink to="/signin">How we work?</FooterLink>
                            <FooterLink to="/signin">Testimonals</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of service</FooterLink> 
                    </FooterLinkItems>
                    
                 */}
                </FooterLinksWrapper>
                </FooterLinksContainer>
            <SocialMediaWrap>
                <SocialLogo to='/'>
                <img style={{height:"150px", width:"200px"}} src={logo}/> 
                </SocialLogo>
                <WebsiteRights>
                       © {new Date().getFullYear()}   All rights reserved.
                </WebsiteRights>
                <SocialIcons>
                    <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                        <FaFacebook/>
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                        <FaInstagram/>
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                        <FaYoutube/>
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                        <FaTwitter/>
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                        <FaLinkedin/>
                    </SocialIconLink>
                </SocialIcons>
            </SocialMediaWrap>

            </FooterWrap>

        </FooterContainer>
    )
}

export default Footer
