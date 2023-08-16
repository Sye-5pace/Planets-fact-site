import React from 'react'
import { PlanetsProps } from '../Interface';
import { Link } from 'react-router-dom'

const PlanetsRoute: React.FC<PlanetsProps> = ({data}) => {

    return (
        <div className='flex flex-col gap-y-4 '>
            <header className='flex flex-row items-center justify-between h-full px-8 border-b py-[0.1rem] border-dustygray border-opacity-20'>
                <h1 className='font-antonio text-[1.75rem] font-light text-white'>THE PLANETS</h1>
                <div className='children:h-[4rem] flex flex-row gap-8 font-bold font-spartan text-[0.6875rem] text-white children:cursor-pointer self-start '>
                    {data.map((planet)=>(
                        <Link to={`/planet/${planet.name}`} className='pt-5 hover:border-t-2 hover:border-pelorous ' key={planet.name}>
                            <h3>{planet.name.toUpperCase()}</h3>
                        </Link>
                    ))}
                </div>
            </header>
        </div>
    );
}

export default PlanetsRoute