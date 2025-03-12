import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        
        {/* Simple features section */}
        <section className="py-16 px-6 bg-muted/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                  <p className="text-muted-foreground">
                    Modern, responsive web applications built with the latest technologies.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Mobile Apps</h3>
                  <p className="text-muted-foreground">
                    Native and cross-platform mobile applications for iOS and Android.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Custom Software</h3>
                  <p className="text-muted-foreground">
                    Tailored software solutions designed to meet your specific business needs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="py-6 px-6 border-t">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Santerion. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
