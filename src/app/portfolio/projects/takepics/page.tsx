import { Navbar } from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function FintzBotProjectPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1 px-6 py-16">
        <div className="mx-auto max-w-4xl space-y-8">
          <div>
            <Link href="/portfolio" className="text-sm text-muted-foreground hover:underline">
              ← Back to Portfolio
            </Link>
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl font-bold">TakePics.AI</h1>
            <p className="text-xl text-muted-foreground">
              A website that allows users to generate AI generated pictures of themselves
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src="/projects/takepics.png"
              alt="Descrição da imagem"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">About the Project</h2>
            <p>
              TakePics.AI is an innovative platform that lets you create a personalized model by uploading 
              your own photos. With this custom model, you can generate ultra-realistic images of yourself using a 
              variety of custom and pre-made prompts. Powered by Replicate and the advanced Flux model, TakePics.AI 
              delivers remarkably lifelike results, making it easy to experiment with new looks, create artistic avatars, 
              or simply generate your new profile picture.
              
              <br /><br /> Check out the website clicking {" "}
                <a 
                  href="https://takepics.ai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-violet-800 hover:underline"
                  >
                    here
                </a>
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              <Card>
                <CardContent className="px-4 py-2 text-sm">Nuxt</CardContent>
              </Card>
              <Card>
                <CardContent className="px-4 py-2 text-sm">Replicate</CardContent>
              </Card>
            </div>
          </div>

          <div>
            <Button asChild>
              <Link href="/contact">
                Discuss a Similar Project
              </Link>
            </Button>
          </div>
        </div>
      </main>
      
      <footer className="mt-16 border-t px-6 py-6">
        <div className="mx-auto max-w-7xl text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Santerion. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
