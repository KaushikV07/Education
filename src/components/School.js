import React from 'react'
import "./School.css";
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import HouseIcon from '@mui/icons-material/House';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const School__box =[
  {
    id:1,
    icons:<DirectionsBusIcon />,
    h3:"School Bus",
    Description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    id:2,
    icons:<SportsSoccerIcon />,
    h3:"Playground",
    Description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    id:3,
    icons:<HouseIcon /> ,
    h3:"Heatlhy Canteen ",
    Description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    id:4,
    icons: <PersonAddIcon />,
    h3:"Postive Thinking",
    Description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
]

function School() {
  return (
  <div className="school">
    <div className="container">
      <div className="school__text">
        <h1>School Facilities</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, harum. <br />
        amet consectetur adipisicing elit. Temporibus, harum.</p>
      </div>

      <div className="school__row">
        {School__box.map((index) => (
          <div className="school__col">
            <div className="school__details" key={index.id}>
              {index.icons}
              <h3>{index.h3}</h3>
              <p>{index.Description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}

export default School