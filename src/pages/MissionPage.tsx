import { Target, Users, BookOpen, Link, Zap } from "lucide-react";

const MissionPage = () => {
  const missions = [
    {
      icon: Users,
      title: "Reach Every Child",
      description: "Breaking geographical and socio-economic barriers to ensure quality education reaches every corner of India, especially in underserved communities.",
      points: [
        "Rural and urban outreach programs",
        "Mobile learning units",
        "Community partnerships",
        "Inclusive education initiatives"
      ],
      color: "green-600"
    },
    {
      icon: BookOpen,
      title: "Empower Through Learning",
      description: "Providing hands-on, practical education that builds confidence, critical thinking, and problem-solving skills in young minds.",
      points: [
        "Interactive workshops and experiments",
        "STEM education focus",
        "Skill development programs",
        "Mentorship opportunities"
      ],
      color: "gray-500"
    },
    {
      icon: Target,
      title: "Build a Movement",
      description: "Creating a self-sustaining network of student volunteers who become ambassadors of education in their communities.",
      points: [
        "Student volunteer training",
        "Leadership development",
        "Community engagement",
        "Peer-to-peer learning networks"
      ],
      color: "green-600"
    },
    {
      icon: Link,
      title: "Bridge the Gap",
      description: "Connecting theoretical knowledge with practical applications, making learning relevant and immediately applicable to real-world challenges.",
      points: [
        "Theory to practice workshops",
        "Real-world problem solving",
        "Industry connections",
        "Career guidance and counseling"
      ],
      color: "gray-500"
    },
    {
      icon: Zap,
      title: "Ignite the Future",
      description: "Inspiring the next generation to become innovators, entrepreneurs, and change-makers who will shape tomorrow's world.",
      points: [
        "Innovation challenges",
        "Entrepreneurship workshops",
        "Future skills training",
        "Creative thinking development"
      ],
      color: "green-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full mb-6">
              <Target className="h-8 w-8 text-gray-600" />
            </div>
            <h1 className="font-poppins font-bold text-4xl md:text-5xl text-gray-900 mb-6">
              Our <span className="text-green-600">Mission</span>
            </h1>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Five core missions that drive our commitment to transforming education 
              and empowering the next generation of leaders, innovators, and changemakers.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {missions.map((mission, index) => (
              <div
                key={index}
                className={`${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex flex-col lg:flex items-center gap-12`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="max-w-2xl">
                    <div className="flex items-center mb-6">
                      <div className={`w-12 h-12 bg-${mission.color}/10 rounded-full flex items-center justify-center mr-4`}>
                        <mission.icon className={`h-6 w-6 text-${mission.color}`} />
                      </div>
                      <h2 className="font-poppins font-bold text-3xl text-gray-900">
                        {mission.title}
                      </h2>
                    </div>

                    <p className="text-base text-gray-700 mb-6 leading-relaxed">
                      {mission.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {mission.points.map((point, pointIndex) => (
                        <div key={pointIndex} className="flex items-center space-x-3">
                          <div className={`w-2 h-2 bg-${mission.color} rounded-full flex-shrink-0`}></div>
                          <span className="text-gray-700 text-sm">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Icon Section */}
                <div className="flex-1 flex justify-center">
                  <div className={`w-64 h-64 bg-${mission.color}/10 rounded-2xl flex items-center justify-center`}>
                    <mission.icon className={`h-24 w-24 text-${mission.color}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Mission in Action
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how our missions translate into real-world impact across communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { number: "150+", label: "Students Reached" },
              { number: "25+", label: "Workshops Conducted" },
              { number: "50+", label: "Student Volunteers" },
              { number: "100%", label: "Positive Feedback" },
              { number: "15+", label: "Innovation Projects" },
              { number: "3", label: "Core Themes" }
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-gray-100 p-8 rounded-2xl text-center`}
              >
                <div className="text-4xl font-bold text-green-700 mb-2">{item.number}</div>
                <div className="text-gray-700 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
            Join Our Mission
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Every mission needs passionate individuals who believe in the power of education. 
            Be part of this transformative journey and help us reach every child, every dream.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-green-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
            >
              Become a Volunteer
            </a>
            <a
              href="/workshops"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-700 transition-colors"
            >
              Explore Workshops
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionPage;
