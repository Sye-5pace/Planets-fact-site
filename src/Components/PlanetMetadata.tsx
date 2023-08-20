import React from 'react'
import type { PlanetMetadataProps } from '../Interface';


const PlanetMetadata: React.FC<PlanetMetadataProps> = ({ selectedPlanet}) => {

    return (
        <div className='flex mobile:flex-col mobile:gap-y-1 mobile:children:mx-4 mobile:children:px-[0.7rem] children:px-[1.575rem] laptop:flex-row laptop:justify-between children:border-2 children:border-white tablet:mx-auto tablet:children:w-[10.25rem] tablet:children:h-[5.5625rem] laptop:px-[10.3125rem] laptop:children:h-[8rem] laptop:children:w-[15.9375rem] font-spartan text-white children:flex children:flex-col children:border-opacity-20'>
            <div className='flex mobile:flex-row mobile:items-center mobile:justify-between laptop:flex-col laptop:justify-center'>
                <p className='opacity-50 py-4 text-[0.5rem]'>ROTATION TIME</p>
                <h1 className='tablet:text-[1.5rem]  laptop:text-[2.5rem] font-antonio'>{selectedPlanet?.rotation}</h1>
            </div>
            <div className='flex mobile:flex-row mobile:items-center mobile:justify-between laptop:flex-col laptop:justify-center'>
                <p className='opacity-50 py-4 text-[0.5rem]'>REVOLUTION TIME</p>
                <h1 className='tablet:text-[1.5rem] laptop:text-[2.5rem] font-antonio'>{selectedPlanet?.revolution}</h1>
            </div>
            <div className='flex mobile:flex-row mobile:items-center mobile:justify-between laptop:flex-col laptop:justify-center'>
                <p className='opacity-50 py-4 text-[0.5rem]'>RADIUS</p>
                <h1 className='tablet:text-[1.5rem] laptop:text-[2.5rem] font-antonio'>{selectedPlanet?.radius}</h1>
            </div>
            <div className='flex mobile:flex-row mobile:items-center mobile:justify-between laptop:flex-col laptop:justify-center'>
                <p className='opacity-50 py-4 text-[0.5rem]'>AVERAGE TEMP.</p>
                <h1 className='tablet:text-[1.5rem] laptop:text-[2.5rem] font-antonio'>{selectedPlanet?.temperature}</h1>
            </div>
        </div>
    );
}

export default PlanetMetadata;