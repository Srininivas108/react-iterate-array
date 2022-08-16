import React from "react";
import "./style.css";

function App() {
  const userdata = [
    {
      name: "😃 Nisha Dass",
      location: "🏘️ Lagos",
      car: "🚘 Honda",
    },
    {
      name: "😃 Haimi Bhasin",
      location: "🏘️ Moon",
      car: "🚘 Tesla",
    },
    {
      name: " 😃 Hrithik Saha",
      location: "🏘️ Venice",
      car: "🚘 Pagani",
    },
    {
      name: "😃 Kshitij Brahmbhatt",
      location: "🏘️ Milan",
      car: "🚘 Rolls Royce",
    },
    {
      name: "😃 Sudarshan Ratta",
      location: "🏘️ Beirut",
      car: "🚘 Mercedes",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="page-deets">
          <h2>Loop Over and Display Data with JSX</h2>
        </div>

        <div className="users">
          {userdata.map((user, index) => (
            <div key={index}>
              <h3>{user.name}</h3>
              <p>{user.location}</p>
              <p>{user.car}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
