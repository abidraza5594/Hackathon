import React from 'react'
import "./MainPage.css"
import HandHoldingImage from "../../Assets/Hand holding bulb 3D.png"
import Logo from "../../Assets/AI Planet Logo.png"
import Waves from "../../Assets/waves.png"
import SearchNavBarSection from '../SearchNavSection/SearchNavSection'
import Card from '../Cart/Cart'
import {Routes,Route,useNavigate} from "react-router-dom"



const MainPage = () => {
    const navigate=useNavigate()
    const divStyle = {
        backgroundImage: `url(${Waves})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
       
    };

    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="section1" style={divStyle}>
                    <div className="inner1">
                        <h1>Hackathon Submissions</h1>
                        <p>Lorem ipsum dolor sit amet consectetur. Urna cursus amet pellentesque in parturient purus feugiat faucibus. Congue laoreet duis porta turpis eget suspendisse ac pharetra amet. Vel nisl tempus nec vitae. </p>
                        <button onClick={()=>{navigate("/addhack")}}> Upload Submission </button>
                    </div>
                    <div className="inner2">
                        <img src={HandHoldingImage} alt="" />
                    </div>
                </div>
            </div>
            <div >
                <SearchNavBarSection />
                <div className="content">
                    <Card />
                </div>
            </div>

        

        </>
    )
}

export default MainPage