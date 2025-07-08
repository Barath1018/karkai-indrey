import { Instagram, Linkedin, Mail, Sprout } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Sprout className="h-8 w-8 text-green-500" />
              <span className="font-poppins font-bold text-xl">Karkai Indrey</span>
            </div>
            <p className="text-gray-300 mb-4">
              <strong>Soil Steps presents Karkai Indrey</strong> – A Rally of Education. Educating government school students about agriculture and holistic development. Private schools may also apply.
            </p>
            <a
              href="https://your-donation-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded shadow mt-4"
            >
              Donate Now
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-green-500 transition-colors">Home</a></li>
              <li><a href="/vision" className="text-gray-300 hover:text-green-500 transition-colors">Vision</a></li>
              <li><a href="/mission" className="text-gray-300 hover:text-green-500 transition-colors">Mission</a></li>
              <li><a href="/workshops" className="text-gray-300 hover:text-green-500 transition-colors">Workshops</a></li>
              <li><a href="/apply" className="text-gray-300 hover:text-green-500 transition-colors">Apply (Private Schools)</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-green-500 transition-colors">Join Us</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Connect</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-500" />
                <div className="text-sm">
                  <p>karkaiindrey@outlook.com</p>
                  <p>karkaiindrey@gmail.com</p>
                </div>
              </div>

              <div className="flex space-x-4 mt-4">
                <a
                  href="https://instagram.com/soil_steps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/soil-steps-57b653351/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-center mb-6">Meet the Team</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-green-500 font-semibold">Govarthan V</p>
              <p className="text-sm text-gray-400">Developer</p>
            </div>
            <div>
              <p className="text-green-500 font-semibold">Thejas</p>
              <p className="text-sm text-gray-400">Co-Developer</p>
            </div>
            {/* Add more team members here */}
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Soil Steps. Built with 💚 to educate and empower.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
