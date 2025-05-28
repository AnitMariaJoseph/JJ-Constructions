import React from 'react';

{/*Project type to enforce structure and autocomplete in TypeScript*/}
type Project = {
  id: number;
  title: string;
  description: string;
  fulldescription: string;
  imageUrl: string;
};

{/*Props define what the component needs: a project object and a function to close the modal.*/}
type ModalProps = {
  project: Project | null;
  onClose: () => void;
};


const ProjectModal: React.FC<ModalProps> = ({ project, onClose }) => {
  if (!project) return null; // Modal will not render if no project is selected

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>  {/* Click outside modal closes it*/}
      <div className="bg-white rounded-lg max-w-lg w-full p-6 relative shadow-xl z-60" onClick={(e) => e.stopPropagation()}>  {/* Prevent click from bubbling up to outer div*/}
      {/*Closes the modal when clicked.*/}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
          aria-label="Close modal"
        >
          X
        </button>
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-60 object-cover rounded-md mb-4"
        />
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">{project.title}</h2>
        <p className="text-gray-700">{project.fulldescription}</p>
      </div>
    </div>
  );
};

export default ProjectModal;
