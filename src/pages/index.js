import React,{useState} from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection/index';
import { homeObjOne,homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer'
import RoadMaps from '../components/RoadMaps';
import Faq from '../components/Faq'
import Teams from '../components/Teams'
import Collections from '../components/Collections'
import Collection from '../components/Collection'
import Traits from '../components/Traits'
import Members from '../components/Members';
import History from '../components/History';
//here bad stuff


const Home = () => {
    const [isOpen,setIsOpen] = useState(false);
  
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    

    
    return (
        <>  
           
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar  toggle={toggle}/>
            <HeroSection />
            <Collection></Collection>
            {/* <Services></Services> */}
            {/* <InfoSection {...homeObjOne}/> */}
            {/* <Collections></Collections> */}
            <RoadMaps/>
            <History/>
            {/* <InfoSection {...homeObjTwo}/> */}
           
            <Members></Members>
            {/* <Teams/> */}
          
            <Faq/>
            {/* <InfoSection {...homeObjThree}/> */}
            <Footer/>
        </>
    )
}

export default Home
