import React from 'react'
import type { PlanetMetadataProps } from '../Interface';


const PlanetMetadata: React.FC<PlanetMetadataProps> = ({ selectedPlanet}) => {

    return (
        <div className='flex flex-row  justify-between children:border-2 children:border-white tablet:children:w-[10.25rem] tablet:children:h-[5.5625rem] laptop:px-[10.3125rem] laptop:children:h-[8rem] laptop:children:w-[15.9375rem] font-spartan text-white children:flex children:flex-col children:border-opacity-20'>
            <div className='flex flex-col px-[1.575rem] justify-center'>
                <p className='opacity-50 tablet:text-[0.5rem]'>ROTATION TIME</p>
                <h1 className='tablet:text-[1.5rem]  laptop:text-[2.5rem] font-antonio'>{selectedPlanet?.rotation}</h1>
            </div>
            <div className='flex flex-col px-[1.575rem] justify-center'>
                <p className='opacity-50 tablet:text-[0.5rem]'>REVOLUTION TIME</p>
                <h1 className='tablet:text-[1.5rem] laptop:text-[2.5rem] font-antonio'>{selectedPlanet?.revolution}</h1>
            </div>
            <div className='flex flex-col px-[1.575rem] justify-center'>
                <p className='opacity-50 tablet:text-[0.5rem]'>RADIUS</p>
                <h1 className='tablet:text-[1.5rem] laptop:text-[2.5rem] font-antonio'>{selectedPlanet?.radius}</h1>
            </div>
            <div className='flex flex-col px-[1.575rem] justify-center'>
                <p className='opacity-50 tablet:text-[0.5rem]'>AVERAGE TEMP.</p>
                <h1 className='tablet:text-[1.5rem] laptop:text-[2.5rem] font-antonio'>{selectedPlanet?.temperature}</h1>
            </div>
        </div>
    );
}

export default PlanetMetadata;