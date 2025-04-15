
const ClientsSection = () => {
  const clients = [
    "College of Military Engineering, Pune (DEF)",
    "GREF Centre & RECORDS, Pune (DEF)",
    "Army Air Defense 145 Lt Regt. (DEF)",
    "Tata Ficosa Automotive Systems Ltd.",
    "Symantec Pune",
    "Deepak Fertilizers & Petrochemicals Ltd",
    "Reliance Industries Ltd.",
    "Kirloskar Oil Engine Ltd.",
    "Flexible Accounting Ltd. London, UK",
    "Earth Solutions Ltd, Kenya, Africa"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-vtech-gray">Our Trusted Clients</h2>
          <div className="w-24 h-1 bg-vtech-blue mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We serve a diverse range of clients from government agencies to multinational corporations.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {clients.map((client, index) => (
              <div 
                key={index}
                className="py-3 px-4 border-l-4 border-vtech-blue bg-gray-50 hover:bg-vtech-blue hover:text-white transition-colors"
              >
                {client}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a href="/clients" className="text-vtech-blue hover:text-vtech-darkBlue font-medium inline-flex items-center">
              View All Clients
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
