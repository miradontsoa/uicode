// import { User } from "firebase/auth";
import { ObjectId } from "mongodb";
import { DefaultSession, Session } from "next-auth";
import React, { ComponentType } from "react";

export type AccountType = "any" | "registered" | "premium" | "non-registered";

export interface User {
    name?: string;
    // fullName?: string;
    email?: string;
    image?: string;
}
export interface AppUser extends User {
    _id?: ObjectId | string | number;
    accountStatus?: "new" | "regular" | "deleted",
    accountType?: AccountType,
    checkoutId?: string,
    // provider?: string, // soloina authGithub...
    authGithub?: {
        email?: string;
        name?: string;
        githubId?: string; // id data from from https://api.github.com/users/username
    },
    authAuth0?: {
        email?: string;
        name?: string;
        auth0Id?: string;
    },
    authGoogle?: {
        email?: string;
        name?: string;
        googleId?: string;
    },
    authLocal?: {
        email?: string;
        name?: string;
        password?: string;
    },
    license?: {
        licenseKey?: string;
        instanceId?: string;
        productId?: number;
        status?: "expired" | "valid";
    },
    customer?: {
        customerId?: number;
        customerEmail?: string; // LS email used while purchasing
        customerName?: string; // LS name used while purchasing (for support)
    },
    subscription?: {
        subscriptionId?: string; // LS subscription id
        start?: string;
        end?: string;
    }
}
export interface DatabaseUser extends AppUser {
}
export type LicenseKey = {
    id: number;
    status: string;
    key: string;
    activation_limit: number;
    activation_usage: number;
    created_at: string;
    expires_at?: string | null;
};
export interface ActivateLicenseMeta {
    store_id?: number;
    order_id?: number;
    order_item_id?: number;
    product_id?: number;
    product_name?: string;
    variant_id?: number;
    variant_name?: string;
    customer_id?: number;
    customer_name?: string;
    customer_email?: string;
};
export interface ActivateInstance {
    id: string;
    name: string;
    created_at: string;
}
export interface ActivateLicenseResponse {
    activated: boolean,
    license_key: LicenseKey,
    meta?: ActivateLicenseMeta,
    instance?: ActivateInstance
}

export interface ValidateLicenseResponse {
    valid: boolean,
    license_key: LicenseKey,
    meta?: ActivateLicenseMeta,
    instance?: ActivateInstance
}



export interface AppSession extends Session {
    provider?: string,
}

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
    visibleForAccount?: AccountType,
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