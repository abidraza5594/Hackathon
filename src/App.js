import logo from './logo.svg';
import './App.css';
import MainPage from './Components/MainPage/MainPage';
import { Routes, Route } from "react-router-dom"
import HackathonForm from './Components/AddHackathon/AddHackathon';
import CartDetails from './Components/CartDetails/CartDetails';
import FavoriteHack from './Components/FavoriteHack/FavoriteHack';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' Component={MainPage}></Route>
        <Route path='/cartdetails/:id' Component={CartDetails}></Route>
        <Route path='/addhack' Component={HackathonForm}></Route>
        <Route path='/edithack/:id' Component={HackathonForm}></Route>
        <Route path='/favoritehack' Component={FavoriteHack}></Route>
      </Routes>
    </div>
  );
}

export default App;
