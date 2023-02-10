import React,{useState} from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection/index';
import { homeObjOne,homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer'
import Loginpage from '../components/Loginpage'
import RoadMaps from '../components/RoadMaps';
import Faq from '../components/Faq'
//here bad stuff


const Login = () => {
    const [isOpen,setIsOpen] = useState(false);
  
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    

    
    return (
        <>  
           

            <Loginpage/>
            
        </>
    )
}

export default Login
