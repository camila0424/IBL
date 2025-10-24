import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Services() {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data.serviciosPrincipales))
      .catch((err) => console.error("Error cargando servicios:", err));
  }, []);

  return (
    <section id="servicios" className="bg-red-700 py-16 scroll-mt-24">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Título centrado y pequeño */}
        <h2 className="bg-white text-blue-900 text-3xl font-bold mb-12 font-roboto px-4 py-2 rounded inline-block text-center shadow-md">
          Nuestros Servicios
        </h2>

        {/* Tarjetas de servicios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 w-full">
          {Array.isArray(services) &&
            services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center text-center h-full"
              >
                <img
                  src={service.imagen}
                  alt={service.titulo}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-blue-950 text-lg font-semibold mb-4 font-roboto">
                  {service.titulo}
                </h3>
                {/* Espacio flexible para que todos los botones queden a la misma altura */}
                <div className="flex grow"></div>
                <button
                  onClick={() => navigate(`/services/${service.id}`)}
                  className="bg-blue-900 text-white px-4 py-2 rounded font-roboto hover:bg-blue-800 transition mb-2"
                >
                  Saber más
                </button>
              </div>
            ))}
        </div>

        {/* Botón "Otros Servicios" */}
        <div className="mt-12 flex justify-center">
          <button
            className="bg-white text-blue-950 px-6 py-3 rounded font-roboto hover:bg-gray-100 transition"
            onClick={() => navigate("/otros-servicios")}
          >
            Otros Servicios
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services;
