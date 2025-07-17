

// client/components/Hero.tsx

// This is a React component for the Hero section of the homepage.
// It is styled using Tailwind CSS for simplicity and responsiveness.

export default function Hero() {
  return (
    // Section block with full width, light gray background, and vertical padding
    <section className="w-full bg-blue-950 py-20">
      
      {/* Container to center the content and limit its maximum width */}
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Main headline - large and bold */}
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-600">
          From Blueprint to Reality — Built to Last
        </h2>

        {/* Subheading/description text - medium size, light color, and centered */}
        <p className="mt-4 text-lg text-yellow-600 max-w-2xl mx-auto">
         Every project we build starts with quality materials, honest craftsmanship, and a promise to treat your home like our own.
        </p>

        {/* Call-to-Action button - styled with background color, padding, hover effects */}
        <button className="mt-8 bg-blue-800 border-white text-yellow-600 px-6 py-3 rounded-lg hover:bg-blue-950 transition">
          Get a Free Quote
        </button>
      </div>
    </section>
  );
}