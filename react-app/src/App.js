import React from "react";
import Fronte from './Fronte';
import './App.css'; 
import {Routes,Route,BrowserRouter} from "react-router-dom";
import './Vidamuyarchi';
import Interstellar from './Interstellar';
import Vidamuyarchi from './Vidamuyarchi';
import Jananayagam from './Jananayagan';
import Brave from './Brave';
import Good from './Good';
import Bookticket from './BookTocket';
import KUDUMBASTHAN from "./Kudumbastan";
import Login from "./Login";
import Contact from "./Contact";
import Profile from "./Profile";
import Register from "./Register";
function App(){
    return(
        <>
          <BrowserRouter>
          <Routes>
            <Route index element={<Login/>} ></Route>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Register" element={<Register/>}/>
            <Route path="/Interstellar" element={<Interstellar/>}/>
            <Route path="/Fronte"  element={<Fronte/>}/>
            <Route path="/Vidamuyarchi" element={<Vidamuyarchi/>}/>
            <Route path="/Good" element={<Good/>}/>
            <Route path="/Jananayagam" element={<Jananayagam/>}/>
            <Route path="/Brave" element={<Brave/>}/>
            <Route path="/Bookticket"  element={<Bookticket/>}/>
            <Route path="/KUDUMBASTHAN" element={<KUDUMBASTHAN/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Profile" element={<Profile/>}/>
          </Routes>
          </BrowserRouter></>
    )
}
export default App;