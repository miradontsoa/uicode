type ListCategoryType = {
    title: string;
    slug: string;
    description?: string;
    shortDescription?: string;
    url?: string;
    image?: string;
    imageElement?: React.ReactNode;
    iconName?: string;
    logoImage?: string,
    list?: ToolkitType[]
}

type ToolkitType = {
    title: string;
    slug: string;
    category?: string;
    difficulty?: number;    // 0 to 5 difficulty score: 0 beginner,  5 expert
    rating?: number;    // 0 to 5 rating
    shortDescription?: string;
    description?: string;
    price?: string;
    license?: string;
    level?: string;
    url?: string;
    githubUrl?: string;
    docsUrl?: string;
    demoUrl?: string;
    logoImage?: string;
    imageUrl?: string;
    logoElement?: React.ReactNode;
    features?: { title: string, description?: string }[]
    pricing?: { slug?: string, title: string, description?: string }[]
}