import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, History, Database } from 'lucide-react';

interface CardData {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

const cards: CardData[] = [
  {
    title: 'Follow the Research',
    description: 'Track ongoing discoveries and methodologies in our investigation of enemy alien policies.',
    href: '#/research',
    icon: <BookOpen className="w-8 h-8" />,
  },
  {
    title: 'Discover the History',
    description: 'Explore the historical context and untold stories of South Slavic immigrants during WWI.',
    href: '#/history',
    icon: <History className="w-8 h-8" />,
  },
  {
    title: 'Explore the Database',
    description: 'Search through our comprehensive archive of documents, photographs, and records.',
    href: '#/database',
    icon: <Database className="w-8 h-8" />,
  },
];

const NavigationCards: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-stone-500 uppercase tracking-widest text-xs font-bold mb-4 block">
            Explore Further
          </span>
          <h3 className="text-3xl md:text-4xl font-display font-black text-stone-900 uppercase tracking-wide">
            Dive Deeper
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <NavigationCard
              key={index}
              card={card}
              index={index}
              isHovered={hoveredIndex === index}
              anyHovered={hoveredIndex !== null}
              onHover={() => setHoveredIndex(index)}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface NavigationCardProps {
  card: CardData;
  index: number;
  isHovered: boolean;
  anyHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const NavigationCard: React.FC<NavigationCardProps> = ({
  card,
  index,
  isHovered,
  anyHovered,
  onHover,
  onLeave,
}) => {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [grainOffset, setGrainOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationId: number;
    if (isHovered) {
      const animate = () => {
        setGrainOffset({
          x: Math.random() * 100,
          y: Math.random() * 100,
        });
        animationId = requestAnimationFrame(animate);
      };
      animationId = requestAnimationFrame(animate);
    }
    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [isHovered]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.a
      ref={cardRef}
      href={card.href}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onMouseMove={handleMouseMove}
      className={`relative block p-8 bg-white border border-stone-200 overflow-hidden transition-all duration-500 ${
        anyHovered && !isHovered ? 'opacity-40 scale-[0.98]' : 'opacity-100'
      }`}
      style={{
        transform: isHovered ? 'scale(1.02)' : 'scale(1)',
      }}
    >
      {/* Film grain overlay that follows mouse */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none z-10 mix-blend-overlay"
          style={{
            background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundPosition: `${grainOffset.x}px ${grainOffset.y}px`,
            opacity: 0.15,
          }}
        />
      )}

      {/* Spotlight effect following mouse */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 150px at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.3) 0%, transparent 70%)`,
          }}
        />
      )}

      <div className="relative z-20">
        <div className={`mb-6 text-stone-400 transition-colors duration-300 ${isHovered ? 'text-stone-900' : ''}`}>
          {card.icon}
        </div>

        <h4 className="text-xl font-display font-bold text-stone-900 uppercase tracking-wide mb-4">
          {card.title}
        </h4>

        <p className="text-stone-600 font-light leading-relaxed mb-6">
          {card.description}
        </p>

        <div className={`flex items-center gap-2 text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
          isHovered ? 'text-stone-900' : 'text-stone-400'
        }`}>
          <span>Explore</span>
          <motion.span
            animate={{ x: isHovered ? 8 : 0 }}
            transition={{ duration: 0.3 }}
          >
            →
          </motion.span>
        </div>
      </div>

      {/* Border highlight on hover */}
      <motion.div
        className="absolute inset-0 border-2 border-stone-900 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  );
};

export default NavigationCards;
