import React from "react";
import "./index.css";

function App() {
  let currentDate = new Date();
  currentDate = currentDate.getHours();
  let greeting = "";
  const cssStyle = {};

  if (currentDate > 1 && currentDate < 12) {
    greeting = "Good Morning";
    cssStyle.color = "green";
  } else if (currentDate >= 12 && currentDate < 19) {
    greeting = "Good afternoon";
    cssStyle.color = "orange";
  } else if (currentDate >= 19 && currentDate < 24) {
    greeting = "Good night";
    cssStyle.color = "black";
  }
  return (
    <div>
      <h2>
        Hello Sir, <span style={cssStyle}>{greeting}</span>
      </h2>
    </div>
  );
}
export default App;
