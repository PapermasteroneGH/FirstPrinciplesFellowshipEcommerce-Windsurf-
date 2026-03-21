"use client";

import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Clock, Lightbulb } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { 
      gradient: 'linear-gradient(135deg, #3B82F6, #8B5CF6)', 
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e4041f?w=1920&h=1080&fit=crop',
      title: 'Research Collaboration' 
    },
    { 
      gradient: 'linear-gradient(135deg, #10B981, #3B82F6)', 
      image: 'https://images.unsplash.com/photo-1521791136064-e73952e038b7?w=1920&h=1080&fit=crop',
      title: 'Innovation Hub' 
    },
    { 
      gradient: 'linear-gradient(135deg, #8B5CF6, #EC4899)', 
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop',
      title: 'Global Network' 
    },
    { 
      gradient: 'linear-gradient(135deg, #F97316, #EF4444)', 
      image: 'https://images.unsplash.com/photo-1551434679-e076c223a692?w=1920&h=1080&fit=crop',
      title: 'Advanced Research' 
    },
    { 
      gradient: 'linear-gradient(135deg, #14B8A6, #10B981)', 
      image: 'https://images.unsplash.com/photo-1517245386807-bb0f887752e4?w=1920&h=1080&fit=crop',
      title: 'Future Technologies' 
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="min-h-screen" style={{background: slides[currentSlide].gradient}}>
      {/* Background Image Layer */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${slides[currentSlide].image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3,
          zIndex: 0
        }}
      />

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

      {/* Hero Section */}
      <section className="relative py-20 min-h-screen" style={{paddingTop: '80px', zIndex: 1}}>
        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{color: 'white'}}>
            Get in Touch with
            <span style={{color: '#FDE047'}}> First Principles Fellowship</span>
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed" style={{color: 'white'}}>
            Have questions about our services? Want to learn more about how we can support your research? 
            We're here to help and would love to hear from you.
          </p>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                style={{
                  width: index === currentSlide ? '32px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  backgroundColor: index === currentSlide ? 'white' : 'rgba(255, 255, 255, 0.5)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Current Slide Info */}
          <div className="mt-6 text-center">
            <h3 className="text-lg font-semibold" style={{color: 'white'}}>
              {slides[currentSlide].title}
            </h3>
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
