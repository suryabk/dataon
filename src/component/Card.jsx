import React from "react";
import "./card.css";

function Card({ dataUser }) {
  console.log(dataUser);
  return (
    <div className="container">
      {dataUser.map((user, idx) => (
        <div className="container-card">
          <div
            className="card"
            style={
              idx % 2
                ? { flexDirection: "row-reverse" }
                : { flexDirection: "row" }
            }>
            <div className="content">
              <div className="profile">
                <p className="date">{user.date}</p>
                <h3 className="user-name">{user.name}</h3>
                <img
                  className="user-image"
                  src="./assets/userImage.jpg"
                  alt=""
                />
              </div>
              <p className="comment">{user.post}</p>
            </div>
            <div
              className="post-image"
              style={idx % 2 ? { left: "-16px" } : { right: "-16px" }}>
              <img src={user.postImage} alt="post" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;