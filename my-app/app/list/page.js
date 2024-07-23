'use client'

export default function List(){
    let 상품 = ['Tomatoes', 'Pizza', 'Pasta']
    return (
        <div>
            <h4 className="title">상품 목록</h4>
            {
                상품.map((a,i) => {
                    return(
                        <div className="food" key={i}>
                            <img src={`/food${i}.png`} className="food-img"></img>
                            <h4>{a} 14000원</h4>
                            <span>1</span>
                            <button onClick={() =>(console.log(1))}>+</button>
                        </div>
                    )
                })
            }

        </div>
    )
}