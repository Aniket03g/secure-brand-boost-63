
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
        <CardTitle className="text-2xl">HP Amplify Impact</CardTitle>
        <CardDescription className="text-blue-100 text-lg">3-Star Partner Status 2025</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="flex gap-4 mb-4 items-start">
          <div className="bg-blue-50 p-2 rounded-full">
            <Shield size={24} className="text-blue-600" />
          </div>
          <div>
            <p className="text-gray-700 mb-4">
              V Technologies is pleased to announce that once again in 2025 we have achieved Amplify Impact 3-Star Partner Status. We are committed to making a sustainable impact with HP!
            </p>
            <p className="text-gray-700">
              Engaging and empowering people enhancing business value through sustainability. HP Amplify Impact is helping us get there.
            </p>
          </div>
        </div>
        
        <div className="mt-6 flex justify-center">
          <div className="relative w-full max-w-md overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform">
            <img 
              src="/lovable-uploads/c7c6b8cc-2d41-4a22-ab24-a9530d392f65.png" 
              alt="HP Partnership" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HPCertificateCard;
