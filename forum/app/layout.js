import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import LoginBtn from "./LoginBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import LogOutBtn from "./LogOutBtn";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  let session = await getServerSession(authOptions)
  console.log(session);
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="navbar">
          <Link href = "/" className="logo">자유게시판</Link>
          <Link href = "/list">글 목록</Link>
          <Link href = "/write">글 작성</Link>
          {
            session
              ? <span>{session.user.name}<LogOutBtn> </LogOutBtn></span>
              : <LoginBtn></LoginBtn>
          }
        </div>
        {children}
      </body>
    </html>
  );
}
