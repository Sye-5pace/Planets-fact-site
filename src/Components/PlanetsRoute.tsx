import React,{useState} from 'react'
import type { PlanetsProps,ColorClassMap } from '../Interface';
import { Link } from 'react-router-dom'

const PlanetsRoute: React.FC<PlanetsProps> = ({data}) => {

    const colorMap: ColorClassMap = {
        pelorous: 'border-pelorous',
        tuliptree: 'border-tuliptree',
        purpleheart: 'border-purpleheart',
        valenciadeep: 'border-valenciadeep',
        valencialight: 'border-valencialight',
        piper: 'border-piper',
        java: 'border-java',
        royalblue: 'border-royalblue'
    };
    
    return (
        <div className='flex flex-col gap-y-4 '>
            <header className='flex flex-row items-center justify-between h-full px-8 border-b py-[0.1rem] border-dustygray border-opacity-20'>
                <h1 className='font-antonio text-[2rem] font-light text-white'>THE PLANETS</h1>
                <div className='children:h-[4rem] flex flex-row gap-8 font-normal font-spartan text-[0.8rem] text-opacity-75 text-white children:cursor-pointer self-start '>
                    {data.map(planet => (
                        <Link to={`/planet/${planet.name}`} 
                         className={`pt-5 hover:border-t-2 ${colorMap[planet.color]}`} 
                         key={planet.name}>
                            <h3>{planet.name.toUpperCase()}</h3>
                        </Link>
                    ))}
                </div>
            </header>
        </div>
    );
}

export default PlanetsRoute