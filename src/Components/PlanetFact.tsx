import React from 'react'
import { PlanetsProps } from '../Interface';
import { useParams } from 'react-router-dom'

const PlanetFact:React.FC<PlanetsProps> = ({data}) => {
    const { planetName } = useParams();

    // Find the planet in the data based on the planetName
    const selectedPlanet = data.find((planet) => planet.name === planetName);
    console.log("", selectedPlanet);
  
    /* if (!selectedPlanet) {
      return <div>Planet not found</div>;
    } */

    return(
        <div className='flex flex-row text-white border-2'>
            <div >
                <svg className='w-24 h-24'>
                    {selectedPlanet?.images.planet}
                </svg>
            </div>
            <div className='font-spartan w-[21.875rem] flex flex-col gap-y-4'>
                <h1 className='text-[5rem] font-antonio'>{selectedPlanet?.name}</h1>
                <p>{selectedPlanet?.overview.content}</p>
                <p>Source: <a href={selectedPlanet?.overview.source} className='underline'>Wikipedia</a> </p>
                <div className='flex flex-col gap-y-3'>
                    <div className='flex flex-row gap-10 border-2 border-dustygray'><p>01</p><h3 className='font-bold'>OVERVIEW</h3></div>
                    <div className='flex flex-row gap-10 border-2 border-dustygray'><p>02</p><h3 className='font-bold'>INTERNAL STRUCTURE</h3></div>
                    <div className='flex flex-row gap-10 border-2 border-dustygray'><p>03</p><h3 className='font-bold'>SURFACE GEOLOGY</h3></div>
                </div>
            </div>
        </div>
    );
}

export default PlanetFact