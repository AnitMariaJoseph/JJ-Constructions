export default function ServicesPage() {
  const services = [
    {
      title: "Residential Construction",
      description: "High-quality homes tailored to your family's needs and lifestyle.",
    },
    {
      title: "Commercial Projects",
      description: "Innovative and efficient commercial building solutions.",
    },
    {
      title: "Renovations & Remodeling",
      description: "Transform your existing space with modern finishes and layouts.",
    },
    {
      title: "Interior Design",
      description: "Designs that balance functionality with visual appeal.",
    },
    {
      title: "Custom Builds",
      description: "Unique builds designed from scratch to match your vision.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {
    //<section className="w-full py-16 bg-white">
        <section className="bg-blue-950 text-yellow-600 py-20 text-center">
      <div className="max-w-6xl mx-auto px-10 text-center">
        <h1 className="text-5xl font-bold text-yellow-600 mb-6">Our Services</h1>
        <p className="text-yellow-600 max-w-1.5xl text-lg mx-auto mb-7">
          We offer a wide range of construction and design services to bring your vision to life.
        </p>
      </div>
    </section>}

{
    <section className="w-full py-16 px-10 bg-white">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="border rounded-xl p-7 shadow hover:shadow-md transition text-center bg-gray-50"
            >
              <h3 className="text-xl font-semibold text-blue-900 mb-6">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
    </section>}
    </main>
  );
}