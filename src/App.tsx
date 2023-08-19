import React,{useState} from 'react'
import { BrowserRouter as Router, Route,Routes,Redirect } from 'react-router-dom'
import PlanetsRoute from './Components/PlanetsRoute'
import PlanetFact from './Components/PlanetFact'
import './Index.css'
import data from './data.json'

const App: React.FC = () => {
  // const  [planetName ,setPlanetName ] = useState('Mercury')


  return (
    <Router>
      <div className='flex flex-col w-full min-h-screen p-0 m-0 gap-y-[1rem] border-box bg-[url("../public/assets/background-stars.svg")] bg-blackpearl'>
          <PlanetsRoute data={data}/>
        <Routes>
          <Route path='/planet/:planetName' element={<PlanetFact data={data} />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
