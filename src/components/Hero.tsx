import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
        Building Software That Matters
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl">
        We create innovative software solutions to help businesses thrive in the digital world.
      </p>
      <div className="flex gap-4">
        <Button asChild size="lg">
          <Link href="/contact">
            Get in Touch
          </Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link href="/portfolio">
            View Our Work
          </Link>
        </Button>
      </div>
    </div>
  )
} 