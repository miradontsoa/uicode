export const LEMON_SQUEEZY = {
    BASE_URL: "https://api.lemonsqueezy.com",
    API_KEY: process.env.LEMON_SQUEEZY_API_KEY,
    STORE_ID: process.env.LEMON_SQUEEZY_STORE_ID,
    PATH_ACTIVATE: "v1/licenses/activate",
    PATH_VALIDATE: "v1/licenses/validate",
    // PREMIUM_YEARLY_PRODUCT_ID: 79247: test / 79241:prod,
    PREMIUM_YEARLY_PRODUCT_ID: process.env.LEMON_SQUEEZY_PREMIUM_YEARLY_PRODUCT_ID,
}

export const MONGODB = {
    DATABASE: process.env.MONGODB_DATABASE,
    USERS: "users",
    USERS_LICENSES: "users_licenses", // atao samihafa mba mora ny famindrana makany amin sql
    // ACTIVE_LICENSES: "active_licenses",
}

export const AUTH0  = {
    ISSUER: process.env.NEXT_PUBLIC_AUTH0_ISSUER || "https://dev-es05jy5mycgrtni0.us.auth0.com"
}

export const ENDPOINTS = {
    API: '/api',
}
export const SOCIALS = {
    TWITTER_MIRA: 'https://twitter.com/mirado_uicode',
    TWITTER: 'https://twitter.com/mirado_uicode',
    INSTAGRAM: 'https://instagram.com/mirado_uicode',
    LINKEDIN: 'http://linkedin.com/in/miradontsoa',
    GITHUB_MIRADO: 'http://github.com/miradontsoa',
    GITHUB: 'http://github.com/miradontsoa/uicode_web',
    EMAIL_SUPPORT: 'support@highhay.com',
}