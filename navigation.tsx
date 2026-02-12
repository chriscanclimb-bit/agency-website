import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, FileText, Rocket, TrendingUp, CheckCircle } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "How It Works | AI Agency",
  description: "Our simple 4-step process to transform your business with AI automation in just 2 weeks.",
}

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From first call to live AI agents in just 2 weeks. Here's our proven process.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {[
              {
                step: "1",
                title: "Free Workflow Audit",
                duration: "30 minutes",
                icon: Calendar,
                description: "We start with a free consultation to understand your business, identify bottlenecks, and spot automation opportunities.",
                details: [
                  "Virtual meeting with our AI specialist",
                  "Review your current workflows",
                  "Identify time-consuming tasks",
                  "Discuss your goals and challenges",
                  "No commitment required",
                ],
              },
              {
                step: "2",
                title: "Custom Proposal",
                duration: "48 hours",
                icon: FileText,
                description: "Within 2 days, we deliver a detailed proposal with exact solutions, ROI projections, and transparent pricing.",
                details: [
                  "Specific AI solutions recommended",
                  "Expected time savings calculated",
                  "Clear pricing breakdown",
                  "Implementation timeline",
                  "Video walkthrough of the proposal",
                ],
              },
              {
                step: "3",
                title: "Implementation",
                duration: "1-2 weeks",
                icon: Rocket,
                description: "Once you approve, we build, test, and deploy your AI solutions. You'll see progress every day.",
                details: [
                  "Daily progress updates",
                  "Integration with your existing tools",
                  "Rigorous testing before launch",
                  "Team training sessions",
                  "Documentation and guides",
                ],
              },
              {
                step: "4",
                title: "Optimization & Growth",
                duration: "Ongoing",
                icon: TrendingUp,
                description: "After launch, we monitor performance, make improvements, and add new automations as your needs evolve.",
                details: [
                  "24/7 monitoring and support",
                  "Weekly/monthly performance reports",
                  "Continuous improvements",
                  "Strategy calls to identify new opportunities",
                  "Priority support for issues",
                ],
              },
            ].map((phase) => (
              <Card key={phase.step} className="overflow-hidden">
                <div className="grid md:grid-cols-3">
                  <div className="bg-primary/5 p-8 flex flex-col justify-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                      <phase.icon className="text-white" size={32} />
                    </div>
                    <div className="text-primary font-bold text-lg mb-2">Step {phase.step}</div>
                    <h3 className="text-2xl font-bold mb-2">{phase.title}</h3>
                    <p className="text-sm text-gray-600">{phase.duration}</p>
                  </div>
                  <div className="md:col-span-2 p-8">
                    <p className="text-lg text-gray-700 mb-6">{phase.description}</p>
                    <ul className="space-y-2">
                      {phase.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="text-primary mr-2 mt-0.5 flex-shrink-0" size={18} />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What You Can Expect */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What You Can Expect</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Clear Communication</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Daily updates via Slack or email. You'll always know what we're working on and what's next.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Transparent Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  No hidden fees or surprise charges. Everything is spelled out in the proposal before we start.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Proven Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Average client saves 20+ hours per week within the first month. We track and report on all metrics.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book your free audit today and see how AI can transform your business in just 2 weeks.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Book Free Audit</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
