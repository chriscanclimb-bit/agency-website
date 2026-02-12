import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Bot, Users, TrendingUp, Search, BarChart, Lightbulb, Mail, Clock } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "AI Automation Services | AI Agency",
  description: "Comprehensive AI automation services for local businesses including consulting, customer support, lead generation, and more.",
}

export default function ServicesPage() {
  const services = [
    {
      id: "consulting",
      icon: Lightbulb,
      title: "AI Consulting for Local Businesses",
      description: "Complete AI transformation tailored to your business needs",
      features: [
        "Free workflow audit to identify automation opportunities",
        "Custom AI implementation for your specific bottlenecks",
        "Training for your team on using AI tools",
        "Ongoing optimization and new workflow additions",
        "Monthly strategy calls and performance reports",
      ],
      pricing: "From $500/month",
      setup: "$200-500 audit fee (credited if you sign up)",
      bestFor: "Restaurants, law firms, retail stores, real estate agencies",
      results: "Average client saves 20+ hours per week within first month",
    },
    {
      id: "customer-support",
      icon: Users,
      title: "AI-Powered Customer Support",
      description: "24/7 multi-channel support that feels human",
      features: [
        "Voice AI for phone calls (after-hours or 24/7)",
        "Chat widget for your website",
        "Email automation for common inquiries",
        "Trained on your FAQs and business knowledge",
        "Smart escalation to human agents when needed",
        "Real-time monitoring and performance dashboard",
      ],
      pricing: "From $1,500/month",
      setup: "$2,000-5,000 one-time setup",
      bestFor: "Service businesses, e-commerce, professional services",
      results: "Handle 3x more inquiries without additional staff",
    },
    {
      id: "lead-generation",
      icon: TrendingUp,
      title: "Lead Scraping & Outreach",
      description: "Automated lead generation with personalized outreach",
      features: [
        "AI-powered lead sourcing from databases and LinkedIn",
        "Data enrichment and qualification",
        "Personalized email sequences with AI-generated content",
        "CRM integration (HubSpot, Salesforce, Pipedrive)",
        "Weekly delivery of qualified leads",
        "Performance tracking and optimization",
      ],
      pricing: "From $1,000/month",
      setup: "$500 setup and integration",
      bestFor: "B2B companies, agencies, consultants, SaaS businesses",
      results: "50+ qualified leads per month on average",
    },
    {
      id: "competitor-intel",
      icon: Search,
      title: "Competitor Intelligence Reports",
      description: "Automated monitoring of your competitive landscape",
      features: [
        "Track 3-5 competitors automatically",
        "Monitor pricing changes and new products",
        "Analyze marketing campaigns and ad spend",
        "Track hiring activity and company news",
        "Weekly or bi-weekly email reports",
        "AI-generated insights and recommendations",
      ],
      pricing: "From $500/month",
      setup: "Included in first month",
      bestFor: "E-commerce, SaaS, marketing agencies, retailers",
      results: "Make better strategic decisions with real-time data",
    },
    {
      id: "research",
      icon: BarChart,
      title: "Research Agent as a Service",
      description: "Custom research reports delivered on autopilot",
      features: [
        "AI agents research topics specific to your industry",
        "Data aggregation from multiple sources",
        "Automated analysis and trend identification",
        "Weekly or monthly report delivery",
        "Custom research parameters",
        "Industry-specific insights",
      ],
      pricing: "From $800/month",
      setup: "1-week setup to configure research parameters",
      bestFor: "Investors, market researchers, agencies, executives",
      results: "Save 10-20 hours per week on research tasks",
    },
    {
      id: "agent-setup",
      icon: Bot,
      title: "Personal AI Agent Setup",
      description: "Your own AI assistant managing your digital life",
      features: [
        "Email and calendar integration",
        "Slack/Discord/iMessage connectivity",
        "Task automation based on your patterns",
        "Meeting summaries and action items",
        "Smart email drafting and responses",
        "Customized to your workflow and preferences",
      ],
      pricing: "From $50/month",
      setup: "$300-1,000 one-time setup",
      bestFor: "Busy executives, entrepreneurs, consultants",
      results: "Reclaim 5-10 hours per week from email and admin tasks",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              AI Automation Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven solutions to automate your business operations, save time, and increase revenue
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="scroll-mt-20">
                <Card className="overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className={index % 2 === 0 ? "order-1" : "order-1 md:order-2"}>
                      <CardHeader>
                        <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                          <service.icon className="text-primary" size={32} />
                        </div>
                        <CardTitle className="text-3xl mb-2">{service.title}</CardTitle>
                        <CardDescription className="text-lg">{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold mb-3">What's Included:</h4>
                            <ul className="space-y-2">
                              {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start">
                                  <CheckCircle className="text-primary mr-2 mt-0.5 flex-shrink-0" size={18} />
                                  <span className="text-sm text-gray-700">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="border-t pt-4">
                            <div className="flex items-baseline justify-between mb-2">
                              <span className="text-sm text-gray-600">Monthly Price:</span>
                              <span className="text-2xl font-bold text-primary">{service.pricing}</span>
                            </div>
                            {service.setup && (
                              <div className="flex items-baseline justify-between">
                                <span className="text-sm text-gray-600">Setup Fee:</span>
                                <span className="text-sm text-gray-900">{service.setup}</span>
                              </div>
                            )}
                          </div>

                          <Button size="lg" className="w-full" asChild>
                            <Link href="/contact">Get Started</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </div>

                    <div className={`bg-gray-50 p-8 ${index % 2 === 0 ? "order-2" : "order-2 md:order-1"}`}>
                      <div className="space-y-6">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Clock className="text-primary" size={20} />
                            <h4 className="font-semibold">Best For:</h4>
                          </div>
                          <p className="text-gray-700">{service.bestFor}</p>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <BarChart className="text-primary" size={20} />
                            <h4 className="font-semibold">Expected Results:</h4>
                          </div>
                          <p className="text-gray-700">{service.results}</p>
                        </div>

                        <div className="bg-white p-4 rounded-lg border-2 border-primary">
                          <h4 className="font-semibold mb-2 text-primary">Ready to get started?</h4>
                          <p className="text-sm text-gray-700 mb-3">
                            Book a free 30-minute consultation and we'll show you exactly how this service can work for your business.
                          </p>
                          <Button variant="outline" size="sm" asChild>
                            <Link href="/contact">Book Free Consultation</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Book a free audit and we'll analyze your business to recommend the best AI solutions for your specific needs.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Book Free Audit</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
