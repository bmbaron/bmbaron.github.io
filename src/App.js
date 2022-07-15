import React, { useState } from 'react'
import './styles/app.css'
import './styles/game styles.css'
import './styles/profile styles.css'
import Game from './components/game components/Game'
import Header from './components/profile components/Header'
import Body from './components/profile components/Body'
import Footer from './components/profile components/Footer'
import {Helmet} from 'react-helmet'

function App() {

  const [mode, setMode] = useState(undefined)

  return (
    <div className="main-app">
      <Helmet>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0" />
          <title>Ben Baron</title>
          <link rel="icon" href="./images/favicon.ico" />
          <link rel="canonical" href="http://bmbaron.github.io" />
      </Helmet>
      <div className="control-button-container">
        <button className="control-button" onClick={() => setMode('game')}> game </button>
        <button className="control-button" onClick={() => setMode('profile')}> profile </button>
      </div>

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
  );
}

export default App;
