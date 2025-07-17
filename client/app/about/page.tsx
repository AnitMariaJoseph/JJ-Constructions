
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {
        <section className="bg-blue-950 text-yellow-600 py-20 text-center">
  <h1 className="text-4xl md:text-5xl font-bold mb-4">
    Who&nbsp;We&nbsp;Are
  </h1>
  <p className="max-w-2xl mx-auto text-lg text-yellow-600">
    Crafting durable, beautiful structures across Kerala since&nbsp;2015.
  </p>
</section>
}

{<section className="py-20 px-6 bg-gray-50">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    {/* Text column */}
    <div>
      <h2 className="text-3xl font-bold mb-4 text-blue-950">Our Mission</h2>
      <p className="text-gray-700 mb-6">
        At J&nbsp;&amp;&nbsp;J Constructions our mission is simple: deliver
        top‑quality, sustainable buildings that stand the test of time while
        fostering transparent partnerships with our clients.
      </p>

      <h3 className="text-xl font-semibold text-blue-800 mb-2">Core Values</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>Integrity &amp; transparency</li>
        <li>Safety first on every site</li>
        <li>Eco‑friendly materials and methods</li>
        <li>Continuous innovation</li>
      </ul>
    </div>

    {/* Image column */}
    <div>
      <img
        src="/images/About/team.jpg"
        alt="Our team at a construction site"
        className="rounded-lg shadow-lg object-cover w-full h-90"
      />
    </div>
  </div>
</section>}

{<section className="py-20 px-6">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-blue-900 mb-12">The Team</h2>

    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
      {[
        { name: "Joseph Thomas", role: "Founder & CEO", photo: "public/images/About/Team/Joseph.jpg" },
        { name: "Emmanuel J.", role: "Head Engineer", photo: "public/images/About/Team/Emmanuel.jpg" },
        { name: "Akhil M.", role: "Site Supervisor", photo: "public/images/About/Team/Akhil.jpg" },
        { name: "Meera Sudhi", role: "Architect", photo: "public/images/About/Team/Meera.jpg" },
      ].map((person) => (
        <div key={person.name}>
          <img
            src={person.photo}
            alt={person.name}
            className="w-32 h-32 mx-auto rounded-full object-cover shadow-md"
          />
          <p className="mt-4 font-semibold text-gray-800">{person.name}</p>
          <p className="text-sm text-gray-600">{person.role}</p>
        </div>
      ))}
    </div>
  </div>
</section>}

{<section className="bg-blue-900 text-white py-16">
  <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-8 text-center">
    <div>
      <p className="text-4xl font-bold">10+</p>
      <p className="opacity-80">Years in Business</p>
    </div>
    <div>
      <p className="text-4xl font-bold">120+</p>
      <p className="opacity-80">Completed Projects</p>
    </div>
    <div>
      <p className="text-4xl font-bold">98%</p>
      <p className="opacity-80">Client Satisfaction</p>
    </div>
  </div>
</section>}
    </main>
  );
}
