import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Pricing | AI Agency",
  description: "Transparent pricing for AI automation services. Choose the plan that fits your business needs.",
}

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$500",
      period: "/month",
      description: "Perfect for small businesses getting started with AI",
      features: [
        "1 AI solution implemented",
        "Basic monitoring & support",
        "Email support (24-hour response)",
        "Monthly performance reports",
        "Up to 5 workflow automations",
        "1 integration (email, CRM, or chat)",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Growth",
      price: "$1,500",
      period: "/month",
      description: "Most popular for growing businesses",
      features: [
        "2-3 AI solutions implemented",
        "Priority support",
        "Slack/phone support",
        "Weekly performance reports",
        "Up to 15 workflow automations",
        "3 integrations included",
        "Custom AI training on your data",
        "Monthly strategy calls",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For businesses that need full AI transformation",
      features: [
        "Unlimited AI solutions",
        "Dedicated account manager",
        "24/7 priority support",
        "Daily monitoring & reporting",
        "Unlimited workflow automations",
        "Unlimited integrations",
        "Custom development",
        "Bi-weekly strategy calls",
        "SLA guarantees",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your business. All plans include a free 30-minute audit.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <Card 
                key={plan.name} 
                className={`relative ${plan.popular ? 'border-primary border-2 shadow-xl' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="text-primary mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                    asChild
                  >
                    <Link href="/contact">{plan.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              À La Carte Services
            </h2>
            <p className="text-lg text-gray-600">
              Add individual services to any plan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "AI Customer Support",
                price: "$1,500/month",
                setup: "$2,000 setup",
                description: "24/7 voice and chat support",
              },
              {
                name: "Lead Generation",
                price: "$1,000/month",
                setup: "$500 setup",
                description: "50+ qualified leads monthly",
              },
              {
                name: "Competitor Intelligence",
                price: "$500/month",
                setup: "Included",
                description: "Weekly competitive reports",
              },
              {
                name: "Research Automation",
                price: "$800/month",
                setup: "Included",
                description: "Custom research reports",
              },
              {
                name: "Personal AI Agent",
                price: "$50/month",
                setup: "$300 setup",
                description: "Individual productivity assistant",
              },
              {
                name: "Custom Development",
                price: "Starting at $2,500",
                setup: "Varies",
                description: "Fully custom AI solutions",
              },
            ].map((service) => (
              <Card key={service.name}>
                <CardHeader>
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="text-2xl font-bold text-primary">{service.price}</p>
                    <p className="text-sm text-gray-600">{service.setup}</p>
                  </div>
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <Link href="/contact">Add to Plan</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pricing FAQs
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What's included in the setup fee?",
                answer: "Setup fees cover initial consultation, system integration, AI training on your data, testing, and team training. This is a one-time cost.",
              },
              {
                question: "Can I cancel anytime?",
                answer: "Yes! All plans are month-to-month with no long-term contracts. Cancel anytime with 30 days notice.",
              },
              {
                question: "What if I need to scale up or down?",
                answer: "You can upgrade or downgrade your plan at any time. We'll prorate the difference for the current month.",
              },
              {
                question: "Do you offer custom pricing?",
                answer: "Yes! For businesses with unique needs or higher volume requirements, we offer custom enterprise pricing. Contact us for a quote.",
              },
              {
                question: "What's included in support?",
                answer: "All plans include ongoing monitoring, bug fixes, and performance optimization. Higher tiers get faster response times and more support channels.",
              },
              {
                question: "Are there any hidden fees?",
                answer: "No hidden fees! Some advanced features may have additional API costs (OpenAI, telephony), which we'll discuss upfront.",
              },
            ].map((faq, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Not Sure Which Plan is Right for You?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book a free audit and we'll recommend the best plan for your specific needs and budget.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Book Free Audit</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
