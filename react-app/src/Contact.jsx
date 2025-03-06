import "./Contact.css";
import { Link } from "react-router-dom";

export default function Contact(){
    return(
        <>
                  <ul className='ul'>
                  <li className='li'><Link to="/Profile">Profile</Link></li>
                  <li className='li'><Link to="/Contact">Contact</Link></li>
                            <li className='li'><nav><Link to="/fronte">Home</Link></nav></li>
                            <li className='right'><a href="">FlimFlix</a></li>
                              </ul>
                                  <hr />  <hr ></hr>
    <div className="container">
      <div className="background-image"></div>
      <div className="form-container">
        <h2 className="title">Contact Us</h2>
        <form className="form">
          <table className="form-table">
            <tbody>
              <tr>
                <td><label className="label">Name</label></td>
                <td>
                  <input
                    type="text"
                    className="input"
                    placeholder="Your Name"
                    required
                  />
                </td>
              </tr>
              <tr>
                <td><label className="label">Email</label></td>
                <td>
                  <input
                    type="email"
                    className="input"
                    placeholder="Your Email"
                    required
                  />
                </td>
              </tr>
              <tr>
                <td><label className="label">Message</label></td>
                <td>
                  <textarea
                    className="textarea"
                    placeholder="Your Message"
                    rows="4"
                    required
                  ></textarea>
                </td>
              </tr>
            </tbody>
          </table>
          <button type="submit" className="button">Send Message</button>
        </form>
        <div className="faq-s">
          <h2 className="faq-t">Frequently Asked Questions</h2>
          <div className="faq">
            <h3 className="faq-q">How can I confrim that my my ticket has booked?</h3>
            <p className="faq-a">You can confirm your ticket using link provided in your confirmation email.</p>
          </div>
          <div className="faq">
            <h3 className="faq-q">Is a refund available?</h3>
            <p className="faq-a">Only 50% is available.</p>
          </div>
          <div className="faq">
            <h3 className="faq-q">Other Important Information</h3>
            <ul className="faq-a">
              <li>You can switch  ticketsfrom one movie to another but some additional charges are required</li>
              <li>Your booking dates can also be changed, but an additional fee may apply.</li>
              <li>Cancellations within 24 hours are not permitted.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <footer class="bottom">
  <p>&copy; 2025 FlimFlix. All rights reserved.</p>
  <p> Address : 123 ,Gandhi street, coimbatore, India</p>
  <p> Contact us on : +91 9876543210,
  contact@flimflix.com</p>
</footer>
  </>);
};
