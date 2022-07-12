import './App.css';
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import {Helmet} from 'react-helmet'

function App() {
  return (
    <>
      <Helmet>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0" />
          <title>Ben Baron</title>
          <link rel="icon" href="./images/favicon.ico" />
          <link rel="canonical" href="http://bmbaron.github.io" />
      </Helmet>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default App;
