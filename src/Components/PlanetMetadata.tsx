import React from 'react'
import { PlanetData } from '../Interface';

const PlanetMetadata: React.FC<PlanetData> = ({ selectedPlanet }) => {

    return (
        <div className='flex flex-row  justify-between children:border-2 children:border-white px-[10.3125rem] children:h-[8rem] children:w-[15.9375rem] font-spartan text-white children:flex children:flex-col children:border-opacity-20'>
            <div className='flex flex-col px-[1.575rem] justify-center'>
                <p className='opacity-50 '>ROTATION TIME</p>
                <h1 className='text-[2.5rem] font-antonio'>{selectedPlanet.rotation}</h1>
            </div>
            <div className='flex flex-col px-[1.575rem] justify-center'>
                <p className='opacity-50'>REVOLUTION TIME</p>
                <h1 className='text-[2.5rem] font-antonio'>{selectedPlanet.revolution}</h1>
            </div>
            <div className='flex flex-col px-[1.575rem] justify-center'>
                <p className='opacity-50'>RADIUS</p>
                <h1 className='text-[2.5rem] font-antonio'>{selectedPlanet.radius}</h1>
            </div>
            <div className='flex flex-col px-[1.575rem] justify-center'>
                <p className='opacity-50'>AVERAGE TEMP.</p>
                <h1 className='text-[2.5rem] font-antonio'>{selectedPlanet.temperature}</h1>
            </div>
        </div>
    );
}

export default PlanetMetadata;