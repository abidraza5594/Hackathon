
import React ,{useEffect}from 'react'
import "./FavoriteHack.css"
import HandHoldingImage from "../../Assets/Hand holding bulb 3D.png"
import Logo from "../../Assets/AI Planet Logo.png"
import Waves from "../../Assets/waves.png"
import SearchNavBarSection from '../SearchNavSection/SearchNavSection'
import Card from '../Cart/Cart'
import { Routes, Route, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const FavoriteHack = () => {
  const navigate = useNavigate()
  const divStyle = {
    backgroundImage: `url(${Waves})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  const existingArray = JSON.parse(localStorage.getItem('favorietdata')) || [];

  useEffect(()=>{
    if(existingArray.length===0){
      toast("No Favorite Submissions")
    }
  },[])
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="section1" style={divStyle}>
          <div className="inner inner1">
            <h1>Hackathon Submissions</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Urna cursus amet pellentesque in parturient purus feugiat faucibus. Congue laoreet duis porta turpis eget suspendisse ac pharetra amet. Vel nisl tempus nec vitae. </p>
            <button onClick={() => { navigate("/addhack") }}>Upload Submission</button>
          </div>
          <div className="inner inner2">
            <img src={HandHoldingImage} alt="" />
          </div>
        </div>
      </div>
      <div >
        <SearchNavBarSection />
        <div className="content">
          {existingArray.length===0 ? <> <h1>Data Not Found</h1> </> : 
          
          <>
          {existingArray.map((data) =>
            <div className="card" onClick={() => { navigate(`/cartdetails/${data.id}`) }} key={data.id}>
              <div className="image-title">
                <img src={data.coverImage} alt="Card" />
                <h2>{data.title}</h2>
              </div>
              <div className="card-content">
                <p>
                  {data.summary}
                </p>
              </div>
              <div className="uploaded-date">
                <p>{data.hackathonStartDate}</p>
              </div>
            </div>
          )}
          </>}
        </div>
      </div>

      <ToastContainer/>

    </>
  )
}

export default FavoriteHack