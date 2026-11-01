import celular from "../assets/celular.jpg"

export default function Home() {
    return (

        <div className="space-y-20 pb-24">
            {/* Sección Hero (Bienvenida) */}
            <section className="flex flex-col md:flex-row items-center justify-between pt-12 px-8 gap-8">
                <div className="md:w-1/2">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#64242F] mb-4">
                        BIENVENIDO A MI PWA
                    </h1>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Una PWA <span className="inline-block px-4 py-2 bg-linear-to-r from-[#DFD9D8] via-[#FC8F8F]/20 to-[#DFD9D8] text-slate-700 text-sm font-bold rounded-2xl shadow-[0_4px_12px_rgba(244,143,177,0.4)] hover:shadow-[0_6px_20px_rgba(244,143,177,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">(Progressive Web App o Aplicación Web Progresiva)</span> es una página web tradicional que utiliza tecnologías modernas del navegador para ofrecer una experiencia similar a la de una aplicación móvil o de escritorio nativa.
                    </p>
                </div>
                <div className="md:w-1/2 flex justify-end">
                    {/* Puedes reemplazar el src por tu propia imagen local */}
                    <img
                        src={celular}
                        alt="PWA en smartphone"
                        className="rounded-2xl shadow-2xl max-w-full h-auto object-cover max-h-80"
                    />
                </div>
            </section>

            {/* Sección de Características (Tarjetas) */}
            <section className="px-8">
                <h2 className="text-3xl font-bold text-[#64242F] text-center mb-8">Características Principales</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-[#DFD9D8] p-6 rounded-xl shadow-sm border-l-4 border-[#B44446] hover:bg-[#FC8F8F] hover:-translate-y-1 transition-all duration-300">
                        <h3 className="text-xl font-bold text-[#64242F] mb-3">Instalable</h3>
                        <p className="text-gray-800">
                            Se puede agregar directamente a la pantalla de inicio del dispositivo sin necesidad de pasar por una tienda de aplicaciones.
                        </p>
                    </div>

                    <div className="bg-[#DFD9D8] p-6 rounded-xl shadow-sm border-l-4 border-[#B44446] hover:bg-[#FC8F8F] hover:-translate-y-1 transition-all duration-300">
                        <h3 className="text-xl font-bold text-[#64242F] mb-3">Funcionamiento Offline</h3>
                        <p className="text-gray-800">
                            Gracias al uso de Service Workers, la aplicación puede seguir funcionando sin conexión a internet o en redes inestables.
                        </p>
                    </div>

                    <div className="bg-[#DFD9D8] p-6 rounded-xl shadow-sm border-l-4 border-[#B44446] hover:bg-[#FC8F8F] hover:-translate-y-1 transition-all duration-300">
                        <h3 className="text-xl font-bold text-[#64242F] mb-3">Responsiva</h3>
                        <p className="text-gray-800">
                            Su diseño se adapta de manera fluida a cualquier tamaño de pantalla, ya sea en un teléfono móvil, tablet o computadora de escritorio.
                        </p>
                    </div>
                </div>
            </section>

            {/* Sección de Ventajas y Desventajas (Tabla) */}
            <section className="px-8">
                <h2 className="text-3xl font-bold text-[#64242F] text-center mb-8">Ventajas vs Desventajas</h2>
                <div className="overflow-x-auto shadow-md rounded-xl border border-[#B44446]">
                    <table className="w-full text-left border-collapse min-w-150">
                        <thead>
                            <tr className="bg-[#B44446] text-white">
                                <th className="py-4 px-6 font-semibold w-1/2">Ventajas</th>
                                <th className="py-4 px-6 font-semibold w-1/2 border-l border-white/20">Desventajas</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            <tr className="border-b border-[#DFD9D8] hover:bg-gray-50 transition-colors">
                                <td className="py-4 px-6 text-gray-800">No requieren descarga desde tiendas de aplicaciones (App Store o Google Play).</td>
                                <td className="py-4 px-6 text-gray-800 border-l border-[#DFD9D8]">Acceso limitado a ciertas características de hardware nativo avanzado.</td>
                            </tr>
                            <tr className="border-b border-[#DFD9D8] bg-[#DFD9D8]/30 hover:bg-[#DFD9D8]/60 transition-colors">
                                <td className="py-4 px-6 text-gray-800">Menor peso y consumo de almacenamiento en el dispositivo del usuario.</td>
                                <td className="py-4 px-6 text-gray-800 border-l border-[#DFD9D8]">En iOS (Safari) existen más restricciones técnicas que en Android (Chrome).</td>
                            </tr>
                            <tr className="border-b border-[#DFD9D8] hover:bg-gray-50 transition-colors">
                                <td className="py-4 px-6 text-gray-800">Actualizaciones automáticas al recargar la página, siempre mostrando la última versión.</td>
                                <td className="py-4 px-6 text-gray-800 border-l border-[#DFD9D8]">Menor visibilidad orgánica al no contar con el posicionamiento de una tienda nativa.</td>
                            </tr>
                            <tr className="bg-[#DFD9D8]/30 hover:bg-[#DFD9D8]/60 transition-colors">
                                <td className="py-4 px-6 text-gray-800">Desarrollo más rápido y económico al mantener un único código base web.</td>
                                <td className="py-4 px-6 text-gray-800 border-l border-[#DFD9D8]">Mayor consumo de batería comparado con aplicaciones nativas altamente optimizadas.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

        </div>
    );
}