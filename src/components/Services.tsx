
import { Calculator, FileText, TrendingUp, Shield, Users, PiggyBank } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: "Tax Preparation & Planning",
      description: "Comprehensive tax services for individuals and businesses. Maximize deductions and minimize liability."
    },
    {
      icon: FileText,
      title: "Bookkeeping & Accounting",
      description: "Professional bookkeeping services to keep your financial records accurate and up-to-date."
    },
    {
      icon: TrendingUp,
      title: "Financial Planning",
      description: "Strategic financial planning to help you achieve your personal and business goals."
    },
    {
      icon: Shield,
      title: "Audit & Assurance",
      description: "Independent audit services to ensure accuracy and compliance with regulations."
    },
    {
      icon: Users,
      title: "Business Advisory",
      description: "Expert business consulting to help you make informed decisions and grow your business."
    },
    {
      icon: PiggyBank,
      title: "Payroll Services",
      description: "Complete payroll management including tax withholdings and compliance reporting."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive accounting and financial services tailored to meet your specific needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
