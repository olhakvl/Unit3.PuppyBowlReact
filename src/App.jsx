import './App.css';
import {Routes, Route} from "react-router-dom";
import AllPlayers from './components/AllPlayers';
import SinglePlayer from './components/SinglePlayer';
import NewPlayerForm from './components/NewPlayerForm';
import { useState } from 'react';
import NavBar from './components/NavBar';

function App() {

  const [singlePlayerId, setSinglePlayerId] = useState(0);

  return (
    <main id="mainContent">

      {/* <NewPlayerForm />
      <AllPlayers setSinglePlayerId={setSinglePlayerId}/>
      {singlePlayerId && <SinglePlayer singlePlayerId={singlePlayerId}/>} */}

      <NavBar />
      <Routes>
        <Route path="/" element={[<NewPlayerForm />, <AllPlayers setSinglePlayerId={setSinglePlayerId}/>]}/>
        <Route path="/players/:id" element={singlePlayerId && <SinglePlayer singlePlayerId={singlePlayerId}/>}/>
      </Routes>
    </main>
  )
}

export default App
