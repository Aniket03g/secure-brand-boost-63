
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Certificate {
  id: number;
  title: string;
  brand: string;
  date: string;
  category: string;
  image: string;
  description: string;
}

const CERTIFICATES: Certificate[] = [
  {
    id: 1,
    title: "AMPLIFY Impact HP Partner Program 2025",
    brand: "HP",
    date: "2025-01-15",
    category: "HP",
    image: "/lovable-uploads/f922908d-fde3-4166-8180-7c89af63174f.png",
    description: "Recognized as an HP AMPLIFY Impact Partner for 2025. This certification acknowledges our commitment to sustainable practices, digital transformation excellence, and customer value in delivering HP solutions."
  }
];

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const openCertificateDialog = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
    setIsDialogOpen(true);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <Helmet>
        <title>Certificates & Achievements | V Technologies</title>
        <meta name="description" content="View our certificates and achievements as an impact partner with leading technology brands." />
      </Helmet>
      
      <div className="text-center mb-12">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-4 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Certificates & Achievements
        </motion.h1>
        <motion.p 
          className="text-lg text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          As an impact partner, we are proud of our achievements and certifications from leading technology brands.
        </motion.p>
      </div>

      <motion.div 
        className="flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {CERTIFICATES.map((certificate) => (
          <motion.div
            key={certificate.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 max-w-md"
            whileHover={{ y: -5 }}
            onClick={() => openCertificateDialog(certificate)}
          >
            <div className="h-48 bg-gray-100 overflow-hidden relative">
              <img 
                src={certificate.image} 
                alt={certificate.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 right-0 p-2">
                <Badge variant="secondary" className="bg-white/80 text-gray-800">
                  {certificate.category}
                </Badge>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <Award className="h-5 w-5 text-blue-600 mr-2" />
                <h3 className="font-semibold text-lg text-gray-800">{certificate.title}</h3>
              </div>
              <p className="text-sm text-gray-500 mb-4">{certificate.brand}</p>
              <div className="flex justify-between items-center">
                <p className="text-xs text-gray-400">{formatDate(certificate.date)}</p>
                <Button variant="outline" size="sm" className="text-xs">
                  View Details
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Certificate Detail Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        {selectedCertificate && (
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-blue-600" />
                {selectedCertificate.title}
              </DialogTitle>
              <DialogDescription>
                {selectedCertificate.brand}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <div className="mb-6 rounded-md overflow-hidden">
                <img 
                  src={selectedCertificate.image} 
                  alt={selectedCertificate.title} 
                  className="w-full object-contain max-h-80"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Description</h4>
                  <p className="mt-1 text-gray-800">{selectedCertificate.description}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Date Awarded</h4>
                    <p className="mt-1 text-gray-800">{formatDate(selectedCertificate.date)}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Category</h4>
                    <Badge className="mt-1">{selectedCertificate.category}</Badge>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
};

export default Certificates;
