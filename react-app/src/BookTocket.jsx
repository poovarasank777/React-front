import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import './App.css';

export default function BookTicket() {
    const location = useLocation();
    const { movie, selectedDate, selectedShow, selectedClass, numTickets, totalAmount } = location.state || {};
    
    const [name,setName]=useState('');
    const [cardNumber,setCardNumber]=useState('');
    const [cvv,setCvv]=useState('');
    const [expiry,setExpiry]=useState('');
    const [tickets,setTickets]=useState(numTickets||1);

    const handleConfirmBooking = () => {
        if(!name||cardNumber.length!== 12||cvv.length!== 3||!expiry||tickets<=0){
            alert("Please enter valid details.");
            return;
        }

        alert(`Booking Confirmed!\nName: ${name}\nMovie: ${movie}\nDate: ${selectedDate}\nShow: ${selectedShow}\nClass: ${selectedClass}\nTickets: ${tickets}\nTotal Amount: ₹${totalAmount * tickets}`);
    };

    return (
        <>
            <ul className='ul'>
                <li className='li'><Link to="/Profile">Profile</Link></li>
                <li className='li'><Link to="/Contact">Contact</Link></li>
                <li className='li'><nav><Link to="/fronte">Home</Link></nav></li>
                <li className='right'><a href="">FlimFlix</a></li>
            </ul>
            <hr /><hr />
            <div style={{textAlign:"center",marginTop: "20px" }}>
                <h2>Enter Payment Details</h2>
                <table style={{ borderCollapse:"collapse",margin: "auto" }}>
                    <tbody>
                        <tr>
                            <td><label>Name:</label></td>
                            <td><input type="text" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)}/></td>
                        </tr>
                        <tr>
                            <td><label>Card Number:</label></td>
                            <td><input type="text" placeholder="Enter 12-digit card number" value={cardNumber} onChange={(e)=>setCardNumber(e.target.value)} maxLength="12"/></td>
                        </tr>
                        <tr>
                            <td><label>CVV:</label></td>
                            <td><input type="text" placeholder="Enter 3-digit CVV" value={cvv} onChange={(e)=>setCvv(e.target.value)}maxLength="3"/></td>
                        </tr>
                        <tr>
                            <td><label>Expiry Date:</label></td>
                            <td><input type="text" placeholder="MM/YY" value={expiry} onChange={(e)=>setExpiry(e.target.value)}/></td>
                        </tr>
                        <tr>
                            <td><label>Number of Tickets:</label></td>
                            <td><input type="number" min="1" value={tickets} onChange={(e)=>setTickets(Number(e.target.value))}/></td>
                        </tr>
                        <tr>
                            <td colSpan="2" style={{textAlign:"center"}}>
                                <button style={{backgroundColor:"orange",padding:"10px",border:"none",borderRadius:"5px",cursor:"pointer"}} onClick={handleConfirmBooking}>
                                    Confirm Booking
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <footer className="bottom1">
                <p>&copy; 2025 FlimFlix. All rights reserved.</p>
                <p>Address: 123, Gandhi Street, Coimbatore, India</p>
                <p>Contact us on: +91 9876543210, contact@flimflix.com</p>
            </footer>
        </>
    );
}
