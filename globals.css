import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, Zap, Heart } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "About Us | AI Agency",
  description: "Learn about our mission to help local businesses harness the power of AI automation.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to make AI automation accessible to every local business
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="text-lg text-gray-700 space-y-4 text-left">
              <p>
                We started this agency after seeing too many hardworking business owners drowning in repetitive tasks. 
                They were answering the same customer questions over and over, manually following up with leads, 
                and spending hours on tasks that AI could handle in seconds.
              </p>
              <p>
                Meanwhile, AI technology was advancing rapidly, but it was only accessible to big tech companies 
                with massive budgets and technical teams. Local businesses were left behind.
              </p>
              <p>
                That's why we exist: to bridge the gap between cutting-edge AI technology and the businesses 
                that need it most. We make AI automation simple, affordable, and practical for companies of any size.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Results-Focused",
                description: "We measure success by the hours we save you and the revenue we help you generate.",
              },
              {
                icon: Users,
                title: "Client-First",
                description: "Your success is our success. We're not happy until you're seeing real results.",
              },
              {
                icon: Zap,
                title: "Move Fast",
                description: "We implement solutions in weeks, not months. Speed is our competitive advantage.",
              },
              {
                icon: Heart,
                title: "Transparent",
                description: "No hidden fees, no confusing jargon. Just clear communication and honest pricing.",
              },
            ].map((value, idx) => (
              <Card key={idx}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="text-primary" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We're Different */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">How We're Different</h2>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">We Specialize in Local Businesses</h3>
                <p className="text-gray-700">
                  We're not building chatbots for Fortune 500 companies. We focus exclusively on local 
                  businesses because we understand your unique challenges and constraints.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Implementation in Weeks, Not Months</h3>
                <p className="text-gray-700">
                  Most agencies take 3-6 months to deliver anything. We have you up and running in 2 weeks 
                  because we've built systems and processes that work.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">No Technical Knowledge Required</h3>
                <p className="text-gray-700">
                  You don't need to understand how AI works. We handle all the technical complexity and 
                  deliver solutions that just work for you and your team.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Ongoing Optimization Included</h3>
                <p className="text-gray-700">
                  We don't just build it and disappear. We continuously monitor, optimize, and improve 
                  your AI systems to maximize results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
          <p className="text-lg text-gray-700 mb-8">
            We believe AI should augment human capabilities, not replace them. Our solutions are designed 
            to handle the repetitive, time-consuming tasks so your team can focus on what they do best: 
            serving customers and growing your business.
          </p>
          <p className="text-lg text-gray-700">
            We're here to help you win in an AI-powered world. Let's build something great together.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book a free audit and discover how AI can save you 20+ hours per week.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Book Free Audit</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
