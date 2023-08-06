import React, { useEffect,useState } from 'react'
import "./CartDetails.css"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from 'react-router-dom';
import Logo from "../../Assets/AI Planet Logo.png"
import { useLocation, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HakathonActions } from '../../Store/Store';



const CartDetails = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const CartDetails = useSelector(state => state.HackathonData)
    const { pathname } = useLocation()
    const { id } = useParams();
    const HackDetails = CartDetails.find(cart=>cart.id==id)
    useEffect(() => {
        if(!HackDetails){
            navigate('/')
        }
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }, 0)
    }, [pathname])

    const FavoriteClickHandler = () => {
        const existingArray = JSON.parse(localStorage.getItem('favorietdata')) || [];
        existingArray.push(HackDetails);
        localStorage.setItem('favorietdata', JSON.stringify(existingArray));
        toast("Added Favourite Submission")
    }

    const DeleteHackHandler = (idToDelete) => {

        dispatch(HakathonActions.DeleteHack(idToDelete))

        const existingArray = JSON.parse(localStorage.getItem('favorietdata')) || [];
        const updatedArray = existingArray.filter(item => item.id != idToDelete);
        localStorage.setItem('favorietdata', JSON.stringify(updatedArray));
        navigate('/')
    }

const [editingItem, setEditingItem] = useState(null);
const handleEditFromLocalStorage = (itemToEdit) => {
    setEditingItem(itemToEdit);
    navigate(`/edithack/${itemToEdit}`)
    // Open the form or modal for editing
    // You can use a form or a modal component to allow the user to edit the data
  };

    return (
        <div>
            <nav className="cartdetailsnav">
                <img src={Logo} alt="" />
            </nav>
            <div className="cart-details-section1">
                <div className="inner-cart-details">
                    <div className="inner-top">
                        <div className="inner-top-left">
                            <img src={HackDetails.coverImage} alt="" />
                            <h3>{HackDetails.title}</h3>
                        </div>
                        <div className="inner-top-right">
                            <button onClick={() => handleEditFromLocalStorage(HackDetails.id)}>Edit</button>
                            <button onClick={()=>DeleteHackHandler(`${HackDetails.id}`)}>Delete</button>
                        </div>
                    </div>
                    <p className='cart-details-summary'>{HackDetails.summary}</p>
                    <div className='favorite-date'>
                        <span className='cart-details-star' onClick={FavoriteClickHandler}> <i class="fa-regular fa-star"></i> </span>
                        <div className='cart-details-date'><i class="fa-regular fa-calendar-days"></i>{HackDetails.hackathonStartDate}</div>
                    </div>
                </div>
            </div>

            <div className="cart-details-container">
                <div className="cart-details-description">
                    <h3>Description</h3>
                    <p>{HackDetails.description}</p>
                </div>
                <div className="cart-details-description-right">
                    <div className="title-date-desc">
                        <h4>Hackathon</h4>
                        <h3>{HackDetails.hackathonName}</h3>
                        <p><i class="fa-regular fa-calendar-days"></i> {HackDetails.hackathonEndDate}</p>
                    </div>

                    <div className="cart-details-links">
                        <button><i class="fa-brands fa-github"></i> <a href={HackDetails.githubRepositoryLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a></button>
                        <button><i class="fa-solid fa-link"></i> <a href={HackDetails.otherLinks} target="_blank" rel="noopener noreferrer">Other Link</a></button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default CartDetails