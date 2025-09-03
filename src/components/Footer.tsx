import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="mt-20 border-t border-white/10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-3">
                <div>
                    <div className="flex items-center gap-2">
                        <span className="inline-block h-6 w-6 rounded bg-gradient-to-br from-indigo-500 via-teal-500 to-pink-500" />
                        <span className="font-semibold tracking-tight">B2Breeze</span>
                    </div>
                    <p className="mt-3 text-sm text-muted max-w-sm">
                        We craft futuristic B2B web experiences that convert. Performance, polish, and precision.
                    </p>
                </div>
                <div className="text-sm">
                    <h3 className="font-medium text-muted">Company</h3>
                    <ul className="mt-3 space-y-2">
                        <li><Link href="#features" className="hover:text-foreground">Features</Link></li>
                        <li><Link href="#solutions" className="hover:text-foreground">Solutions</Link></li>
                        <li><Link href="#work" className="hover:text-foreground">Work</Link></li>
                    </ul>
                </div>
                <div className="flex items-start md:justify-end gap-3">
                    <Link aria-label="GitHub" href="#" className="p-2 rounded hover:bg-white/5"><Github size={18} /></Link>
                    <Link aria-label="LinkedIn" href="#" className="p-2 rounded hover:bg-white/5"><Linkedin size={18} /></Link>
                    <Link aria-label="Email" href="#" className="p-2 rounded hover:bg-white/5"><Mail size={18} /></Link>
                </div>
            </div>
            <div className="py-4 text-center text-xs text-muted">© {new Date().getFullYear()} B2Breeze. All rights reserved.</div>
        </footer>
    );
}
