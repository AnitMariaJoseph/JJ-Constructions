
"use client";

import { useState } from "react";
import ProjectModal from "@/components/ProjectModal";

type Project = {
  id: number;
  title: string;
  description: string;
  fulldescription: string;
  imageUrl: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Modern Family Home",
    description: "A contemporary residential build with eco-friendly materials.",
    fulldescription: "A 3-bedroom home designed with sustainability in mind. Solar panels, rainwater harvesting system, and energy-efficient design.",
    imageUrl: "/images/residential/residential 1.jpg",
  },
  {
    id: 2,
    title: "Downtown Office Complex",
    description: "State-of-the-art commercial offices with sustainable design.",
    fulldescription: "10-storey building featuring smart lighting, green building certification, and a spacious coworking floor.",
    imageUrl: "/images/commercial/commercial 1.jpg",
  },
  {
    id: 3,
    title: "Luxury Kitchen Renovation",
    description: "Complete kitchen overhaul with modern finishes and smart appliances.",
    fulldescription: "Premium cabinetry, granite countertops, and energy-saving appliances. Smart lighting and hidden storage solutions.",
    imageUrl: "/images/renovation/renovation 1.jpg",
  },
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Projects</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-12">
          Explore our portfolio of residential, commercial, and renovation works.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer"
            >
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
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => {
            setTimeout(() => setSelectedProject(null), 150);
          }}
        />
      )}
    </section>
  );
}


