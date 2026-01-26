import { motion } from 'motion/react';
import { Camera, Video, Heart, ImageIcon } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: 'Wedding Photography',
    description: 'Timeless, emotional captures of your most precious moments with artistic storytelling and attention to detail.',
  },
  {
    icon: Video,
    title: 'Wedding Videography',
    description: 'Cinematic films that bring your wedding day back to life with breathtaking visuals and emotional narratives.',
  },
  {
    icon: Heart,
    title: 'Pre-Wedding Shoots',
    description: 'Romantic sessions that celebrate your love story in stunning locations with creative concepts and styling.',
  },
  {
    icon: ImageIcon,
    title: 'Studio Portraits',
    description: 'Professional portraits capturing elegance and emotion in a controlled, luxurious studio environment.',
  },
];

export function Services() {
  return (
    <section id="services" className="bg-muted py-20 md:py-32 px-6">
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
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg font-light max-w-2xl mx-auto">
            We offer comprehensive wedding photography and videography services tailored to your vision
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card rounded-lg p-8 md:p-10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="mb-6 inline-flex items-center justify-center rounded-full bg-accent/30 p-4 transition-all duration-300 group-hover:bg-accent group-hover:scale-110">
                <service.icon className="h-7 w-7 text-accent-foreground" />
              </div>
              <h3 className="mb-4 font-['Playfair_Display'] text-2xl md:text-3xl font-normal text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
