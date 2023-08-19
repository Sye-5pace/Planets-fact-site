import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import type { PlanetsProps,ColorClassMap } from '../Interface';
import PlanetMetadata from './PlanetMetadata';

const PlanetFact: React.FC<PlanetsProps> = ({ data }) => {
    const { planetName } = useParams();
    const [selectedTab, setSelectedTab] = useState<string>('overview');

    const selectedPlanet = data.find((planet) => planet.name === planetName);

    const GeologyImage: React.FC = () => (
        <div className='flex flex-col mt-[1rem]'>
            <img className='h-[25rem]' src={selectedPlanet?.images.planet} alt="Planet" />
            <img className='relative bottom-[6rem] w-[8rem] self-center' src={selectedPlanet?.images.geology} alt="geology" />
        </div>
    );

    const tabOptions = [
        { key: 'overview', label: 'OVERVIEW' },
        { key: 'structure', label: 'INTERNAL STRUCTURE' },
        { key: 'geology', label: 'SURFACE GEOLOGY' },
    ];

    const contentMap: Record<string,string | undefined> = {
        overview: selectedPlanet?.overview.content,
        structure: selectedPlanet?.structure.content,
        geology: selectedPlanet?.geology.content,
    };

    const imgSourceMap: Record<string,string | undefined> = {
        overview: selectedPlanet?.images.planet,
        structure: selectedPlanet?.images.internal,
        geology: '', // No image for geology
    };

    const colorClassMap: ColorClassMap = {
        pelorous: 'bg-pelorous',
        tuliptree: 'bg-tuliptree',
        purpleheart: 'bg-purpleheart',
        valenciadeep: 'bg-valenciadeep',
        valencialight: 'bg-valencialight',
        piper: 'bg-piper',
        java: 'bg-java',
        royalblue: 'bg-royalblue'
    };

    return (
        <div className='flex flex-col tablet:gap-y-6 laptop:gap-y-[1.3rem] children:border-2'>
            <div className='flex tablet:flex-col laptop:flex-row tablet:items-center tablet:mx-auto laptop:justify-center laptop:gap-[16.25rem] text-white children:border-2'>
                {selectedTab === 'geology' ? (
                    <GeologyImage />
                ) : (
                    <img src={imgSourceMap[selectedTab]} alt="planet" className='w-[28.625rem] h-[28.625rem] my-[2rem]' />
                )}
                <div className='font-spartan tablet:flex-row tablet:items-center tablet:gap-[5.5625rem] laptop:w-[21.875rem] flex laptop:flex-col  laptop:gap-y-4'>
                    <div className='tablet:w-[21.1875rem] tablet:gap-y-3 tablet:flex tablet:flex-col'>
                        <h1 className='text-[5rem] font-antonio'>{selectedPlanet?.name}</h1>
                        <p>{contentMap[selectedTab]}</p>
                        <p>
                            Source: <a href={selectedPlanet?.overview.source} className='underline'>Wikipedia</a>
                        </p>
                    </div>
                    <div className='flex flex-col children:py-1 gap-y-3  children:px-4 children:cursor-pointer children:h-[3rem]'>
                        {tabOptions.map((tab, index) => (
                            <div
                                key={tab.key}
                                onClick={() => setSelectedTab(tab.key)}
                                className={`flex flex-row items-center gap-10 ${
                                    selectedTab === tab.key ? colorClassMap[selectedPlanet?.color || ''] : 'bg-none border-dustygray border-2 hover:bg-alto hover:border-none'
                                }`}
                            >
                                <p>0{index + 1}</p>
                                <h3 className='font-bold'>{tab.label}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <PlanetMetadata selectedPlanet={selectedPlanet} />
        </div>
    );
};

export default PlanetFact;
