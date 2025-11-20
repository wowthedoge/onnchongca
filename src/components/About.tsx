import { useLanguage } from "@/contexts/LanguageContext";

export const About = () => {
  const { isChinese } = useLanguage();

  const content = {
    en: {
      title: "About Onn Chong Inc.",
      subtitle: "",
      description1:
        "Onn Chong Inc. was established in 2006, and is based in Downtown Kelowna. As a Chartered Professional Accountant (CPA), we bring years of experience and expertise to help individuals and businesses navigate their financial challenges with confidence.",
      description2:
        "We serve clients in Okanagan and beyond with personalized accounting solutions tailored to your unique needs.",
      established: "Established",
      location: "Location",
      locationValue: "Downtown Kelowna, BC",
      whyChoose: "Why Choose Us?",
      reasons: [
        "Personalized service tailored to your needs",
        "Deep understanding of local regulations",
        "Proactive approach to tax planning",
        "Commitment to accuracy and integrity",
      ],
      teamTitle: "The Amazing People Behind Our Success",
      teamSubtitle:
        "Our experienced team of professionals is dedicated to providing exceptional accounting services",
    },
    zh: {
      title: "关于 Onn Chong Inc.",
      subtitle: "自2006年成立，为奥卡纳根谷地区提供专业会计服务",
      description1:
        "Onn Chong Inc. 成立于2006年，位于基洛纳市中心。作为注册专业会计师(CPA)，我们拥有多年的经验和专业知识，帮助个人和企业自信地应对财务挑战。",
      description2:
        "我们为整个奥卡纳根谷地区的客户提供个性化的会计解决方案，量身定制以满足您的独特需求，始终致力于共同成功。",
      established: "成立时间",
      location: "地址",
      locationValue: "基洛纳市中心，BC省",
      whyChoose: "为什么选择我们？",
      reasons: [
        "量身定制的个性化服务",
        "深入了解当地法规",
        "积极主动的财务规划方法",
        "对准确性和诚信的承诺",
      ],
      teamTitle: "成功背后的优秀团队",
      teamSubtitle: "我们经验丰富的专业团队致力于提供卓越的会计服务",
    },
  };

  const teamMembers = {
    en: [
      {
        name: "Onn Chong, CPA",
        role: "Founder & Principal",
        description:
          "Onn Chong started his accounting career in his teens doing basic accounting for his family business. He completed his schooling at Okanagan University College, then articled in a national accounting firm in Kelowna. After obtaining his Chartered Professional Accounting designation, he established Onn Chong Inc. In his free time, he enjoys spending time with his family.",
        color: "text-red-600",
      },
      {
        name: "Carol Peng, CPA",
        role: "Senior Accountant",
        description:
          "Since moving to Kelowna in 2003, Carol has built a career dedicated to helping businesses thrive. After completing articles with a national accounting firm—where they worked extensively in both the Small Business and Tax groups— Carol earned the Chartered Professional Accountant (CPA) designation in 2015. Today, Carol combines that national-firm training with a local's perspective, providing clients with expert tax and accounting advice tailored to the unique economic landscape of the Okanagan.",
        color: "text-blue-600",
      },
      {
        name: "Fiona Li",
        role: "Accountant",
        description:
          "Fiona started work at Onn Chong Inc. in the spring of 2022. She completed her accounting certificate program at Okanagan College. Before transitioning into accounting, she worked as a software specialist at one of the major banks in China. Fiona enjoys helping clients make sense of their finances and supporting them with clear, reliable information. In her spare time, she enjoys exploring the Okanagan and spending time with her family.",
        color: "text-green-600",
      },
      {
        name: "Elaine Gu",
        role: "Accountant",
        description:
          "Elaine Gu is a skilled accounting professional with experience working as an accountant in both China and Canada. After graduating from Okanagan College in 2020 with a focus in Accounting, she joined Onn Chong Inc, where she supports financial reporting, reconciliation, and bookkeeping. Proficient in Sage 50 and Quickbooks Online, Elaine is dedicated to accuracy, efficiency and ensuring compliance in all financial operations.",
        color: "text-purple-600",
      },
      {
        name: "Venus Leung",
        role: "Accountant",
        description:
          "After building a 15-year foundation across various industries, I've chosen to return my focus and expertise to accounting.\nMy goal is simple: to utilize that wide-ranging experience to deliver exceptional clarity and unwavering commitment to every financial task.",
        color: "text-pink-600",
      },
    ],
    zh: [
      {
        name: "Onn Chong, CPA",
        role: "创始人兼负责人",
        description:
          "Onn Chong从青少年时期开始为家族企业做基础会计工作，开始了他的会计职业生涯。他在奥卡纳根大学学院完成学业，后在基洛纳的一家大型会计公司工作实习而在获得注册专业会计师资格。他成立了Onn Chong Inc.。业余时间，他喜欢和家人在一起。",
        color: "text-red-600",
      },
      {
        name: "Carol Peng, CPA",
        role: "高级会计师",
        description:
          "自 2003 年搬到基洛纳以来，Carol 一直致力于帮助企业蓬勃发展。她在一家全国性的会计师事务所完成实习期间，曾在中小企业组和税务组积累了丰富经验，并于 2015 年获得特许专业会计师（CPA）资格。如今，Carol 将在全国性会计师事务所获得的专业培训与本地视角相结合，为客户提供专业的税务与会计咨询，量身定制适应奥肯那根独特经济环境的解决方案。",
        color: "text-blue-600",
      },
      {
        name: "Fiona Li",
        role: "会计师",
        description:
          "Fiona 于 2022 年春天加入 Onn Chong Inc.。她在奥肯那根学院完成了会计证书课程。在转入会计领域之前，她曾在中国的一家大型银行担任软件专员。Fiona 热衷于帮助客户理解他们的财务状况，并通过清晰、可靠的信息给予支持。闲暇时，她喜欢探索奥肯那根地区，并与家人共度时光。",
        color: "text-green-600",
      },
      {
        name: "Elaine Gu",
        role: "会计师",
        description:
          "Elaine Gu 是一位经验丰富的会计专业人士，曾在中国和加拿大担任会计工作。她于 2020 年毕业于奥肯那根学院，主修会计专业。同年，她加入 Onn Chong Inc.，负责财务报告、对账和簿记工作。Elaine 精通 Sage 50 和 QuickBooks Online，始终以准确、高效和合规为目标，确保所有财务操作的专业性。",
        color: "text-purple-600",
      },
      {
        name: "Venus Leung",
        role: "会计师",
        description:
          "在多个行业积累了 15 年的坚实基础之后，我选择重新将重心和专业知识投入到会计领域。我的目标很简单：运用那广泛的经验，为每一项财务工作提供卓越的清晰度与始终如一的专业承诺。",
        color: "text-pink-600",
      },
    ],
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
          <div className="mb-8">
            <img
              src="/lovable-uploads/office.jpg"
              alt="Onn Chong Inc. Office"
              className="w-full rounded-lg shadow-lg"
            />
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
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {currentContent.established}
                  </h4>
                  <p className="text-gray-600">2006</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {currentContent.location}
                  </h4>
                  <p className="text-gray-600">
                    {currentContent.locationValue}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-teal-400 to-cyan-500 rounded-2xl p-1">
                <div className="bg-white rounded-xl p-8 h-full">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    {currentContent.whyChoose}
                  </h4>
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
                    <span className="text-white font-bold text-xl">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h4 className={`text-xl font-bold ${member.color}`}>
                    {member.name}
                  </h4>
                  <p className="text-gray-600 font-medium">{member.role}</p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
