import React,{useState} from 'react'
import { PlanetsProps } from '../Interface';
import { useParams } from 'react-router-dom'
import PlanetMetadata from './PlanetMetadata';

const PlanetFact:React.FC<PlanetsProps> = ({data}) => {
    const { planetName } = useParams();
    const [ selectedTab, setSelectedTab ] = useState('overview');

    const selectedPlanet = data.find((planet) => planet.name === planetName);
    // console.log("", selectedPlanet);
  
    let content;
    let imgSource;
    let wikipediaSource;
    if (selectedTab === 'overview') {
        content = selectedPlanet?.overview.content;
        imgSource = selectedPlanet?.images.planet
    } else if(selectedTab === 'structure'){
        content = selectedPlanet?.structure.content;
        imgSource = selectedPlanet?.images.internal
    }else if(selectedTab === 'geology'){
        content = selectedPlanet?.geology.content;
        imgSource = selectedPlanet?.images.geology
    }

    return(
        <>
            <div className='flex flex-row justify-center gap-[16.25rem] text-white'>
                <img src={imgSource} alt="planet"  className='w-[28.625rem] h-[28.625rem]'/>
                <div className='font-spartan w-[21.875rem] flex flex-col gap-y-4'>
                    <h1 className='text-[5rem] font-antonio'>{selectedPlanet?.name}</h1>
                    <p>{content}</p>
                    <p>Source: <a href={selectedPlanet?.overview.source} className='underline'>Wikipedia</a> </p>
                    <div className='flex flex-col children:py-1 gap-y-3 children:px-4 children:cursor-pointer children:h-[3rem] '>
                        <div onClick={() => setSelectedTab('overview')} className={`flex flex-row items-center gap-10 bg-${selectedPlanet?.color}`}><p>01</p><h3 className='font-bold'>OVERVIEW</h3></div>
                        <div onClick={() => setSelectedTab('internal')} className='flex flex-row items-center gap-10 border-2 border-dustygray border-opacity-20 hover:bg-alto'><p>02</p><h3 className='font-bold'>INTERNAL STRUCTURE</h3></div>
                        <div onClick={() => setSelectedTab('geology')} className='flex flex-row items-center gap-10 border-2 border-dustygray border-opacity-20 hover:bg-alto'><p>03</p><h3 className='font-bold'>SURFACE GEOLOGY</h3></div>
                    </div>
                </div>
            </div>
            <PlanetMetadata selectedPlanet={selectedPlanet}/>
        </>
    );
}

export default PlanetFact