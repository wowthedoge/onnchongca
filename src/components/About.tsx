
import { useLanguage } from "@/contexts/LanguageContext";

export const About = () => {
  const { isChinese } = useLanguage();

  const content = {
    en: {
      title: "About Onn Chong Inc.",
      subtitle: "Professional accounting services established in 2006, serving the Okanagan Valley",
      description1: "Onn Chong Inc. was established in 2006, and is based in Downtown Kelowna. As a Chartered Professional Accountant (CPA), we bring years of experience and expertise to help individuals and businesses navigate their financial challenges with confidence.",
      description2: "We serve clients throughout the Okanagan Valley with personalized accounting solutions tailored to your unique needs, always committed to building success together.",
      established: "Established",
      location: "Location",
      locationValue: "Downtown Kelowna, BC",
      whyChoose: "Why Choose Us?",
      reasons: [
        "Personalized service tailored to your needs",
        "Deep understanding of local regulations", 
        "Proactive approach to financial planning",
        "Commitment to accuracy and integrity"
      ],
      teamTitle: "The Amazing People Behind Our Success",
      teamSubtitle: "Our experienced team of professionals is dedicated to providing exceptional accounting services"
    },
    zh: {
      title: "关于 Onn Chong Inc.",
      subtitle: "自2006年成立，为奥卡纳根谷提供专业会计服务",
      description1: "Onn Chong Inc. 成立于2006年，总部位于基洛纳市中心。作为注册专业会计师(CPA)，我们拥有多年的经验和专业知识，帮助个人和企业自信地应对财务挑战。",
      description2: "我们为整个奥卡纳根谷的客户提供个性化的会计解决方案，量身定制以满足您的独特需求，始终致力于共同成功。",
      established: "成立时间",
      location: "地址",
      locationValue: "基洛纳市中心，BC省",
      whyChoose: "为什么选择我们？",
      reasons: [
        "量身定制的个性化服务",
        "深入了解当地法规",
        "积极主动的财务规划方法",
        "对准确性和诚信的承诺"
      ],
      teamTitle: "成功背后的优秀团队",
      teamSubtitle: "我们经验丰富的专业团队致力于提供卓越的会计服务"
    }
  };

  const teamMembers = {
    en: [
      {
        name: "Onn Chong, CPA",
        role: "Founder & Principal",
        description: "Onn Chong started his accounting career in his teens doing basic accounting for his family business. He completed his schooling at Okanagan University College, then articled in a national accounting firm in Kelowna. After obtaining his Chartered Professional Accounting designation, he established Onn Chong Inc. In his free time, he enjoys spending time with his family.",
        color: "text-red-600"
      },
      {
        name: "Carol Peng, CPA",
        role: "Senior Accountant",
        description: "Carol Peng articled in a national accounting firm in Kelowna.",
        color: "text-blue-600"
      },
      {
        name: "Fiona Li",
        role: "Accountant",
        description: "Dedicated team member contributing to our comprehensive accounting services.",
        color: "text-green-600"
      },
      {
        name: "Elaine Gu",
        role: "Accountant", 
        description: "Experienced professional providing quality accounting solutions.",
        color: "text-purple-600"
      },
      {
        name: "Venus Leung",
        role: "Accountant",
        description: "Committed to delivering exceptional client service and accurate financial reporting.",
        color: "text-pink-600"
      }
    ],
    zh: [
      {
        name: "Onn Chong, CPA",
        role: "创始人兼负责人",
        description: "Onn Chong从十几岁开始为家族企业做基础会计工作，开始了他的会计职业生涯。他在奥卡纳根大学学院完成学业，然后在基洛纳的一家全国性会计公司实习。在获得注册专业会计师资格后，他成立了Onn Chong Inc.。业余时间，他喜欢和家人在一起。",
        color: "text-red-600"
      },
      {
        name: "Carol Peng, CPA", 
        role: "高级会计师",
        description: "Carol Peng在基洛纳的一家全国性会计公司实习。",
        color: "text-blue-600"
      },
      {
        name: "Fiona Li",
        role: "会计师",
        description: "专门的团队成员，为我们提供全面的会计服务。",
        color: "text-green-600"
      },
      {
        name: "Elaine Gu",
        role: "会计师",
        description: "经验丰富的专业人士，提供优质的会计解决方案。",
        color: "text-purple-600"
      },
      {
        name: "Venus Leung", 
        role: "会计师",
        description: "致力于提供卓越的客户服务和准确的财务报告。",
        color: "text-pink-600"
      }
    ]
  };

  const currentContent = isChinese ? content.zh : content.en;
  const currentTeamMembers = isChinese ? teamMembers.zh : teamMembers.en;

  return (
    <>
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {currentContent.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {currentContent.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {currentContent.description1}
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {currentContent.description2}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">{currentContent.established}</h4>
                  <p className="text-gray-600">2006</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">{currentContent.location}</h4>
                  <p className="text-gray-600">{currentContent.locationValue}</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-teal-400 to-cyan-500 rounded-2xl p-1">
                <div className="bg-white rounded-xl p-8 h-full">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">{currentContent.whyChoose}</h4>
                  <ul className="space-y-3">
                    {currentContent.reasons.map((reason, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3"></div>
                        <span className="text-gray-600">{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {currentContent.teamTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {currentContent.teamSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentTeamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{member.name.charAt(0)}</span>
                  </div>
                  <h4 className={`text-xl font-bold ${member.color}`}>{member.name}</h4>
                  <p className="text-gray-600 font-medium">{member.role}</p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
