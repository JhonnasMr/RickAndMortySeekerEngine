import React from 'react'
import '../assets/footer.css'
function Footer() {
  return (
  <>
  <div className="footer">
    <div className="footer-column">
      <h3>About me</h3>
      <p>I provide modern and efficient solutions for your business needs.</p>
      <div className="social__container">
        <a  href="mailto:amayhuayrodriguez@gmail.com?subject=Vi%20tu%20web&body=Quiero%20saber%20más%20sobre%20tus%20servicios." >
          <i className='bx bxl-gmail' ></i>
        </a>
        <a href="https://github.com/JhonnasMr" target="_blank" >
          <i className='bx bxl-github'></i>
        </a>
        <a href="#linkedin" target="_blank" >
          <i className='bx bxl-linkedin' ></i>
        </a>
      </div>
      <p>&copy; {Date().split(' ')[3]} All rights reserved.</p>
    </div>
    <div className="footer-column">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="#services">Services</a></li>
        <li><a href="https://jhonnas-dev-portfolio.netlify.app/#">Portfolio</a></li>
        <li><a href="https://jhonnas-dev-portfolio.netlify.app/#contact">Contact</a></li>
      </ul>
    </div>
    <div className="footer-column">
      <h3>Contact</h3>
      <p>Email: amayhuayrodriguez@gmail.com</p>
      <p>Phone: +51 908 671 023</p>
      {/* <p>Address: 123 Main St, City, Country</p> */}
    </div>
  </div>
  </>)
}

export default Footer