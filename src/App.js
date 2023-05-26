import React, { useState } from "react";

function App(props) {
  const [isToggled, setToggle] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("blue");

  const toggleBackgroundColor = () => {
    const newColor = isToggled ? "blue" : "red";
    setToggle(!isToggled);
    setBackgroundColor(newColor);
  };

  const buttonLabel = isToggled ? "Blue" : "Red";

  return (
    <div style={{ backgroundColor, height: "100vh" }}>
      <h1>Its is a code belongs to {props.abhi}</h1>
      <button onClick={toggleBackgroundColor}>
        Toggle Background Color => {buttonLabel}
      </button>
    </div>
  );
}

export default App;
