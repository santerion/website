import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        
        {/* How we work section */}
        <section className="py-16 px-6 bg-muted/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How we work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold mb-4">01.</div>
                  <h3 className="text-xl font-semibold mb-2">Contact us</h3>
                  <p className="text-muted-foreground mb-4">
                    We start with your vision: What do you want to build?
                  </p>
                  <p className="text-muted-foreground">
                    Text us about the project you are building.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold mb-4">02.</div>
                  <h3 className="text-xl font-semibold mb-2">Get a consultation</h3>
                  <p className="text-muted-foreground">
                    Our team will contact you back to discuss the details and feasibility of your project.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold mb-4">03.</div>
                  <h3 className="text-xl font-semibold mb-2">Get a project estimation</h3>
                  <p className="text-muted-foreground">
                    Santerion's enterprise software developers will ponder the most viable tech stack and team size to present you with the total cost.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold mb-4">04.</div>
                  <h3 className="text-xl font-semibold mb-2">Start</h3>
                  <p className="text-muted-foreground">
                    Once we agreed on terms, we start building a custom software solution for your business right away.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Understand Users Better section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="bg-muted h-[400px] rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Start-up_Landing_Page_02.png</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Understand Your<br />Users Better</h2>
              <p className="text-lg text-muted-foreground mb-8">
                I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you.
              </p>
              <Button size="lg">
                Get a Demo
              </Button>
            </div>
          </div>
        </section>
        
        {/* About section */}
        <section className="py-16 px-6 bg-muted/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">About</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">5+</div>
                <p className="text-muted-foreground">Years in business</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <p className="text-muted-foreground">Projects on budget and on time</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">8 months</div>
                <p className="text-muted-foreground">of avg. project life-cycle</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Flexibility</h3>
                  <p className="text-muted-foreground">
                    Scale up or ramp down the team
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Pricing</h3>
                  <p className="text-muted-foreground">
                    Min. project U$25k total
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Team</h3>
                  <p className="text-muted-foreground">
                    60% senior engineers, from startups to FAANG
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Partners section */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Partners</h2>
            
            <Card className="mx-auto max-w-3xl">
              <CardContent className="pt-8 pb-8 px-6 md:px-10">
                <p className="text-lg mb-6 italic">
                  "Santerion delivered an exceptional AI solution on time and within budget. Their expertise, passion, and hands-on approach showed true commitment to our success."
                </p>
                <div className="font-semibold">G. Dantas</div>
                <div className="text-muted-foreground">CTO at Catalunya</div>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Contact CTA section */}
        <section className="py-16 px-6 bg-muted/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Let's do it!</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's have a call and discuss your custom solution
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <footer className="py-8 px-6 border-t">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-lg font-bold mb-4">Santerion</div>
              <div className="text-muted-foreground">@santerion.com</div>
            </div>
            <div>
              <div className="font-medium mb-4">Links</div>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/portfolio" className="hover:text-foreground">PORTFOLIO</Link></li>
                <li><Link href="/pricing" className="hover:text-foreground">PRICING</Link></li>
                <li><Link href="/contact" className="hover:text-foreground">CONTACT</Link></li>
                <li><Link href="/sla" className="hover:text-foreground">SLA</Link></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground pt-4 border-t">
            ©{new Date().getFullYear()} BY SANTERION.
          </div>
        </div>
      </footer>
    </div>
  )
}
