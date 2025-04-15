
import { Server, Users, Globe, Award } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, label }) => {
  return (
    <div className="text-center p-6">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-vtech-blue bg-opacity-10 text-vtech-blue rounded-full mb-4">
        {icon}
      </div>
      <div className="text-3xl font-bold text-vtech-gray mb-2">{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-12 bg-white border-t border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatItem 
            icon={<Server size={28} />} 
            value="500+" 
            label="Projects Completed" 
          />
          <StatItem 
            icon={<Users size={28} />} 
            value="50+" 
            label="Expert Consultants" 
          />
          <StatItem 
            icon={<Globe size={28} />} 
            value="3" 
            label="Countries Served" 
          />
          <StatItem 
            icon={<Award size={28} />} 
            value="15+" 
            label="Years Experience" 
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
