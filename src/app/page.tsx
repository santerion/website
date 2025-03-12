import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { getPublicPath } from "@/lib/path-utils"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        
        {/* How we work section */}
        <section className="pb-42 pt-28 px-6 bg-muted/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-6xl font-bold text-center mb-12 text-violet-900">How we work</h2>
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
        <section 
          className="py-40 px-6 relative overflow-hidden backdrop-brightness-50 bg-violet-700"
          style={{
            backgroundImage: `url('${getPublicPath('/bg_users.avif')}')`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundBlendMode: "overlay"
          }}
        >
          {/* Add a semi-transparent overlay to ensure text readability */}
          <div className="absolute inset-0"></div>
          
          <div className="max-w-2xl mx-auto items-center text-center relative z-10 text-white">
            <div className="p-8 rounded-lg">
              <h2 className="text-6xl font-bold mb-6 text-white">Make something<br />people love</h2>
              <p className="text-lg mb-8 font-semibold text-white">
                We build software that connects deeply with your users. Our development approach combines cutting-edge technology with human-centered design principles to create intuitive, responsive solutions. From initial research to final deployment, we ensure every line of code enhances your users' experience and drives your business goals forward.
              </p>
              <Button size="lg" className="border-2 bg-transparent border-white hover:bg-transparent hover:border-3 hover:font-bold font-semibold hover:cursor-pointer text-white shadow-xl">
                Get a Demo
              </Button>
            </div>
          </div>
        </section>
        
        {/* About section */}
        <section className="py-16 px-6 bg-muted/0">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-6xl font-bold text-violet-900 pl-16 mb-28 mt-20">About</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">5+</div>
                <p className="text-gray-800">Years in business</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <p className="text-gray-800">Projects on budget and on time</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">8 months</div>
                <p className="text-gray-800">of avg. project life-cycle</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">Flexibility</div>
                <p className="text-gray-800">Scale up or ramp down the team</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">Pricing</div>
                <p className="text-gray-800">Min. project U$25k total</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">Team</div>
                <p className="text-gray-800">60% senior engineers, from startups to FAANG</p>
              </div>
            </div>

          </div>
        </section>
        
        {/* Partners section */}
        <section className="py-36 px-6 bg-violet-600">
          <div className="max-w-4xl mx-auto">
            {/* Partners heading and logos */}
            <div className="flex items-center mb-10">
              <h2 className="text-6xl font-bold mr-6 text-white">Partners</h2>
              <div className="h-12 border-l-2 border-white mx-6"></div> {/* Vertical bar */}
              <div className="flex flex-1 justify-around">
                {/* Partner logos using Image components */}
                <Image 
                  src={getPublicPath("/partner1_light.avif")}
                  alt="Partner 1 Logo" 
                  width={180} 
                  height={80} 
                  className="object-contain p-4 rounded"
                />
                <Image 
                  src={getPublicPath("/partner2_light.avif")}
                  alt="Partner 2 Logo" 
                  width={180} 
                  height={80}
                  className="object-contain p-4 rounded"
                />
                <Image 
                  src={getPublicPath("/partner3_light.avif")}
                  alt="Partner 3 Logo" 
                  width={180} 
                  height={80}
                  className="object-contain p-4 rounded"
                />
              </div>
            </div>
            
            {/* Horizontal line */}
            <div className="border-t-2 border-white/30 mb-10"></div>
            
            {/* Testimonial */}
            <div className="mx-auto max-w-4xl text-center">
              {/* Name and title with vertical bar */}
              <div className="flex items-center justify-center mb-6">
                <div className="font-bold text-xl text-white">G. Dantas</div>
                <div className="h-6 border-l-2 border-white/70 mx-4"></div> {/* Vertical bar */}
                <div className="text-gray-100 text-xl font-semibold">CTO at Catalunya</div>
              </div>
              
              {/* Testimonial text */}
              <p className="text-3xl italic text-white font-semibold">
                "Santerion delivered an exceptional AI solution on time and within budget. Their expertise, passion, and hands-on approach showed true commitment to our success."
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact CTA section */}
        <section className="py-64 px-6 bg-muted/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-6xl font-bold mb-4 text-violet-900">Let's do it!</h2>
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
      
      <footer className="py-8 px-6 border-t bg-violet-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold mb-4 text-white">Santerion</div>
              <div className="text-white">@santerion.com</div>
            </div>
            <div>
              <div className="font-bold mb-4 text-white text-xl">Links</div>
              <ul className="space-y-2 text-white">
                <li><Link href="/portfolio" className="hover:text-foreground">PORTFOLIO</Link></li>
                <li><Link href="/pricing" className="hover:text-foreground">PRICING</Link></li>
                <li><Link href="/contact" className="hover:text-foreground">CONTACT</Link></li>
                <li><Link href="/sla" className="hover:text-foreground">SLA</Link></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-md text-white pt-4 border-t">
            ©{new Date().getFullYear()} by Santerion.
          </div>
        </div>
      </footer>
    </div>
  )
}
