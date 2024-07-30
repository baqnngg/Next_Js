import {connectDB} from "/utils/database.js";
import ListItem from "./ListItem";

export default async function List() {
    let db = (await connectDB).db('forum');
    let result = await db.collection('post').find().toArray();

    return(
        <div className="list-bg">
            <ListItem result={result}></ListItem>
        </div>
    )
}