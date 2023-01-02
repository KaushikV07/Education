import React from 'react'
import "./Footer.css"
import MyLocationIcon from '@mui/icons-material/MyLocation';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import CopyrightIcon from '@mui/icons-material/Copyright';

function Footer() {
  return (
<footer>
   <div className="footer">
    <div className="container">
        <div className="footer__row">
            <div className="footer__col">
                <div className="footer__details">
                    <h1>Get In Touch</h1>
                    <nav>
                        <li><MyLocationIcon /> Thanjavur, TamilNadu</li>
                        <li><PhoneIcon /> +917708913135</li>
                        <li><AlternateEmailIcon /> kaushikvigu@gmail.com</li>
                    </nav>
                    <div className="footer__icons">
                        <GitHubIcon />
                        <InstagramIcon />
                        <TwitterIcon />
                        <YouTubeIcon />
                    </div>
                </div>
            </div>
            <div className="footer__col">
                <div className="footer__details">
                    <h1>Quick Links</h1>
                    <nav>
                        <li><KeyboardDoubleArrowRightIcon />About Us</li>
                        <li><KeyboardDoubleArrowRightIcon />Contact Us</li>
                        <li><KeyboardDoubleArrowRightIcon />Our Services</li>
                        <li><KeyboardDoubleArrowRightIcon />Privary Policy</li>
                        <li><KeyboardDoubleArrowRightIcon />Terms & Condition</li>
                    </nav>
                </div>
            </div>
            <div className="footer__col">
                <div className="footer__details">
                    <h1>Photo Gallery</h1>
                    <p>Lorem ipsum dolor sit amet <br /> consectetur adipisicing  elit.  Adipisci, <br /> eius!</p>
                  <div className="footer__submit">
                    <input type="text" />
                    <button>Sign Up</button>
                  </div>  
                    
                </div>
            </div>
        </div>
    </div>
   </div>
   
        <div className="last__footer">
            <p><CopyrightIcon /> All Right Reserved. Designed by<a href="!#">KAUSHIK V</a></p>
        </div>
</footer>
  );
}

export default Footer