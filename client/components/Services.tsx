

// This component renders a list of service cards for the home page.

export default function Services() {
  // Define a list of services (can later come from an API)
  const services = [
    {
      title: "Residential Construction",
      description: "High-quality homes tailored to your lifestyle.",
    },
    {
      title: "Commercial Projects",
      description: "Reliable, scalable, and professional commercial buildings.",
    },
    {
      title: "Renovations",
      description: "Transform and modernize your existing spaces with our expert renovations.",
    },
  ];

  return (
    // Section with padding and light background
    <section className="w-full bg-white py-20">
      
      {/* Container to center content and limit width */}
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Section heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
          Our Services
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 max-w-xl mx-auto mb-12">
          We offer a wide range of construction services to bring your vision to life.
        </p>

        {/* Responsive grid layout for service cards */}
        <div className="grid gap-8 md:grid-cols-3">  {/*Makes a responsive 3-column layout with spacing*/}
          {services.map((service, index) => (   //	Loops through each service and renders a card
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p> 
               {/**This is JavaScript/JSX syntax inside curly braces. It dynamically inserts the value of description from the current service object into this paragraph*/}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
