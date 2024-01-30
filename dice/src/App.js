import './App.css';
import { useState } from 'react';
import Openscreen from './components/Openscreen';
import Gameplay from './components/Gameplay';

function App() {

  const [isgamestatred, setisgamestatred] = useState(false);
  const togglegameplay = () => {
    setisgamestatred(!isgamestatred);
  
  }
  return (
    <>
    {
      isgamestatred ? <Gameplay /> : <Openscreen toggle={togglegameplay}/>
    }
    </>
  );
}

export default App;
