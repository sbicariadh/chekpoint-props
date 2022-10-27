import React from 'react'
import Profile from './profile/Profile'
const App = () => {
  const HandleName = () => {
    function HandleName(fullName) {
      alert({fullName});
    }
  };
  return (
    <div>
      <div className="App">
      <Profile
        fullName="Sbica riadh"
        bio="futur dev"
        profession="r.achat"
        handleName="handleName"
      >
        <img src="./image1.jpg" alt='image1' />
        <h1>c'est une image</h1>
      </Profile>
    </div>
    </div>
  )
}

export default App
