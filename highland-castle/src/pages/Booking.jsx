import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import '../App.css'; 

export default function Booking() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [isBooked, setIsBooked] = useState(false);

  const onDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const rooms = [
    { id: 1, name: "Thistle Standard", desc: "35 sqm | Queen Bed", img: "/images/standard room green.png" },
    { id: 2, name: "Royal Deluxe", desc: "55 sqm | King Canopy", img: "/images/suite green.png" },
    { id: 3, name: "Monarch Suite", desc: "85 sqm | Emperor Bed", img: "/images/deluxe suite pink.png" },
    { id: 4, name: "Heirloom Bridal Suite", desc: "70 sqm | Hydro-Spa", img: "/images/wedding suite.png" }
  ];

  const handleBooking = () => {
    if (!selectedRoom || !startDate || !endDate || !firstName || !lastName || !email) {
      alert("Please choose your room and date, then fill in your information before making a reservation.");
      return;
    }
    const bookingDetails = {  
      room: selectedRoom.name,
      customer: {
        firstName: firstName,
        lastName: lastName,
        email: email
      },
      dates:{
        checkIn: startDate.toLocaleDateString(),
        checkOut: endDate.toLocaleDateString()
      },
      totalNights: Math.ceil((endDate-startDate)/ (1000 * 60 * 60 * 24))
    };
    localStorage.setItem('castle_booking', JSON.stringify(bookingDetails));
    setIsBooked(true);

    console.log("Booking saved:", bookingDetails)
  };

  
  return (
    <div className="booking-page">
      <section className="room-selection">
        <h3>no.1 Choose Room</h3>
        <div className="booking-card-wrapper">
          <div className="booking-cards">
            {rooms.map(room => (
              <div 
                key={room.id} 
                className={`room-card ${selectedRoom?.id === room.id ? 'selected' : ''}`}
                onClick={() => setSelectedRoom(room)}
              >
                <img src={room.img} alt={room.name} />
                <div className="card-content">
                  <h4>{room.name}</h4>
                  <p>{room.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="booking-grid">
        {isBooked ?(
          <div className='confirmation-message'>
            <h2>Booking confirmed</h2>
            <p>Thank you {firstName}, looking forward to your arrival!</p>
            <button className='btn-explore' onClick={() => setIsBooked(false)}>
              <span>NEW BOOKING</span>
            </button>
          </div>):(
            <>
            <div className="details-left">
          <h3>no.2 YOUR DETAILS</h3>
          <div className="form-details">

            <div className="input-row">
              <input 
              type="text" 
              placeholder="First Name"
              value={firstName} 
              onChange={(e) => setFirstName(e.target.value)} 
              />
              <input 
              type="text" 
              placeholder="Last Name" 
              value={lastName}
              onChange={(e) => setLastName(e.target.value)} 
              />
              <input 
            type="email" 
            placeholder="E-mail" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            />
            </div>
            <button className="btn-explore" onClick={handleBooking}>
              <span>BOOK NOW</span>
              <div className="btn-border"></div>
            </button>
          </div>
        </div>

        <div className="details-right">
          <h3>no.3 CHOOSE DATES</h3>
          <div className="calendar-wrapper">
            <DatePicker
              selected={startDate}
              onChange={onDateChange}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              inline
              minDate={new Date()}
            />
          </div>
        </div>
       </>     
      )}    
      </div>
    </div>
  );
} 