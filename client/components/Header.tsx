import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
  
    <header className="w-full px-6 py-3 shadow bg-white">
  <div className="max-w-7xl mx-auto flex justify-between items-center">
    <div className="flex items-center space-x-4">
      <Link href="/">
        {/* Image must be wrapped in an <a> tag */}
       
          <Image
            src="/images/logo.jpg"
            alt="J & J Engineers Logo"
            width={150}
            height={150}
          
            className="object-cover"
            priority
          />
       
      </Link>
     
    </div>

    <nav className="space-x-5 text-base font-medium text-gray-700">
      <Link href="/" className="hover:text-blue-600 transition">Home</Link>
      <Link href="/about" className="hover:text-blue-600 transition">About</Link>
      <Link href="/services" className="hover:text-blue-600 transition">Services</Link>
      <Link href="/projects" className="hover:text-blue-600 transition">Projects</Link>
      <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
    </nav>
  </div>
</header>

  );
}  


/*import Image from "next/image";
import Link from "next/image";

export default function Header() {
  return (
    <header className="w-full px-6 py-4 shadow bg-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
       <div className="flex items-center space-x-4">
 
    <Image
      src="/images/logo.jpg"
      alt="J & J Constructions Logo"
      width={550}
      height={550}
      className="object-contain"
    />
 
</div>
        <h1 className="text-xl font-bold">J & J Engineers</h1>
        <nav className="space-x-4">
          <a href="#" className="hover:underline">Home</Link>
          <a href="#" className="hover:underline">About</Link>
          <a href="#" className="hover:underline">Services</Link>
          <a href="#" className="hover:underline">Projects</Link>
          <a href="#" className="hover:underline">Contact</Link>
        </nav>
      </div>
    </header>
  );
} */