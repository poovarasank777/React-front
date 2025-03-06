import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './App.css'; 
function Fronte() {  

  return (<>
          <ul className='ul'>
          <li className='li'><Link to="/Profile">Profile</Link></li>
          <li className='li'><Link to="/Contact">Contact</Link></li>
                    <li className='li'><nav><Link to="/fronte">Home</Link></nav></li>
                    <li className='right'><a href="">FlimFlix</a></li>
                      </ul>
                          <hr />

      <hr />
      <div className="image-container">
        <div className="image-item">
            <nav><Link to="/Vidamuyarchi">      
            <img src="download.jpg"  alt="Interstellar" />
            </Link></nav>
          <p className="image-name">VIDAAMUYARCHI</p>
        </div>
        <div className="image-item">
          <nav><Link to="/Interstellar">
            <img src="download1.jpg" className="image" alt="Interstellar" />
          </Link></nav>
          <p className="image-name">INTERSTELLAR</p>
        </div>

        <div className="image-item">
        <nav> <Link to="/KUDUMBASTHAN">
        <img src="kudumbasthan.jpg" className="image" alt="Kudumbasthan" /> </Link></nav>

          <p className="image-name">KUDUMBASTHAN</p>
        </div>

        <div className="image-item"><nav><Link to="/Good">  
        <img src="./images/mufasa1.jpg"  alt="MUFASA:THE LION KING" />
        </Link></nav>
          <p className="image-name">MUFASA:THE LION KING</p>
        </div>

        <div className="image-item"><nav><Link to="/Jananayagam">    
        <img src="./images/m1.jpg"  alt="MARCO" />
        </Link></nav>
          <p className="image-name">MARCO</p>
        </div>

        <div className="image-item"><nav><Link to="/Brave">   
        <img src="captian.jpg"  alt=" Captain America: Brave New World" />
        </Link></nav>
          <p className="image-name">BRAVE NEW WORLD</p>
        </div>
      </div>
      <footer class="bottom1">
  <p>&copy; 2025 FlimFlix. All rights reserved.</p>
  <p> Address : 123 ,Gandhi street, coimbatore, India</p>
  <p> Contact us on : +91 9876543210,
  contact@flimflix.com</p>
</footer>

    </>
  );
}

export default Fronte; 
