import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Network, ArrowRight, Heart, Bot, Users2, GraduationCap } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import Link from "next/link"
import { Background } from "./background"
import { SevenBackground } from "./seven-background"

export default function Page() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-white transition-colors">
      {/* Header - Simplified */}
      <header className="fixed top-0 w-full z-50 bg-white/50 dark:bg-black/50 backdrop-blur-sm border-b border-zinc-200 dark:border-white/10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold">
            SEVENS.chat
          </Link>
          <ThemeToggle />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/56720db7-63b0-4f7f-8491-1330b8e2ec00-rVLmCNmkFBnCJ68o3tLBzxaFHnc0oI.jpeg')] bg-cover bg-center"
          style={{
            backgroundBlendMode: "overlay",
          }}
        />
        {/* Subtle overlay for text contrast */}
        <div className="absolute inset-0 bg-black/10 dark:bg-black/20" />
        {/* Animated network effect with adjusted colors */}
        <Background />
        {/* Seven background remains */}
        <SevenBackground />
        <div className="relative container mx-auto px-4 py-32 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white drop-shadow-lg">
            Start. Serve. Succeed.
          </h1>
          <div className="mt-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-zinc-900 dark:text-white drop-shadow-lg">
              Empower Communities. Transform Lives.
            </h2>
            <p className="text-xl md:text-2xl text-zinc-800 dark:text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-lg">
              Join SEVENS.chat—the invite-only network where visionary entrepreneurs build AI-supported,
              community-driven businesses and mentor seven others to do the same.
            </p>
            <Button
              size="lg"
              className="bg-zinc-900/90 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-white/90"
            >
              Apply Now to Join SEVENS.chat
            </Button>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Entrepreneurship is Changing. Are You Ready?
          </h2>
          <p className="text-lg text-zinc-600 dark:text-white/70 max-w-3xl mx-auto text-center">
            The era of the lone founder is fading. Modern entrepreneurs crave meaningful connections, collective
            success, and community impact beyond profits. SEVENS.chat empowers you to lead the new wave—building
            profitable businesses that serve communities first and scale second.
          </p>
        </div>
      </section>

      {/* Core Benefits */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Service-Centered Growth",
                description: "Build trust by serving communities first.",
              },
              {
                icon: Bot,
                title: "AI for Advantage",
                description: "Leverage AI-powered tools for smarter growth.",
              },
              {
                icon: Users2,
                title: "Mentorship Multiplies",
                description: "Empower seven others and create a ripple effect.",
              },
              {
                icon: GraduationCap,
                title: "Exponential Learning",
                description: "Every business is a learning lab.",
              },
              {
                icon: Network,
                title: "Cross-Community Momentum",
                description: "Your success accelerates when communities collaborate.",
              },
            ].map((benefit, i) => (
              <Card key={i} className="p-8 bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-white/10">
                <benefit.icon className="w-8 h-8 mb-4 text-zinc-600 dark:text-white/70" />
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-zinc-600 dark:text-white/70">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The SEVENS.chat Approach */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            The SEVENS.chat Approach: Start. Serve. Succeed.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <Card className="p-8 bg-white dark:bg-black border-zinc-200 dark:border-white/10">
                <div className="absolute -top-4 left-4 w-8 h-8 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-4">Start</h3>
                <p className="text-zinc-600 dark:text-white/70">Define your 'Why' and embrace AI for rapid growth.</p>
              </Card>
            </div>
            <div className="relative">
              <Card className="p-8 bg-white dark:bg-black border-zinc-200 dark:border-white/10">
                <div className="absolute -top-4 left-4 w-8 h-8 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-4">Serve</h3>
                <p className="text-zinc-600 dark:text-white/70">
                  Build trust through authentic service and transparent leadership.
                </p>
              </Card>
            </div>
            <div className="relative">
              <Card className="p-8 bg-white dark:bg-black border-zinc-200 dark:border-white/10">
                <div className="absolute -top-4 left-4 w-8 h-8 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-4">Succeed</h3>
                <p className="text-zinc-600 dark:text-white/70">
                  Achieve sustainable success by mentoring seven others.
                </p>
              </Card>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-white/90"
            >
              Get Started with SEVENS.chat
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What Our Members Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-white/10">
              <p className="text-zinc-600 dark:text-white/70 mb-6">
                "SEVENS.chat helped me grow my business by focusing on community impact. The mentorship model changed
                everything!"
              </p>
              <p className="font-semibold">Member Name</p>
              <p className="text-sm text-zinc-500 dark:text-white/50">Founder of XYZ</p>
            </Card>
            <Card className="p-8 bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-white/10">
              <p className="text-zinc-600 dark:text-white/70 mb-6">
                "The 7X Circles and AI Launch Labs accelerated our growth in ways I never imagined."
              </p>
              <p className="font-semibold">Member Name</p>
              <p className="text-sm text-zinc-500 dark:text-white/50">AI Entrepreneur</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Mentorship Section */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Success is Best Shared</h2>
          <p className="text-lg text-zinc-600 dark:text-white/70 max-w-3xl mx-auto mb-8">
            At SEVENS.chat, we believe in multiplying impact. By mentoring seven others to build their own
            community-serving businesses, you create waves of success that extend far beyond your own journey.
          </p>
          <Button
            size="lg"
            className="bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-white/90"
          >
            Join 7X Circles Now
          </Button>
        </div>
      </section>

      {/* AI Advantage Section */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">AI-Powered Growth for the Modern Entrepreneur</h2>
          <p className="text-lg text-zinc-600 dark:text-white/70 max-w-3xl mx-auto mb-8">
            Leverage cutting-edge AI tools in our Launch Labs to streamline your operations, enhance customer
            experiences, and grow smarter—not harder.
          </p>
          <Button
            size="lg"
            className="bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-white/90"
          >
            Learn About AI Launch Labs
          </Button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Be Part of the Ripple Effect. Join SEVENS.chat Today.</h2>
          <p className="text-lg text-zinc-600 dark:text-white/70 max-w-3xl mx-auto mb-8">
            If you're ready to build a business that serves, grows, and empowers others, SEVENS.chat is your home.
            Start. Serve. Succeed. — Together.
          </p>
          <Button
            size="lg"
            className="bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-white/90"
          >
            Apply Now — Start Your Journey <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white dark:bg-black border-t border-zinc-200 dark:border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">About</h3>
              <nav className="space-y-2">
                <Link
                  href="#"
                  className="block text-sm text-zinc-600 hover:text-zinc-900 dark:text-white/70 dark:hover:text-white"
                >
                  Our Story
                </Link>
                <Link
                  href="#"
                  className="block text-sm text-zinc-600 hover:text-zinc-900 dark:text-white/70 dark:hover:text-white"
                >
                  Team
                </Link>
                <Link
                  href="#"
                  className="block text-sm text-zinc-600 hover:text-zinc-900 dark:text-white/70 dark:hover:text-white"
                >
                  Careers
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <nav className="space-y-2">
                <Link
                  href="#"
                  className="block text-sm text-zinc-600 hover:text-zinc-900 dark:text-white/70 dark:hover:text-white"
                >
                  AI Launch Labs
                </Link>
                <Link
                  href="#"
                  className="block text-sm text-zinc-600 hover:text-zinc-900 dark:text-white/70 dark:hover:text-white"
                >
                  7X Circles
                </Link>
                <Link
                  href="#"
                  className="block text-sm text-zinc-600 hover:text-zinc-900 dark:text-white/70 dark:hover:text-white"
                >
                  Mentorship
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <nav className="space-y-2">
                <Link
                  href="#"
                  className="block text-sm text-zinc-600 hover:text-zinc-900 dark:text-white/70 dark:hover:text-white"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="block text-sm text-zinc-600 hover:text-zinc-900 dark:text-white/70 dark:hover:text-white"
                >
                  Terms of Service
                </Link>
                <Link
                  href="#"
                  className="block text-sm text-zinc-600 hover:text-zinc-900 dark:text-white/70 dark:hover:text-white"
                >
                  Cookie Policy
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <nav className="space-y-2">
                <Link
                  href="mailto:hello@sevens.chat"
                  className="block text-sm text-zinc-600 hover:text-zinc-900 dark:text-white/70 dark:hover:text-white"
                >
                  hello@sevens.chat
                </Link>
              </nav>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-white/10 text-center text-sm text-zinc-500 dark:text-white/50">
            © {new Date().getFullYear()} SEVENS.chat. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

