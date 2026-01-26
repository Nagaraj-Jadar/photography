import { motion } from 'motion/react';
import { Instagram, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (mock for now)
    console.log('Form submitted:', formData);
    alert('Thank you! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', date: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="bg-background py-20 md:py-32 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-['Playfair_Display'] text-4xl md:text-6xl font-normal text-foreground">
            Let's Create Your Story
          </h2>
          <p className="text-muted-foreground text-lg font-light max-w-2xl mx-auto">
            Ready to begin your journey with us? Get in touch and let's make magic together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-border bg-input-background px-4 py-3 text-foreground transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  placeholder="Priya & Arjun"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-border bg-input-background px-4 py-3 text-foreground transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    placeholder="hello@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-border bg-input-background px-4 py-3 text-foreground transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    placeholder="+91 8152948407"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="date"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Wedding Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-border bg-input-background px-4 py-3 text-foreground transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Tell Us About Your Wedding
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full rounded-lg border border-border bg-input-background px-4 py-3 text-foreground transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 resize-none"
                  placeholder="Share your vision, venue details, or any special requests..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full rounded-full bg-primary px-8 py-4 text-primary-foreground transition-all hover:bg-primary/90 shadow-lg"
              >
                Send Inquiry
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:pl-8"
          >
            <div className="space-y-8">
              <div>
                <h3 className="mb-6 font-['Playfair_Display'] text-3xl font-normal text-foreground">
                  Get In Touch
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  We'd love to hear about your special day. Reach out through any of the channels below, and we'll get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-full bg-accent/20 p-3">
                    <Mail className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a
                      href="mailto:hello@weddingstudio.com"
                      className="text-foreground hover:text-accent transition-colors"
                    >
                      hello@weddingstudio.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-full bg-accent/20 p-3">
                    <Phone className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Phone</p>
                    <a
                      href="tel:+918152948407"
                      className="text-foreground hover:text-accent transition-colors"
                    >
                      +91 81529 48407
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-full bg-accent/20 p-3">
                    <MapPin className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Studio</p>
                    <p className="text-foreground">
                      Mumbai, Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-border">
                <p className="mb-4 text-sm text-muted-foreground">Connect with us</p>
                <div className="flex gap-4">
                  <motion.a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center rounded-full bg-accent/20 p-3 text-accent-foreground transition-all hover:bg-accent"
                  >
                    <Instagram className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center rounded-full bg-accent/20 p-3 text-accent-foreground transition-all hover:bg-accent"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
