import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

const categories = ['All', 'wedding', 'portrait', 'event', 'commercial', 'nature', 'other'];

type Photo = {
  id: string;
  title: string;
  description: string | null;
  image_url: string;
  category: string;
  featured: boolean;
};

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPhotos();
  }, []);

  async function fetchPhotos() {
    try {
      const { data, error } = await supabase
        .from('photos')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) throw error;
      setPhotos(data || []);
    } catch (error) {
      console.error('Error fetching photos:', error);
    } finally {
      setLoading(false);
    }
  }

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
