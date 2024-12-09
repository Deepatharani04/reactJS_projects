import React from "react";
import Img from '../Images/image2.png';
import Img2 from '../Images/image1.png';
import './Style.css';

export function LandingPage(){
    return(
        <>
        <div className="wholediv">
        <div className="div">
        <img src={Img} className="logo"/>
        <button className="signin">Sign-in</button>
        </div>
        <div className="text-screen">
        <img src={Img2} className="screen"/>
        <h1 className="screen-text1">Unlimited Movies, TV</h1><br/><br/><br/><br/>
        <h1 className="screen-text2">shows and more</h1><br/><br/><br/><br/>
        <h3 className="screen-text3">Starts at $149. Cancel at any time</h3><br/>
        </div>
        <div className="screenbody">
            <h5 className="body-text">Ready to watch? Enter your email to create or restart your membership.</h5>
            <input type="text" className="mailinput" placeholder="Enter your Email"/>
            <button className="mailbtn">Get Started </button>
            <h2 className="trend-text">Trending Now!</h2>
            
        </div>
        </div>
        </>
    );
}