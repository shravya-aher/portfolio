import { useState } from 'react';

interface Photo {
  id: number;
  url: string;
  title: string;
  story: string;
}

const placeholderPhotos: Photo[] = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop',
    title: 'Project Alpha',
    story: 'This was my first major design project where I explored minimalist aesthetics and bold typography. The challenge was to create a cohesive brand identity that felt both modern and timeless.'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=400&h=400&fit=crop',
    title: 'Digital Art Series',
    story: 'A collection of digital illustrations inspired by nature and geometry. Each piece represents a different season and emotion, blending organic forms with structured patterns.'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=400&h=400&fit=crop',
    title: 'UI Redesign',
    story: 'Redesigned a mobile app interface focusing on accessibility and user experience. Simplified the navigation flow and introduced a vibrant color palette that improved user engagement by 40%.'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=400&h=400&fit=crop',
    title: 'Brand Identity',
    story: 'Created a complete visual identity for a sustainable fashion startup. Developed the logo, color system, and packaging design that reflected their eco-friendly values.'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=400&h=400&fit=crop',
    title: 'Illustration Work',
    story: 'Editorial illustrations for a lifestyle magazine. These pieces explore themes of modern living, technology, and human connection through whimsical characters and vibrant colors.'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400&h=400&fit=crop',
    title: 'Motion Graphics',
    story: 'Animated explainer video for a tech startup. Combined 2D animation with kinetic typography to communicate complex concepts in an engaging and digestible way.'
  }
];

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <>
      <div className="grid grid-cols-3 gap-4 max-w-5xl mx-auto px-12">
        {placeholderPhotos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => setSelectedPhoto(photo)}
            className="aspect-square rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            <img
              src={photo.url}
              alt={photo.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl p-8 max-w-2xl w-full shadow-2xl"
          >
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.title}
              className="w-full h-64 object-cover rounded-2xl mb-6"
            />
            <h3 className="text-3xl mb-4 text-[#8B4567] font-['p22-allyson-pro']">
              {selectedPhoto.title}
            </h3>
            <p className="text-lg text-[#9B5577] leading-relaxed">
              {selectedPhoto.story}
            </p>
            <button
              onClick={() => setSelectedPhoto(null)}
              className="mt-6 px-6 py-2 bg-[#FFD4E5] hover:bg-[#FFDAB9] text-[#8B4567] rounded-full transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
