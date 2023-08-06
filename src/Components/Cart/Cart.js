import React from 'react';
import "./Cart.css"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from 'react-router-dom';

const Card = () => {
  const HakathonData = useSelector(state => state.HackathonData)
  const SearchData = useSelector(state => state.SearchData)
  const navigate = useNavigate()
  return (
    <>
      {SearchData.length != 0 ?
        <>
          {SearchData[0].map((data) =>
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
        </> : <>

          {HakathonData.map((data) =>
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

    </>
  );
};

export default Card;
