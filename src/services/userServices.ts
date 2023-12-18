import { MONGODB } from "@/const";
import mongodbClientPromise from "@/util/mongodbClient";
import { AppUser, DatabaseUser } from "@/types";
import { Db, Filter, ObjectId, WithId } from "mongodb";

export async function findOrCreateUser(user: AppUser) {
    const client = await mongodbClientPromise;

    try {
        // await client.connect();
        const db: Db = client.db(MONGODB.DATABASE);
        const collection = db.collection<AppUser>(MONGODB.USERS);

        const filter = { email: user.email };
        const update = { $setOnInsert: user };
        const options = { upsert: true, returnOriginal: false };

        const result = await collection.findOneAndUpdate(filter, update, options);
        const updatedUser = result.value;

        return updatedUser;

        //   console.log('User:', updatedUser);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        // await client.close();
    }
}


export async function findUser(user: Filter<AppUser>) {

    const client = await mongodbClientPromise;
    try {
        // await client.connect();
        const db: Db = client.db(MONGODB.DATABASE);
        const collection = db.collection<AppUser>(MONGODB.USERS);

        // const filter = { email: user.email };

        const resultUser = await collection.findOne(user);
        
        return resultUser;
    } catch (error) {
        console.error('Error:', error);
    } finally {
        // await client.close();
    }
}

export async function updateUser(user: WithId<AppUser>) {

    const client = await mongodbClientPromise;
    try {
        // await client.connect();
        const db: Db = client.db(MONGODB.DATABASE);
        const collection = db.collection<AppUser>(MONGODB.USERS);
        const result = await collection.updateOne({_id: new ObjectId(user._id)}, user);
        return result;
    } catch (error) {
        console.error('Error:', error);
    } finally {
        // await client.close();
    }
}


export async function createUser(user: AppUser) {
    const client = await mongodbClientPromise;

    try {
        // await client.connect();
        const db: Db = client.db(MONGODB.DATABASE);
        const collection = db.collection<AppUser>(MONGODB.USERS);

        const addedUser = await collection.insertOne(user);

        return {
            ...addedUser,
            _id: addedUser.insertedId
        } as DatabaseUser
        //   console.log('User:', updatedUser);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        // await client.close();
    }
}
