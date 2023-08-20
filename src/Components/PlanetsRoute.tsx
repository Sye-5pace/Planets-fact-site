import React,{useState} from 'react'
import type { PlanetsProps,ColorClassMap } from '../Interface';
import { Link } from 'react-router-dom';
import MenuIcon from '../../public/assets/icon-hamburger.svg'
import ModalNav from '../../public/assets/icon-chevron.svg'

const PlanetsRoute: React.FC<PlanetsProps> = ({data}) => {
    const [ isClicked, setIsClicked] = useState(false)
    
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

    const MobileModal: React.FC = () => {
        
        return(
            <div className={`absolute inset-0 top-[3.3rem] ${isClicked ? 'flex': 'hidden'} flex-col gap-y-3  children:mx-4 bg-blackpearl z-[999]`}>
                {data.map((planet)=>(
                    <Link to={`/planet/${planet.name}`} key={planet.name}
                      className='cursor-pointer flex flex-row justify-between items-center text-white font-spartan h-[3rem] border-b-2 border-dustygray border-opacity-10'
                      onClick={()=> setIsClicked(!isClicked)}>
                        <div className='flex gap-4 '>
                            <img className='w-[1.25rem] h-[1.25rem]' src={planet.images.planet}/>
                            <h2 className='text-[0.950rem]'>{planet.name.toUpperCase()}</h2>
                        </div>
                        <img src={ModalNav} className='w-2 h-3' />
                    </Link>
                ))}
            </div>
        );
    }
    
    return (
        <div className='flex flex-col gap-y-4 '>
            <header className='mobile:hidden flex tablet:flex-col tablet:items-center tablet:mx-auto tablet:py-2  laptop:flex-row  laptop:items-center laptop:justify-between h-full laptop:px-8 border-b laptop:py-[0.1rem] border-dustygray border-opacity-20'> 
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
            <div className='border-b py-[0.1rem] border-dustygray border-opacity-20 mobile:flex mobile:flex-row mobile:mx-[1.5rem] mobile:justify-between mobile:items-center tablet:hidden laptop:hidden'>
                <h1 className='font-antonio text-[2rem] font-light text-white'>THE PLANETS</h1>
                <img src={MenuIcon} onClick={()=> setIsClicked(!isClicked)}  className={`w-[1.5rem] h-[1.063rem] cursor-pointer ${isClicked ? 'opacity-20' : ''}`}/>
             </div>
             <MobileModal/>
        </div>
    );
}

export default PlanetsRoute