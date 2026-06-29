"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, BadgeCheck, Briefcase, Cpu, ExternalLink, Globe, LineChart, LinkIcon, Mail, PenTool, Send, ShieldCheck, Sparkles } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { contactLinks, principles, projects, services, skillGroups, testimonials, timeline } from "@/data/portfolio";

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="max-w-2xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-lg text-zinc-400">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <SiteShell>
      <section id="home" className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(124,58,237,0.12),rgba(16,185,129,0.07))] px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="max-w-3xl">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <Badge className="border-violet-400/30 bg-violet-500/10 text-violet-200">Available for select projects</Badge>
              <Badge className="border-emerald-400/30 bg-emerald-500/10 text-emerald-200">GMT+3 • Addis Ababa</Badge>
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">Croch</h1>
            <p className="mt-4 max-w-2xl text-xl font-medium text-zinc-300 sm:text-2xl">Web Developer • Trader • Computer Science Graduate</p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">Custom Website Design, Landing Pages, WordPress Websites, and Business Websites — built for speed, clarity, and conversions.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="#work">View Work <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#contact">Hire Croch</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {['Business Sites', 'Landing Pages', 'WordPress', 'Custom Design'].map((item) => (
                <Badge key={item} className="border-white/10 bg-white/5 text-zinc-300">{item}</Badge>
              ))}
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { title: 'Fast, responsive builds' },
                { title: 'Conversion-focused layout' },
                { title: 'Risk-managed trading approach' },
              ].map((stat) => (
                <div key={stat.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-medium text-white">{stat.title}</p>
                </div>
              ))}
            </div>
          </div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <Card className="overflow-hidden border-violet-400/20 bg-[#090f1d]/90 p-0">
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                <div>
                  <p className="text-sm font-medium text-white">Croch Studio</p>
                  <p className="text-xs text-zinc-400">Premium digital product work</p>
                </div>
                <Badge className="border-emerald-400/30 bg-emerald-500/10 text-emerald-200">Focused</Badge>
              </div>
              <div className="grid gap-4 p-6">
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/20 to-emerald-500/10 p-5">
                  <div className="mb-3 flex items-center gap-2 text-sm text-zinc-300"><Sparkles className="h-4 w-4 text-emerald-300" />Core focus</div>
                  <p className="text-2xl font-semibold text-white">High-trust websites that feel calm, modern, and effective.</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="mb-2 flex items-center gap-2 text-violet-300"><Cpu className="h-4 w-4" /> Engineering</div>
                    <p className="text-sm text-zinc-400">Next.js, performance, and maintainable architecture.</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="mb-2 flex items-center gap-2 text-emerald-300"><LineChart className="h-4 w-4" /> Trading</div>
                    <p className="text-sm text-zinc-400">Disciplined process, journaling, and risk awareness.</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      <section id="services" className="mt-8 scroll-mt-24">
        <SectionHeading eyebrow="Services" title="Clear digital products, built with intention." description="The work is focused on strong foundations: clarity, speed, and a path to action." />
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.div key={service.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.07 }}>
              <Card className="h-full border-white/10 bg-[#0e1324]/90 transition hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-[0_0_30px_rgba(124,58,237,0.2)]">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600/20 to-emerald-500/20 text-violet-200">
                    {service.title.includes("Landing") ? <ArrowUpRight className="h-5 w-5" /> : service.title.includes("WordPress") ? <Globe className="h-5 w-5" /> : service.title.includes("Business") ? <Briefcase className="h-5 w-5" /> : <PenTool className="h-5 w-5" />}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="mt-2 text-sm">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="mb-2 text-sm font-semibold text-white">Deliverables</p>
                    <ul className="space-y-2 text-sm text-zinc-400">
                      {service.deliverables.map((item) => (<li key={item} className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-emerald-300" />{item}</li>))}
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-zinc-300">
                    <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">Typical turnaround</p>
                    <p className="mt-1 font-medium text-white">{service.turnaround}</p>
                  </div>
                  <div className="text-sm text-zinc-400"><span className="font-semibold text-white">Best for:</span> {service.bestFor}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="about" className="mt-12 scroll-mt-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          <div>
            <SectionHeading eyebrow="About" title="A grounded mix of engineering and discipline." description="Croch builds real-world web products and approaches trading with process, journaling, and a clear risk framework." />
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">A Computer Science graduate with a practical focus on building thoughtful products, Croch combines clean front-end execution with a measured approach to decision-making that carries into trading and long-term learning.</p>
          </div>
          <div className="grid gap-4">
            {principles.map((principle) => (
              <Card key={principle.title} className="border-white/10 bg-[#0e1324]/90">
                <CardHeader>
                  <CardTitle>{principle.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-400">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="mt-12">
        <SectionHeading eyebrow="Skills" title="Two tracks, one disciplined approach." description="Development work is shaped by performance and clarity. Trading work is shaped by review, risk rules, and consistency." />
        <div className="mt-8 rounded-[2rem] border border-white/10 bg-[#0e1324]/90 p-6">
          <Tabs defaultValue="Development" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              {skillGroups.map((group) => (
                <TabsTrigger key={group.title} value={group.title}>{group.title}</TabsTrigger>
              ))}
            </TabsList>
            {skillGroups.map((group) => (
              <TabsContent key={group.title} value={group.title}>
                <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr]">
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (<Badge key={item} className="border-white/10 bg-white/5 text-zinc-300">{item}</Badge>))}
                  </div>
                  <Card className="border-white/10 bg-[#090f1d]/80">
                    <CardHeader>
                      <CardTitle>Strength areas</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm text-zinc-400">
                      {group.strengths.map((strength) => (
                        <div key={strength} className="flex items-start gap-2"><ShieldCheck className="mt-0.5 h-4 w-4 text-emerald-300" />{strength}</div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section id="work" className="mt-12 scroll-mt-24">
        <SectionHeading eyebrow="Featured Work" title="Polished builds with real-world purpose." description="Selected projects that balance visual quality, product thinking, and clear outcomes." />
        <div className="mt-8 flex flex-wrap gap-2">
          {['All', 'Business', 'Landing Pages', 'WordPress', 'Trading', 'UI'].map((filter) => (
            <Badge key={filter} className="cursor-pointer border-white/10 bg-white/5 text-zinc-300 hover:border-violet-400/40 hover:bg-violet-500/10">{filter}</Badge>
          ))}
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div key={project.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.06 }}>
              <Card className="h-full overflow-hidden border-white/10 bg-[#0e1324]/90 transition hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-[0_0_35px_rgba(124,58,237,0.18)]">
                <div className="relative h-48 w-full bg-[radial-gradient(circle_at_top_left,_rgba(124,58,237,0.25),_transparent_40%),linear-gradient(135deg,#111A33,#070A12)]">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px] opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center"><Badge className="border-violet-400/30 bg-violet-500/10 text-violet-200">{project.category}</Badge></div>
                </div>
                <CardContent className="space-y-4 pt-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <CardTitle>{project.title}</CardTitle>
                      <p className="mt-2 text-sm text-zinc-400">{project.summary}</p>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="icon" aria-label={`Open details for ${project.title}`}>
                          <ArrowUpRight className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                          <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">Case study</p>
                            <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
                            <p className="mt-4 text-zinc-400">{project.problem}</p>
                            <div className="mt-6 space-y-4 text-sm text-zinc-300">
                              <div><span className="font-semibold text-white">Approach:</span> {project.approach}</div>
                              <div><span className="font-semibold text-white">Result:</span> {project.result}</div>
                            </div>
                          </div>
                          <div className="space-y-4">
                            <Image src={project.image} alt={project.title} width={800} height={500} className="h-48 w-full rounded-2xl border border-white/10 object-cover" />
                            <div className="grid gap-3 sm:grid-cols-3">
                              {project.metrics.map((metric) => (
                                <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">{metric.label}</p>
                                  <p className="mt-1 text-sm font-semibold text-white">{metric.value}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (<Badge key={item} className="border-white/10 bg-white/5 text-zinc-300">{item}</Badge>))}
                  </div>
                  <p className="text-sm text-zinc-400">{project.outcome}</p>
                  <div className="flex items-center justify-between text-sm text-zinc-400">
                    <span>Role: {project.role}</span>
                    <div className="flex items-center gap-2">
                      {project.github ? <Link href={project.github} className="rounded-full border border-white/10 p-2 hover:bg-white/10" aria-label="Open GitHub"><LinkIcon className="h-4 w-4" /></Link> : null}
                      {project.live ? <Link href={project.live} className="rounded-full border border-white/10 p-2 hover:bg-white/10" aria-label="Open live preview"><ExternalLink className="h-4 w-4" /></Link> : null}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="trading" className="mt-12">
        <SectionHeading eyebrow="Trading Snapshot" title="A process-first view of trading." description="The emphasis is on discipline, journaling, and risk control rather than hype or signal-chasing." />
        <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="border-white/10 bg-[#0e1324]/90">
            <CardHeader>
              <CardTitle>Professional context</CardTitle>
              <CardDescription>Not financial advice.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-zinc-400">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">Style</p>
                <p className="mt-1 font-medium text-white">Swing / day approach, structured and selective</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">Instruments</p>
                <p className="mt-1 font-medium text-white">FX, Crypto, and Stocks</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">Risk rules</p>
                <p className="mt-1 font-medium text-white">Max 1% risk per trade, predefined exits, review every setup</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-white/10 bg-[#0e1324]/90">
            <CardHeader>
              <CardTitle>Sample journal insights</CardTitle>
              <CardDescription>Illustrative process notes, not live signals.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { title: 'Setup quality', value: '5/5 structure, 2 valid confirmations' },
                { title: 'Risk', value: 'Entry size capped at 0.8% of account' },
                { title: 'Review', value: 'Post-trade notes captured with lessons and follow-up' },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-white">{item.title}</p>
                    <Badge className="border-emerald-400/30 bg-emerald-500/10 text-emerald-200">Sample</Badge>
                  </div>
                  <p className="mt-2 text-sm text-zinc-400">{item.value}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="education" className="mt-12">
        <SectionHeading eyebrow="Education" title="Formal background, practical execution." description="A strong foundation in computer science supports the product and engineering work." />
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <Card className="border-white/10 bg-[#0e1324]/90">
            <CardHeader>
              <CardTitle>BSc in Computer Science</CardTitle>
              <CardDescription>Campus-based degree with a focus on systems thinking and software craft.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-zinc-400">The study background contributes to clear architecture decisions, maintainable implementation, and disciplined iteration.</p>
            </CardContent>
          </Card>
          <Card className="border-white/10 bg-[#0e1324]/90">
            <CardHeader>
              <CardTitle>Selected certifications</CardTitle>
              <CardDescription>Places for future training and specialization.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-zinc-400">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">SEO fundamentals • practical growth thinking</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">Performance optimization • modern delivery practices</div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mt-12">
        <SectionHeading eyebrow="Timeline" title="A steady path from study to product work." description="The career story is built around thoughtful execution, learning, and a calm approach to growth." />
        <div className="mt-8 space-y-4">
          {timeline.map((entry, index) => (
            <motion.div key={entry.year} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.06 }}>
              <Card className="border-white/10 bg-[#0e1324]/90">
                <CardContent className="flex flex-col gap-3 p-6 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-violet-300">{entry.year}</p>
                    <h3 className="mt-1 text-lg font-semibold text-white">{entry.title}</h3>
                  </div>
                  <p className="max-w-2xl text-sm text-zinc-400">{entry.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <SectionHeading eyebrow="Process" title="A calm, structured way of working." description="The engagement is designed to be clear from the first conversation to final delivery." />
        <div className="mt-8 rounded-[2rem] border border-white/10 bg-[#0e1324]/90 p-4">
          <Accordion type="single" collapsible className="space-y-3">
            {[
              { title: 'Discovery', content: 'A short intake to define goals, audience, and the action you want the site to drive.' },
              { title: 'Direction', content: 'Wireframe and UI direction are shaped around clarity, trust, and a focused conversion path.' },
              { title: 'Delivery', content: 'Implementation is polished, responsive, and documented for easy handoff or ongoing iteration.' },
            ].map((item) => (
              <AccordionItem key={item.title} value={item.title} className="border-white/10 bg-white/5">
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="mt-12">
        <SectionHeading eyebrow="Testimonials" title="Trusted for calm, thoughtful execution." description="A small set of short testimonials that reflect a professional and polished process." />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {testimonials.map((item) => (
            <Card key={item.name} className="border-white/10 bg-[#0e1324]/90">
              <CardContent className="pt-6">
                <p className="text-lg text-zinc-200">“{item.quote}”</p>
                <div className="mt-4 text-sm text-zinc-400">
                  <p className="font-semibold text-white">{item.name}</p>
                  <p>{item.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="contact" className="mt-12 scroll-mt-24">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeading eyebrow="Contact" title="Let’s build something that feels considered." description="For new projects, landing pages, or a thoughtful web refresh, the process starts with a clear conversation." />
            <div className="mt-6 flex flex-wrap gap-3">
              {contactLinks.map((link) => (
                <TooltipProvider key={link.label}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link href={link.href} className="rounded-full border border-white/10 bg-white/5 p-3 text-zinc-300 transition hover:border-violet-400/40 hover:bg-violet-500/10" aria-label={link.label}>
                        {link.label === 'GitHub' ? <LinkIcon className="h-4 w-4" /> : link.label === 'LinkedIn' ? <LinkIcon className="h-4 w-4" /> : link.label === 'Email' ? <Mail className="h-4 w-4" /> : <Send className="h-4 w-4" />}
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>{link.label}</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
            <Button asChild className="mt-6"><Link href="mailto:hello@croch.dev">Book a call <ArrowRight className="h-4 w-4" /></Link></Button>
          </div>
          <Card className="border-white/10 bg-[#0e1324]/90">
            <CardContent className="pt-6">
              <form className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-zinc-300" htmlFor="name">Name</label>
                    <input id="name" className="w-full rounded-2xl border border-white/10 bg-[#090f1d] px-4 py-3 text-sm text-white outline-none ring-0 focus:border-violet-400/50" required />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm text-zinc-300" htmlFor="email">Email</label>
                    <input id="email" type="email" className="w-full rounded-2xl border border-white/10 bg-[#090f1d] px-4 py-3 text-sm text-white outline-none ring-0 focus:border-violet-400/50" required />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-zinc-300" htmlFor="projectType">Project type</label>
                    <input id="projectType" className="w-full rounded-2xl border border-white/10 bg-[#090f1d] px-4 py-3 text-sm text-white outline-none ring-0 focus:border-violet-400/50" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm text-zinc-300" htmlFor="budget">Budget range</label>
                    <input id="budget" className="w-full rounded-2xl border border-white/10 bg-[#090f1d] px-4 py-3 text-sm text-white outline-none ring-0 focus:border-violet-400/50" />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm text-zinc-300" htmlFor="message">Message</label>
                  <textarea id="message" rows={5} className="w-full rounded-2xl border border-white/10 bg-[#090f1d] px-4 py-3 text-sm text-white outline-none ring-0 focus:border-violet-400/50" required />
                </div>
                <Button type="submit">Send inquiry</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </SiteShell>
  );
}
