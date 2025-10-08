"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Particles from "./particles";

export default function HomePage() {
    const [hoveredButton, setHoveredButton] = useState<'single' | 'multi' | null>(null);
    const router = useRouter();

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 overflow-hidden">
            <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg); 
            opacity: 0.2;
          }
          50% { 
            transform: translateY(-120px) translateX(80px) rotate(180deg); 
            opacity: 0.4;
          }
        }
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        @keyframes bounce-in {
          0% { transform: scale(0) rotate(-180deg); opacity: 0; }
          50% { transform: scale(1.1) rotate(10deg); }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-float {
          animation: float linear infinite;
        }
        .animate-bounce-in {
          animation: bounce-in 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>

            <Particles />

            <div className="relative z-10 flex flex-col items-center gap-16 px-8 animate-bounce-in">
                <div className="text-center">
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-[100px] animate-pulse"></div>

                    <div className="relative">
                        <h1 className="text-8xl md:text-9xl font-black bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent mb-4 tracking-tight drop-shadow-[0_0_50px_rgba(99,102,241,0.6)] select-none">
                            RafficToe
                        </h1>

                        <p className="text-2xl md:text-3xl text-indigo-300 font-bold tracking-wide mb-2">
                            The Ultimate Tic-Tac-Toe Experience
                        </p>

                        <div className="flex items-center justify-center gap-3 mt-6">
                            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"></div>
                            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 animate-pulse"></div>
                            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent rounded-full"></div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-6 w-full max-w-md">
                    <button
                        onClick={() => router.push("/single-player")}
                        onMouseEnter={() => setHoveredButton('single')}
                        onMouseLeave={() => setHoveredButton(null)}
                        className="group relative overflow-hidden"
                    >
                        <div className={`absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur-xl transition-all duration-500 ${hoveredButton === 'single' ? 'opacity-80 animate-pulse' : 'opacity-60'
                            }`}></div>

                        <div className={`relative bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl px-12 py-6 shadow-2xl border-2 transition-all duration-300 transform ${hoveredButton === 'single'
                            ? 'border-cyan-300 scale-105 shadow-[0_0_40px_rgba(6,182,212,0.5)]'
                            : 'border-cyan-400/30 scale-100'
                            }`}>
                            <div className="absolute inset-0 overflow-hidden rounded-3xl">
                                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 ${hoveredButton === 'single' ? 'animate-[shimmer_1.5s_ease-in-out_infinite]' : ''
                                    }`} style={{ width: '100%' }}></div>
                            </div>

                            <div className="relative flex items-center justify-center gap-4">
                                <div className={`text-4xl transition-transform duration-300 ${hoveredButton === 'single' ? 'scale-125 rotate-12' : 'scale-100'
                                    }`}>
                                    🤖
                                </div>

                                <div className="text-left">
                                    <div className="text-3xl font-black text-white tracking-wide drop-shadow-lg">
                                        Single Player
                                    </div>
                                    <div className="text-sm text-cyan-100 font-semibold tracking-wide opacity-90">
                                        Challenge the AI
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>

                    <button
                        onClick={() => router.push("/multi-player")}
                        onMouseEnter={() => setHoveredButton('multi')}
                        onMouseLeave={() => setHoveredButton(null)}
                        className="group relative overflow-hidden"
                    >
                        <div className={`absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl blur-xl transition-all duration-500 ${hoveredButton === 'multi' ? 'opacity-80 animate-pulse' : 'opacity-60'
                            }`}></div>

                        <div className={`relative bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl px-12 py-6 shadow-2xl border-2 transition-all duration-300 transform ${hoveredButton === 'multi'
                            ? 'border-pink-300 scale-105 shadow-[0_0_40px_rgba(236,72,153,0.5)]'
                            : 'border-pink-400/30 scale-100'
                            }`}>
                            <div className="absolute inset-0 overflow-hidden rounded-3xl">
                                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 ${hoveredButton === 'multi' ? 'animate-[shimmer_1.5s_ease-in-out_infinite]' : ''
                                    }`} style={{ width: '100%' }}></div>
                            </div>

                            <div className="relative flex items-center justify-center gap-4">
                                {/* Icon */}
                                <div className={`text-4xl transition-transform duration-300 ${hoveredButton === 'multi' ? 'scale-125 rotate-12' : 'scale-100'
                                    }`}>
                                    👥
                                </div>

                                <div className="text-left">
                                    <div className="text-3xl font-black text-white tracking-wide drop-shadow-lg">
                                        Multiplayer
                                    </div>
                                    <div className="text-sm text-pink-100 font-semibold tracking-wide opacity-90">
                                        Play with Friends
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-indigo-400/60 text-sm font-medium tracking-wider">
                        Choose your game mode to begin
                    </p>
                </div>
            </div>

            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-pink-500/10 to-transparent rounded-full blur-3xl"></div>
        </div>
    )
}