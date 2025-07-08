import { useState, useEffect } from "react";
import {
  BookOpen,
  Users,
  Rocket,
  ArrowRight,
  Star,
  Target,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Gallery from "./GalleryPage";

const HomePage = () => {
  const [currentTagline, setCurrentTagline] = useState(0);

  const taglines = [
    { icon: BookOpen, text: "Equal Access to Learning" },
    { icon: Rocket, text: "Empowering the Next Generation" },
    { icon: Globe, text: "Creating Changemakers Through Education" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { number: "150+", label: "Students Reached", icon: Users },
    { number: "25+", label: "Workshops Conducted", icon: Target },
    { number: "10+", label: "Cities Covered", icon: Globe },
    { number: "100%", label: "Success Rate", icon: Star },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20 lg:py-32 bg-gradient-to-br from-green-800 via-green-700 to-emerald-600 overflow-hidden">
        {/* Background Images */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins font-bold text-4xl md:text-6xl lg:text-7xl mb-6 text-center">
            <span className="block text-sm md:text-base lg:text-lg text-gray-300 mb-2">
              Soil Steps presents
            </span>
            <span className="text-gradient inline-block">KARKAI INDREY</span>
          </h1>
          <div className="text-xl md:text-2xl lg:text-3xl font-medium mb-4">
            A Rally of Education
          </div>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-100">
            A nationwide movement to bring education and inspiration to every
            child in India.
            <br />
            <span className="font-semibold">
              Powered by Passion, Driven by Purpose.
            </span>
            <br />
            <span className="text-orange-200">
              Learning for All, Dreams Without Limits.
            </span>
          </p>

          {/* Tagline */}
          <div className="h-16 flex items-center justify-center mb-8">
            <div
              className="flex items-center space-x-3 transition-all"
              key={currentTagline}
            >
              {(() => {
                const CurrentIcon = taglines[currentTagline].icon;
                return <CurrentIcon className="h-8 w-8 text-orange-200" />;
              })()}
              <span className="text-2xl font-medium text-orange-200">
                {taglines[currentTagline].text}
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/workshops">
              <Button className="bg-white text-green-900 hover:bg-gray-100 font-semibold px-8 py-3 text-lg">
                Explore Workshops
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/apply">
              <Button
                variant="outline"
                className="bg-[#F59E0B] border-white text-white hover:bg-white hover:text-green-900 font-semibold px-8 py-3 text-lg"
              >
                Join as Volunteer
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <stat.icon className="h-8 w-8 text-green-700" />
                </div>
                <div className="text-3xl font-bold text-gray-900 font-poppins">
                  {stat.number}
                </div>
                <div className="text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative py-20 bg-gray-100 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-white rounded-b-[50%] z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4 bg-gradient-to-r from-green-900 via-gray-700 to-black bg-clip-text text-transparent">
              🌟 Glimpses of Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Capturing the smiles, spirit, and spark of change from our
              workshops and rallies.
            </p>
          </div>
          <div className="rounded-[2rem] bg-white shadow-xl p-4 md:p-8 border border-gray-200 transition-transform hover:-translate-y-1 hover:scale-[1.02]">
            <Gallery />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-white rounded-t-[50%] z-0" />
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-br from-white via-green-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-green-900 mb-4">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-lime-400 to-green-700 bg-clip-text text-transparent">
                Soil Steps
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're building more than just an educational program — we're
              creating a movement that transforms communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-green-700" />
              </div>
              <h3 className="font-poppins font-semibold text-green-400 text-xl mb-3">
                Hands-on Learning
              </h3>
              <p className="text-gray-600">
                Interactive workshops that make complex concepts simple and
                engaging through practical experiments and activities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-green-700" />
              </div>
              <h3 className="font-poppins font-semibold text-green-400 text-xl mb-3">
                Community Impact
              </h3>
              <p className="text-gray-600">
                Building a network of young leaders who carry forward the
                mission of education in their communities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="h-6 w-6 text-green-700" />
              </div>
              <h3 className="font-poppins font-semibold text-green-400 text-xl mb-3">
                Future Ready
              </h3>
              <p className="text-gray-600">
                Preparing students for tomorrow's challenges with skills in
                science, technology, and innovative thinking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
            Ready to Join the Movement?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of something bigger. Help us reach every child, every dream,
            every possibility.
          </p>
          <Link to="/contact">
            <Button className="bg-[#166534] border-2 border-white text-white hover:bg-amber-500 hover:text-black px-8 py-3">
              Become a Volunteer Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
      {/* Partner Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-green-900 mb-6">
            Our Partners
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            We’re proud to collaborate with organizations that share our vision
            for education and empowerment.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png"
              alt="Partner 1"
              className="mx-auto h-16 grayscale hover:grayscale-0 transition"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png"
              alt="IBM"
              className="mx-auto h-16 grayscale hover:grayscale-0 transition"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png"
              alt="Apple"
              className="mx-auto h-16 grayscale hover:grayscale-0 transition"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png"
              alt="Microsoft"
              className="mx-auto h-16 grayscale hover:grayscale-0 transition"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
