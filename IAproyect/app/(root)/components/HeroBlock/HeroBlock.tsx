"use client"

import { TypeAnimation } from "react-type-animation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function HeroBlock() {
    return <section className="min-h-screen flex flex-col justify-center items-center">
            <div className="container mx-auto px-4 py-20">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-center flex gap-2 flex-col items-center">
                    Practice real interviews in
                    <span className="inline-block bg-indigo-500 text-white shadow-[0_0_20px_#6366f1] px-6 py-2 rounded-xl">
                        <TypeAnimation
                        sequence={["Frontend 🤖", 2000, "Backend 👾", 2000, "FullStack 💻", 2000, "Mobile 📱", 2000]}
                        wrapper="span"
                        speed={70}
                        cursor={true}
                        style={{ fontSize: "1em", display: "inline-block" }}
                        className="text-5xl md:text-6xl font-extrabold tracking-tight text-center inline-block"
                        repeat={Infinity}
                        />
                    </span>
                </h1>
                <p className="text-indigo-100 text-lg md:text-xl font-light mb-12 max-w-xl mx-auto leading-relaxed text-center">
                    Prepare for your next job with realistic interviews simulations and actionable feedback.
                </p>

                <div className="flex items-center justify-center pb-5">
                    <Button className="bg-purple-600 text-white rounded-lg px-20 py-6 text-lg font-semibold shadow-lg transition duration-300 ease-in-out" asChild>
                        <Link href="/dashboard">  
                        <Sparkles className="group-hover:rotate-12 transition-transform"/> 
                        Start Practicing Now
                        </Link>
                    </Button>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-200">
                    <div className="flex items-center gap-2 whitespace-nowrap">
                        <div className="h-2 w-2 rounded-full bg-green-500" />
                        <span>5+ interview Types</span>
                    </div>

                    <div className="flex items-center gap-2 whitespace-nowrap">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span>No credit card required</span>
                    </div>

                    <div className="flex items-center gap-2 whitespace-nowrap">
                        <div className="h-2 w-2 rounded-full bg-blue-500" />
                        <span>Instant Feedback</span>
                    </div>
                </div>

            </div>
        </section>
}