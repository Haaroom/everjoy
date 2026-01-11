import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';
import { useScrollRevealChildren } from '../hooks/useScrollReveal';

export default function Contact() {
  const containerRef = useScrollRevealChildren();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#5D4037] via-[#4E342E] to-[#3E2723] page-container">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16" ref={containerRef}>
        <div className="bg-[#FFF8E1] rounded-2xl shadow-2xl p-8 md:p-12 mb-12 scroll-reveal card-animate">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3E2723] mb-6 text-center animate-fade-in-up">
            CONTACT <span className="text-[#D4AF37]">US</span>
          </h1>
          <p className="text-lg text-[#5D4037] leading-relaxed text-center max-w-3xl mx-auto animate-fade-in-up stagger-2">
            Have questions about our products or want to place a bulk order? We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-[#FFF8E1] rounded-xl p-8 shadow-lg scroll-reveal card-animate">
            <h2 className="text-3xl font-bold text-[#3E2723] mb-8 animate-fade-in-up">Get in Touch</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 scroll-reveal">
                <div className="bg-[#D4AF37] p-3 rounded-full">
                  <Mail className="text-[#3E2723]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#3E2723] mb-1">Email</h3>
                  <p className="text-[#5D4037]">everjoychocolates@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 scroll-reveal">
                <div className="bg-[#D4AF37] p-3 rounded-full">
                  <Phone className="text-[#3E2723]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#3E2723] mb-1">Phone</h3>
                  <p className="text-[#5D4037]">+91 8610933790</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 scroll-reveal">
                <div className="bg-[#D4AF37] p-3 rounded-full">
                  <MapPin className="text-[#3E2723]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#3E2723] mb-1">Location</h3>
                  <p className="text-[#5D4037]">1, chetty porunathian kovil street, south karuman kovil, Madurai - 01</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-[#5D4037]/20 scroll-reveal">
              <h3 className="text-xl font-bold text-[#3E2723] mb-4 animate-fade-in-up">Follow Us</h3>
              <div className="bg-gradient-to-r from-[#6D4C41] to-[#5D4037] rounded-lg p-4 text-center">
                <p className="text-[#D4AF37] font-semibold mb-2">Instagram</p>
                <p className="text-2xl font-bold text-[#FFF8E1]">@EVERJOY_Chocolates</p>
              </div>
            </div>
          </div>

          <div className="bg-[#FFF8E1] rounded-xl p-8 shadow-lg scroll-reveal card-animate">
            <h2 className="text-3xl font-bold text-[#3E2723] mb-6 animate-fade-in-up">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#3E2723] mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#D4AF37]/30 focus:border-[#D4AF37] focus:outline-none text-[#3E2723]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#3E2723] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#D4AF37]/30 focus:border-[#D4AF37] focus:outline-none text-[#3E2723]"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-[#3E2723] mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#D4AF37]/30 focus:border-[#D4AF37] focus:outline-none text-[#3E2723]"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-[#3E2723] mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#D4AF37]/30 focus:border-[#D4AF37] focus:outline-none text-[#3E2723]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#3E2723] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#D4AF37]/30 focus:border-[#D4AF37] focus:outline-none text-[#3E2723] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#D4AF37] to-[#C5A572] text-[#3E2723] font-bold py-4 px-6 rounded-lg hover:shadow-xl transition-all btn-hover-lift"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#D4AF37] to-[#C5A572] rounded-2xl shadow-2xl p-8 md:p-12 mt-12 text-center scroll-reveal card-animate">
          <h2 className="text-2xl md:text-3xl font-bold text-[#3E2723] mb-4 animate-fade-in-up">
            Special Offer for Teachers & Students
          </h2>
          <p className="text-lg text-[#3E2723] mb-4 animate-fade-in-up stagger-2">
            Use code <span className="font-bold">EVERJOY30VIP</span> for 30% off on all purchases
          </p>
          <p className="text-[#3E2723]/80 animate-fade-in-up stagger-3">
            Perfect for classroom demonstrations and school events!
          </p>
        </div>
      </div>
    </div>
  );
}
