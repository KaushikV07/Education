import React from 'react'
import "./Teacher.css"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function Teacher() {
return (
    <div className="teacher">
        <div className="container">
        <div className="teacher__row">
            <div className="teacher__col">
                <div className="teacher__img">
                    <img src="./Images/call-to-action.jpg" alt="" />
                </div>
            </div>

            <div className="teacher__col">
                <div className="teacher__detail">
                    <h1>Become A Teacher</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae quos accusamus delectus harum sit recusandae illo tenetur a excepturi laudantium!</p>
                    <button> GET STARTED NOW <ArrowRightAltIcon /></button>
                </div>
            </div>
        </div>
        
    </div>
    </div>
    
)
}

export default Teacher