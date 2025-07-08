import { Lightbulb, Users, Globe, ArrowRight, BookOpen } from "lucide-react";

const backgroundGradient = "bg-gradient-to-br from-green-900 via-emerald-900 to-green-800";

const VisionPage = () => {
  return (
    <div className={`min-h-screen ${backgroundGradient} relative overflow-hidden`}>
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
            <Lightbulb className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-lime-200">Vision</span>
          </h1>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-white/10">
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-800 leading-relaxed">
                "We envision a future where education becomes a{" "}
                <span className="text-green-700 font-semibold">contagious force</span> — where every learner becomes a{" "}
                <span className="text-[#decf78] font-semibold">teacher</span>, every question sparks{" "}
                <span className="text-green-700 font-semibold">innovation</span>, and every child leads with{" "}
                <span className="text-[#decf78] font-semibold">knowledge</span>."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Pillars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built on Strong Foundations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our vision is supported by three fundamental pillars that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contagious Learning */}
            <div>
              <div className="bg-green-50 p-8 rounded-2xl h-full shadow-md">
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                  <BookOpen className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Contagious Learning
                </h3>
                <p className="text-gray-700 mb-6">
                  We believe learning should spread like wildfire. When one child discovers the joy of knowledge, 
                  they naturally want to share it with others, creating a ripple effect.
                </p>
                <ul className="space-y-2 text-green-700">
                  <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2" /> Peer-to-peer teaching</li>
                  <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2" /> Community engagement</li>
                  <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2" /> Knowledge sharing culture</li>
                </ul>
              </div>
            </div>

            {/* Innovation Catalyst */}
            <div>
              <div className="bg-[#f8f6ec] p-8 rounded-2xl h-full shadow-md">
                <div className="flex items-center justify-center w-16 h-16 bg-[#f1ebcb] rounded-full mb-6">
                  <Lightbulb className="h-8 w-8 text-[#decf78]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Innovation Catalyst
                </h3>
                <p className="text-gray-700 mb-6">
                  Every question is a seed of innovation. We nurture curiosity and encourage students to think 
                  beyond conventional boundaries.
                </p>
                <ul className="space-y-2 text-[#decf78]">
                  <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2" /> Critical thinking skills</li>
                  <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2" /> Creative problem solving</li>
                  <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2" /> Future-ready mindset</li>
                </ul>
              </div>
            </div>

            {/* Knowledge Leadership */}
            <div>
              <div className="bg-green-50 p-8 rounded-2xl h-full shadow-md">
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Knowledge Leadership
                </h3>
                <p className="text-gray-700 mb-6">
                  We empower children to become leaders in their communities, using knowledge as their foundation.
                </p>
                <ul className="space-y-2 text-green-700">
                  <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2" /> Leadership development</li>
                  <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2" /> Community impact</li>
                  <li className="flex items-center"><ArrowRight className="h-4 w-4 mr-2" /> Sustainable change</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Vision */}
      <section className="py-20 bg-[#0a1d2c] text-white rounded-t-[3rem] mt-[-2rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            The Future We're Building
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#2e5339] rounded-full flex items-center justify-center">
                  <Globe className="h-6 w-6 text-[#9bcf78]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Global Impact, Local Roots</h3>
                  <p className="text-gray-300">
                    Starting from Indian communities and expanding globally, creating a network of empowered young leaders.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#3a3219] rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-[#decf78]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Self-Sustaining Communities</h3>
                  <p className="text-gray-300">
                    Communities where knowledge flows naturally and everyone contributes to collective growth.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#2e5339] rounded-full flex items-center justify-center">
                  <Lightbulb className="h-6 w-6 text-[#9bcf78]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Innovation Ecosystem</h3>
                  <p className="text-gray-300">
                    A place where students become researchers and solve global challenges locally.
                  </p>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="bg-[#13283c] rounded-2xl shadow-xl p-8 border border-[#2a4b68]">
              <h3 className="text-2xl font-bold text-center mb-6">By 2030, We Envision:</h3>
              <div className="space-y-4">
                <div className="flex justify-between p-4 bg-[#1b3c2e] rounded-lg">
                  <span>Students Impacted</span>
                  <span className="text-[#9bcf78] font-bold text-xl">10,000+</span>
                </div>
                <div className="flex justify-between p-4 bg-[#3f3a21] rounded-lg">
                  <span>Communities Reached</span>
                  <span className="text-[#decf78] font-bold text-xl">100+</span>
                </div>
                <div className="flex justify-between p-4 bg-[#1b3c2e] rounded-lg">
                  <span>Student Teachers</span>
                  <span className="text-[#9bcf78] font-bold text-xl">1,000+</span>
                </div>
                <div className="flex justify-between p-4 bg-[#3f3a21] rounded-lg">
                  <span>Innovation Projects</span>
                  <span className="text-[#decf78] font-bold text-xl">500+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionPage;
