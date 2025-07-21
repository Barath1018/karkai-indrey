import { useState } from "react";
import emailjs from "emailjs-com";
import { Sparkles, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast({
        title: "Missing Information",
        description: "Please fill out all fields to continue.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_qllxxzb", // Your EmailJS service ID
        "template_3j17kpd", // Your EmailJS template ID
        {
          from_name: name,
          email,
          message,
        },
        "1eArfUMqqvtvxppnj" // Your EmailJS public key
      )
      .then(() => {
        toast({
          title: "Thanks for reaching out! 🙌",
          description: "We'll get back to you shortly.",
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        toast({
          title: "Something went wrong 😥",
          description: "Please try again later.",
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
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <Sparkles className="w-8 h-8 text-white mx-auto animate-bounce mb-4" />
          <h1 className="font-poppins text-4xl md:text-5xl font-bold text-white mb-4">
            Contact & Feedback
          </h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto">
            Have questions, ideas, or feedback? Let us know — we’d love to hear from you!
          </p>
        </div>

        <Card className="bg-white/90 backdrop-blur-md border-0 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-green-100 to-emerald-200 rounded-t-lg">
            <CardTitle className="font-poppins text-xl text-green-800 flex items-center">
              <Send className="h-5 w-5 text-green-700 mr-3" />
              Reach us Out
            </CardTitle>
          </CardHeader>

          <CardContent className="p-6 space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
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
                title="Please enter a valid email address (e.g., yourname@example.com)"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message or Feedback"
                required
              />
              <Button
                type="submit"
                className="w-full bg-soil-green text-white hover:bg-soil-green/80"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactPage;
