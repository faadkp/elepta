import React, { useState } from 'react';
import { Send, Mail, User, Phone, Building, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { toast } from 'sonner';
import { contactFormSubmit } from '../data/mock';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await contactFormSubmit(formData);
      if (result.success) {
        toast.success(result.message);
        setFormData({
          name: '',
          email: '',
          phone: '',
          country: '',
          message: ''
        });
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Info */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Ready to Start Your Business?
              </h2>
              <p className="text-lg text-gray-600">
                Get in touch with our expert team today. We'll guide you through every step of your company formation journey.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-6 rounded-xl">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-900 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">WhatsApp Support</h3>
                    <p className="text-gray-600">+44 7818 974289</p>
                    <p className="text-sm text-gray-500 mt-1">Available 24/7 for your queries</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-6 rounded-xl">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-900 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                    <p className="text-gray-600">info@eleptaglobal.com</p>
                    <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-slate-900 to-blue-900 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose Elepta Global?</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="h-6 w-6 rounded-full bg-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-900 text-sm font-bold">✓</span>
                  </div>
                  <span>Expert guidance across 5 major jurisdictions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="h-6 w-6 rounded-full bg-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-900 text-sm font-bold">✓</span>
                  </div>
                  <span>UK Fast Track service in just 3-4 days</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="h-6 w-6 rounded-full bg-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-900 text-sm font-bold">✓</span>
                  </div>
                  <span>100% compliance with local regulations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="h-6 w-6 rounded-full bg-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-900 text-sm font-bold">✓</span>
                  </div>
                  <span>Dedicated support throughout the process</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side - Form */}
          <div>
            <Card className="shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl">Get Started Today</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="pl-10"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="pl-10"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+44 1234 567890"
                        value={formData.phone}
                        onChange={handleChange}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  {/* Country Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="country">Country of Formation *</Label>
                    <div className="relative">
                      <Building className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      >
                        <option value="">Select a country</option>
                        <option value="uk">United Kingdom</option>
                        <option value="usa">United States</option>
                        <option value="india">India</option>
                        <option value="saudi">Saudi Arabia</option>
                        <option value="qatar">Qatar</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your business requirements..."
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-white py-6 text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Processing...</>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
