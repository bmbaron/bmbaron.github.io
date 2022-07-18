import React, { useState } from 'react'
import './styles/app.css'
import './styles/game styles.css'
import './styles/profile styles.css'
import Landscape from './components/Landscape'
import Game from './components/game components/Game'
// import Header from './components/profile components/Header'
import Body from './components/profile components/Body'
import Footer from './components/profile components/Footer'
import {Helmet, HelmetProvider } from 'react-helmet-async'

function App() {

  const [mode, setMode] = useState(undefined)

  return (
    <HelmetProvider>
      <div className="main-app">
        <Helmet>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0" />
            <title>Ben Baron</title>
            <link rel="icon" href="./images/favicon.ico" />
            <link rel="canonical" href="http://bmbaron.github.io" />
        </Helmet>
        <div className="control-button-container">
          <button className="control-button" onClick={() => setMode('profile')}> profile </button>
          <button className="control-button" onClick={() => setMode('game')}> mini-game </button>
        </div>
        {mode === undefined &&
          <>
            <div className="greeting-container">
              {/* <h1 className="greeting">Welcome to my site!<br></br><br></br> Please have a look around and feel free to reach me on the socials if you'd like to connect. <br></br><br></br> -Ben Baron</h1> */}
              <Landscape />
            </div>
          </>
        }
        {mode === 'game' &&
          <Game />
        }
        {mode === 'profile' &&
          <>
            {/* <Header/> */}
            <Body />
            <Footer />
          </>
        }
      </div>
    </HelmetProvider>
  );
}

export default App;
