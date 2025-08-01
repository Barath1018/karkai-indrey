import {
  Palette,
  Sprout,
  Rocket,
  Users,
  Clock,
  MapPin,
  Star,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const WorkshopsPage = () => {
  const workshops = [
    {
      id: 1,
      title: "Art & Craft with Science",
      icon: Palette,
      description:
        "Blend creativity with scientific principles through hands-on art projects that teach physics, chemistry, and biology concepts.",
      highlights: [
        "Color chemistry experiments",
        "Physics of light and shadow",
        "Botanical art and plant science",
        "Geometric patterns in nature",
      ],
      activities: [
        "Natural dye extraction",
        "Crystallization art",
        "pH indicator paintings",
        "Solar system models",
      ],
      duration: "3 hours",
      participants: "15–25 students",
      ageGroup: "8–16 years",
      color: "#10B981",
      bgGradient: "from-emerald-50 via-green-50 to-emerald-100",
      borderColor: "border-emerald-200",
    },
    {
      id: 2,
      title: "Smart Farming & Green Science",
      icon: Sprout,
      description:
        "Explore sustainable agriculture, environmental science, and green technology through practical farming experiments.",
      highlights: [
        "Soil science and testing",
        "Hydroponic farming systems",
        "Composting and waste management",
        "Weather monitoring and prediction",
      ],
      activities: [
        "Seed germination experiments",
        "Building mini greenhouses",
        "Water purification methods",
        "Creating organic fertilizers",
      ],
      duration: "4 hours",
      participants: "12–20 students",
      ageGroup: "10–18 years",
      color: "#F59E0B",
      bgGradient: "from-amber-50 via-yellow-50 to-amber-100",
      borderColor: "border-amber-200",
    },
    {
      id: 3,
      title: "Space & Beyond",
      icon: Rocket,
      description:
        "Journey through space science, astronomy, and aerospace engineering with interactive demonstrations and rocket building.",
      highlights: [
        "Solar system exploration",
        "Rocket science fundamentals",
        "Satellite technology",
        "Space missions and history",
      ],
      activities: [
        "Building and launching water rockets",
        "Creating constellation maps",
        "Simulating Mars missions",
        "Telescope observations",
      ],
      duration: "5 hours",
      participants: "10–18 students",
      ageGroup: "12–18 years",
      color: "#3B82F6",
      bgGradient: "from-blue-50 via-indigo-50 to-blue-100",
      borderColor: "border-blue-200",
    },
  ];

  const features = [
    {
      icon: Users,
      title: "Expert-Led Sessions",
      description:
        "Learn from experienced educators and industry professionals",
      color: "#10B981",
    },
    {
      icon: Clock,
      title: "Hands-On Learning",
      description: "Interactive experiments and practical demonstrations",
      color: "#F59E0B",
    },
    {
      icon: MapPin,
      title: "Open to All",
      description: "Free workshops accessible to students from all backgrounds",
      color: "#3B82F6",
    },
    {
      icon: Star,
      title: "Certificate of Participation",
      description: "Recognition for active participation and learning",
      color: "#8B5CF6",
    },
  ];

  return (
    <div className="min-h-screen transition-all duration-500 ease-in-out bg-gradient-to-br from-green-900 via-emerald-800 to-green-700">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/50 to-emerald-800/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-8 shadow-lg">
            <Rocket className="h-10 w-10 text-white" />
          </div>
          <h1 className="font-poppins font-bold text-5xl md:text-7xl mb-8 leading-tight">
            Learning <span className="text-emerald-300 drop-shadow-lg">Workshops</span>
          </h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-emerald-300 to-green-300 mx-auto mb-10 rounded-full"></div>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-white/90 leading-relaxed">
            Immersive, hands-on workshops designed to spark curiosity, build
            practical skills, and inspire the next generation of innovators
            through three exciting themes.
          </p>
        </div>
      </section>

      {/* Workshop Cards */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 rounded-t-[4rem] relative">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-green-900 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {workshops.map((workshop) => (
              <Card
                key={workshop.id}
                className={`bg-gradient-to-br ${workshop.bgGradient} border-2 ${workshop.borderColor} shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group`}
              >
                <CardHeader className="text-center pb-6">
                  <div
                    className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${workshop.color}15` }}
                  >
                    <workshop.icon
                      className="h-10 w-10"
                      style={{ color: workshop.color }}
                    />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                    {workshop.title}
                  </CardTitle>
                  <CardDescription className="text-gray-700 text-base leading-relaxed">
                    {workshop.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-8">
                  {/* Highlights */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                      Key Highlights:
                    </h4>
                    <ul className="space-y-3">
                      {workshop.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-sm text-gray-700"
                        >
                          <CheckCircle 
                            className="w-4 h-4 mr-3 mt-0.5 flex-shrink-0"
                            style={{ color: workshop.color }}
                          />
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Activities */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                      Sample Activities:
                    </h4>
                    <ul className="space-y-3">
                      {workshop.activities.map((activity, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-sm text-gray-700"
                        >
                          <Star className="w-4 h-4 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Details */}
                  <div className="grid grid-cols-1 gap-4 pt-6 border-t border-gray-200 bg-white/50 rounded-lg p-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600 font-medium">Duration:</span>
                      <span className="font-semibold text-gray-900">
                        {workshop.duration}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600 font-medium">Participants:</span>
                      <span className="font-semibold text-gray-900">
                        {workshop.participants}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600 font-medium">Age Group:</span>
                      <span className="font-semibold text-gray-900">
                        {workshop.ageGroup}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Our Workshops?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed">
            Every workshop is designed to be engaging, educational, and
            accessible to all students.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${feature.color}15` }}
                >
                  <feature.icon 
                    className="h-8 w-8"
                    style={{ color: feature.color }}
                  />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-green-800 via-emerald-700 to-green-800 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 to-emerald-800/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Learn and Explore?
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
            Join us for an unforgettable learning experience. Register your
            interest and be the first to know when we're coming to your city!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-white border-2 border-white text-green-800 hover:bg-gray-100 hover:border-gray-100 px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => (window.location.href = "/contact")}
            >
              Register Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-amber-500 border-2 border-amber-500 text-white hover:bg-amber-600 hover:border-amber-600 px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => (window.location.href = "/contact")}
            >
              Become a Volunteer
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkshopsPage;
