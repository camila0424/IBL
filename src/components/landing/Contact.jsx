import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Enviando...");

    try {
      const response = await fetch("https://formspree.io/f/mdkwqjlk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("✅ Mensaje enviado correctamente");
        setFormData({ nombre: "", email: "", mensaje: "" });
      } else {
        setStatus("❌ Error al enviar el mensaje");
      }
    } catch (error) {
      setStatus("⚠️ Hubo un problema con el envío");
    }
  };

  return (
    <section
      id="contacto"
      className="w-full bg-gray-50 text-gray-800 py-16 px-6 md:px-12 lg:px-20 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* --- LADO IZQUIERDO: INFO Y REDES --- */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Contáctanos</h2>
          <p className="text-gray-600 mb-6">
            ¿Tienes alguna pregunta o deseas más información sobre nuestros
            servicios? Escríbenos tu nombre o el de tu empresa, tu email de
            contacto, en el mensaje cuéntanos el tipo de carga (marítima, aérea
            o terrestre), el origen y el destino, comentarios y requerimientos
            específicos de tu carga.
            <br />
            <br />
            Responderemos a tu mensaje en menos de 24 horas.
          </p>

          <div className="space-y-3 mb-8">
            <p>
              <span className="font-semibold text-blue-800">Correo:</span>{" "}
              iblsapanama3@gmail.com
            </p>
            <p>
              <span className="font-semibold text-blue-800">Teléfono:</span>{" "}
              +507 6530 9792
            </p>
            <p>
              <span className="font-semibold text-blue-800">Dirección:</span>{" "}
              Colón, Panamá
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition"
            >
              <img
                src="/images/social/facebook-icon.svg"
                alt="Facebook"
                className="w-5 h-5"
              />
              Facebook
            </a>

            <a
              href="https://www.instagram.com/iblsa_panama?igsh=MXBjYm4waGg0d2QyMw=="
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition"
            >
              <img
                src="/images/social/instagram-icon.svg"
                alt="Instagram"
                className="w-5 h-5"
              />
              Instagram
            </a>

            <a
              href="https://wa.me/50765309792?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-700 hover:text-blue-900 transition"
            >
              <img
                src="/images/social/whatsapp.svg"
                alt="WhatsApp"
                className="w-5 h-5"
              />
              WhatsApp
            </a>
          </div>
        </div>

        {/* --- LADO DERECHO: FORMULARIO --- */}
        <div className="bg-white shadow-md rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-blue-900 mb-6">
            Envíanos un mensaje
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="nombre"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="mensaje"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="5"
                value={formData.mensaje}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition font-semibold"
            >
              Enviar mensaje
            </button>
          </form>

          {status && (
            <p className="mt-4 text-center text-sm text-gray-600">{status}</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
