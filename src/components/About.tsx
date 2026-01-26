import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="bg-background py-20 md:py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <h2 className="mb-6 font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-normal text-foreground leading-tight">
              Crafting Timeless
              <br />
              Memories Since 2015
            </h2>
            <div className="space-y-6 text-muted-foreground font-light leading-relaxed text-base md:text-lg">
              <p>
                We believe every wedding tells a unique story—a tapestry of emotions, traditions, and love that deserves to be preserved with elegance and authenticity.
              </p>
              <p>
                With years of experience capturing Indian weddings across the world, we specialize in documenting the grandeur, intimacy, and cultural richness that make each celebration unforgettable.
              </p>
              <p>
                Our approach blends cinematic artistry with documentary-style storytelling, ensuring that every glance, every tear, and every moment of joy is immortalized beautifully.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10"
            >
              <button className="rounded-full bg-primary px-8 py-3.5 text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105 shadow-lg">
                Learn More About Us
              </button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1627961888164-b79f406b245b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoZXIlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3Njk0MzUyOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Our team"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
