import { LEMON_SQUEEZY } from "@/const";
import { ActivateLicenseResponse, ValidateLicenseResponse } from "@/types";
const apiKey = LEMON_SQUEEZY.API_KEY;


// from https://makerkit.dev/recipes/lemon-squeezy-saas-subscriptions
export function getLemonSqueezyClient() {
    if (!apiKey) {
        throw new Error('Missing LEMON_SQUEEZY_API_KEY environment variable');
    }

    const request = async function <Data = unknown>(params: {
        path: string;
        body: string;
        method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    }) {
        const url = [LEMON_SQUEEZY.BASE_URL, params.path].join('/');

        const response = await fetch(url, {
            headers: {
                Accept: 'application/vnd.api+json',
                'Content-Type': 'application/vnd.api+json',
                Authorization: `Bearer ${apiKey}`,
            },
            body: params.body,
            method: params.method,
        });

        if (!response.ok) {
            throw new Error(
                `Request failed with status code ${response.status}: ${response.statusText}`
            );
        }

        const data = await response.json();

        return data as Data;
    };

    return {
        request,
    };
}

export async function activateLicenseKey(params: {
    licenseKey: string;
    instanceName: string;
    productId?: string;
    variantId?: string;
}): Promise<ActivateLicenseResponse> {
    if (!apiKey) {
        throw new Error('Missing LEMON_SQUEEZY_API_KEY environment variable');
    }
    const { licenseKey, instanceName, productId, variantId } = params;
    const response = await fetch([LEMON_SQUEEZY.BASE_URL, LEMON_SQUEEZY.PATH_ACTIVATE].join('/'), {
        method: `POST`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            license_key: licenseKey,
            instance_name: instanceName,
        }).toString(),
    });

    if (!response.ok) {
        const errorResponse = await response.json();
        if (errorResponse.error) {
            // error response from lemonsqueezy activation
            // return errorResponse as ActivateLicenseResponse
            throw new Error(`Error while activating license: ${errorResponse.error}`);
        }
        else {
            throw new Error(`Server error while activating license`);
        }
    }
    const result: ActivateLicenseResponse = await response.json();

    if (`${result.meta?.store_id}` !== LEMON_SQUEEZY.STORE_ID) {
        throw new Error(`Error: This license key do not belong to this store`);
    }
    if (productId && `${result.meta?.product_id}` !== productId) {
        throw new Error(`Error: This license key do not belong to this product`);
    }
    if (variantId && `${result.meta?.variant_id}` !== variantId) {
        throw new Error(`Error: This license key do not belong to this variant`);
    }


    return result;
}

export async function validateLicenseKey(params: {
    licenseKey: string;
    productId?: string;
    variantId?: string;
}): Promise<ValidateLicenseResponse> {
    if (!apiKey) {
        throw new Error('Missing LEMON_SQUEEZY_API_KEY environment variable');
    }
    const { licenseKey, productId, variantId } = params;

    const response = await fetch([LEMON_SQUEEZY.BASE_URL, LEMON_SQUEEZY.PATH_VALIDATE].join('/'), {
        method: `POST`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            license_key: licenseKey,
        }).toString(),
    });

    if (!response.ok) {
        const errorResponse = await response.json();
        if (errorResponse.error) {
            // error response from lemonsqueezy validation
            return errorResponse as ValidateLicenseResponse
            // throw new Error(`Error while validating license: ${errorResponse.error}  ${JSON.stringify(errorResponse)}`);
        }
        else {
            throw new Error(`Server error while validating license`);
        }
    }
    const result: ValidateLicenseResponse = await response.json();

    if (`${result.meta?.store_id}` !== LEMON_SQUEEZY.STORE_ID) {
        throw new Error(`Error: This license key do not belong to this store`);
    }
    if (productId && `${result.meta?.product_id}` !== productId) {
        throw new Error(`Error: This license key do not belong to this product`);
    }
    if (variantId && `${result.meta?.variant_id}` !== variantId) {
        throw new Error(`Error: This license key do not belong to this variant`);
    }

    return result;
}