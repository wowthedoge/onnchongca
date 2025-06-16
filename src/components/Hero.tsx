
export const Hero = () => {
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
              Professional
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">
                {" "}Accounting{" "}
              </span>
              Solutions
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Trusted chartered professional accountant serving Kelowna and the Okanagan Valley. 
              Expert financial guidance for individuals and businesses.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Get Started Today
              </button>
              <button 
                onClick={() => window.open('tel:2508688238')}
                className="border-2 border-teal-400 text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors"
              >
                Call Now
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-r from-teal-400 to-cyan-500 rounded-2xl p-8 shadow-2xl">
              <img 
                src="/lovable-uploads/088decbc-ad63-4199-82cb-b94877a47a3a.png" 
                alt="Onn Chong CPA Business Card" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
