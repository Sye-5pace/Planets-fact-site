import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import PlanetsRoute from './Components/PlanetsRoute'
import PlanetFact from './Components/PlanetFact'
import './Index.css'
import data from './assets/data.json'

const App: React.FC = () => {



  return (
    <Router>
      <div className='flex flex-col w-full min-h-screen p-0 m-0 gap-y-[13.25rem] border-box bg-blackpearl '>
          <PlanetsRoute data={data}/>
        <Routes>
          <Route path='/planet/:planetName' element={<PlanetFact data={data}/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
