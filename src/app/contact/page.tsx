import { Navbar } from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Let's do it!</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Let's have a call and discuss your custom solution
          </p>
          
          <div className="mb-12">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  NAME*
                </label>
                <Input id="name" required />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  EMAIL*
                </label>
                <Input id="email" type="email" required />
              </div>
              
              <div>
                <label htmlFor="company" className="block mb-2 font-medium">
                  COMPANY
                </label>
                <Input id="company" />
              </div>
              
              <div>
                <label htmlFor="job-title" className="block mb-2 font-medium">
                  JOB TITLE
                </label>
                <Input id="job-title" />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  MESSAGE
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about the software you want to build" 
                  className="min-h-32"
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </main>
      
      <footer className="py-8 px-6 border-t mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-lg font-bold mb-4">Santerion</div>
              <div className="text-muted-foreground">@santerion.com</div>
            </div>
            <div>
              <div className="font-medium mb-4">Links</div>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="/portfolio" className="hover:text-foreground">PORTFOLIO</a></li>
                <li><a href="/pricing" className="hover:text-foreground">PRICING</a></li>
                <li><a href="/contact" className="hover:text-foreground">CONTACT</a></li>
                <li><a href="/sla" className="hover:text-foreground">SLA</a></li>
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