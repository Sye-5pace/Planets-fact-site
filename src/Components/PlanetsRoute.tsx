import React from 'react'
import type { PlanetsProps,ColorClassMap } from '../Interface';
import { Link } from 'react-router-dom';
import MenuIcon from '../../public/assets/icon-hamburger.svg'

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
            <header className='flex tablet:flex-col tablet:items-center tablet:mx-auto tablet:py-2 tablet:children:border-2 laptop:flex-row  laptop:items-center laptop:justify-between h-full laptop:px-8 border-b py-[0.1rem] border-dustygray border-opacity-20'>
                <div className='flex mobile:hidden tablet:flex-col tablet:items-center tablet:mx-auto tablet:py-2 laptop:flex-row laptop:items-center laptop:justify-between'>  
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
                </div>
            </header>
            <div className='border-b py-[0.1rem] border-dustygray border-opacity-20 mobile:flex mobile:flex-row mobile:mx-[1.5rem] mobile:justify-between mobile:items-center tablet:hidden laptop:hidden'>
                <h1 className='font-antonio text-[2rem] font-light text-white'>THE PLANETS</h1>
                <img src={MenuIcon} className='w-[1.5rem] h-[1.063rem]'/>
             </div>
        </div>
    );
}

export default PlanetsRoute