"use client";

import { Mail, Phone, MapPin, Clock, Lightbulb } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <Lightbulb className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">First Principles Fellowship</span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
            <Link href="/#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link>
            <Link href="/contact" className="text-blue-600 font-medium">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section with Strong Background */}
      <section className="relative py-20 min-h-screen" style={{
        background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)'
      }}>
        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Get in Touch with
            <span className="text-yellow-300"> First Principles Fellowship</span>
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Have questions about our services? Want to learn more about how we can support your research? 
            We're here to help and would love to hear from you.
          </p>

          {/* Debug Info */}
          <div className="mt-8 text-center bg-white/20 p-4 rounded-lg">
            <div className="text-sm mb-2">
              ✅ Background should be visible (blue to purple gradient)
            </div>
            <div className="text-sm">
              Text should be white with yellow accent
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Visit Us
              </h3>
              <p className="text-gray-600">
                123 Research Avenue<br />
                Science City, SC 12345<br />
                United States
              </p>
              <div className="flex items-center text-sm text-gray-500 mt-3">
                <Clock className="h-4 w-4 mr-2" />
                Mon-Fri: 9:00 AM - 6:00 PM EST
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                Call Us
              </h3>
              <p className="text-gray-600">
                <strong>Main Office:</strong><br />
                +1 (555) 123-4567
              </p>
              <p className="text-gray-600 mt-2">
                <strong>Support Hotline:</strong><br />
                +1 (555) 987-6543
              </p>
              <p className="text-sm text-gray-500 mt-3">
                Available during business hours
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                Email Us
              </h3>
              <p className="text-gray-600">
                <strong>General Inquiries:</strong><br />
                info@firstprinciples.org
              </p>
              <p className="text-gray-600 mt-2">
                <strong>Support:</strong><br />
                support@firstprinciples.org
              </p>
              <p className="text-gray-600 mt-2">
                <strong>Partnerships:</strong><br />
                partners@firstprinciples.org
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2">Quick Response Time</h3>
              <p className="text-blue-800 text-sm">
                We typically respond to all inquiries within 24 hours during business days.
              </p>
            </div>
          </div>

          {/* Contact Information Details */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <h2 className="text-2xl font-bold mb-6">How to Reach Us</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">For General Inquiries</h3>
                  <p className="text-gray-600 mb-3">
                    For general questions about our organization, services, or partnership opportunities, 
                    please email us at <strong>info@firstprinciples.org</strong>.
                  </p>
                  <p className="text-sm text-gray-500">
                    We'll respond within 24 hours with the information you need.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3">For Service Inquiries</h3>
                  <p className="text-gray-600 mb-3">
                    To learn more about our technical consulting, training programs, mentorship, 
                    or sponsorship opportunities, contact us at <strong>support@firstprinciples.org</strong>.
                  </p>
                  <p className="text-sm text-gray-500">
                    Include details about your research background and specific needs.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3">For Partnership Opportunities</h3>
                  <p className="text-gray-600 mb-3">
                    If you're interested in partnering with us or becoming a mentor, 
                    please reach out at <strong>partners@firstprinciples.org</strong>.
                  </p>
                  <p className="text-sm text-gray-500">
                    We're always looking for experienced researchers to join our network.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3">For Technical Support</h3>
                  <p className="text-gray-600 mb-3">
                    For any technical questions or support needs, call our hotline at 
                    <strong> +1 (555) 987-6543</strong> during business hours.
                  </p>
                  <p className="text-sm text-gray-500">
                    Mon-Fri: 9:00 AM - 6:00 PM EST
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">How quickly can I expect a response?</h4>
                  <p className="text-gray-600 text-sm">
                    We typically respond to all inquiries within 24 hours during business days (Monday-Friday, 9 AM-6 PM EST).
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Do you offer free consultations?</h4>
                  <p className="text-gray-600 text-sm">
                    Yes, we offer a complimentary 30-minute initial consultation to discuss your research needs and how we can help.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Can I join as a mentor?</h4>
                  <p className="text-gray-600 text-sm">
                    We're always looking for experienced researchers to join our mentorship program. Please contact us at partners@firstprinciples.org.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Do you work with international researchers?</h4>
                  <p className="text-gray-600 text-sm">
                    Absolutely! We support researchers worldwide and offer virtual consulting and mentorship services.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">What information should I include in my inquiry?</h4>
                  <p className="text-gray-600 text-sm">
                    Please include your research background, specific needs, timeline, and any questions about our services. This helps us provide the most relevant information.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-gray-50 p-8 rounded-lg border">
              <h2 className="text-2xl font-bold mb-6">What to Expect</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <h4 className="font-semibold mb-2">Initial Contact</h4>
                  <p className="text-gray-600 text-sm">
                    Reach out via email or phone with your inquiry
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <h4 className="font-semibold mb-2">Consultation</h4>
                  <p className="text-gray-600 text-sm">
                    We'll schedule a call to discuss your needs
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <h4 className="font-semibold mb-2">Custom Solution</h4>
                  <p className="text-gray-600 text-sm">
                    We'll provide tailored recommendations for your research
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
