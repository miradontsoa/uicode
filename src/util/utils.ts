// execute a function if we are not in production
export function execOnDev(functionToExecute: () => void) {
    if (process.env.NODE_ENV === 'development') {
        functionToExecute()
    }
}

/* extract request data, and covert to json */
export async function getRequestData(request: Request) {
    const content_type = request.headers.get("Content-type")
    let data: any = {}
    try {
        if(!content_type) {
            throw new Error("An error happened while requesting data")
        }
        // data = await request.json()
        if (content_type.includes("multipart/form-data")
            || content_type.includes("application/x-www-form-urlencoded")) {
            const formData = await request.formData();
            data = Object.fromEntries(formData);
        } else if (content_type.includes("application/json")
            || content_type.includes("text/plain")) {
            data = await request.json()
        } 
        else {
            throw new Error("An error happened while parsing request data")
        }
    } catch (error) {
        throw error;
    }
    return data;
}