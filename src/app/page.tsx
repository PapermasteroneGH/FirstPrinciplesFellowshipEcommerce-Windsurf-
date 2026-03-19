import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Lightbulb, Award, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Lightbulb className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">First Principles Fellowship</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
          </nav>
          <Button asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
            Empowering Scientific Research
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Advancing Research Through
            <span className="text-blue-600"> First Principles</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            We provide comprehensive technical consulting, training, mentorship, and sponsorships 
            to support the next generation of scientific researchers and innovators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link href="#services">
                Learn About Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive support solutions for researchers at every stage of their journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Technical Consulting</CardTitle>
                <CardDescription>
                  Expert guidance on research methodologies, experimental design, and data analysis
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Training Programs</CardTitle>
                <CardDescription>
                  Comprehensive workshops and courses on cutting-edge research techniques
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Mentorship</CardTitle>
                <CardDescription>
                  One-on-one guidance from experienced researchers and industry experts
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Sponsorships</CardTitle>
                <CardDescription>
                  Financial support for promising research projects and researchers
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <Button size="lg" asChild>
              <Link href="/contact">
                Inquire About Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                About First Principles Fellowship
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-600 mb-4">
                  First Principles Fellowship is dedicated to advancing scientific research by 
                  providing comprehensive support to researchers at all levels.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  We believe in the power of first-principles thinking to solve complex problems 
                  and drive innovation in science and technology.
                </p>
                <p className="text-lg text-gray-600">
                  Our team of experienced researchers and industry professionals is committed to 
                  fostering the next generation of scientific leaders.
                </p>
              </div>
              
              <div className="bg-blue-50 p-8 rounded-lg">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600">500+</div>
                    <div className="text-gray-600">Researchers Supported</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600">50+</div>
                    <div className="text-gray-600">Partner Institutions</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600">100+</div>
                    <div className="text-gray-600">Projects Funded</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600">25+</div>
                    <div className="text-gray-600">Expert Mentors</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Research Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Highlighting breakthrough research projects supported by First Principles Fellowship
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-blue-600 font-bold text-sm">AI</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Neural Network Optimization</h3>
                <Badge variant="secondary" className="mb-3">Machine Learning</Badge>
              </div>
              <p className="text-gray-600 mb-4">
                Development of novel optimization algorithms for deep neural networks, resulting in 40% reduction in training time while maintaining accuracy. Published in Nature Machine Intelligence.
              </p>
              <div className="text-sm text-gray-500">
                <div className="font-semibold">Dr. Sarah Chen</div>
                <div>Stanford AI Lab • 2024</div>
              </div>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-green-600 font-bold text-sm">QM</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Quantum Computing Applications</h3>
                <Badge variant="secondary" className="mb-3">Quantum Physics</Badge>
              </div>
              <p className="text-gray-600 mb-4">
                Pioneering work in quantum algorithm development for drug discovery simulations. Achieved 100x speedup in molecular modeling calculations compared to classical methods.
              </p>
              <div className="text-sm text-gray-500">
                <div className="font-semibold">Prof. Michael Rodriguez</div>
                <div>MIT Quantum Computing Center • 2024</div>
              </div>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-purple-600 font-bold text-sm">BIO</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">CRISPR Gene Editing</h3>
                <Badge variant="secondary" className="mb-3">Biotechnology</Badge>
              </div>
              <p className="text-gray-600 mb-4">
                Breakthrough in precision gene editing techniques for treating genetic disorders. Successfully demonstrated 95% accuracy in targeted DNA modifications in human cell cultures.
              </p>
              <div className="text-sm text-gray-500">
                <div className="font-semibold">Dr. Emily Watson</div>
                <div>Harvard Medical School • 2023</div>
              </div>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Our supported researchers have published 150+ papers in top-tier journals and secured $25M+ in follow-on funding.
            </p>
            <Button variant="outline" asChild>
              <Link href="/contact">Discuss Your Research Project</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Advance Your Research?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Connect with our team to learn how we can support your research journey through technical consulting, training, mentorship, and sponsorships.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
            <Link href="/contact">
              Get in Touch Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Lightbulb className="h-6 w-6" />
                <span className="text-lg font-bold">First Principles Fellowship</span>
              </div>
              <p className="text-gray-400">
                Empowering researchers to push the boundaries of scientific knowledge.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Technical Consulting</li>
                <li>Training Programs</li>
                <li>Mentorship</li>
                <li>Sponsorships</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Success Stories</li>
                <li>Contact</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>info@firstprinciples.org</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Research Ave</li>
                <li>Science City, SC 12345</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 First Principles Fellowship. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
