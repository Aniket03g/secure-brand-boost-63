
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>About Us - V Technologies</title>
        <meta name="description" content="Learn about V Technologies, a system integration company providing global IT infrastructure solutions and consultancy services based in Pune, India." />
        <meta property="og:title" content="About Us - V Technologies" />
        <meta property="og:description" content="Learn about V Technologies, a system integration company providing global IT infrastructure solutions and consultancy services." />
      </Helmet>
      
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-vtech-darkBlue to-vtech-blue text-white py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About V Technologies</h1>
              <p className="text-xl opacity-90">
                A system integration company providing global solutions and services based on cutting-edge technologies.
              </p>
            </div>
          </div>
        </section>
        
        {/* Company Introduction */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-vtech-gray mb-6">Our Company</h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    V Technologies is a System Integration company, Hardware Solutions & Software Development with IT Consultancy Services Company based in Pune India, providing global solutions and services based on cutting-edge technologies in the field of enterprise computing, e-Business, Intranet and web solutions.
                  </p>
                  <p>
                    We specialize in Intel based Hardware solutions, Design, implementations of Storage & Networking solutions for e-Business Applications, Mobile Computing, GroupWare, Workflow Automation, CAD/CAM/CAE applications and Web Technologies. We provide enterprise solutions that increase the productivity and profitability of our clients by harvesting the innovative technologies to harmonize the corporate knowledge, its people and systems.
                  </p>
                  <p>
                    V Technologies deploys mission critical solutions with activities covering Requirement Study & System Specification, Functional/Architecture Design, Infrastructure Review, Application Development, System Implementation, Project Management, Training and Support.
                  </p>
                </div>
              </div>
              
              <div className="lg:pl-10">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800"
                  alt="IT Professionals at work"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Vision */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-vtech-gray mb-4">Our Vision</h2>
              <div className="w-24 h-1 bg-vtech-blue mx-auto mb-6"></div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-lg text-center">
                To be amongst the top vendors of choice in the national & international market as a strong and viable player for delivering enterprise grade solutions in the arena of E-Business, Collaborative Computing and Enterprise Automation by leveraging the current technology expertise and providing best in class products and development services for enterprise computing, e-business and web solutions with high customer value.
              </p>
              
              <h3 className="text-xl font-semibold mt-8 mb-4 text-center">This will be achieved by:</h3>
              
              <ul className="space-y-4 max-w-2xl mx-auto">
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-vtech-blue rounded-full mr-3 flex-shrink-0 mt-1"></span>
                  <span>Creating international alliances, tie-ups and joint ventures to improve visibility in the international market.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-vtech-blue rounded-full mr-3 flex-shrink-0 mt-1"></span>
                  <span>Partnering with our customers to understand and deliver reliable, timely and precise fit products and services.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-vtech-blue rounded-full mr-3 flex-shrink-0 mt-1"></span>
                  <span>Pioneering the use of emerging technologies to constantly deliver improved value products while focusing on partnering with our customers to achieve mutual success.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-vtech-blue rounded-full mr-3 flex-shrink-0 mt-1"></span>
                  <span>Focusing on leveraging cost effective and quality services to help our customers maximize IT benefits.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Values */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-vtech-gray mb-4">Our Values</h2>
              <div className="w-24 h-1 bg-vtech-blue mx-auto mb-6"></div>
            </div>
            
            <div className="bg-vtech-blue text-white p-8 rounded-lg text-center">
              <p className="text-2xl italic font-light">
                "Honesty, sincerity and integrity is the foundation for long-mutual relationships"
              </p>
              <p className="mt-4 text-lg">Our driving mantra</p>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-vtech-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-vtech-blue text-2xl font-bold">H</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Honesty</h3>
                <p className="text-gray-600">
                  We believe in complete transparency with our clients, partners, and employees.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-vtech-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-vtech-blue text-2xl font-bold">S</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Sincerity</h3>
                <p className="text-gray-600">
                  We are genuinely committed to understanding and meeting our customers' needs.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-vtech-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-vtech-blue text-2xl font-bold">I</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Integrity</h3>
                <p className="text-gray-600">
                  We uphold the highest ethical standards in all our business dealings.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
