import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1735052713313-40c183b5e4cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbmRpYW4lMjB3ZWRkaW5nJTIwY291cGxlfGVufDF8fHx8MTc2OTQzNTI0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury wedding couple"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-5xl"
        >
          <h1 className="mb-6 font-['Playfair_Display'] text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white">
            We Capture Stories,
            <br />
            Not Just Weddings
          </h1>
          <p className="mb-10 text-lg md:text-xl text-white/90 font-light tracking-wide">
            Cinematic wedding films & timeless photography for your forever moments
          </p>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="rounded-full bg-white px-10 py-4 text-base font-medium text-black transition-all hover:bg-white/90 hover:scale-105 shadow-xl"
          >
            Book Your Date
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-white/70"
          >
            <span className="mb-2 text-sm tracking-widest">SCROLL</span>
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
