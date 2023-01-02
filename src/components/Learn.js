import React from 'react'
import "./Learn.css"

function Learn() {
  return (
    <div className="Learn">
        <div className="container">
            <div className="learn__row">
              <div className="learn__col">
                <div className="learn__details">
                  <h1>Learn More About Our Work And Our Cultural Activities</h1>
                  <div className="learn__avatar">
                    <img src="./Images/user.jpg" alt="" />
                    <div className="learn__avatar__text">
                    <h2>Kaushik</h2>
                    <h3>CEO & Founder</h3>
                    </div>
                  </div>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus facilis provident, quibusdam temporibus commodi ipsa numquam, ut nobis odit sunt rem pariatur beatae excepturi laudantium.
                  </p>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus facilis provident, quibusdam temporibus commodi ipsa numquam, ut nobis odit sunt rem pariatur beatae excepturi laudantium.
                  </p>
                  <button>Read  More</button>
                </div>
              </div>

              <div className="learn__col">
                <div className="learn__images">
                  <img src="./Images/about-1.jpg" alt="" />
                  <img src="./Images/about-2.jpg" alt="" />
                  <img src="./Images/about-3.jpg" alt="" />
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Learn