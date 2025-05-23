
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions about our collections or need styling advice? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border border-gray-800 bg-gray-900">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-semibold text-white mb-6">
                Send us a Message
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="Your Name"
                    className="border-gray-700 bg-gray-800 text-white"
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="border-gray-700 bg-gray-800 text-white"
                  />
                </div>
                <Input
                  placeholder="Subject"
                  className="border-gray-700 bg-gray-800 text-white"
                />
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  className="border-gray-700 bg-gray-800 text-white"
                />
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-semibold text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Phone</h4>
                    <p className="text-gray-300">+91 98765 43210</p>
                    <p className="text-gray-300">+91 87654 32109</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-gray-300">hello@pitarabykajalandprafula.com</p>
                    <p className="text-gray-300">orders@pitarabykajalandprafula.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Showroom</h4>
                    <p className="text-gray-300">123 Fashion Street, Traditional Market</p>
                    <p className="text-gray-300">Mumbai, Maharashtra 400001</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-xl font-serif font-semibold text-white mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" className="border-primary text-primary hover:bg-primary hover:text-white">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="border-primary text-primary hover:bg-primary hover:text-white">
                  <Facebook className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Business Hours */}
            <Card className="bg-gray-900 border border-gray-800">
              <CardContent className="p-6">
                <h4 className="text-xl font-serif font-semibold text-white mb-4">
                  Business Hours
                </h4>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Saturday</span>
                    <span>10:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>11:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
