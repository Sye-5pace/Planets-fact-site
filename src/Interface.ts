export interface PlanetData {
    name: string;
    color: string;
    overview: ContentSource;
    structure: ContentSource;
    geology: ContentSource;
    rotation: string;
    revolution: string;
    radius: string;
    temperature: string;
    images: ImageType
}

interface ContentSource {
    content: string;
    source: string;
}

interface ImageType {
    planet: string;
    internal: string;
    geology: string;
}

export interface PlanetsProps {
    data: PlanetData[]
}