import React from 'react';
import "./hero.css";
import Speech from './Speech';


const Hero = () => {
  return (
    <div className='hero'>
      {/* THIS SECITON IS VIEWED ON THE LEFT */}
      <div className="hSection left">

        {/* TITLE */}
        <h1 className="hTitle">Hey There,
          <br />
          <span>
            I'm Armaan!
          </span>
        </h1>

        {/* AWARDS */}
        <div className="awards">
          <h2>
            Top Rated Designer
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ut soluta quidem cum numquam hic, delectus dolorem nam deleniti, in eum dolor unde, officia dolores at libero qui laboriosam alias!
          </p>
          <div className="awardList">
            <img src="/award1.png" alt="" />
            <img src="/award2.png" alt="" />
            <img src="/award3.png" alt="" />
          </div>
        </div>

        {/* SCROLL SVG */}
        <a href="#services">
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="white"
              strokeWidth="1"
            />
            <path
              d="M12 5V8"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </a>
      </div>

      {/* THIS CONTENT WILL DISPLAY ON THE RIGHT SIDE */}
      <div className="hSection left">

        {/* FOLLOW */}
        <div className="follow">
          <a href="/">
            <img src="/instagram.png" alt="" />
          </a>

          <a href="/">
            <img src="/facebook.png" alt="" />
          </a>

          <a href="/">
            <img src="/youtube.png" alt="" />
          </a>
        </div>

        {/* SPEECH BUBBLE */}
        <Speech/>

        {/* CERTIFICATE */}
        <div className="certificate">
          <img src="/certificate.png" alt="" />
          BSC DEGREE
          <br />
          UI DESIGNER
          <br />
          PROFESSIONAL
        </div>

        {/* CONTACT BUTTON */}
        <a href="/#contact" className='contactLink'>
          <div className="contactButton">

          <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="pink" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className="circleText">
                <textPath href="#innerCirclePath">Hire Now •</textPath>
              </text>
              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="44%">
                  Contact Me •
                </textPath>
              </text>
            </svg>

          </div>
        </a>

      </div>
    </div>
  )
}

export default Hero