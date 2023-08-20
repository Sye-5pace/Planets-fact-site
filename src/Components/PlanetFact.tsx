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
            <img className='h-[25rem] mobile:h-[11rem]' src={selectedPlanet?.images.planet} alt="Planet" />
            <img className='relative bottom-[6rem] w-[8rem] self-center mobile:w-[5rem] mobile:bottom-[4rem]' src={selectedPlanet?.images.geology} alt="geology" />
        </div>
    );

    const tabOptions = [
        { key: 'overview', label: 'OVERVIEW' },
        { key: 'structure', label: 'INTERNAL STRUCTURE' },
        { key: 'geology', label: 'SURFACE GEOLOGY' },
    ];
    const mobileTab = [
        { key: 'overview', label: 'OVERVIEW' },
        { key: 'structure', label: 'STRUCTURE' },
        { key: 'geology', label: 'SURFACE' },
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

    const colorMobile: ColorClassMap = {
        pelorous: 'border-pelorous',
        tuliptree: 'border-tuliptree',
        purpleheart: 'border-purpleheart',
        valenciadeep: 'border-vlenciadeep',
        valencialight: 'border-valencialight',
        piper: 'border-piper',
        java: 'border-java',
        royalblue: 'border-royalblue'
    };

    return (
        <div className='flex  mobile:gap-y-4 tablet:gap-y-6 flex-col laptop:gap-y-[1.3rem]'>
            <div className='flex mobile:flex-col mobile:gap-y-4 mobile:items-center tablet:flex-col laptop:flex-row tablet:items-center tablet:mx-auto laptop:justify-center laptop:gap-[16.25rem] text-white'>
                <div className=' w-full h-[3rem] border-b py-[0.1rem] border-dustygray border-opacity-20 mobile:children:h-full mobile:children:pt-2 mobile:flex mobile:justify-between mobile:items-center mobile:px-4 tablet:hidden laptop:hidden'>
                    {mobileTab.map((tab) => (
                        <div
                            key={tab.key}
                            onClick={() => setSelectedTab(tab.key)}
                            className={`flex flex-row items-center gap-10 ${
                                selectedTab === tab.key ? `${colorMobile[selectedPlanet?.color || '']} border-b-2` : 'border-none hover:bg-alto'
                            }`}
                        >
                            <h3 className='font-bold'>{tab.label}</h3>
                        </div>
                    ))}
                </div>
                {selectedTab === 'geology' ? (
                    <GeologyImage />
                ) : (
                    <img src={imgSourceMap[selectedTab]} alt="planet" className='w-[28.625rem] h-[28.625rem] my-[2rem] mobile:w-[11rem] mobile:h-[11rem]' />
                )}
                <div className='font-spartan mobile:flex-col tablet:flex-row tablet:items-center tablet:gap-[3.5625rem] laptop:w-[21.875rem] flex laptop:flex-col  laptop:gap-y-4'>
                    <div className='mobile:flex-col mobile:items-center mobile:mx-[1.5rem] mobile:gap-y-3 mobile:text-center tablet:w-[21.1875rem]  tablet:gap-y-3 flex tablet:flex-col laptop:flex-col'>
                        <h1 className='text-[5rem] font-antonio mobile:text-[1.5rem]'>{selectedPlanet?.name}</h1>
                        <p>{contentMap[selectedTab]}</p>
                        <p>
                            Source: <a href={selectedPlanet?.overview.source} className='underline'>Wikipedia</a>
                        </p>
                    </div>
                    <div className='mobile:hidden flex flex-col children:py-1 gap-y-3  children:px-4 children:cursor-pointer children:h-[3rem]'>
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
