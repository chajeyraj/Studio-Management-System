import React, { useState } from 'react';
import { XIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
interface Image {
  id: string;
  url: string;
  thumbnail?: string;
  caption?: string;
}
interface GalleryDetailProps {
  images: Image[];
  title: string;
  onClose: () => void;
}
export const GalleryDetail: React.FC<GalleryDetailProps> = ({
  images,
  title,
  onClose
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const nextImage = () => {
    setCurrentImageIndex(prev => (prev + 1) % images.length);
  };
  const prevImage = () => {
    setCurrentImageIndex(prev => (prev - 1 + images.length) % images.length);
  };
  const currentImage = images[currentImageIndex];
  return <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col z-50">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-black bg-opacity-50">
        <h3 className="text-lg font-medium text-white">{title}</h3>
        <button onClick={onClose} className="text-gray-300 hover:text-white transition-colors">
          <XIcon className="h-6 w-6" />
        </button>
      </div>
      {/* Image display */}
      <div className="flex-1 flex items-center justify-center relative">
        <img src={currentImage.url} alt={currentImage.caption || title} className="max-h-full max-w-full object-contain" />
        {/* Navigation buttons */}
        <button onClick={prevImage} className="absolute left-4 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 focus:outline-none" aria-label="Previous image">
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <button onClick={nextImage} className="absolute right-4 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 focus:outline-none" aria-label="Next image">
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>
      {/* Caption */}
      {currentImage.caption && <div className="p-4 bg-black bg-opacity-50 text-center">
          <p className="text-white">{currentImage.caption}</p>
          <p className="text-gray-300 text-sm">
            {currentImageIndex + 1} of {images.length}
          </p>
        </div>}
      {/* Thumbnails */}
      <div className="p-4 bg-black bg-opacity-50 overflow-x-auto">
        <div className="flex space-x-2">
          {images.map((image, index) => <button key={image.id} onClick={() => setCurrentImageIndex(index)} className={`flex-shrink-0 focus:outline-none ${index === currentImageIndex ? 'ring-2 ring-indigo-500' : ''}`}>
              <img src={image.thumbnail || image.url} alt={`Thumbnail ${index + 1}`} className="h-16 w-16 object-cover" />
            </button>)}
        </div>
      </div>
    </div>;
};