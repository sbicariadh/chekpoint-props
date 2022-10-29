import React from 'react';
import Profile from './profile/Profile'
function App  ( ) {
  const handleName =  (fullName, bio, profession  )=>{


    alert(`je ma'appelle ${fullName}\n ${bio}\n je travaille comme un ${profession}`);
  };  return (
    <div>
      <div className="App">
      <Profile
        fullName="Sbica riadh"
        bio="futur dev"
        profession="r.achat"
        handleName={handleName}
      >
        <img className="ahla"src="./image1.jpg" alt='image1'  />
        <h1>c'est une image</h1>
      </Profile>
      
    </div>
    </div>
  )
}

export default App
