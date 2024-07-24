'use client'

import { useState } from 'react';

export default function List() {
    let 상품 = ['Tomatoes', 'Pizza', 'Pasta'];

    const [quantities, setQuantities] = useState(Array(상품.length).fill(0));

    const increaseQuantity = (index) => {
        const newQuantities = [...quantities];
        newQuantities[index] += 1;
        setQuantities(newQuantities);
    };

    return (
        <div>
            <h4 className="title">상품 목록</h4>
            {
                상품.map((a, i) => {
                    return (
                        <div className="food" key={i}>
                            <img src={`/food${i}.png`} className="food-img" alt={`${a}`} />
                            <h4>{a} 14000원</h4>
                            <span>{quantities[i]}</span>
                            <button onClick={() => increaseQuantity(i)}>+</button>
                        </div>
                    );
                })
            }
        </div>
    );
}