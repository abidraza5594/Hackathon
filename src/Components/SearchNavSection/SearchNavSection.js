import React, { useState } from 'react';
import "./SearchNav.css"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { HakathonActions } from '../../Store/Store';

const SearchNavBarSection = () => {
  const [activeLink, setActiveLink] = useState('all');
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLinkClick = (link) => {
    if (link === 'favorite') {
      setActiveLink("favorite")
      navigate('/favoritehack');
    } else {
      setActiveLink("all")
      navigate('/');
    }
  };
  const HakathonData = useSelector(state => state.HackathonData)

  const SearchHandlet = (e) => {
    dispatch(HakathonActions.SearchData(e.target.value))
  }

  const FilterHandler = (e) => {
    console.log(e.target.value)
    dispatch(HakathonActions.SortCart(e.target.value))
  }

  return (
    <div className="main-container">
      {/* Left Side */}
      <div className="left-side">
        <div className="links">
          <a
            onClick={() => handleLinkClick('all')}
            className={activeLink === 'all' ? 'active' : ''}
          >
            All Submissions
          </a>
          <a
            onClick={() => handleLinkClick('favorite')}
            className={activeLink === 'favorite' ? 'active' : ''}
          >
            Favorite Submissions
          </a>
        </div>
      </div>
      {/* Right Side */}
      <div className="right-side">

        <div className="search-bar">
          <input type="text" onChange={SearchHandlet} placeholder="Search..." />
        </div>
        <div className="dropdown">
          <select onChange={FilterHandler}>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchNavBarSection;
