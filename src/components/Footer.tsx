import Link from "next/link"

export function Footer() {
    return (
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
    )
}