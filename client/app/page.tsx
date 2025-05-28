import Image from "next/image";
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from "@/components/Projects";
import Contacts from "@/components/Contacts";

export default function Home() {
  return (
   <main>
      <Hero />
      <Services />
      <Projects />
      <Contacts/>
    </main>
 
  );
}
