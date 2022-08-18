export interface User {
    _id: string;
    name: string;
    email?: string;
    password?: string;
    avatar: string;
    rating: number;
    numRatings?: number;
    location?: string;
}

export interface AdImage {
    _id: string;
    img: string;
}

export interface Ad {
    _id: string;
    title: string;
    description: string;
    price: number;
    category: string;
    user: User;
    images: AdImage[];
}

