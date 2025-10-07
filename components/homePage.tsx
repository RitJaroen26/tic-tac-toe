"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-8">
            <h1 className="text-3xl font-bold">RafficToe</h1>

            <div className="flex flex-col gap-4">
                <button
                    className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={() => router.push("/single-player")}
                >   
                    Singleplayer
                </button>
                <button
                    className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={() => router.push("/multi-player")}
                >
                    Multiplayer
                </button>
            </div>
        </div>
    )
}