
import './App.css';
import Routes from './Routes';
import {ParallaxProvider} from 'react-scroll-parallax'

function App() {
  return (
    <ParallaxProvider >
       <div className="App">
           <Routes />
        </div>
    </ParallaxProvider>
  );
}

export default App;
