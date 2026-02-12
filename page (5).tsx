"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, Clock, MapPin } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    companySize: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // In production, this would send to your backend/email service
    // For now, we'll simulate a submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        companySize: "",
        service: "",
        message: "",
      })
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Let's Talk About Your Business
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Book your free 30-minute audit and discover how AI can save you 20+ hours per week
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Book Your Free Audit</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                      <h3 className="text-xl font-semibold text-green-900 mb-2">
                        Thank You!
                      </h3>
                      <p className="text-green-700">
                        We've received your request. One of our team members will reach out within 24 hours to schedule your free audit.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="John Doe"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="(123) 456-7890"
                          />
                        </div>

                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                            Company Name
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="Your Company Inc."
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 mb-2">
                            Company Size
                          </label>
                          <select
                            id="companySize"
                            name="companySize"
                            value={formData.companySize}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                          >
                            <option value="">Select size</option>
                            <option value="1-5">1-5 employees</option>
                            <option value="6-20">6-20 employees</option>
                            <option value="21-50">21-50 employees</option>
                            <option value="51+">51+ employees</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                            Service Interested In
                          </label>
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                          >
                            <option value="">Select a service</option>
                            <option value="consulting">AI Consulting</option>
                            <option value="customer-support">Customer Support AI</option>
                            <option value="lead-generation">Lead Generation</option>
                            <option value="competitor-intel">Competitor Intelligence</option>
                            <option value="research">Research Automation</option>
                            <option value="not-sure">Not sure yet</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Tell us about your business needs
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="What tasks take up most of your time? What are your biggest bottlenecks?"
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Book Free Audit"}
                      </Button>

                      <p className="text-sm text-gray-500 text-center">
                        We'll respond within 24 hours to schedule your free consultation
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:hello@aiagency.com" className="text-primary hover:underline">
                        hello@aiagency.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+1234567890" className="text-primary hover:underline">
                        (123) 456-7890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-sm text-gray-600">
                        Monday - Friday<br />
                        9:00 AM - 6:00 PM EST
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-gray-600">
                        Serving businesses across<br />
                        North America
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary text-white">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">What to Expect</h3>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Free 30-minute consultation</li>
                    <li>✓ Workflow analysis & recommendations</li>
                    <li>✓ Custom pricing proposal</li>
                    <li>✓ No pressure, no obligation</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
