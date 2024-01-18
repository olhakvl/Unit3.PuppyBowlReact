import './App.css';
import {Routes, Route} from "react-router-dom";
import AllPlayers from './components/AllPlayers';
import SinglePlayer from './components/SinglePlayer';
import SearchBar from './components/SearchBar';
import NewPlayerForm from './components/NewPlayerForm';

function App() {

  return (
    <main id="mainContent">
      {/* <SearchBar /> */}

      <NewPlayerForm />
      <AllPlayers />



      {/* <Routes>
        <Route path="/" element={<AllPlayers />}/>
        <Route path="/players/:id" element={<SinglePlayer />}/>
      </Routes> */}
    </main>
  )
}

export default App
