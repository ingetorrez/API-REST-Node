import MongoClient from "mongodb";

// Connection URL
const url = "mongodb://jsnicdb:JSDB2019@ds335678.mlab.com:35678/jsnic";

export async function connect() {
    try {
        const client = await MongoClient.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        const db = client.db();

        // console.log("DB Connected");
        return db;
    } catch (e) {
        console.log(e);
    }
}