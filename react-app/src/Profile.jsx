import './App.css';
import { Link } from "react-router-dom";
export default function Profile(){
    return(
        <>
                  <ul className='ul'>
                  <li className='li'><Link to="/Profile">Profile</Link></li>
                  <li className='li'><Link to="/Contact">Contact</Link></li>
                            <li className='li'><nav><Link to="/fronte">Home</Link></nav></li>
                            <li className='right'><a href="">FlimFlix</a></li>
                              </ul>
                                  <hr />
        
              <hr />
              <footer class="bottom1">
  <p>&copy; 2025 FlimFlix. All rights reserved.</p>
  <p> Address : 123 ,Gandhi street, coimbatore, India</p>
  <p> Contact us on : +91 9876543210,
  contact@flimflix.com</p>
</footer>
        </>
    );
}