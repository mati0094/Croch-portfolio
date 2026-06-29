import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { timeline } from "@/data/portfolio";

export default function ResumePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 py-10">
      <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-400">
        <ArrowLeft className="h-4 w-4" /> Back to home
      </Link>
      <Card className="border-white/10 bg-[#0e1324]/90">
        <CardHeader>
          <CardTitle className="text-3xl">Croch</CardTitle>
          <p className="text-zinc-400">Web Developer • Trader • Computer Science Graduate</p>
        </CardHeader>
        <CardContent className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-white">Profile</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-400">Building polished websites and digital experiences with a strong foundation in engineering, clarity, and disciplined execution.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">Experience</h2>
            <div className="mt-4 space-y-4">
              {timeline.map((entry) => (
                <div key={entry.year} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-semibold text-white">{entry.title}</p>
                    <Badge className="border-violet-400/30 bg-violet-500/10 text-violet-200">{entry.year}</Badge>
                  </div>
                  <p className="mt-2 text-sm text-zinc-400">{entry.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">Core skills</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Next.js', 'React', 'TypeScript', 'Tailwind', 'WordPress', 'SEO', 'Trading discipline'].map((skill) => (
                <Badge key={skill} className="border-white/10 bg-white/5 text-zinc-300">{skill}</Badge>
              ))}
            </div>
          </div>
          <Button asChild variant="outline">
            <Link href="mailto:hello@croch.dev">Contact</Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
