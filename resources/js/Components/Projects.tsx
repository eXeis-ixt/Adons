import React from 'react';
import { ExternalLink } from 'lucide-react';
import { ProjectProps } from '@/types';



export function Project({ title, desc, image, project_url }: ProjectProps) {
  return (
    <div className="relative group overflow-hidden rounded-xl">
      <img
        src={image}
        alt={title}
        className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-gray-300 mb-4 max-w-[90%]">{desc}</p>
          <a
            href={project_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-transparent backdrop-blur-lg px-4 py-2 rounded-full transition-colors"
          >
            <ExternalLink size={18} />
            <span>View Project</span>
          </a>
        </div>
      </div>
    </div>
  );
}
