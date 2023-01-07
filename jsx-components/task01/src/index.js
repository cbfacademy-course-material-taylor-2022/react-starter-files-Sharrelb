import React from "react";
import ReactDOM from "react-dom/client";

const name = "Sharrel";

function Profile(name) {
  if (name.toUpperCase() === "SHARREL") {
    return (
      <main id="content" role="main" className="base">
        <h1>{name}'s React Page</h1>
        <p>I'm learning how to create react website's</p>
      </main>
    );
  } else {
    return (
      <main id="content" role="main" className="base">
        <h1>Just a react page</h1>
        <p>nothing to see here</p>
      </main>
    );
  }
  
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Profile(name));
