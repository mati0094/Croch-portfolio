"use client";
import Image from 'next/image';
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navItems } from "@/data/portfolio";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.style.colorScheme = dark ? "dark" : "light";
  }, [dark]);

  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.45 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(124,58,237,0.16),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.12),_transparent_30%)] text-zinc-100">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-4 sm:px-6 lg:px-8">
        <header className="sticky top-4 z-40 rounded-full border border-white/10 bg-[#060b14]/80 px-3 py-3 backdrop-blur-2xl">
          <div className="flex items-center justify-between gap-3">
            <Link href="#home" className="flex items-center gap-3 rounded-full px-2 py-1">
  <Image 
    src="/logo.png" 
    alt="Croch Logo" 
    width={40} 
    height={40} 
    className="rounded-full object-cover"
  />
  <div>
    <p className="text-sm font-semibold text-white">Croch</p>
    <p className="text-xs text-zinc-400">Developer • Trader</p>
  </div>
</Link>
            <nav className="hidden items-center gap-2 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  className={`rounded-full px-3 py-2 text-sm transition ${activeSection === item.id ? "bg-white/10 text-white" : "text-zinc-400 hover:bg-white/5 hover:text-zinc-200"}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={() => setDark((s) => !s)} aria-label="Toggle theme">
                {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="secondary" size="icon" className="md:hidden" aria-label="Open menu">
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="md:hidden">
                  <div className="mt-6 flex flex-col gap-3">
                    {navItems.map((item) => (
                      <Link key={item.id} href={`#${item.id}`} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </header>
        <main className="flex-1 pb-12 pt-6 sm:pt-8">
          {children}
        </main>
        <footer className="flex flex-col gap-3 rounded-[2rem] border border-white/10 bg-[#060b14]/70 px-6 py-6 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Croch. Built for clarity, speed, and trust.</p>
          <div className="flex flex-wrap items-center gap-3">
            <Badge>Available for select projects</Badge>
            <span>GMT+3 • Addis Ababa</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
