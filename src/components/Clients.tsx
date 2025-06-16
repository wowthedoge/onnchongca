
import { 
  Building, Wrench, Coffee, Home, Car, Heart, 
  Stethoscope, GraduationCap, Music, Shield, 
  Truck, DollarSign, Users, Sparkles, Calculator,
  Hammer, Zap, Droplets, Factory, Laptop,
  TreePine, Gift, MapPin, Baby, UserCheck
} from "lucide-react";

export const Clients = () => {
  const clientIndustries = [
    "Construction", "City Planning", "Consulting", "Development", "Interior Design & Staging",
    "Dental", "Lawncare", "Manufacturing", "Software", "Restaurant & Café",
    "Real Estate", "Financial Services", "Retail", "Education", "Entertainment",
    "Audio & Visual", "Home Automation", "School & Child Care", "Commercial Strata Corporation",
    "HVAC", "Plumbing", "Electrician", "Wholesale", "HR",
    "Spa Maintenance & Services", "Promotional Products Sales", "Mortgage", "Security",
    "Automotive Dealership", "Trucking", "Investment & Holding Companies", "International Student Recruitment",
    "Health & Beauty", "RMT"
  ];

  const industryIcons = {
    "Construction": Building,
    "Restaurant & Café": Coffee,
    "Real Estate": Home,
    "Automotive Dealership": Car,
    "Health & Beauty": Heart,
    "HVAC": Wrench,
    "Dental": Stethoscope,
    "Education": GraduationCap,
    "Entertainment": Music,
    "Security": Shield,
    "Trucking": Truck,
    "Financial Services": DollarSign,
    "HR": Users,
    "Spa Maintenance & Services": Sparkles,
    "Consulting": Calculator,
    "Plumbing": Droplets,
    "Electrician": Zap,
    "Manufacturing": Factory,
    "Software": Laptop,
    "Lawncare": TreePine,
    "Promotional Products Sales": Gift,
    "City Planning": MapPin,
    "School & Child Care": Baby,
    "International Student Recruitment": UserCheck,
    "Interior Design & Staging": Hammer
  };

  return (
    <section id="clients" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Wonderful Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are currently serving individuals and corporations across diverse industries
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-12">
          {clientIndustries.map((industry, index) => {
            const IconComponent = industryIcons[industry] || Building;
            return (
              <div 
                key={index}
                className="bg-gray-50 p-4 rounded-lg text-center hover:bg-teal-50 transition-colors group"
              >
                <div className="w-8 h-8 mx-auto mb-2 text-teal-600 group-hover:text-teal-700">
                  <IconComponent className="w-full h-full" />
                </div>
                <p className="text-sm text-gray-700 font-medium">{industry}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-teal-400 to-cyan-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Strategic Advice & Planning</h3>
          <p className="text-lg mb-6">
            We look forward to the opportunity to assist businesses in other industries as well.
          </p>
          <p className="text-lg font-semibold">
            We welcome new clients and are ready to help you succeed!
          </p>
        </div>
      </div>
    </section>
  );
};
