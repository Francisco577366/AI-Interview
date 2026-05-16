import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import {data} from "./Cta.data";


export function Cta() {
    return (
        <section className="py-24 bg-gradient-to-br from-purple-800/5 to-purple-600/5">
        <div className="container mx-auto px-4">
         <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                    Ready to Ace <br/> Your Next Interview?
                </h2>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                    Join thousands of developers who ve transformed their interview skillls and landed their dream jobs. start practicing today.
                </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group" variant={"secondary"}>
                    <Sparkles className="group-hover:rotate-12 transition-transform"/>
                    Start Free Trial
                    <ArrowRight className="group-hover:translate-x-1 transition-transform"/>
                </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/50">
            {data.map((items, index) => (
                <div className="text-center" key={index}>
                <div className="text-3xl font-bold text-primary mb-2">
                    {items.value}
                    <div className="text-slate-200">
                        {items.title}
                    </div>
                </div>
            </div>
            ))}
            </div>
        </div>
    </div> 
</section>
    )
}