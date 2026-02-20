import React from 'react';
import { Globe, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm mb-6">
              <Globe className="h-4 w-4 text-blue-900" />
              <span className="text-sm font-medium text-gray-700">Global Company Formation Experts</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Start Your Global Business
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600 mt-2">
                With Confidence
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Expert company formation services across UK, USA, India, Saudi Arabia, and Qatar. 
              Fast, reliable, and hassle-free business registration.
            </p>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto lg:mx-0">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div className="text-left">
                  <p className="font-semibold text-gray-900">UK Fast Track</p>
                  <p className="text-sm text-gray-600">Ready in 3-4 days</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Expert Support</p>
                  <p className="text-sm text-gray-600">24/7 assistance</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div className="text-left">
                  <p className="font-semibold text-gray-900">5 Countries</p>
                  <p className="text-sm text-gray-600">Global coverage</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Full Compliance</p>
                  <p className="text-sm text-gray-600">100% legal & secure</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg"
                onClick={scrollToContact}
                className="bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg px-8 py-6"
              >
                Start Your Company
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={scrollToServices}
                className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition-all duration-300 text-base sm:text-lg px-8 py-6"
              >
                Explore Services
              </Button>
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-amber-500/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  {['UK', 'USA', 'India', 'Saudi Arabia', 'Qatar'].map((country, index) => (
                    <div 
                      key={country}
                      className={`bg-gradient-to-br from-blue-50 to-slate-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 ${
                        index === 4 ? 'col-span-2' : ''
                      }`}
                    >
                      <Globe className="h-8 w-8 text-blue-900 mb-2" />
                      <p className="font-bold text-gray-900">{country}</p>
                      <p className="text-sm text-gray-600">Formation Available</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
