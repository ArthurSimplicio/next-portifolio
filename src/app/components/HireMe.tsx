import Image from "next/image";
import Link from "next/link";
import React from "react";

const HireMe = () => {
    return(
        <div className="fixed left-4 bottom-4 overflow-hidden">
            <div className="w-48 h-auto flex items-center justify-center relative">
                <Image src="./Logo.svg" alt="Logo" width={200} height={200} className="fill-blue-800 animate-spin-slow"/>
                <Link href="/"  className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white shadow-md border border-solid border-black w-20 h-20 rounded-full font-semibold hover:text-black">Hire Me</Link>
            </div>
        </div>
    )
}

export default HireMe