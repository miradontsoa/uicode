/* const PRODUCTS = {
    PRODUCT_CHECKOUT_URL: "https://highhay.lemonsqueezy.com/checkout/buy/fccc9b5d-9c90-4533-a37b-a06646784b1d",
    SUBSCRIPTION_CHECKOUT_URL: "https://highhay.lemonsqueezy.com/checkout/buy/fccc9b5d-9c90-4533-a37b-a06646784b1d",
    PRICE: "$59",
    PRICE_ORIGINAL: "$79",
    COMPONENTS_COUNT: 75,
} */
const PRODUCT_PROD = {
    PRODUCT_CHECKOUT_URL: "https://highhay.lemonsqueezy.com/checkout/buy/0a62cf89-a623-49ea-b625-8073755beee6",
    SUBSCRIPTION_CHECKOUT_URL: "https://highhay.lemonsqueezy.com/checkout/buy/0a62cf89-a623-49ea-b625-8073755beee6",
    PRICE: "$59",
    PRICE_ORIGINAL: "$79",
    COMPONENTS_COUNT: 120, // 105 in reality
    /* (
    105 coded
    3 figma:
        + 1 buttons text 
        + 1 button outline
        + 1 product item 
        (TODO: loading)
    1 New (complex efa ao ny figma)
        + 1 sidebar-d */
    // heaeder bar + 5
    // ecommerce landing page + 10

}
const PRODUCT_TEST_MODE = {
    PRODUCT_CHECKOUT_URL: "https://highhay.lemonsqueezy.com/checkout/buy/fccc9b5d-9c90-4533-a37b-a06646784b1d",
    SUBSCRIPTION_CHECKOUT_URL: "https://highhay.lemonsqueezy.com/checkout/buy/fccc9b5d-9c90-4533-a37b-a06646784b1d",
    PRICE: "$59",
    PRICE_ORIGINAL: "$79",
    COMPONENTS_COUNT: 100,
}

let PRODUCT = PRODUCT_PROD;
if (process.env.NODE_ENV === 'development') {
    PRODUCT = PRODUCT_PROD
}
export default PRODUCT;