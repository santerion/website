import { Navbar } from "@/components/Navbar"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
            Explore our recent projects and see how we've helped businesses achieve their goals.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* This is a placeholder for future projects */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Project Placeholder</h3>
                <p className="text-muted-foreground mb-4">
                  This is a placeholder for future projects. More details will be added later.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/portfolio/placeholder">
                    View Details
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      
      <footer className="py-6 px-6 border-t">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Santerion. All rights reserved.
        </div>
      </footer>
    </div>
  )
} 