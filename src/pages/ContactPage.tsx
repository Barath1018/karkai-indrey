import { useState } from "react";
import { Sparkles, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
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

    toast({
      title: "Thanks for reaching out! 🙌",
      description: "We'll get back to you shortly.",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-green-800 py-20 px-4 relative overflow-hidden"
      style={{
        animation: "slideUp 0.7s ease-out",
      }}
    >
      {/* Custom CSS for slideUp animation */}
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
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
              />
              <Input
                id="email"
                name="email"
                type="email"
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
              >
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactPage;
