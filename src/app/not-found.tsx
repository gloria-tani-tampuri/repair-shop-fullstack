import Link from "next/link";
import React from "react";

export const metadata = {
    title: "Page Not Found",
    description: "The page you are looking for does not exist.",
}

export default function NotFound() {
    return (
        <div className="grid h-screen w-screen place-content-center justify-center bg-gradient-to-b from-[#f19573] to-[#dd5928] bg-clip-text text-center text-3xl font-bold text-transparent">
            <h1 className="space-y-4"> Page Not Found</h1>
            <Link href={"/"}>Go back to home</Link>
        </div>
    );
}
