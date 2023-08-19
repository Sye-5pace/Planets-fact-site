import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import type { PlanetsProps } from '../Interface';
import PlanetMetadata from './PlanetMetadata';

const PlanetFact:React.FC<PlanetsProps> = ({data}) => {
    const { planetName } = useParams();
    const [ selectedTab, setSelectedTab ] = useState<string>('overview');

    const selectedPlanet = data.find((planet) => planet.name === planetName);
    
    const GeologyImage: React.FC =()=>{
        return (
            <div className='flex flex-col mt-[1rem]'>
                <img className='h-[25rem]' src={selectedPlanet?.images.planet} alt="Planet" />
                <img  className='relative bottom-[6rem] w-[8rem] self-center' src={selectedPlanet?.images.geology} alt="geology"/>
            </div>
        )
    } 
    
    let content;
    let imgSource;
    if (selectedTab === 'overview') {
        content = selectedPlanet?.overview.content;
        imgSource = selectedPlanet?.images.planet
    } else if(selectedTab === 'structure'){
        content = selectedPlanet?.structure.content;
        imgSource = selectedPlanet?.images.internal
    }else if(selectedTab === 'geology'){
        content = selectedPlanet?.geology.content;
    }

    return(
        <div className='flex flex-col gap-y-[1.3rem] children:border-2'>
            <div className='flex flex-row justify-center gap-[16.25rem] text-white children:border-2 h-[35rem]'>
                {selectedTab === 'geology' ? <GeologyImage/> : <img src={imgSource} alt="planet"  className='w-[28.625rem] h-[28.625rem] my-[2rem]'/> }
                <div className='font-spartan w-[21.875rem] flex flex-col gap-y-4'>
                    <h1 className='text-[5rem] font-antonio'>{selectedPlanet?.name}</h1>
                    <p>{content}</p>
                    <p>Source: <a href={selectedPlanet?.overview.source} className='underline'>Wikipedia</a> </p>
                    <div className='flex flex-col children:py-1 gap-y-3 children:px-4 children:cursor-pointer children:h-[3rem] '>
                        <div onClick={() => setSelectedTab('overview')} className={`flex flex-row items-center gap-10 ${selectedTab === 'overview' ? `bg-${selectedPlanet?.color}` : 'bg-none border-dustygray border-2 hover:bg-alto'}`}><p>01</p><h3 className='font-bold'>OVERVIEW</h3></div>
                        <div onClick={() => setSelectedTab('structure')} className={`flex flex-row items-center gap-10 ${selectedTab === 'structure' ? `bg-${selectedPlanet?.color}` : 'bg-none border-dustygray border-2 hover:bg-alto hover:border-none'}`}><p>02</p><h3 className='font-bold'>INTERNAL STRUCTURE</h3></div>
                        <div onClick={() => setSelectedTab('geology')} className={`flex flex-row items-center gap-10 ${selectedTab === 'geology' ? `bg-${selectedPlanet?.color}` : 'bg-none border-dustygray border-2 hover:bg-alto hover:border-none'}`}><p>03</p><h3 className='font-bold'>SURFACE GEOLOGY</h3></div>
                    </div>
                </div>
            </div>
            <PlanetMetadata selectedPlanet={selectedPlanet}/>
        </div>
    );
}

export default PlanetFact