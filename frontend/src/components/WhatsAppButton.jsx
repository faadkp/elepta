import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { whatsappNumber } from '../data/mock';

export const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello! I'm interested in your company formation services.");
    window.open(`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {isHovered && (
        <div className="absolute bottom-full right-0 mb-2 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap animate-in fade-in slide-in-from-bottom-2">
          Chat with us on WhatsApp
          <div className="absolute top-full right-4 -mt-1 border-8 border-transparent border-t-gray-900"></div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse Animation */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
        
        {/* Icon */}
        <div className="relative">
          <MessageCircle className="h-7 w-7" />
        </div>

        {/* Online Indicator */}
        <div className="absolute -top-1 -right-1 h-4 w-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
      </button>
    </div>
  );
};
