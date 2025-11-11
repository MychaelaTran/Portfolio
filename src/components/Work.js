import "./work.css"
import rbc from "../images/RBC circle logo.png"
import ta from "../images/maclogo2.jpg"
import stabl from "../images/fondation_stabl_foundation_logo.jpg"
import msc from "../images/startcoding-logo.png"
import React, {useRef, useEffect, useState } from 'react'



export const Work = () => {
     return (
      <div>
        <h1>Work Experience</h1>
        <div className="timeline">
        {/* RBC */}
        <div >
          <div className="timeline-box left-box">
            <img src={rbc}></img>
            <div className="text-box">
              <h3>RBC</h3>
              <p>Technical Systems Analyst</p>
              <small>Jan 2026 - April 2026</small>
              <p></p>
              <span className="left-box-arrow">

              </span>
            </div>
          </div>
        </div>

        {/* teaching assisntaw */}
        <div >
          <div className="timeline-box right-box">
            <img src={ta}></img>
            <div className="text-box">
              <h3>McMaster Univeresity Computing And Software </h3>
              <p>Teaching Assitant</p>
              <small>Sept 2025 - Present</small>
              <p>Teaching assistant for Data Structure and Algorithms</p>
              <span className="right-box-arrow"></span>
            </div>
          </div>
        </div>


        {/* stabl */}
        <div >
          <div className="timeline-box left-box">
            <img src={stabl}></img>
            <div className="text-box">
              <h3>StaBl Foundation</h3>
              <p>Software Developer and Mentor</p>
              <small>May 2025 - Sept 2025</small>
              <p>Developed Wave Creator in ELM</p>
              <span className="left-box-arrow"></span>
            </div>
          </div>
        </div>

        {/* Co-President msc */}
        <div >
          <div className="timeline-box right-box">
            <img src={msc}></img>
            <div className="text-box">
              <h3>McMaster Start Coding</h3>
              <p>Co-President</p>
              <small>Sept 2025 - Present</small>
              <p>Running a club that has taught over 36k studentse to code.</p>
              <span className="right-box-arrow"></span>
            </div>
          </div>
        </div>
      </div>




      </div>

    );



}
