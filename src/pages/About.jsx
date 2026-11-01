export default function About() {
  return (
    <div className="space-y-16 pb-12 px-8 pt-12">
      {/* Encabezado Principal */}
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#64242F] mb-6">
          Sobre Este Proyecto
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Esta aplicación web progresiva (PWA) fue diseñada para explorar el potencial de las tecnologías web modernas. Nuestro objetivo es ofrecer una experiencia de usuario fluida, rápida y accesible desde cualquier dispositivo, combinando un diseño estético con un rendimiento óptimo.
        </p>
      </section>

      {/* Tarjetas de Misión y Visión */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-white p-8 rounded-2xl shadow-md border-t-8 border-[#B44446] hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-[#64242F] mb-4">El Propósito</h2>
          <p className="text-gray-700 leading-relaxed">
            Desarrollar interfaces limpias y modulares que difuminen la línea entre las aplicaciones web y nativas. Queremos demostrar que con herramientas modernas de frontend se pueden lograr resultados rápidos sin sacrificar el diseño.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-md border-t-8 border-[#FC8F8F] hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-[#64242F] mb-4">La Visión Técnica</h2>
          <p className="text-gray-700 leading-relaxed">
            Establecer una base sólida de desarrollo, priorizando el diseño responsivo, el funcionamiento offline mediante Service Workers y una arquitectura escalable lista para integrarse con bases de datos.
          </p>
        </div>
      </section>

      {/* Perfil del Desarrollador y Tech Stack */}
      <section className="bg-[#DFD9D8]/40 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto border border-[#DFD9D8]">
        <div className="w-48 h-48 shrink-0">
          {/* Puedes cambiar este src por una foto tuya o un logo */}
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
            alt="Workspace de desarrollo" 
            className="w-full h-full object-cover rounded-full shadow-lg border-4 border-[#B44446]"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-[#64242F] mb-2">Desarrollado por Sofía</h2>
          <p className="text-[#B44446] font-semibold mb-4 tracking-wide">ESTUDIANTE DE INGENIERÍA EN SISTEMAS COMPUTACIONALES</p>
          <p className="text-gray-800 mb-6 leading-relaxed">
            Apasionada por el diseño de interfaces minimalistas y la ingeniería de software. Este proyecto aplica principios de arquitectura modular y un enfoque "mobile-first" para crear una experiencia de usuario intuitiva.
          </p>
          
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-[#64242F] text-white text-sm font-medium rounded-full shadow-sm hover:scale-105 transition-transform">React</span>
            <span className="px-4 py-2 bg-[#B44446] text-white text-sm font-medium rounded-full shadow-sm hover:scale-105 transition-transform">Vite</span>
            <span className="px-4 py-2 bg-[#FC8F8F] text-[#64242F] text-sm font-bold rounded-full shadow-sm hover:scale-105 transition-transform">Tailwind CSS</span>
          </div>
        </div>
      </section>
    </div>
  );
}