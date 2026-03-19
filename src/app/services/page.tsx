"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BookOpen, Users, Lightbulb, Award, ShoppingCart, Plus, Minus, Check } from "lucide-react";
import Link from "next/link";

interface Service {
  id: string;
  title: string;
  category: string;
  price: number;
  duration: string;
  description: string;
  features: string[];
  icon: any;
  color: string;
}

const services: Service[] = [
  {
    id: "tech-consulting-basic",
    title: "Basic Technical Consulting",
    category: "Technical Consulting",
    price: 299,
    duration: "1 month",
    description: "Get expert guidance on your research methodology and experimental design.",
    features: [
      "4 hours of consultation",
      "Research methodology review",
      "Experimental design feedback",
      "Data analysis recommendations",
      "Email support"
    ],
    icon: Users,
    color: "text-blue-600"
  },
  {
    id: "tech-consulting-premium",
    title: "Premium Technical Consulting",
    category: "Technical Consulting",
    price: 899,
    duration: "3 months",
    description: "Comprehensive consulting package with ongoing support for complex research projects.",
    features: [
      "20 hours of consultation",
      "Complete research project review",
      "Advanced experimental design",
      "Statistical analysis planning",
      "Weekly check-ins",
      "Priority email & phone support"
    ],
    icon: Users,
    color: "text-blue-600"
  },
  {
    id: "training-workshop",
    title: "Research Methods Workshop",
    category: "Training Programs",
    price: 199,
    duration: "2 days",
    description: "Intensive workshop on cutting-edge research methodologies and techniques.",
    features: [
      "16 hours of hands-on training",
      "Research methodology fundamentals",
      "Data collection techniques",
      "Statistical analysis basics",
      "Certificate of completion",
      "Training materials"
    ],
    icon: BookOpen,
    color: "text-green-600"
  },
  {
    id: "training-advanced",
    title: "Advanced Research Techniques",
    category: "Training Programs",
    price: 599,
    duration: "1 week",
    description: "Deep dive into advanced research techniques and specialized methodologies.",
    features: [
      "40 hours of advanced training",
      "Specialized research methods",
      "Advanced statistical analysis",
      "Machine learning for research",
      "Publication strategies",
      "One-on-one mentoring sessions"
    ],
    icon: BookOpen,
    color: "text-green-600"
  },
  {
    id: "mentorship-monthly",
    title: "Monthly Mentorship Program",
    category: "Mentorship",
    price: 399,
    duration: "1 month",
    description: "One-on-one guidance from experienced researchers in your field.",
    features: [
      "Monthly one-on-one sessions",
      "Career guidance",
      "Research direction support",
      "Networking opportunities",
      "Paper review and feedback",
      "Grant application assistance"
    ],
    icon: Lightbulb,
    color: "text-purple-600"
  },
  {
    id: "mentorship-annual",
    title: "Annual Mentorship Fellowship",
    category: "Mentorship",
    price: 3999,
    duration: "1 year",
    description: "Comprehensive year-long mentorship program for dedicated researchers.",
    features: [
      "Bi-weekly mentoring sessions",
      "Complete career development plan",
      "Research project guidance",
      "Conference presentation coaching",
      "Publication support",
      "Funding application help",
      "Access to exclusive network"
    ],
    icon: Lightbulb,
    color: "text-purple-600"
  },
  {
    id: "sponsorship-starter",
    title: "Starter Research Grant",
    category: "Sponsorships",
    price: 999,
    duration: "6 months",
    description: "Financial support for early-stage research projects with high potential.",
    features: [
      "$1,000 research funding",
      "Project proposal review",
      "Progress monitoring",
      "Publication support",
      "Network access",
      "Certificate of sponsorship"
    ],
    icon: Award,
    color: "text-orange-600"
  },
  {
    id: "sponsorship-advanced",
    title: "Advanced Research Fellowship",
    category: "Sponsorships",
    price: 4999,
    duration: "1 year",
    description: "Comprehensive funding and support for established research projects.",
    features: [
      "$5,000 research funding",
      "Full project management support",
      "Equipment and resource access",
      "Collaboration opportunities",
      "Conference travel support",
      "Publication assistance",
      "Patent application help"
    ],
    icon: Award,
    color: "text-orange-600"
  }
];

interface CartItem extends Service {
  quantity: number;
}

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    // Load cart from localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const categories = ["all", "Technical Consulting", "Training Programs", "Mentorship", "Sponsorships"];

  const filteredServices = selectedCategory === "all" 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const addToCart = (service: Service) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === service.id);
      let newCart;
      if (existingItem) {
        newCart = prevCart.map(item =>
          item.id === service.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newCart = [...prevCart, { ...service, quantity: 1 }];
      }
      localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
    });
  };

  const removeFromCart = (serviceId: string) => {
    setCart(prevCart => {
      const newCart = prevCart.filter(item => item.id !== serviceId);
      localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
    });
  };

  const updateQuantity = (serviceId: string, delta: number) => {
    setCart(prevCart => {
      const newCart = prevCart.map(item => {
        if (item.id === serviceId) {
          const newQuantity = item.quantity + delta;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
        }
        return item;
      }).filter(item => item.quantity > 0);
      localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
    });
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Lightbulb className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">First Principles Fellowship</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
            <Link href="/services" className="text-blue-600 font-medium">Services</Link>
            <Link href="/#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link>
            <Link href="/#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
          </nav>
          <Button 
            variant="outline" 
            className="relative"
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Cart ({getTotalItems()})
          </Button>
        </div>
      </header>

      {/* Shopping Cart Sidebar */}
      <div className={`fixed right-0 top-0 h-full w-96 bg-white shadow-xl transform transition-transform z-50 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Shopping Cart</h2>
            <Button variant="ghost" onClick={() => setIsCartOpen(false)}>✕</Button>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <p className="text-gray-500 text-center">Your cart is empty</p>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">{item.title}</h4>
                    <Button variant="ghost" size="sm" onClick={() => removeFromCart(item.id)}>
                      ✕
                    </Button>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{item.duration}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <span className="font-semibold">${item.price * item.quantity}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {cart.length > 0 && (
          <div className="border-t p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-bold">Total:</span>
              <span className="text-2xl font-bold text-blue-600">${getTotalPrice()}</span>
            </div>
            <Button className="w-full" size="lg" asChild>
              <Link href="/checkout">
                Proceed to Checkout
              </Link>
            </Button>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of services designed to support researchers at every stage of their journey
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-8">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-64">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category === "all" ? "All Services" : category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Icon className={`h-8 w-8 ${service.color}`} />
                    <Badge variant="secondary">{service.category}</Badge>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-blue-600">
                        ${service.price}
                      </span>
                      <span className="text-sm text-gray-500">{service.duration}</span>
                    </div>
                    
                    <div className="space-y-2">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <span className="text-sm text-gray-500">
                          +{service.features.length - 3} more features
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Button 
                    className="w-full" 
                    onClick={() => addToCart(service)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No services found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
