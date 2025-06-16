
import { Calculator, FileText, TrendingUp, Shield, Users, PiggyBank, Building, Home, Gavel } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Services = () => {
  const { isChinese } = useLanguage();

  const content = {
    en: {
      title: "Professional Services",
      subtitle: "Onn Chong Inc. provides a comprehensive range of accounting and tax services",
      additionalServicesTitle: "Additional Services",
      serviceCategories: [
        {
          icon: Home,
          title: "Individual Services",
          services: [
            "Personal Income Tax Return Preparation",
            "Estate Planning",
            "Tax Planning"
          ]
        },
        {
          icon: Building,
          title: "Business Services",
          services: [
            "Tax Planning & Consulting",
            "Bookkeeping",
            "T2 Corporate Income Tax Return",
            "T4 Statement of Remuneration Paid",
            "T5 Statement of Investment Income",
            "GST Returns",
            "PST Returns",
            "WCB Returns"
          ]
        },
        {
          icon: FileText,
          title: "Corporation Services",
          services: [
            "Compilation of Financial Information",
            "Review of Financial Statements",
            "T2 Corporate Income Tax Return"
          ]
        },
        {
          icon: Users,
          title: "Non-Resident Services",
          services: [
            "Canadian Personal Tax Return for Non-Resident",
            "Canadian Personal Tax Return under Section 216",
            "NR4 Return",
            "NR6 Return",
            "T2062 and T2062A Application for Certificate of Compliance"
          ]
        },
        {
          icon: Shield,
          title: "Trust Services",
          services: [
            "T3 Trust Income Tax Return"
          ]
        },
        {
          icon: Gavel,
          title: "Audits and Appeals",
          services: [
            "Canada Revenue Agency Audits and Appeals",
            "Voluntary Disclosure Program",
            "Tax Payer Relief Program",
            "Provincial Government Compliance Review"
          ]
        }
      ],
      otherServices: [
        "Underused Housing Tax Return",
        "BC Speculation and Vacancy Tax Declaration",
        "Strategic Advice & Planning"
      ]
    },
    zh: {
      title: "专业服务",
      subtitle: "Onn Chong Inc. 提供全面的会计和税务服务",
      additionalServicesTitle: "其他服务",
      serviceCategories: [
        {
          icon: Home,
          title: "个人服务",
          services: [
            "个人所得税申报准备",
            "遗产规划",
            "税务规划"
          ]
        },
        {
          icon: Building,
          title: "企业服务",
          services: [
            "税务规划与咨询",
            "记账服务",
            "T2企业所得税申报",
            "T4薪酬支付报表",
            "T5投资收入报表",
            "GST申报",
            "PST申报",
            "WCB申报"
          ]
        },
        {
          icon: FileText,
          title: "公司服务",
          services: [
            "财务信息汇编",
            "财务报表审查",
            "T2企业所得税申报"
          ]
        },
        {
          icon: Users,
          title: "非居民服务",
          services: [
            "非居民加拿大个人税务申报",
            "第216条款下的加拿大个人税务申报",
            "NR4申报",
            "NR6申报",
            "T2062和T2062A合规证书申请"
          ]
        },
        {
          icon: Shield,
          title: "信托服务",
          services: [
            "T3信托所得税申报"
          ]
        },
        {
          icon: Gavel,
          title: "审计和上诉",
          services: [
            "加拿大税务局审计和上诉",
            "自愿披露计划",
            "纳税人救济计划",
            "省政府合规审查"
          ]
        }
      ],
      otherServices: [
        "未充分利用住房税申报",
        "BC省投机和空置税申报",
        "战略建议与规划"
      ]
    }
  };

  const currentContent = isChinese ? content.zh : content.en;

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {currentContent.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {currentContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentContent.serviceCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.services.map((service, serviceIndex) => (
                  <li key={serviceIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{currentContent.additionalServicesTitle}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {currentContent.otherServices.map((service, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                  <span className="text-gray-700">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
