import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

type Testimonial = {
  id: string;
  client_name: string;
  testimonial: string;
  event_type: string | null;
  rating: number | null;
};

// Static testimonials data (replace with backend later)
const staticTestimonials: Testimonial[] = [
  {
    id: '1',
    client_name: 'Priya & Arjun',
    testimonial: 'They captured our wedding beautifully! Every moment was perfectly preserved. The team was professional, creative, and made us feel comfortable throughout.',
    event_type: 'Wedding',
    rating: 5
  },
  {
    id: '2',
    client_name: 'Riya & Karan',
    testimonial: 'Absolutely stunning work! The photos exceeded our expectations. Their attention to detail and artistic vision is remarkable.',
    event_type: 'Wedding',
    rating: 5
  },
  {
    id: '3',
    client_name: 'Anjali & Rahul',
    testimonial: 'Professional, creative, and amazing. Our wedding film brings tears to our eyes every time we watch it. Highly recommended!',
    event_type: 'Wedding',
    rating: 5
  }
];

export function Testimonials() {
  const testimonials = staticTestimonials;
  const loading = false;
  return (
    <section id="testimonials" className="bg-secondary/30 py-20 md:py-32 px-6">
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
            Kind Words
          </h2>
          <p className="text-muted-foreground text-lg font-light">
            What our couples say about us
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        {loading ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground">Loading testimonials...</p>
          </div>
        ) : testimonials.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground">No testimonials yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-card rounded-lg p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mb-6 inline-flex items-center justify-center rounded-full bg-accent/20 p-3">
                <Quote className="h-5 w-5 text-accent-foreground/70" />
              </div>
              <p className="mb-6 text-muted-foreground font-light leading-relaxed italic">
                "{testimonial.testimonial}"
              </p>
              <div className="border-t border-border pt-6">
                <p className="font-['Playfair_Display'] text-lg font-normal text-foreground">
                  {testimonial.client_name}
                </p>
                <p className="text-sm text-muted-foreground font-light mt-1">
                  {testimonial.event_type || 'Wedding'}
                </p>
              </div>
            </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
