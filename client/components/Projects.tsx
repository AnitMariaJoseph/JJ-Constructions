
"use client"; // ✅ Marks this file as a client component so you can use useState

import { useState, useEffect } from "react";
import ProjectModal from "@/components/ProjectModal";



type Project = {
  id: number;
  title: string;
  description: string;
  fulldescription: string;
  imageUrl: string;
};
export default function Projects() {
  // Sample data for projects, this can later come from your backend API
  
   // Tracks which project is selected for modal view
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  // Handle closing modal with a small delay to avoid click-through
  const handleCloseModal = () => {
  // Delay state reset to allow click event to finish
  setTimeout(() => {
    setSelectedProject(null);
  }, 0);
};

 // Prevent page scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "auto";
  }, [selectedProject]);

  const projects : Project[] = [   
    {
      id: 1,
      title: "Modern Family Home",
      description: "A contemporary residential build with eco-friendly materials.",
      fulldescription: "This modern home is constructed using sustainable materials and features open-concept interiors, solar power integration, and energy-efficient fixtures. Designed with a young family in mind, it balances aesthetics with practicality.",
      imageUrl: "/images/residential/residential 1.jpg", // Place your image inside /public/images/
    },
    {
      id: 2,
      title: "Downtown Office Complex",
      description: "State-of-the-art commercial offices with sustainable design.",
      fulldescription: "Our downtown project spans multiple floors of ultra-modern workspaces, featuring green terraces, automated systems, and ample natural lighting. It reflects our commitment to modern architecture and environmental responsibility.",
      imageUrl: "/images/commercial/commercial 1.jpg",
    },
    {
      id: 3,
      title: "Luxury Kitchen Renovation",
      description: "Complete kitchen overhaul with modern finishes and smart appliances.",
      fulldescription: "This kitchen renovation included expanding the space, installing Italian marble countertops, and integrating smart home appliances. We emphasized elegance, efficiency, and functionality.",
      imageUrl: "/images/renovation/renovation 1.jpg",
    },
  ];

  //<ProjectModal project={selectedProject} onClose={handleCloseModal} />
  return (

    
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Projects
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-12">
          Take a look at some of our completed works.
        </p>

        {/* Responsive grid */}
        {/*Opens the modal with selected project*/}

        <div className={'grid gap-8 md:grid-cols-3 ${selectedProject ? "pointer-events-none" : ""}'}>
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}  
              className="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer"
            >
              {/* Loads project images from the /public/images/ folder, keeping assets organized and easy to serve */}
              <img  
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
              {selectedProject && (
                <ProjectModal 
                   project={selectedProject} 
                   onClose={handleCloseModal} 
                 />
              )}
            </div>
            
          ))}
        </div>
      </div>
    </section>
  );
}
