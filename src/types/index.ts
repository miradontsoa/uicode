import React from "react";

// Usefull type or interfaces
export type MenuItem = {
    slug?: string,
    title?: string,
    mobileTitle?: string,
    href?: string,
    class?: string,
    element?: React.ReactNode,
    icon?: React.ReactNode,
    type?: 'local' | 'page' | 'extern',
    appearance?: 'cta' | 'link' | 'separator',
    active?: boolean,
    visibleForDevice?: "mobile-only" | "desktop-only",
    mobileHalf?: boolean,
    mobileColor?: string,
}
export type ComponentMenuItem = MenuItem & {
    count?: string
}

export interface Item {
    name: string;
    slug: string;
    description?: string;
    imageSrc?: string;
}

// Colors, ....
export type Color =
    | "primary"
    | "secondary"
    | "warning"
    | "info"
    | "danger"
    | "success"
    | "dark"
    | "light";
export type ThemeColor = "light" | "dark";
export type Size = "x-small" | "small" | "medium" | "large" | "full";


export interface ProductItem extends Item {
    previewUrl?: string;
    codeUrl?: string;
    shopUrl?: string;
};

export interface Post {
    id?: string,
    slug?: string,
    title?: string,
    date?: string,
    description?: string,
    content?: string,
    categories?: string[],
    url?: string,
    author?: string,
    image?: string,
    coverImage?: string,
    filePath?: string,
    style?: {
        backgroundColor?: string,
        color?: string,
    }
}
export interface Category {
    id?: string,
    slug?: string,
    title?: string,
    date?: string,
    description?: string,
    content?: string,
    url?: string,
    image?: string,
    coverImage?: string,
    filePath?: string,
    style?: {
        backgroundColor?: string,
        color?: string,
    }
}
export interface Work {
    id: string,
    title: string,
    description: string,
    category: string,
    excerpt?: string,
    url?: string,
    img?: string,
    style?: {
        backgroundColor?: string,
        color?: string,
    }
}
export interface Service {
    icon: React.ReactNode,
    title: string,
    description?: string,
    list?: string[]
    style?: {
        backgroundColor?: string,
        color?: string,
    }
}


export interface Book {
    isbn: string,
    title: string,
    price?: number,
    cover?: string,
    synopsis?: string[]
}
export interface Offer {
    type: string,
    value: number,
    sliceValue?: number,
    discount?: number,
}


export interface ComponentItem {
    slug?: string,
    category?: string, // category slug
    title?: string,
    access?: "any" | "registered" | "premium" // which type of account can access it
    shortDesc?: string,
    description?: string,
    figma?: string, // figma url
    previewBgClass?: string,
    previewSrc?: string,
    previewWidth?: "medium" | "large" | "full",
}
export interface ComponentCategory {
    slug?: string,
    title?: string,
    shortDesc?: string,
    description?: string,
    seo?: string,
    bgClass?: string,
    components?: ComponentItem[],
    previews?: ComponentPreviews,
}
export interface ComponentPreviews {
    // [key: string]: ComponentType<{}>,
    [key: string]: React.ReactNode,
}
export interface CategoryGroup {
    slug?: string,
    title?: string,
    shortDesc?: string,
    description?: string,
    seo?: string,
    bgClass?: string,
    categories?: ComponentCategory[],
}