import React from 'react';
import { Clock, CheckCircle, Zap, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { services } from '../data/mock';

export const Services = () => {
  return (
    <section id="services" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-900 hover:bg-blue-200">
            Our Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Company Formation Worldwide
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Register your business in leading global jurisdictions with our expert guidance and comprehensive support
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <Card 
              key={service.id}
              className={`group hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden ${
                service.fastTrack.highlight ? 'ring-2 ring-amber-400' : ''
              }`}
            >
              {/* Fast Track Badge */}
              {service.fastTrack.highlight && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white px-4 py-1 rounded-bl-lg shadow-lg flex items-center space-x-1">
                    <Zap className="h-4 w-4" />
                    <span className="text-xs font-bold">FAST TRACK</span>
                  </div>
                </div>
              )}

              {/* Popular Badge */}
              {service.popular && !service.fastTrack.highlight && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-blue-100 text-blue-900">Popular</Badge>
                </div>
              )}

              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-3 rounded-xl">
                    <MapPin className="h-8 w-8 text-blue-900" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  {service.country}
                </CardTitle>
                <CardDescription className="text-base text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Timeline */}
                <div className="border-t pt-4 space-y-3">
                  {service.fastTrack.available && (
                    <div className="flex items-center justify-between bg-gradient-to-r from-amber-50 to-amber-100 p-3 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Zap className="h-5 w-5 text-amber-600" />
                        <span className="text-sm font-semibold text-gray-900">Fast Track</span>
                      </div>
                      <span className="text-sm font-bold text-amber-700">
                        {service.fastTrack.timeline}
                      </span>
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-gray-500" />
                      <span className="text-sm font-medium text-gray-700">Standard</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">
                      {service.normalTimeline}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Not sure which jurisdiction is right for you?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Our expert team is here to help you choose the best location for your business needs
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
