
import { Server, Users, Globe, Award } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay: number;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, label, delay }) => {
  return (
    <div className={`text-center p-6 opacity-0 animate-fade-in animate-delay-${delay} animate-fill-both`}>
      <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mb-4 shadow-lg text-white hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="text-3xl font-bold gradient-text mb-2">{value}</div>
      <div className="text-foreground/80 font-medium">{label}</div>
    </div>
  );
};

const StatsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-card border-t border-b border-border/40">
      <div className="container mx-auto px-4 md:px-6">
        {isVisible && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatItem 
              icon={<Server size={32} />} 
              value="500+" 
              label="Projects Completed" 
              delay={0}
            />
            <StatItem 
              icon={<Users size={32} />} 
              value="50+" 
              label="Expert Consultants" 
              delay={200}
            />
            <StatItem 
              icon={<Globe size={32} />} 
              value="3" 
              label="Countries Served" 
              delay={400}
            />
            <StatItem 
              icon={<Award size={32} />} 
              value="15+" 
              label="Years Experience" 
              delay={600}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default StatsSection;
