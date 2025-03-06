import React, { useState, useMemo } from 'react';
import './App.css';
import './Video.css';
import { Link, useNavigate } from "react-router-dom";
export default function Vidaamuyarchi(){
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
                movie: "VIDAAMUYARCHI", 
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
                    <h2>Vidaamuyarchi</h2>   
                       <div className="image-container1">
                       <div className="image-item2">
                    <img src="./images/vid4.jpg"  alt="Vidaamuyarchi" />
            </div>
            <div className="image-item2">
                    <img src="./images/vida5.webp"  alt="Vidaamuyarchi" />
                    <p className="image-name">IMDB : 7.8/10</p>
                    <p className="image-name">Rotten Tomotoes : 70%</p>
            </div>
            <div className="image-item1">
            <video  controls>
  <source src="trailer.mp4" type="video/mp4"></source></video>
            </div>
            </div>
            <div className='box'>
            <p>GENERES : Action\Thriller</p>
            <p>Director : <a href='https://en.wikipedia.org/wiki/Magizh_Thirumeni'>Magizh Thirumeni </a></p>
             <p>Cast : <a href='https://en.wikipedia.org/wiki/Ajith_Kumar'>Ajith Kumar</a> ,<a href='https://en.wikipedia.org/wiki/Trisha'>Trisha</a> ,
             <a href='https://en.wikipedia.org/wiki/Arjun_Sarja'>Arjun Sarja</a> ,<a href='https://en.wikipedia.org/wiki/Regina_Cassandra'>Regina Cassandra</a>
             </p>       
            </div>
            <p>A married couple's trip takes an unsettling turn when the wife goes missing,
                   prompting the husband's frantic search while an unknown villain creates obstacles.
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
