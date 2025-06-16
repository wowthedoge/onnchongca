
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
              Established in 2006, based in Downtown Kelowna. Expert financial guidance for individuals and businesses throughout the Okanagan Valley.
            </p>
            <div className="mt-8 bg-white rounded-lg p-6 shadow-lg border-l-4 border-teal-400">
              <blockquote className="text-lg italic text-gray-700">
                "Onn and his team are the most professional and thorough accounting services I've used for both my personal and business. I would highly recommend their services to any individual or business, you will not be disappointed!"
              </blockquote>
              <p className="mt-3 text-teal-600 font-semibold">- Chelsie</p>
            </div>
            <div className="mt-8">
              <button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Get Started Today
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
        
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Succeeding Together</h2>
          <p className="text-xl text-gray-600">Building success together</p>
          <div className="mt-6 bg-teal-50 rounded-lg p-6 inline-block">
            <p className="text-lg font-semibold text-teal-800">We are accepting new clients.</p>
            <p className="text-gray-700 mt-2">Feel free to contact our office at (250) 868-8238 to book an appointment.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
