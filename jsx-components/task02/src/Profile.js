import React from "react"

/* Add the Profile function here */

function Profile(props) {  
  
     if(Object.keys(props)===0 )
     return <main id="content" role="main" className="base">
      <h1>{props.name}'s React Page</h1>
        <p>{props.bio}</p>
    </main>
}

export default Profile