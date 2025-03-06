import React, { useState, useMemo } from 'react';
import './App.css';
import './Video.css';
import { Link, useNavigate } from "react-router-dom";
export default function KUDUMBASTHAN() {
    const navigate=useNavigate();
    const [eliteSeats]=useState(50);
    const [goldSeats]=useState(50);
    const [silverSeats]=useState(50);
    const [selectedClass,setSelectedClass]=useState('');
    const [selectedDate,setSelectedDate]=useState('');
    const [selectedShow,setSelectedShow]=useState('');
    const [numTickets]=useState(1);

    const seatPrices={
        Elite:170,
        Gold:200,
        Silver:100
    };
    const getNext10Days=()=>{
        const dates=[];
        const today=new Date();
        for (let i=0;i<10;i++) {
            const nextDate=new Date(today); 
            nextDate.setDate(today.getDate()+i); 
            const day=nextDate.getDate();
            const month=nextDate.toLocaleString('en-US', { month: 'short' });
            dates.push(`${day} ${month}`);
        }
        return dates;
    };
    const availableDates=getNext10Days();
    const totalAmount=useMemo(()=>{
        return seatPrices?.[selectedClass]?seatPrices[selectedClass]*numTickets:0;
    }, [selectedClass,numTickets]);
    const handleBooking=()=>{
        if (!selectedClass||!selectedShow||!selectedDate) {
            alert('Please select seat class, show time, and date.');
            return;
        }
        navigate('/Bookticket', { 
            state: { 
                movie: "Kudumbasthan", 
                selectedDate, 
                selectedShow, 
                selectedClass, 
                totalAmount 
            } 
        });
    };
    return (
        <>
                  <ul className='ul'>
                  <li className='li'><Link to="/Profile">Profile</Link></li>
                  <li className='li'><Link to="/Contact">Contact</Link></li>
                            <li className='li'><nav><Link to="/fronte">Home</Link></nav></li>
                            <li className='right'><a href="">FlimFlix</a></li>
                              </ul>
                                  <hr />
        
              <hr />
            <div className='main-container'>
                <div className='center'>
                    <h2>KUDUMBASTHAN</h2>
                    <div className="image-container1">
                       <div className="image-item2">
                    <img src="./images/img3.jpg"  alt="Vidaamuyarchi" />
            </div>
            <div className="image-item2">
                    <img src="./images/img4.jpg"  alt="Vidaamuyarchi" />
                    <p className="image-name">IMDB : 8.1/10</p>
                    <p className="image-name">Rotten Tomotoes : 73%</p>
            </div>
            <div className="image-item1">
            <video controls>
    <source src="/trailer/trai3.mp4" type="video/mp4" />
</video>

            </div> </div> 
            <div className='box'>
            <p>GENERES : Comedy / Drama</p>
            
            <p>Director : <a href='https://www.imdb.com/name/nm12486513/'>Rajeshwar Kaliswamy </a></p>
             <p>Cast : <a href='https://en.wikipedia.org/wiki/K._Manikandan'>Manikandan</a> ,
             <a href='https://en.wikipedia.org/wiki/Guru_Somasundaram'>Guru Somasundaram</a> ,
             <a href='https://www.imdb.com/name/nm10711769/bio/'>Saanve Megghana </a> ,
             <a href='https://en.wikipedia.org/wiki/R._Sundarrajan'>Sundarajan</a>
             </p>       
            </div>
            
                    <p>A lower-middle-class man faces mounting debts and family tensions after losing his job. With a pregnant wife and disapproving in-laws,
                    he must overcome financial struggles and personal conflicts while trying to rebuild his life.
                </p>                
                </div>
                
                <div className="card available-seats">
                    <h3>Available Seats</h3>
                    <p>Elite: {eliteSeats} seats available (₹{seatPrices.Elite })</p>
                    <p>Gold: {goldSeats} seats available (₹{seatPrices.Gold})</p>
                    <p>Silver: {silverSeats} seats available (₹{seatPrices.Silver})</p>
                </div>

                <div className="selection-container">
                    <div className="card">
                        <h3>Select Date</h3>
                        <select onChange={(e) => setSelectedDate(e.target.value)}>
                            <option value="">Select Date</option>
                            {availableDates.map(date => (
                                <option key={date} value={date}>{date}</option>
                            ))}
                        </select>
                    </div>
                    <div className="card">
                        <h3>Select Show Time</h3>
                        <select onChange={(e) => setSelectedShow(e.target.value)}>
                            <option value="">Select Show</option>
                            <option value="10:00 AM">10:00 AM</option>
                            <option value="1:00 PM">1:00 PM</option>
                            <option value="4:00 PM">4:00 PM</option>
                            <option value="7:00 PM">7:00 PM</option>
                        </select>
                    </div>
                    <div className="card">
                        <h3>Select Seat Class</h3>
                        <select onChange={(e) => setSelectedClass(e.target.value)}>
                            <option value="">Select Class</option>
                            <option value="Elite">Elite</option>
                            <option value="Gold">Gold</option>
                            <option value="Silver">Silver</option>
                        </select>
                    </div>
                </div>

                <div className="footer">
                    <button className="button" onClick={handleBooking}>
                        Book Ticket
                    </button>
                </div>
            </div>
            <footer class="bottom">
  <p>&copy; 2025 FlimFlix. All rights reserved.</p>
  <p> Address : 123 ,Gandhi street, coimbatore, India</p>
  <p> Contact us on : +91 9876543210,
  contact@flimflix.com</p>
</footer>
        </>
    );
}
