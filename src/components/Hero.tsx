import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
        Blue Skies
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl">
        You tell us what you want and we deliver on Budget and on Time
      </p>
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">
        We develop software for you
      </h2>
      <div className="flex gap-4">
        <Button asChild size="lg">
          <Link href="/contact">
            Let's do it!
          </Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link href="/product">
            Learn More
          </Link>
        </Button>
      </div>
    </div>
  )
} 