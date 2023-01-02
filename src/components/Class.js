import React from 'react'
import "./Class.css"

const Classes = [
    {
        id:"1",
        Img:"./Images/classes-1.jpg",
        h1:"Art & Drawing",
        FaceImg:"./Images/user.jpg",
        name:"John Doe",
        job:"Teacher",
        amount:"15000",
        age:"Age",
        ageyear:"3 - 5 years",
        time:"Time",
        timeno:"9 - 10am",
        capacity:"Capacity",
        capacityno:"30 kids"
    },
    {
        id:"2",
        Img:"./Images/classes-2.jpg",
        h1:"Color Management",
        FaceImg:"./Images/user.jpg",
        name:"John Doe",
        job:"Teacher",
        amount:"15000",
        age:"Age",
        ageyear:"3 - 5 years",
        time:"Time",
        timeno:"9 - 10am",
        capacity:"Capacity",
        capacityno:"30 kids"
    },
    {
        id:"3",
        Img:"./Images/classes-3.jpg",
        h1:"Athletic & Dance",
        FaceImg:"./Images/user.jpg",
        name:"John Doe",
        job:"Teacher",
        amount:"15000",
        age:"Age",
        ageyear:"3 - 5 years",
        time:"Time",
        timeno:"9 - 10am",
        capacity:"Capacity",
        capacityno:"30 kids"
    },
    {
        id:"4",
        Img:"./Images/classes-4.jpg",
        h1:"Language & Speaking",
        FaceImg:"./Images/user.jpg",
        name:"John Doe",
        job:"Teacher",
        amount:"15000",
        age:"Age",
        ageyear:"3 - 5 years",
        time:"Time",
        timeno:"9 - 10am",
        capacity:"Capacity",
        capacityno:"30 kids"
    },
    {
        id:"5",
        Img:"./Images/classes-5.jpg",
        h1:"Religion & History",
        FaceImg:"./Images/user.jpg",
        name:"John Doe",
        job:"Teacher",
        amount:"15000",
        age:"Age",
        ageyear:"3 - 5 years",
        time:"Time",
        timeno:"9 - 10am",
        capacity:"Capacity",
        capacityno:"30 kids"
    },
    {
        id:"6",
        Img:"./Images/classes-6.jpg",
        h1:"General Knowledge",
        FaceImg:"./Images/user.jpg",
        name:"John Doe",
        job:"Teacher",
        amount:"15000",
        age:"Age",
        ageyear:"3 - 5 years",
        time:"Time",
        timeno:"9 - 10am",
        capacity:"Capacity",
        capacityno:"30 kids"
    },
]


function Class() {
  return (
    <div className="class">
        <div className="container">
            <div className="class__details">
                <h1>School Classes</h1>
                <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
            </div>
            <div className="class__row">
                {Classes.map((index) => (
                    <div className="class__col">
                        <div className="class__details2">
                            <img src={index.Img} alt="img" />
                            <h1>{index.h1}</h1>
                            <div className="class__user">
                            <img src={index.FaceImg} alt="" />
                                <div className="user__name">
                                <h2>{index.name}</h2>
                                <h3>{index.job}</h3>
                                </div>
                                <div className="class__amount">
                                    <button>{index.amount}</button>
                                </div>
                            </div>
                            <div className="class__agegroup">
                                <div className="age">
                                    <h3>{index.age}</h3>
                                    <p>{index.ageyear}</p>
                                </div>
                                <div className="time">
                                    <h3>{index.time}</h3>
                                    <p>{index.timeno}</p>
                                </div>
                                <div className="capacity">
                                    <h3>{index.capacity}</h3>
                                    <p>{index.capacityno}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Class