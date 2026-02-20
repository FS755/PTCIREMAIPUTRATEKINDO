"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            subject: formData.get("subject"),
            message: formData.get("message"),
        }

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })

        if (res.ok) {
            alert("Pesan berhasil dikirim!")
            e.currentTarget.reset()
        } else {
            alert("Gagal mengirim pesan")
        }
    }

    return (
        <section id="contact" className="bg-secondary py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-16 lg:grid-cols-2">
                    <div>
                        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">Contact Us</p>
                        <h2 className="font-heading text-3xl font-bold text-foreground text-balance md:text-4xl">{"Let's Discuss Your Project"}</h2>
                        <p className="mt-4 leading-relaxed text-muted-foreground">Siap mentransformasi proyek Anda? Hubungi tim kami dan temukan bagaimana PT. CIREMAI PUTRA TEKINDO dapat memberikan solusi yang Anda butuhkan.</p>
                        <div className="mt-10 flex flex-col gap-6">
                            <div className="flex items-start gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground"><Mail className="h-5 w-5" /></div>
                                <div>
                                    <p className="font-medium text-foreground">Email</p>
                                    <p className="text-sm text-muted-foreground">ptciremaiputratekindo@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground"><Phone className="h-5 w-5" /></div>
                                <div>
                                    <p className="font-medium text-foreground">Phone</p>
                                    <p className="text-sm text-muted-foreground">021-59713341 / 081286345007</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground"><MapPin className="h-5 w-5" /></div>
                                <div>
                                    <p className="font-medium text-foreground">Office</p>
                                    <p className="text-sm text-muted-foreground">Jl. Oskar II, No.26/Blok 32, Pondok Permai Kuta Baru.<br />Tangerang - Banten, 15560, Indonesia</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg border border-border bg-background p-8">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">Full Name</label>
                                    <input id="name" name="name" type="text" placeholder="Your name" className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">Email</label>
                                    <input id="email" name="email" type="email" placeholder="you@company.com" className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-foreground">Subject</label>
                                <input id="subject" name="subject" type="text" placeholder="How can we help?" className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                            </div>
                            <div>
                                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">Message</label>
                                <textarea id="message" name="message" rows={5} placeholder="Tell us about your project..." className="w-full resize-none rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                            </div>
                            <Button type="submit" size="lg" className="w-full font-semibold">Send Message</Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
