import React, { useState, useMemo } from 'react';
import './App.css';
import './Video.css';
import { Link, useNavigate } from "react-router-dom";
export default function Jananayagan() {
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
                movie: "Interstellar", 
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
                    <h2>MARCO</h2>
                    <div className="image-container1">
                       <div className="image-item2">
                    <img src="./images/ma2.avif"  alt="MARCO" />
            </div>
            <div className="image-item2">
                    <img src="./images/ma1.webp"  alt="MARCO" />
                    <p className="image-name">IMDB : 7.3/10</p>
                    <p className="image-name">Rotten Tomotoes : 68%</p>
            </div>
            <div className="image-item1">
            <video  controls>
  <source src="./trailer/marco.mp4" type="video/mp4"></source></video>
          </div>
            </div>
            <div className='box'>
            <p>GENERES : Action</p>
            <p>Director : <a href='https://en.wikipedia.org/wiki/Haneef_Adeni'>Haneef Adeni</a></p>
             <p>Cast : <a href='https://www.imdb.com/name/nm4520191/?ref_=tt_ov_st_1'>Unni Mukundan</a> ,
             <a href='https://www.imdb.com/name/nm1388202/?ref_=tt_ov_st_2'>Siddique</a> ,
             <a href='https://www.imdb.com/name/nm0415538/?ref_=nm_mv_close'>Jagadish </a> .
             </p>       
            </div>
                    <p> Adattu is one of the most renowned gold-trading families in Kerala. Unexpectedly, an incident shakes the Adattu family. 
                        George, the head of the family, sets out to uncover the truth and find those responsible. 
                        At the same time, his younger brother, Marco, embarks on the same quest but through a different Path </p>
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
