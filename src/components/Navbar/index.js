import React,{useState,useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import logo from '../../images/logo.png'
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu, 
    NavItem, 
    NavLinks,
    NavLinks2,
    NavBtn,
    NavBtnLink
} from './NavbarElement';

const Navbar = ({toggle,hide}) => {

    const [scrollNav, setScrollNav] =useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80 ){
            setScrollNav(true)
        }else{
            setScrollNav(false);
        }
    }
  
 

    useEffect(() => {
        window.addEventListener('scroll',changeNav)
       
    }, [])
  

    const toggleHome = () =>{
        scroll.scrollToTop();
    }
    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
          <Nav scrollNav={scrollNav}>
            <NavbarContainer>
            
                <NavLinks2 to="/" onClick={toggleHome}>
                <img style={{height:"150px", width:"200px"}} src={logo}/> 
                </NavLinks2>  
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>  
                    <NavMenu>
                       
                        <NavItem hide={hide}>
                            <NavLinks 
            
                            to="collection"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >Collection</NavLinks>
                        </NavItem >
                        <NavItem hide={hide}>
                            <NavLinks 
            
                            to="history"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >History</NavLinks>
                        </NavItem>
                       
                        <NavItem hide={hide}>
                            <NavLinks to="services"
                             smooth={true}
                             duration={500}
                             spy={true}
                             exact='true'
                             offset={-80}
                            >Roadmap</NavLinks>
                        </NavItem>
                        <NavItem hide={hide}>
                            <NavLinks to="faq"
                             smooth={true}
                             duration={500}
                             spy={true}
                             exact='true'
                             offset={-80}
                            >FAQ</NavLinks>
                        </NavItem>
                        <NavItem hide={hide}>
                            <NavLinks2 to="/traits"
                             smooth={true}
                             duration={500}
                             spy={true}
                             exact='true'
                             offset={-80}
                            >Traits</NavLinks2>
                        </NavItem>
                            
                        <NavItem hide={hide}>
                        
                            
                            <NavLinks2 to="/login"
                             smooth={true}
                             duration={500}
                             spy={true}
                             exact='true'
                             offset={-80}
                            >
                                Login
                                
                                </NavLinks2>
                        </NavItem>

                    </NavMenu>
           
                    <NavBtn>
                        <NavBtnLink 
                        to="/signin"
                        >
                        Mint RKON
                        </NavBtnLink>
                        
                    </NavBtn>
                    
           
               
            </NavbarContainer>    
          </Nav> 
          </IconContext.Provider> 
        </>
    )
}

export default Navbar;