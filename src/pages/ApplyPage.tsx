import { useState } from "react";
import emailjs from "emailjs-com";
import { Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const ApplyPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    motivation: "",
  });

  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, role, motivation } = formData;

    if (!name || !email || !phone || !role || !motivation) {
      toast({
        title: "Missing Info 🧐",
        description: "Please fill all fields to complete your application.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_508zln9", // Your service ID
        "template_ox03d2d", // Your template ID
        {
          from_name: name,
          email,
          phone,
          role,
          motivation,
        },
        "K0JGZ18xPPyhnbwbC" // Your public key
      )
      .then(() => {
        toast({
          title: "Application Submitted 🚀",
          description: "Thank you for applying! We’ll get in touch soon.",
        });
        setFormData({ name: "", email: "", phone: "", role: "", motivation: "" });
      })
      .catch(() => {
        toast({
          title: "Submission Failed 😢",
          description: "There was a problem sending your application. Try again later.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-green-800 py-20 px-4 relative overflow-hidden"
      style={{ animation: "slideUp 0.7s ease-out" }}
    >
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <Sparkles className="w-8 h-8 text-white mx-auto animate-bounce mb-4" />
          <h1 className="font-poppins text-4xl md:text-5xl font-bold text-white mb-4">Apply Now</h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto">
            Fill the form below to apply for volunteering, internships, or any open roles.
          </p>
        </div>

        <Card className="bg-white/90 backdrop-blur-md border-0 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-green-100 to-emerald-200 rounded-t-lg">
            <CardTitle className="font-poppins text-xl text-green-800 flex items-center">
              <Send className="h-5 w-5 text-green-700 mr-3" />
              Application Form
            </CardTitle>
          </CardHeader>

          <CardContent className="p-6 space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                pattern="^[a-zA-Z\s]{2,}$"
                title="Only letters and spaces allowed (min 2 characters)"
              />
              <Input
                id="email"
                name="email"
                type="email"
                inputMode="email"
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                title="Enter a valid email address (e.g., name@example.com)"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
              />
              <Input
                id="phone"
                name="phone"
                type="tel"
                inputMode="tel"
                title="Enter a valid 10-digit Indian phone number"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
              />
              <Input
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                placeholder="Role you're applying for (e.g., Volunteer, Intern)"
                required
                pattern="^[a-zA-Z\s.,-]{2,}$"
                title="Only letters, spaces, commas, periods, and hyphens are allowed"
              />
              <Textarea
                id="motivation"
                name="motivation"
                value={formData.motivation}
                onChange={handleChange}
                placeholder="Tell us why you're interested"
                required
              />
              <Button
                type="submit"
                className="w-full bg-soil-green text-white hover:bg-soil-green/80"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ApplyPage;
