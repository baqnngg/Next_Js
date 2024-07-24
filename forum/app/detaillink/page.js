'use client'
import { useRouter } from "next/navigation";

export default function DetailLink() {
    let router = useRouter();
    return (
        <div>
            <button onClick={() => {router.push('/')}}>메인으로 가기</button>
            <button onClick={() => {router.forward()}}>앞으로가기</button>
            <button onClick={() => {router.back()}}>뒤로가기</button>
            <button onClick={() => {router.refresh()}}>새로고침</button>
            <button onClick={() => {router.prefetch('/list')}}>list 페이지 미리가져오기</button>
        </div>
    )
}