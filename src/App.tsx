import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import PlanetsRoute from './Components/PlanetsRoute'
import PlanetFact from './Components/PlanetFact'
import './index.css'
// import data from './data.json'


const App: React.FC = () => {

  return (
    <Router>
      <div className='flex flex-col w-full min-h-screen p-0 m-0 gap-y-[1rem] border-box bg-[url("../assets/background-stars.svg")] bg-blackpearl'>
          <PlanetsRoute />
        <Routes>
          <Route path='/planet/:planetName' element={<PlanetFact  />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
