import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Clock, DollarSign } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Case Studies | AI Agency",
  description: "See how we've helped local businesses save time and increase revenue with AI automation.",
}

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      company: "Johnson's Restaurant",
      industry: "Food & Beverage",
      location: "Austin, TX",
      challenge: "Overwhelmed with phone orders and reservation requests during peak hours",
      solution: "Implemented 24/7 AI voice agent for phone orders and reservations",
      results: [
        { label: "Hours Saved Per Week", value: "25", icon: Clock },
        { label: "Order Accuracy", value: "98%", icon: TrendingUp },
        { label: "Customer Satisfaction", value: "4.8/5", icon: TrendingUp },
      ],
      testimonial: "The AI phone system has been a game-changer. We can handle 3x more calls without hiring additional staff, and customers love how fast they get answered.",
      author: "Sarah Johnson, Owner",
    },
    {
      company: "Chen Law Firm",
      industry: "Legal Services",
      location: "San Francisco, CA",
      challenge: "Spending 30+ hours weekly on client intake, scheduling, and routine emails",
      solution: "Custom AI assistant for client intake, document processing, and email management",
      results: [
        { label: "Hours Saved Per Week", value: "32", icon: Clock },
        { label: "Faster Response Time", value: "85%", icon: TrendingUp },
        { label: "Monthly Savings", value: "$4,800", icon: DollarSign },
      ],
      testimonial: "We got our time back to focus on actual legal work. The AI handles intake forms, schedules consultations, and even drafts routine correspondence. ROI was immediate.",
      author: "Michael Chen, Senior Partner",
    },
    {
      company: "Rodriguez Realty",
      industry: "Real Estate",
      location: "Miami, FL",
      challenge: "Not enough quality leads and spending too much time on unqualified prospects",
      solution: "AI-powered lead generation and qualification system",
      results: [
        { label: "Qualified Leads Per Month", value: "120", icon: TrendingUp },
        { label: "Pipeline Growth", value: "210%", icon: TrendingUp },
        { label: "Cost Per Lead", value: "-65%", icon: DollarSign },
      ],
      testimonial: "We went from manually searching for leads to having 50+ qualified prospects delivered weekly. Our pipeline has more than doubled in 3 months.",
      author: "Emily Rodriguez, Broker",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Success Stories
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real businesses. See how we've helped companies like yours save time and grow revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {caseStudies.map((study, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="bg-gray-50 p-8">
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold mb-2">{study.company}</h2>
                    <p className="text-gray-600">
                      {study.industry} • {study.location}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-sm text-gray-500 uppercase mb-2">
                        Challenge
                      </h3>
                      <p className="text-gray-700">{study.challenge}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-sm text-gray-500 uppercase mb-2">
                        Solution
                      </h3>
                      <p className="text-gray-700">{study.solution}</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border-2 border-primary">
                      <p className="text-gray-700 italic mb-3">"{study.testimonial}"</p>
                      <p className="text-sm font-semibold text-gray-900">
                        — {study.author}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="font-semibold text-lg mb-6">Results Achieved</h3>
                  <div className="space-y-6">
                    {study.results.map((result, idx) => (
                      <div key={idx}>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <result.icon className="text-primary" size={20} />
                          </div>
                          <div>
                            <div className="text-3xl font-bold text-primary">
                              {result.value}
                            </div>
                            <div className="text-sm text-gray-600">{result.label}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-8 border-t">
                    <h4 className="font-semibold mb-3">Want similar results?</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Book a free audit and we'll show you how AI can work for your business.
                    </p>
                    <Button asChild>
                      <Link href="/contact">Book Free Audit</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Proven Results Across Industries</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-gray-600">Hours Saved Per Week (avg)</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">3x</div>
              <div className="text-gray-600">Increase in Capacity</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">2 Weeks</div>
              <div className="text-gray-600">To Implementation</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join the businesses that are already saving 20+ hours per week with AI automation.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Book Free Audit</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
