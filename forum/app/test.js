import { MongoClient } from "mongodb";

const client = await MongoClient.connect('mongodb+srv://admin123:1234@jangbyenogjoun.rokxrph.mongodb.net/?retryWrites=true&w=majority&appName=JangByenogJoun  ',{userNewUrlParser:true});
const db = client.db("forum");
db.collection('post').find();