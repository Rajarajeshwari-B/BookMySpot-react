import React, { useState } from "react";
import "./App.css";
import Modal from "./Modal.js";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [numTickets, setNumTickets] = useState(1);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
  });
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [showModal, setShowModal] = useState(false); // state for modal visibility
  const [modalMessage, setModalMessage] = useState(""); // state for modal message

  const events = [
    { 
      id: 1, 
      name: "Concert", 
      date: "2024-12-01", 
      location:"City Hall", 
      image: "https://t3.ftcdn.net/jpg/05/03/58/28/240_F_503582859_7SJMOrd2Xf5ujdBjrBCam7ngr9wc84vH.jpg" 
    },
    { 
      id: 2, 
      name: "Art Exhibition", 
      date: "2024-12-10", 
      location:"Museum", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbvWxn_SL1fanqzphMl5u8httY0VMRAuVNdg&s" 
    },
    { 
      id: 3, 
      name: "Tech Conference", 
      date: "2024-12-15", 
      location:"Tech Center", 
      image: "https://png.pngtree.com/thumb_back/fh260/background/20210127/pngtree-blue-gradient-technology-circuit-abstract-background-image_541439.jpg" 
    },
    { id: 4, name: "Comedy Show", date: "2024-12-20", location:"Comedy Club",
       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzhgl5H_PJ6o86geqW92Y5xONGU-5kEWcTMQ&s" },
    { id: 5, name: "Food Festival", date: "2024-12-25", location:"City Park",
       image: "https://images.template.net/108351/food-fest-background-3vff1.png" },
       {
        id: 6,
        name:"Yoga Retreat",
        date: "2024-12-30",
        location:"Royal Park",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlPUKWhQJbhQ26B-Eq0bvd2EYv4L_zt5NpBA&s"
      }
  ];

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return (
          <div className="section home-section">
            <h2>Welcome to the Event Booking Platform</h2>
            <p>
              Discover amazing events happening near you and book your tickets
              seamlessly. Browse through events and get your spot for the ones
              you're interested in.
            </p>
            <img src="https://media.gettyimages.com/id/1264522117/vector/event-ticket-poster.jpg?s=612x612&w=0&k=20&c=nEvDApg7soqvDE4EUpzg9x0sHxfZhjVxGHM0bfgi_B4=" alt="Home Event" />
            <p>
              Our platform connects you with the best events in town! Whether
              you're into concerts, exhibitions, or conferences, we make it
              easy for you to find and book your tickets quickly and securely.
            </p>
          </div>
        );
        case "about":
          return (
            <div className="section">
              <h2>About Us</h2>
              <p>
                Welcome to our Event Booking Platform, a one-stop destination for discovering and attending events of all kinds! Our mission is to make event booking simpler, faster, and more accessible for everyone, whether you’re looking to attend a concert, an art exhibition, a conference, or a sports event.
              </p>
              
              <h3>Our Values</h3>
              <ul>
                <li>
                  <strong>Accessibility:</strong> We believe that attending events should be accessible to everyone, no matter where they are or what their budget is. That’s why we offer a variety of event types, locations, and price points to ensure everyone can find something they love.
                </li>
                <li>
                  <strong>Convenience:</strong> Our platform is designed to make booking tickets easy. With just a few clicks, you can find the event you’re looking for, select your seats, and complete your purchase.
                </li>
                <li>
                  <strong>Security:</strong> We take your privacy and security seriously. Our booking system is protected with the latest encryption standards, ensuring that your personal and payment information is safe at all times.
                </li>
                <li>
                  <strong>Customer Support:</strong> We value our customers, and our team is always ready to assist you with any questions or issues. Our customer support team is available to help you via email, phone, or live chat.
                </li>
              </ul>
              <h3>Our Vision</h3>
              <p>
                We envision a future where attending events is seamless and effortless. With our platform, booking tickets is not just a transaction—it’s an experience. We aim to enhance the way people engage with live events by providing a user-friendly interface and a secure, efficient process for finding and securing tickets.
              </p>
              
            </div>
          );
        
      case "events":
        return (
          <div className="section">
  <h2>Upcoming Events</h2>
  <div className="event-grid">
    {events.map((event) => (
      <div key={event.id} className="event-item">
        <h3>{event.name}</h3>
        <img src={event.image} alt={event.name} />
        <p>Date: {event.date}</p>
        <p>Location: {event.location}</p>
        <button onClick={() => handleBooking(event)}>Book Now</button>
      </div>
    ))}
  </div>
</div>
        );
        case "booking":
          return selectedEvent ? (
            <div className="section">
              <h2>Book Tickets for {selectedEvent.name}</h2>
              <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={userDetails.name}
                  onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
                  required
                />
                <label>Email:</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={userDetails.email}
                  onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                  required
                />
                <label>Age:</label>
                <input
                  type="number"
                  placeholder="Enter your age"
                  value={userDetails.age}
                  onChange={(e) => setUserDetails({ ...userDetails, age: e.target.value })}
                  required
                />
                <label>Mobile Number:</label>
                <input
                  type="text"
                  placeholder="Enter your mobile number"
                  value={userDetails.mobile}
                  onChange={(e) => setUserDetails({ ...userDetails, mobile: e.target.value })}
                  required
                />
                <label>Number of Tickets:</label>
                <input
                  type="number"
                  min="1"
                  value={numTickets}
                  onChange={(e) => setNumTickets(e.target.value)}
                  required
                />
                <button type="submit">Submit Booking</button>
              </form>
            </div>
          ) : (
            <div className="section">
              <h2>No Event Selected</h2>
              <p>Please go back to the events page and select an event to book.</p>
            </div>
          );
      case "confirmation":
        return bookingConfirmed ? (
          <div className="section">
            <h2>Booking Confirmed</h2>
            <p>
              Thank you for booking {numTickets} ticket(s) for the event{" "}
              {selectedEvent.name}.
            </p>
            <p>We have sent a confirmation to {userDetails.email}.</p>
            <button onClick={() => setActiveSection("home")}>Back to Home</button>
          </div>
        ) : (
          <div className="section">
            <h2>Booking Failed</h2>
            <p>Something went wrong, please try again later.</p>
            <button onClick={() => setActiveSection("home")}>Back to Home</button>
          </div>
        );
        case "contact":
          return (
            <div className="section contact-section">
              <h2>Contact Us</h2>
              <div className="contact-details">
                <div>
                  <h3>📌 Our Address</h3>
                  <p>123 Event Lane, Downtown City, State, Country</p>
                </div>
                <div>
                  <h3>📞 Phone </h3>
                  <p>+123 456 7890</p>
                </div>
                <div>
                  <h3>📧 Email </h3>
                  <p>support@eventbookingplatform.com</p>
                </div>
              </div>
              <h3>Send Us a Message</h3>
              <form>
                <label>Name</label>
                <input type="text" placeholder="Enter your name" required />
                <label>Email</label>
                <input type="email" placeholder="Enter your email" required />
                <label>Message</label>
                <textarea placeholder="Type your message here..." rows="4" required></textarea>
                <button type="submit">Submit</button>
              </form>
            </div>
          );
      default:
        return null;
    }
  };

  const handleBooking = (event) => {
    setSelectedEvent(event);
    setActiveSection("booking");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate booking success
    setBookingConfirmed(true);
    setModalMessage(`Thank You For Booking In Our Website.Enjoy Your Event😇`);
    setShowModal(true); 
    setActiveSection("confirmation");
  };

  return (
    <div>
      {/* Navbar */}
      <header>
        <h1>Book My Spot 🗓️</h1>
        <nav>
          <ul>
            <li>
              <button onClick={() => setActiveSection("home")}>Home</button>
            </li>
            <li>
              <button onClick={() => setActiveSection("about")}>About</button>
            </li>
            <li>
              <button onClick={() => setActiveSection("events")}>Events</button>
            </li>
            <li>
              <button onClick={() => setActiveSection("contact")}>Contact</button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Active Section */}
      {renderSection()}
       {/* Show Modal on Booking Confirmation */}
       {showModal && <Modal message={modalMessage} onClose={() => setShowModal(false)} />}

      {/* Footer */}
      <footer>
        <p>&copy; 2024 Event Booking Platform🎫</p>
      </footer>
    </div>
  );
}

export default App;
