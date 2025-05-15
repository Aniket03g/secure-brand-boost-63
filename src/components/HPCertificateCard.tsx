
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Award, Shield } from 'lucide-react';

const HPCertificateCard = () => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white relative pb-8">
        <div className="absolute top-4 right-4">
          <Award size={32} className="text-yellow-300 animate-pulse-light" />
        </div>
        <CardTitle className="text-2xl font-semibold">HP Amplify Impact</CardTitle>
        <CardDescription className="text-blue-100 text-lg">3-Star Partner Status 2025</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="flex gap-4 mb-4 items-start">
          <div className="bg-blue-50 p-2 rounded-full">
            <Shield size={24} className="text-blue-600" />
          </div>
          <div>
            <p className="text-gray-700 mb-4 font-normal">
              V Technologies is pleased to announce that once again in 2025 we have achieved Amplify Impact 3-Star Partner Status. We are committed to making a sustainable impact with HP!
            </p>
            <p className="text-gray-700 font-normal">
              Engaging and empowering people enhancing business value through sustainability. HP Amplify Impact is helping us get there.
            </p>
          </div>
        </div>
        
        <div className="mt-6 flex justify-center">
          <div className="p-6 flex justify-center">
            <img 
              src="/lovable-uploads/d2915ce5-b99b-45ab-aead-f083b6f57707.png" 
              alt="HP Sustainable Impact - Amplify Impact 3-Star Partner 2025" 
              className="w-64 h-64 object-contain hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HPCertificateCard;
