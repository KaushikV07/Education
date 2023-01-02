import React from "react";
import "./Popular.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const popularData = [
  {
    id: "1",
    face: "./Images/team-1.jpg",
    h1: "Aneesha",
    p: "Software Develpment",
    FB: <FacebookIcon />,
    TW: <TwitterIcon />,
    IN: <InstagramIcon />,
  },
  {
    id: "2",
    face: "./Images/team-2.jpg",
    h1: "Kaushik",
    p: "Full Stack Develpment",
    FB: <FacebookIcon />,
    TW: <TwitterIcon />,
    IN: <InstagramIcon />,
  },
  {
    id: "3",
    face: "./Images/team-3.jpg",
    h1: "Naga Divya",
    p: "UI/UX Designer",
    FB: <FacebookIcon />,
    TW: <TwitterIcon />,
    IN: <InstagramIcon />,
  },
];

function Popular() {
  return (
    <div className="popular">
      <div className="container">
        <div className="popular__details">
          <h1>Popular Teachers</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui,
            molestiae ipsam? Molestiae aperiam beatae in pariatur quaerat
            tempore hic nostrum.
          </p>
        </div>
        <div className="popular__row">
          {popularData.map((index) => (
            <div className="popular__col">
              <div className="popular__details2">
                <img src={index.face} alt="face" />
                <div className="popular__text">
                  <h1>{index.h1}</h1>
                  <p>{index.p}</p>
                  <div className="icons__3">
                    {index.FB}
                    {index.TW}
                    {index.IN}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Popular;
