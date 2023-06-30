export interface CharactersData {
    characters: Characters;
}

export interface Characters {
    __typename: string;
    results:    Result[];
}

export interface Result {
    __typename: ResultTypename;
    name:       string;
    image:      string;
    location:   Location;
    origin:     Location;
    episode:    Episode[];
}

export enum ResultTypename {
    Character = "Character",
}

export interface Episode {
    __typename: EpisodeTypename;
    name:       string;
}

export enum EpisodeTypename {
    Episode = "Episode",
}

export interface Location {
    __typename: LocationTypename;
    name:       string;
    type:       null | string;
    dimension:  Dimension | null;
}

export enum LocationTypename {
    Location = "Location",
}

export enum Dimension {
    DimensionC137 = "Dimension C-137",
    ReplacementDimension = "Replacement Dimension",
    TesticleMonsterDimension = "Testicle Monster Dimension",
    Unknown = "unknown",
}




export type Episodies = Episodie[]

interface Episodie {
    __typename: string;
    name:       string;
}

