import { Navbar } from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-muted-foreground mb-12">
            We'd love to hear from you. Contact us to discuss your project.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <p className="flex flex-col">
                    <span className="text-sm text-muted-foreground">Email</span>
                    <span>info@santerion.com</span>
                  </p>
                  <p className="flex flex-col">
                    <span className="text-sm text-muted-foreground">Phone</span>
                    <span>+1 (123) 456-7890</span>
                  </p>
                  <p className="flex flex-col">
                    <span className="text-sm text-muted-foreground">Address</span>
                    <span>123 Tech Street, San Francisco, CA 94107</span>
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">Business Hours</h2>
                <div className="space-y-2">
                  <p className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <p className="mb-6 text-muted-foreground">Contact form will be added here later</p>
            <Button disabled>Send Message</Button>
          </div>
        </div>
      </main>
      
      <footer className="py-6 px-6 border-t mt-16">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Santerion. All rights reserved.
        </div>
      </footer>
    </div>
  )
} 