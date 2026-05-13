import { Button } from "@/components/ui/button"
import Navbar from "./components/Navbar/Navbar"
import { HeroBlock } from "./components/HeroBlock/HeroBlock"
import { HowItWorks } from "./components/HowItWorks"
import { Pricing } from "./components/Pricing"

export default function Page() {
  return (
   <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <Navbar />

    <HeroBlock />

    <HowItWorks />

    <Pricing />
   </div>
  )
}
