import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/portfolio";

export default function ProjectsPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-10">
      <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-400">
        <ArrowLeft className="h-4 w-4" /> Back to home
      </Link>
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">Portfolio</p>
        <h1 className="mt-3 text-4xl font-semibold text-white">Selected work</h1>
        <p className="mt-4 max-w-2xl text-lg text-zinc-400">A broader view of the implementation work, from business sites to product-style concepts.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title} className="border-white/10 bg-[#0e1324]/90">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-zinc-400">{project.summary}</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (<Badge key={item} className="border-white/10 bg-white/5 text-zinc-300">{item}</Badge>))}
              </div>
              <Button asChild variant="outline">
                <Link href="/">View site overview</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
