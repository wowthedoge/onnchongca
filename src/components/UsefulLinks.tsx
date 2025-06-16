
import { ExternalLink } from "lucide-react";

export const UsefulLinks = () => {
  const links = [
    { name: "Canada Revenue Agency", url: "https://www.canada.ca/en/revenue-agency.html" },
    { name: "BC Provincial Sales Tax", url: "https://www2.gov.bc.ca/gov/content/taxes/sales-taxes/pst" },
    { name: "BC Employment Standards", url: "https://www2.gov.bc.ca/gov/content/employment-business/employment-standards-advice" },
    { name: "WorkSafe BC", url: "https://www.worksafebc.com/" },
    { name: "Service Canada", url: "https://www.canada.ca/en/employment-social-development/corporate/portfolio/service-canada.html" },
    { name: "Pharmacare", url: "https://www2.gov.bc.ca/gov/content/health/health-drug-coverage/pharmacare-for-bc-residents" },
    { name: "Bank of Canada", url: "https://www.bankofcanada.ca/" },
    { name: "Chartered Professional Accountants of BC", url: "https://www.cpabc.ca/" }
  ];

  return (
    <section id="links" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Useful Links
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Important resources and government agencies for your business and personal needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
                  {link.name}
                </h3>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-teal-600 transition-colors" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
