"use client";
import Image from "next/image";
import logo from "@/public/logo.jpg";
export default function Header() {
    return (
        <div className="w-full relative text-center">
            <Image src={logo} className="m-auto" alt="buzkar"  width={200} height={88}/>
        </div>
    )
}