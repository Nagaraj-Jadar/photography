import { motion } from 'motion/react';
import { Camera, Video, Heart, ImageIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

const iconMap: { [key: string]: any } = {
  Camera,
  Video,
  Heart,
  ImageIcon,
};

type Service = {
  id: string;
  title: string;
  description: string;
  icon: string | null;
  price_range: string | null;
};

export function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, []);

  async function fetchServices() {
    try {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('active', true)
        .order('display_order', { ascending: true });

      if (error) throw error;
      setServices(data || []);
    } catch (error) {
      console.error('Error fetching services:', error);
    } finally {
      setLoading(false);
    }
  }
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
        {loading ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground">Loading services...</p>
          </div>
        ) : services.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground">No services available.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon || 'Camera'] || Camera;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-card rounded-lg p-8 md:p-10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                >
                  <div className="mb-6 inline-flex items-center justify-center rounded-full bg-accent/30 p-4 transition-all duration-300 group-hover:bg-accent group-hover:scale-110">
                    <IconComponent className="h-7 w-7 text-accent-foreground" />
                  </div>
                  <h3 className="mb-4 font-['Playfair_Display'] text-2xl md:text-3xl font-normal text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    {service.description}
                  </p>
                  {service.price_range && (
                    <p className="mt-4 text-sm text-accent-foreground font-medium">
                      {service.price_range}
                    </p>
                  )}
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
