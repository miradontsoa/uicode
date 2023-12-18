import { MongoClient } from 'mongodb'

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}

const uri = process.env.MONGODB_URI
const options = {}

let client
let mongodbClientPromise: Promise<MongoClient>

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  const globalVar: any = global; 
  if (!globalVar._mongoClientPromise) {
    client = new MongoClient(uri, options)
    globalVar._mongoClientPromise = client.connect()
  }
  mongodbClientPromise = globalVar._mongoClientPromise
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options)
  mongodbClientPromise = client.connect()
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default mongodbClientPromise