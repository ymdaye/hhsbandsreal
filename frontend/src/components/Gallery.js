import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const Gallery = ({ title, images }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const galleryImages = images || [
    {
      src: "http://hhsbands.org/wp-content/uploads/2014/07/collage_2017.jpg",
      alt: "Band Collage 2017",
      caption: "Highlights from the 2017 Season"
    },
    {
      src: "https://hhsbands.org/wp-content/uploads/2024/11/BOA-New-Jersey-2024-2048x862.jpg",
      alt: "BOA New Jersey 2024",
      caption: "BOA New Jersey Championship 2024"
    },
    {
      src: "https://images.pexels.com/photos/2363674/pexels-photo-2363674.jpeg",
      alt: "Marching Band Performance",
      caption: "Precision and Excellence in Performance"
    },
    {
      src: "https://images.unsplash.com/photo-1638752096399-4b6a40939e21",
      alt: "Marching Band in Formation",
      caption: "Marching Band Visual Excellence"
    },
    {
      src: "https://images.pexels.com/photos/7095726/pexels-photo-7095726.jpeg",
      alt: "Concert Performance",
      caption: "Concert Band Excellence"
    },
    {
      src: "https://images.pexels.com/photos/11425205/pexels-photo-11425205.jpeg",
      alt: "Student Musician",
      caption: "Dedicated Student Musicians"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title || "Photo Gallery"}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Capturing moments of musical excellence and unforgettable performances
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl"
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-lg">{image.caption}</h3>
                </div>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 ring-0 group-hover:ring-4 ring-primary-500/50 transition-all duration-300 rounded-2xl"></div>
            </motion.div>
          ))}
        </div>

        {isOpen && (
          <Lightbox
            mainSrc={galleryImages[photoIndex].src}
            nextSrc={galleryImages[(photoIndex + 1) % galleryImages.length].src}
            prevSrc={galleryImages[(photoIndex + galleryImages.length - 1) % galleryImages.length].src}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + galleryImages.length - 1) % galleryImages.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % galleryImages.length)
            }
            imageCaption={galleryImages[photoIndex].caption}
          />
        )}
      </div>
    </section>
  );
};

export default Gallery;