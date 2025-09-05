
import { useLanguage } from "@/contexts/LanguageContext";

export const Hero = () => {
  const { isChinese } = useLanguage();

  const content = {
    en: {
      title: "Professional",
      titleHighlight: " Accounting ",
      titleEnd: "Solutions",
      subtitle: "",
      testimonial: "Onn and his team are the most professional and thorough accounting services I've used for both my personal and business. I would highly recommend their services to any individual or business, you will not be disappointed!",
      testimonialAuthor: "- Chelsie",
      buttonText: "Get Started Today",
      sectionTitle: "",
      sectionSubtitle: "Building success together",
      acceptingClients: "We are accepting new clients.",
      contactInfo: "Contact our office at (250) 868-8238 to book an appointment."
    },
    zh: {
      title: "专业",
      titleHighlight: "会计",
      titleEnd: "解决方案",
      subtitle: "成立于2006年，位于基洛纳市中心。为奥卡纳根谷地区的个人和企业提供专业的财务指导。",
      testimonial: "Onn和他的团队是我用过的最专业和最注重细节的会计服务，无论是针对个人还是企业。我会向任何个人或企业强烈推荐他们的服务，您不会失望的！",
      testimonialAuthor: "- Chelsie",
      buttonText: "联系我们",
      sectionTitle: "携手共进",
      sectionSubtitle: "共同成功",
      acceptingClients: "欢迎新老客户联系我们",
      contactInfo: "请随时致电我们的办公室 (250) 868-8238 预约。"
    }
  };

  const currentContent = isChinese ? content.zh : content.en;

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {  
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {currentContent.title}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">
                {currentContent.titleHighlight}
              </span>
              {currentContent.titleEnd}
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              {currentContent.subtitle}
            </p>
            <div className="mt-8 bg-white rounded-lg p-6 shadow-lg border-l-4 border-teal-400">
              <blockquote className="text-lg italic text-gray-700">
                "{currentContent.testimonial}"
              </blockquote>
              <p className="mt-3 text-teal-600 font-semibold">{currentContent.testimonialAuthor}</p>
            </div>
            <div className="mt-8">
              <button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                {currentContent.buttonText}
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-r from-teal-400 to-cyan-500 rounded-2xl p-8 shadow-2xl">
              <img 
                src="/lovable-uploads/onnchongcard.png" 
                alt="Onn Chong CPA Business Card" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{currentContent.sectionTitle}</h2>
          <p className="text-xl text-gray-600">{currentContent.sectionSubtitle}</p>
          <div className="mt-6 bg-teal-50 rounded-lg p-6 inline-block">
            <p className="text-lg font-semibold text-teal-800">{currentContent.acceptingClients}</p>
            <p className="text-gray-700 mt-2">{currentContent.contactInfo}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
