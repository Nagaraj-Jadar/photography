import { motion } from 'motion/react';
import { useState } from 'react';

const categories = ['All', 'wedding', 'portrait', 'event', 'commercial', 'nature', 'other'];

type Photo = {
  id: string;
  title: string;
  description: string | null;
  image_url: string;
  category: string;
  featured: boolean;
};

// Static portfolio data (replace with backend later)
const staticPhotos: Photo[] = [
  {
    id: '1',
    title: 'Royal Palace Wedding',
    description: 'Majestic celebration at heritage palace',
    image_url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800',
    category: 'wedding',
    featured: true
  },
  {
    id: '2',
    title: 'Beach Ceremony',
    description: 'Sunset vows by the ocean',
    image_url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800',
    category: 'wedding',
    featured: true
  },
  {
    id: '3',
    title: 'Traditional Rituals',
    description: 'Capturing sacred moments',
    image_url: 'https://images.unsplash.com/photo-1587271449687-6b8f51013f0e?w=800',
    category: 'wedding',
    featured: false
  },
  {
    id: '4',
    title: 'Couple Portrait',
    description: 'Elegant pre-wedding shoot',
    image_url: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800',
    category: 'portrait',
    featured: true
  },
  {
    id: '5',
    title: 'Candid Moments',
    description: 'Natural joy and laughter',
    image_url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800',
    category: 'wedding',
    featured: false
  },
  {
    id: '6',
    title: 'Reception Celebration',
    description: 'Grand evening festivities',
    image_url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800',
    category: 'event',
    featured: false
  }
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const photos = staticPhotos;
  const loading = false;

  const filteredItems =
    activeCategory === 'All'
      ? photos
      : photos.filter((item) => item.category === activeCategory);

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
        {loading ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground">Loading portfolio...</p>
          </div>
        ) : filteredItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground">No photos found in this category.</p>
          </div>
        ) : (
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
                src={item.image_url}
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
        )}
      </div>
    </section>
  );
}
