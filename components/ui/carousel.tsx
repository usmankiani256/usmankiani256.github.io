"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./button";

interface ImageGalleryProps {
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  imageStyle?: string;
}

export default function ImageGallery({
  images,
  imageStyle,
}: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openViewer = (index: number) => {
    setSelectedImage(index);
  };

  const closeViewer = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (selectedImage === null) return;

    if (e.key === "Escape") {
      closeViewer();
    } else if (e.key === "ArrowRight") {
      nextImage();
    } else if (e.key === "ArrowLeft") {
      prevImage();
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeViewer();
    }
  };

  if (images.length === 0) return null;

  return (
    <>
      <div className="overflow-x-auto">
        <div className="flex gap-2 pb-4" style={{ minWidth: "max-content" }}>
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-auto">
              <div
                className="relative cursor-pointer"
                onClick={() => openViewer(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={100}
                  height={100}
                  className={`w-[200px] h-auto rounded-lg ${imageStyle}`}
                  priority={index < 2}
                />
                {image.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-center text-sm rounded-b-lg">
                    {image.caption}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Viewer */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onKeyDown={handleKeyDown}
          onClick={handleBackdropClick}
          tabIndex={0}
        >
          <div className="relative h-[90vh] w-auto">
            {images.length > 1 && (
              <Button
                variant="outline"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
                onClick={prevImage}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
            )}
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              width={1200}
              height={800}
              className="h-full p-16 w-auto object-contain"
              priority
            />
            {images.length > 1 && (
              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
                onClick={nextImage}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            )}
            {images[selectedImage].caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 text-center">
                {images[selectedImage].caption}
              </div>
            )}
          </div>
          <Button
            variant="outline"
            size="sm"
            className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-background/80 hover:bg-background"
            onClick={closeViewer}
          >
            Close
          </Button>

          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {selectedImage + 1} / {images.length}
            </div>
          )}
        </div>
      )}
    </>
  );
}
