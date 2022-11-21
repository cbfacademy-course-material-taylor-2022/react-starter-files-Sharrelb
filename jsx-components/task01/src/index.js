import React from "react";
import ReactDOM from "react-dom/client";

const name = "ShaRRel";

function Profile(name) {
  if (name.toUpperCase() === "SHARREL") {
    return (
      <main id="content" role="main" className="base">
        <h1>{name}'s React Page</h1>
        <p>Example of react JSX in action</p>
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
