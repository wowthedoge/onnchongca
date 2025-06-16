
export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Onn Chong Inc.
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              As a Chartered Professional Accountant (CPA), I bring years of experience and expertise 
              to help individuals and businesses navigate their financial challenges with confidence.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Located in the heart of Kelowna, BC, I serve clients throughout the Okanagan Valley 
              with personalized accounting solutions tailored to your unique needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Professional Credentials</h3>
                <p className="text-gray-600">Chartered Professional Accountant (CPA)</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Years of Experience</h3>
                <p className="text-gray-600">Extensive experience in accounting and tax</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-r from-teal-400 to-cyan-500 rounded-2xl p-1">
              <div className="bg-white rounded-xl p-8 h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-600">Personalized service tailored to your needs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-600">Deep understanding of local regulations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-600">Proactive approach to financial planning</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-600">Commitment to accuracy and integrity</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
