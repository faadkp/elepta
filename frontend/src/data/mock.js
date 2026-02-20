// Mock data for Elepta Global Formation website

export const services = [
  {
    id: 1,
    country: "United Kingdom",
    flag: "🇬🇧",
    description: "Fast and efficient UK company formation with comprehensive support",
    features: [
      "Companies House registration",
      "Certificate of Incorporation",
      "Registered office address",
      "Digital company documents"
    ],
    normalTimeline: "7-15 days",
    fastTrack: {
      available: true,
      timeline: "3-4 days",
      highlight: true
    },
    popular: true
  },
  {
    id: 2,
    country: "United States",
    flag: "🇺🇸",
    description: "Register your LLC or Corporation in any US state with expert guidance",
    features: [
      "State filing & registration",
      "EIN registration",
      "Operating agreement",
      "Compliance support"
    ],
    normalTimeline: "10-20 days",
    fastTrack: {
      available: false
    },
    popular: true
  },
  {
    id: 3,
    country: "India",
    flag: "🇮🇳",
    description: "Complete Indian company registration with ROC and tax compliance",
    features: [
      "ROC registration",
      "PAN & TAN registration",
      "GST registration",
      "Digital signature certificates"
    ],
    normalTimeline: "15-25 days",
    fastTrack: {
      available: false
    },
    popular: false
  },
  {
    id: 4,
    country: "Saudi Arabia",
    flag: "🇸🇦",
    description: "Establish your business in Saudi Arabia with full regulatory compliance",
    features: [
      "Commercial registration",
      "MISA licensing",
      "Tax registration",
      "Zakat & income tax setup"
    ],
    normalTimeline: "20-30 days",
    fastTrack: {
      available: false
    },
    popular: false
  },
  {
    id: 5,
    country: "Qatar",
    flag: "🇶🇦",
    description: "Qatar company formation with seamless setup and regulatory support",
    features: [
      "Ministry of Commerce registration",
      "Trade license",
      "Tax registration number",
      "Chamber of Commerce membership"
    ],
    normalTimeline: "15-25 days",
    fastTrack: {
      available: false
    },
    popular: false
  }
];

export const testimonials = [
  {
    id: 1,
    name: "James Richardson",
    company: "Tech Innovations Ltd",
    country: "United Kingdom",
    rating: 5,
    text: "Elepta Global made our UK company formation incredibly smooth. The fast-track service delivered exactly as promised, and their team was professional throughout.",
    image: "JR"
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    company: "Global Ventures Inc",
    country: "United States",
    rating: 5,
    text: "Setting up our US LLC was seamless. The team handled all the paperwork and kept us informed at every step. Highly recommend their services!",
    image: "SM"
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    company: "Digital Solutions Pvt Ltd",
    country: "India",
    rating: 5,
    text: "Professional service from start to finish. They handled all ROC formalities and tax registrations efficiently. Best decision for our India expansion.",
    image: "RK"
  },
  {
    id: 4,
    name: "Mohammed Al-Rashid",
    company: "Al-Rashid Trading Co",
    country: "Saudi Arabia",
    rating: 5,
    text: "Excellent support for our Saudi business setup. The team's knowledge of local regulations was invaluable. Very satisfied with the service.",
    image: "MA"
  },
  {
    id: 5,
    name: "Fatima Al-Thani",
    company: "Qatar Consulting Group",
    country: "Qatar",
    rating: 5,
    text: "Elepta Global provided exceptional guidance throughout our Qatar company formation. Professional, efficient, and always available to help.",
    image: "FA"
  },
  {
    id: 6,
    name: "David Chen",
    company: "Pacific Trading Ltd",
    country: "United Kingdom",
    rating: 5,
    text: "The UK fast-track service is outstanding! We were up and running in just 4 days. Couldn't be happier with the results.",
    image: "DC"
  }
];

export const whatsappNumber = "+447818974289";

export const contactFormSubmit = (formData) => {
  // Mock submission - will be replaced with actual API call
  console.log("Form submitted:", formData);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: "Thank you! We'll contact you within 24 hours." });
    }, 1000);
  });
};
