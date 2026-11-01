export default function Gallery() {
  // Ejemplos de imágenes enfocadas en repostería y diseño visual
  const images = [
    {
      src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Pastel de Frutos"
    },
    {
      src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Postre Clásico"
    },
    {
      src: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Diseño Conceptual"
    },
    {
      src: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Macarons"
    },
    {
      src: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Tarta Rústica"
    },
    {
      src: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Branding Visual"
    }
  ];

  return (
    <div className="space-y-12 pb-12 pt-12 px-8">
      {/* Encabezado de la Galería */}
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#64242F] mb-4">
          Galería Visual
        </h1>
        <p className="text-lg text-gray-700">
          Explora nuestra colección. Un espacio diseñado con un enfoque minimalista para resaltar cada detalle, color y textura.
        </p>
      </section>

      {/* Grid de Imágenes */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {images.map((img, index) => (
          <div 
            key={index} 
            className="group relative overflow-hidden rounded-2xl shadow-md border-4 border-transparent hover:border-[#FC8F8F] transition-all duration-300 cursor-pointer bg-[#DFD9D8]"
          >
            <img 
              src={img.src} 
              alt={img.title} 
              className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500" 
            />
            
            {/* Capa superpuesta (Overlay) al hacer hover */}
            <div className="absolute inset-0 bg-[#64242F]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
              <span className="text-white text-xl font-bold tracking-wider text-center border-b-2 border-[#FC8F8F] pb-2 mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {img.title}
              </span>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}