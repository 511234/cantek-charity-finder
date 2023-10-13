export interface IBrowseCharity {
    coverImageUrl: string;
    description: string;
    ein: string;
    name: string;
    location: string;
    tags: string[]
}

export interface ICharityDetail {
    coverImageUrl: string;
    description: string;
    ein: string;
    location: string;
    logoCloudinaryId: string;
    logoUrl: string;
    matchedTerms: string[]
    name: string;
    profileUrl: string;
    slug: string;
    tags: string[]
}