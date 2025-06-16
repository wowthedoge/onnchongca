
import { 
  Building, Wrench, Coffee, Home, Car, Heart, 
  Stethoscope, GraduationCap, Music, Shield, 
  Truck, DollarSign, Users, Sparkles, Calculator,
  Hammer, Zap, Droplets, Factory, Laptop,
  TreePine, Gift, MapPin, Baby, UserCheck
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Clients = () => {
  const { isChinese } = useLanguage();

  const content = {
    en: {
      title: "Our Wonderful Clients",
      subtitle: "We are currently serving individuals and corporations across diverse industries",
      callToActionTitle: "Strategic Advice & Planning",
      callToActionDescription: "We look forward to the opportunity to assist businesses in other industries as well.",
      callToActionFooter: "We welcome new clients and are ready to help you succeed!"
    },
    zh: {
      title: "我们的优秀客户",
      subtitle: "我们目前为不同行业的个人和企业提供服务",
      callToActionTitle: "战略建议与规划",
      callToActionDescription: "我们期待有机会为其他行业的企业提供帮助。",
      callToActionFooter: "我们欢迎新客户，随时准备帮助您成功！"
    }
  };

  const clientIndustries = {
    en: [
      "Construction", "City Planning", "Consulting", "Development", "Interior Design & Staging",
      "Dental", "Lawncare", "Manufacturing", "Software", "Restaurant & Café",
      "Real Estate", "Financial Services", "Retail", "Education", "Entertainment",
      "Audio & Visual", "Home Automation", "School & Child Care", "Commercial Strata Corporation",
      "HVAC", "Plumbing", "Electrician", "Wholesale", "HR",
      "Spa Maintenance & Services", "Promotional Products Sales", "Mortgage", "Security",
      "Automotive Dealership", "Trucking", "Investment & Holding Companies", "International Student Recruitment",
      "Health & Beauty", "RMT"
    ],
    zh: [
      "建筑", "城市规划", "咨询", "开发", "室内设计与布置",
      "牙科", "草坪护理", "制造", "软件", "餐厅与咖啡厅",
      "房地产", "金融服务", "零售", "教育", "娱乐",
      "音响与视觉", "家庭自动化", "学校与托儿所", "商业分层公司",
      "暖通空调", "管道", "电工", "批发", "人力资源",
      "水疗维护与服务", "促销产品销售", "抵押贷款", "安全",
      "汽车经销商", "货运", "投资与控股公司", "国际学生招生",
      "健康与美容", "注册按摩治疗师"
    ]
  };

  const industryIcons = {
    "Construction": Building, "建筑": Building,
    "Restaurant & Café": Coffee, "餐厅与咖啡厅": Coffee,
    "Real Estate": Home, "房地产": Home,
    "Automotive Dealership": Car, "汽车经销商": Car,
    "Health & Beauty": Heart, "健康与美容": Heart,
    "HVAC": Wrench, "暖通空调": Wrench,
    "Dental": Stethoscope, "牙科": Stethoscope,
    "Education": GraduationCap, "教育": GraduationCap,
    "Entertainment": Music, "娱乐": Music,
    "Security": Shield, "安全": Shield,
    "Trucking": Truck, "货运": Truck,
    "Financial Services": DollarSign, "金融服务": DollarSign,
    "HR": Users, "人力资源": Users,
    "Spa Maintenance & Services": Sparkles, "水疗维护与服务": Sparkles,
    "Consulting": Calculator, "咨询": Calculator,
    "Plumbing": Droplets, "管道": Droplets,
    "Electrician": Zap, "电工": Zap,
    "Manufacturing": Factory, "制造": Factory,
    "Software": Laptop, "软件": Laptop,
    "Lawncare": TreePine, "草坪护理": TreePine,
    "Promotional Products Sales": Gift, "促销产品销售": Gift,
    "City Planning": MapPin, "城市规划": MapPin,
    "School & Child Care": Baby, "学校与托儿所": Baby,
    "International Student Recruitment": UserCheck, "国际学生招生": UserCheck,
    "Interior Design & Staging": Hammer, "室内设计与布置": Hammer
  };

  const currentContent = isChinese ? content.zh : content.en;
  const currentIndustries = isChinese ? clientIndustries.zh : clientIndustries.en;

  return (
    <section id="clients" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {currentContent.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {currentContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-12">
          {currentIndustries.map((industry, index) => {
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
          <h3 className="text-2xl font-bold mb-4">{currentContent.callToActionTitle}</h3>
          <p className="text-lg mb-6">
            {currentContent.callToActionDescription}
          </p>
          <p className="text-lg font-semibold">
            {currentContent.callToActionFooter}
          </p>
        </div>
      </div>
    </section>
  );
};
