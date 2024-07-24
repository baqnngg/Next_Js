import { ObjectId } from "mongodb"
import {connectDB} from "/utils/database.js";

export default async function detail(props) {
    let db = (await connectDB).db('forum');
    let result = await db.collection('post').findOne({_id : new ObjectId(props.params.id)})

    return (
        <div>
            <div>상세페이지입니다</div>
            <h4>{result.title}</h4>
            <p>{result.content}</p>
        </div>
    )
}