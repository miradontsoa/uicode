
import * as crypto from "crypto";
import { serialize, unserialize } from 'php-serialize'


// Public key from your paddle dashboard
let pubKey = `-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA0mcXQ9L7Y95sE1wSX3qq
m34RSHotQu2HmsO2kcqwUs7OAxqKHaswtPcrJ3Nfc8wu7ZlIKLxz0Z8sytrnVN9r
jctz8LcFpDu3uiN6u2WkqUeuRTFVDB4YfmUYeszIfz4HPx88gfZwdJ5534rfLOun
rOYhNUkyJ+7IMRplTIHsEdpGq04yDqpdxK69oaNfRBetB5dRNHRktglOqFsRRPBu
5/UsaiNbK5BnmwtZvYszmK56/WBNtnZQTfzE20nDg8dgNmVh0+CC7+UhltjHbx58
qAeXWVnL1DD+vcK6hRNKGawwwkguFKCdk71SM5rYAXEBExAMSKmH0vhEGfNNS81f
7/5rfYE5M4F2JPM0joXOdHOlC2XNjB7xiP0YVLXsLH1dwdWoJqGuyjGgAX5KN3J9
B54YL5wa6iySBCTfE36W+cEFgyf/lK8vjRpKUgwNvUl4Dcp8wSXVzUlFZAQGzIK6
wHH8bG1lXMoyGkgVdQXer305+GxR6EQPjg+3hyJG13VQlUyzfaWU6rcKXj7mTZ5b
+JxcGralV+xipsq0WvLQbQOtIlhqbeS//iZQqYcPRafxeTqfsagN7Rv/hopyqXgI
8i+k3s/lShIeidwFu9nwywygev/p0d3omAMzO8J4bg5Ld1XG9O1F/kzOAbrHyP6r
0fXphzUScC0jrC0eEJ/xMdECAwEAAQ==
-----END PUBLIC KEY-----`
if (process.env.PADDLE_MODE === "production") {
    pubKey = `-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA0c3uQtiSJA/uKpi0NYBh
2AHr4K+hQDDThAHO14ZlXnrcnCWejZitckrPjKgbcYQHnzPifF3Of+ETCoNTgeQm
53M4G1OU+S5gvzq03tsqf+LrBTuC+Utlea2QPafSWPQ5ItXuQ+hPd57x/EXjmtrw
9WNcEG9aXhxXOJwzvZjQm9UIY1PFudsAd+R1m5ruZIFUQQJSk7THfCJ8OJ14b1Cw
x5BewFf2BV4Mk0K8sfXKnVComUx/HxXSWkmtZLzuKh9n4Lm7qljkJ1EaaYWmUE5w
EA4D+aRwtURFST1287CVttP3WECAhMscS3JvvX6QJgAdf/2S6DaoV1JaluOn3VL8
C0d9ObzYRNWE4IiZ3OcJze6nILy3pdPTQOeZdkEYeTXoWpzTebCQttfBnVDXkQuV
p6II1XlnU6IEm1sfcAw7KxINGvhUeSZ2mWjqmGdH9P+51DGbPkzkbD2wK+PUjo1l
6yfTO9sxRX46brbt8VOGoGT7EZf5Fw7KY+gNSnLScX7MSGvzqopVkuNaKAtMqOpQ
uFw4SrxeWz7FnkouOsex8bI/gX+4+d7AwZm795IOE+X+eohLft/92KB3zcrid09A
IWxxjTk01zsknBqdAWyGnnyV/sbWnedGcXltkjlp+BAcjVsCoqbHW9CwB3pfHXiC
9yjPbjMMC+yf1VvE9FP0d68CAwEAAQ==
-----END PUBLIC KEY-----`
}

function ksort(obj: any) {
    const keys = Object.keys(obj).sort();
    let sortedObj : any= {};
    for (let i in keys) {
        sortedObj[keys[i]] = obj[keys[i]];
    }
    return sortedObj;
}

export function validatePaddleWebhook(jsonObj: any) {
    // Grab p_signature
    const mySig = Buffer.from(jsonObj.p_signature, 'base64');
    // Remove p_signature from object - not included in array of fields used in verification.
    delete jsonObj.p_signature;
    // Need to sort array by key in ascending order
    jsonObj = ksort(jsonObj);
    for (let property in jsonObj) {
        if (jsonObj.hasOwnProperty(property) && (typeof jsonObj[property]) !== "string") {
            if (Array.isArray(jsonObj[property])) { // is it an array
                jsonObj[property] = jsonObj[property].toString();
            } else { //if its not an array and not a string, then it is a JSON obj
                jsonObj[property] = JSON.stringify(jsonObj[property]);
            }
        }
    }
    // Serialise remaining fields of jsonObj
    const serialized = serialize(jsonObj);
    // verify the serialized array against the signature using SHA1 with your public key.
    const verifier = crypto.createVerify('sha1');
    verifier.update(serialized);
    verifier.end();

    const verification = verifier.verify(pubKey, mySig);
    // Used in response if statement
    return verification;
}