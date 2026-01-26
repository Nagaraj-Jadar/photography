import { motion } from 'motion/react';
import { useState } from 'react';

const categories = ['All', 'Weddings', 'Pre-Wedding', 'Films', 'Studio'];

const portfolioItems = [
  {
    id: 1,
    category: 'Weddings',
    image: 'https://images.unsplash.com/photo-1724847665609-c648e04dda32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBicmlkZSUyMGdyb29tJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzY5NDM1MjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Traditional Ceremony',
  },
  {
    id: 2,
    category: 'Pre-Wedding',
    image: 'https://images.unsplash.com/photo-1533623343794-e8e2ecd57780?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGNvdXBsZSUyMHByZXdlZGRpbmd8ZW58MXx8fHwxNzY5NDM1MjUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Love Story',
  },
  {
    id: 3,
    category: 'Weddings',
    image: 'https://images.unsplash.com/photo-1677768062274-fdd45caac233?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwZGVjb3J8ZW58MXx8fHwxNzY5NDE2Mzc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Royal Reception',
  },
  {
    id: 4,
    category: 'Studio',
    image: 'https://images.unsplash.com/photo-1677691257237-3294c7fd18a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkZSUyMG1ha2V1cCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2OTQzNTI1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Bridal Portrait',
  },
  {
    id: 5,
    category: 'Films',
    image: 'https://images.unsplash.com/photo-1726068449701-4e11c5d64b11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwbWFuZGFwfGVufDF8fHx8MTc2OTQzNTI1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Mandap Moments',
  },
  {
    id: 6,
    category: 'Weddings',
    image: 'https://images.unsplash.com/photo-1626619485175-904897294d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmluZ3MlMjBoYW5kc3xlbnwxfHx8fDE3Njk0MzE3MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Sacred Vows',
  },
  {
    id: 7,
    category: 'Films',
    image: 'https://images.unsplash.com/photo-1714972383570-44ddc9738355?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBkYW5jaW5nJTIwd2VkZGluZ3xlbnwxfHx8fDE3Njk0MzUyNTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'First Dance',
  },
  {
    id: 8,
    category: 'Pre-Wedding',
    image: 'https://images.unsplash.com/photo-1735052713313-40c183b5e4cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbmRpYW4lMjB3ZWRkaW5nJTIwY291cGxlfGVufDF8fHx8MTc2OTQzNTI0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Golden Hour',
  },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems =
    activeCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="bg-background py-20 md:py-32 px-6">
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
            Our Portfolio
          </h2>
          <p className="text-muted-foreground text-lg font-light">
            Every wedding is a unique story waiting to be told
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 flex flex-wrap justify-center gap-4"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-accent'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-muted cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-sm font-light mb-1 tracking-wider uppercase opacity-80">
                    {item.category}
                  </p>
                  <h3 className="font-['Playfair_Display'] text-2xl">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
