'use client'
import Link from 'next/link';

export default async function ListItem({result}){
    return(
        <div>
            {
                result.map((a,i) => 
                <div className="list-item" key={i}>
                    <Link href={'/detail/'+result[i]._id}><h4>{result[i].title}</h4></Link>
                    <Link href={'/edit/'+result[i]._id} className="list-btn">🐔</Link>
                    <span onClick={(e) => {
                        fetch('/api/post/delete', {method : 'DELETE', body : result[i]._id})
                            .then((r) => {
                                if (r.status == 200) {
                                    return r.json();
                                } else {
                                    console.log('서버 에러 발생')
                                }
                            })
                            .then(() => {
                                e.target.parentElement.style.opacity = 0
                                setTimeout(() => {
                                    e.target.parentElement.style.display = 'none'
                                }, 100)
                            })
                    }}>👺</span>
                    <p>1월 1일</p>
                </div>
                )
            }
        </div>
    )
}