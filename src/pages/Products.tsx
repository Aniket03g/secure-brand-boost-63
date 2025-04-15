
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

interface ProductCategoryProps {
  title: string;
  brands: string[];
  description: string;
  image: string;
}

const ProductCategory: React.FC<ProductCategoryProps> = ({ title, brands, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-500 mb-2">Brands</h4>
          <div className="flex flex-wrap gap-2">
            {brands.map((brand, index) => (
              <span key={index} className="bg-gray-100 px-3 py-1 text-sm rounded-full">
                {brand}
              </span>
            ))}
          </div>
        </div>
        <Link 
          to={`/products/${title.toLowerCase().replace(/\s+/g, '-')}`} 
          className="text-vtech-blue hover:text-vtech-darkBlue font-medium inline-flex items-center"
        >
          View Products
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

const Products = () => {
  const productCategories = [
    {
      title: "Computers & Workstations",
      brands: ["HP", "Dell", "Lenovo", "Acer"],
      description: "Desktop computers, workstations, and laptops for business and professional use.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800"
    },
    {
      title: "Servers & Storage",
      brands: ["HP", "Dell", "Lenovo", "Cisco"],
      description: "Server hardware, storage solutions, and related infrastructure components.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800"
    },
    {
      title: "Networking Equipment",
      brands: ["Cisco", "D-Link", "ARUBA"],
      description: "Switches, routers, wireless connectivity solutions, and networking accessories.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800"
    },
    {
      title: "Security Solutions",
      brands: ["F5 Networks", "Fortinet", "Microsoft", "Kaspersky", "McAfee"],
      description: "Firewalls, security software, and comprehensive protection for your IT infrastructure.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800"
    },
    {
      title: "Power Solutions",
      brands: ["APC", "Schneider Electric", "EATON"],
      description: "UPS systems, power management solutions, and electrical infrastructure.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800"
    },
    {
      title: "Collaboration Tools",
      brands: ["Zoom", "Microsoft"],
      description: "Video conferencing, communication solutions, and remote collaboration tools.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Products - V Technologies</title>
        <meta name="description" content="V Technologies offers a wide range of IT hardware products including servers, computers, networking equipment, security solutions, and more from leading brands." />
        <meta property="og:title" content="Products - V Technologies" />
        <meta property="og:description" content="Explore our comprehensive range of IT hardware products from leading brands including servers, computers, networking equipment, and security solutions." />
      </Helmet>
      
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-vtech-darkBlue to-vtech-blue text-white py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
              <p className="text-xl opacity-90">
                Premium hardware and software solutions from leading technology brands.
              </p>
            </div>
          </div>
        </section>
        
        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productCategories.map((category, index) => (
                <ProductCategory 
                  key={index}
                  title={category.title}
                  brands={category.brands}
                  description={category.description}
                  image={category.image}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Brands Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-vtech-gray">Our Brand Partners</h2>
              <div className="w-24 h-1 bg-vtech-blue mx-auto mt-4 mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We partner with leading technology providers to deliver the best solutions to our clients.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {[
                { name: "HP", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/HP_logo_2012.svg/1200px-HP_logo_2012.svg.png" },
                { name: "Dell", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dell_logo_2016.svg/1200px-Dell_logo_2016.svg.png" },
                { name: "Lenovo", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lenovo_logo_2015.svg/1280px-Lenovo_logo_2015.svg.png" },
                { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1280px-Cisco_logo_blue_2016.svg.png" },
                { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1280px-Microsoft_logo.svg.png" },
                { name: "Acer", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Acer_2011.svg/1280px-Acer_2011.svg.png" },
                { name: "APC", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/APC_logo.svg/1280px-APC_logo.svg.png" },
                { name: "D-Link", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/D-Link_logo.svg/1280px-D-Link_logo.svg.png" },
              ].map((brand, index) => (
                <div key={index} className="bg-white p-6 flex items-center justify-center h-32 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="max-h-12 max-w-full grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
