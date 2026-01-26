import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "They captured our wedding with such elegance and emotion. Every photograph tells a story, and we're endlessly grateful for these timeless memories.",
    name: 'Priya & Arjun',
    location: 'Jaipur Wedding',
  },
  {
    id: 2,
    quote: "From our first meeting to the final film, the experience was seamless and magical. The team truly understood our vision and brought it to life beautifully.",
    name: 'Neha & Rohan',
    location: 'Udaipur Destination Wedding',
  },
  {
    id: 3,
    quote: "Professional, creative, and incredibly talented. They captured moments we didn't even know happened. The wedding film makes us cry every time we watch it.",
    name: 'Ananya & Karan',
    location: 'Mumbai Wedding',
  },
];

export function Testimonials() {
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
                "{testimonial.quote}"
              </p>
              <div className="border-t border-border pt-6">
                <p className="font-['Playfair_Display'] text-lg font-normal text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground font-light mt-1">
                  {testimonial.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
