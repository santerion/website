import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export function Footer() {
    return (
        <footer className="py-8 px-6 border-t bg-violet-800">
        <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
            <div className="text-lg font-bold mb-4 text-white">Santerion</div>
            <div className="text-white">@santerion.com</div>
            </div>
            <div>
            <div className="font-bold mb-4 text-white text-lg">Links</div>
            <ul className="space-y-2 text-white text-sm">
                <li><Link href="/projects" className="hover:text-foreground">PORTFOLIO</Link></li>
                <li><Link href="/pricing" className="hover:text-foreground">PRICING</Link></li>
                <li><Link href="/contact" className="hover:text-foreground">CONTACT</Link></li>
                <li><Link href="/sla" className="hover:text-foreground">SLA</Link></li>
            </ul>
            </div>
            <div>
            <div className="text-lg font-bold mb-1 text-white">Theme</div>
            <ThemeToggle />
            </div>
        </div>
        <div className="text-center text-sm text-white pt-4 border-t">
            ©{new Date().getFullYear()} by Santerion.
        </div>
        </div>
        </footer>
    )
}