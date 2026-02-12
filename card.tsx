import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Bot, Clock, TrendingUp, Users, Zap, CheckCircle, Star } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Save 20+ Hours Per Week
              <span className="block text-primary mt-2">with AI Automation</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We build and manage AI agents that handle customer support, lead generation, 
              and repetitive tasks for local businesses. Focus on growing your business while 
              AI handles the rest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Book Free 30-Min Audit
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">View Services</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              ✓ No credit card required  ✓ 2-week implementation  ✓ Trusted by 15+ businesses
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-white border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-primary">20+</p>
              <p className="text-gray-600">Hours Saved/Week</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">15+</p>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">98%</p>
              <p className="text-gray-600">Customer Satisfaction</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">2 Weeks</p>
              <p className="text-gray-600">To Implementation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Proven AI automation services designed specifically for local businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Bot className="text-primary" size={24} />
                </div>
                <CardTitle>AI Consulting</CardTitle>
                <CardDescription>
                  Complete AI transformation for your business
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-2 mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-sm">Free workflow audit</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-2 mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-sm">Custom AI implementation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-2 mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-sm">Ongoing optimization</span>
                  </li>
                </ul>
                <p className="text-2xl font-bold text-primary mb-4">From $500/mo</p>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/services#consulting">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-primary border-2">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-primary" size={24} />
                </div>
                <CardTitle>AI Customer Support</CardTitle>
                <CardDescription>
                  24/7 voice and chat support for your customers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-2 mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-sm">Voice + chat + email support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-2 mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-sm">Trained on your business</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-2 mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-sm">Seamless human handoff</span>
                  </li>
                </ul>
                <p className="text-2xl font-bold text-primary mb-4">From $1,500/mo</p>
                <Button asChild className="w-full">
                  <Link href="/services#customer-support">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="text-primary" size={24} />
                </div>
                <CardTitle>Lead Generation</CardTitle>
                <CardDescription>
                  Automated lead scraping and personalized outreach
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-2 mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-sm">Qualified leads weekly</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-2 mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-sm">Personalized outreach</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-2 mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-sm">CRM integration</span>
                  </li>
                </ul>
                <p className="text-2xl font-bold text-primary mb-4">From $1,000/mo</p>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/services#lead-generation">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple, proven process to get you up and running in 2 weeks
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Free Audit",
                description: "We analyze your workflows and identify automation opportunities",
                icon: Zap,
              },
              {
                step: "2",
                title: "Custom Proposal",
                description: "Receive a detailed plan with ROI projections and pricing",
                icon: Users,
              },
              {
                step: "3",
                title: "Implementation",
                description: "We build and test your AI agents in 2 weeks",
                icon: Bot,
              },
              {
                step: "4",
                title: "Optimization",
                description: "Ongoing monitoring and improvements to maximize results",
                icon: TrendingUp,
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-primary" size={28} />
                </div>
                <div className="text-primary font-bold text-lg mb-2">Step {item.step}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                company: "Johnson's Restaurant",
                text: "AI customer support has been a game-changer. We handle 3x more inquiries without hiring additional staff.",
                rating: 5,
              },
              {
                name: "Michael Chen",
                company: "Chen Law Firm",
                text: "The AI assistant saves our team 25+ hours weekly on client intake and scheduling. ROI in the first month.",
                rating: 5,
              },
              {
                name: "Emily Rodriguez",
                company: "Rodriguez Realty",
                text: "Lead generation AI delivers qualified prospects every week. We've doubled our pipeline in 3 months.",
                rating: 5,
              },
            ].map((testimonial) => (
              <Card key={testimonial.name}>
                <CardHeader>
                  <div className="flex mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-yellow-400" size={18} />
                    ))}
                  </div>
                  <CardDescription className="text-base text-gray-700 italic">
                    "{testimonial.text}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Save 20+ Hours Per Week?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book a free 30-minute audit and we'll show you exactly how AI can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Book Free Audit
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary" asChild>
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm opacity-75">
            No commitment required • See results in 2 weeks • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  )
}
