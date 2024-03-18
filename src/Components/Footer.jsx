import React from 'react';
import './footer.css';
const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <div className="container">
          <h2>Nice to see you here!</h2>
          <p>sagarpatra2002@gmail.com</p>
          <p>This website is best viewed on desktop</p>
          <p>Made with love &copy; 2024 Sagar Patra </p>
        </div>
      </div>
      <div className="right">
        <div className="container">
          <a href={"mailto:sagarpatra2002@gmail.com"} target="_blank" rel="noopener noreferrer">
            <div className="email">
              <img src="email.png" alt="email logo" height={70}/>
              <p>Email</p>
            </div>
          </a>
          
          <a href={"https://www.linkedin.com/in/sagar-patra-089257220/"} target="_blank" rel="noopener noreferrer">
            <div className="linkedin">
              <img src="linkedin.png" alt="linkedin logo" height={70}/>
              <p>LinkedIn</p>
            </div>
          </a>
          
          <a href={"https://github.com/NotSagar16"} target="_blank" rel="noopener noreferrer">
            <div className="github">
              <img src="github.png" alt="github logo" height={70}/>
              <p>Github</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
