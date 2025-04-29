
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Search, Award, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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

const CATEGORIES = ["All", "Microsoft", "Cisco", "AWS", "VMware", "Dell", "HP", "Other"];

const CERTIFICATES: Certificate[] = [
  {
    id: 1,
    title: "Microsoft Gold Partner",
    brand: "Microsoft",
    date: "2023-10-15",
    category: "Microsoft",
    image: "/lovable-uploads/6c24bed7-8c07-4330-8f92-070d97bc0b10.png",
    description: "Recognized as a Microsoft Gold Partner for excellence in delivering Microsoft-based solutions and demonstrating a high level of expertise."
  },
  {
    id: 2,
    title: "Cisco Premier Partner",
    brand: "Cisco",
    date: "2023-08-22",
    category: "Cisco",
    image: "/lovable-uploads/521b9f2a-9956-4900-92ce-1ad23cf28f12.png",
    description: "Certified as a Cisco Premier Partner for networking excellence and proven ability to deliver Cisco-based infrastructure solutions."
  },
  {
    id: 3,
    title: "AWS Solutions Architect",
    brand: "Amazon Web Services",
    date: "2023-05-10",
    category: "AWS",
    image: "/lovable-uploads/6c24bed7-8c07-4330-8f92-070d97bc0b10.png",
    description: "Certified as an AWS Solutions Architect with expertise in designing and deploying scalable, highly available systems on AWS."
  },
  {
    id: 4,
    title: "VMware vSphere Specialist",
    brand: "VMware",
    date: "2023-04-18",
    category: "VMware",
    image: "/lovable-uploads/521b9f2a-9956-4900-92ce-1ad23cf28f12.png",
    description: "Recognized as a VMware vSphere Specialist for virtualization expertise and implementation of VMware solutions."
  }
];

const Certificates = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  // Filter certificates based on category and search term
  const filteredCertificates = CERTIFICATES.filter(cert => {
    const matchesCategory = selectedCategory === "All" || cert.category === selectedCategory;
    const matchesSearch = cert.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         cert.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
          Explore our recognitions and certifications as an impact partner with leading technology brands.
        </motion.p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
          <Input 
            placeholder="Search certificates..." 
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <Tabs defaultValue="All" className="w-full md:w-auto">
          <TabsList className="grid grid-cols-4 md:grid-cols-8">
            {CATEGORIES.map((category) => (
              <TabsTrigger 
                key={category} 
                value={category}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {filteredCertificates.length > 0 ? (
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {filteredCertificates.map((certificate) => (
            <motion.div
              key={certificate.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
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
      ) : (
        <div className="text-center py-16">
          <Award className="mx-auto h-12 w-12 text-gray-300 mb-4" />
          <h3 className="text-xl font-medium text-gray-700 mb-2">No Certificates Found</h3>
          <p className="text-gray-500">No certificates match your current filters. Try changing your search criteria.</p>
        </div>
      )}

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
