import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Redes sociales usando imágenes */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-white hover:text-blue-400 transition"
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
            className="flex items-center gap-2 text-white hover:text-blue-400 transition"
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
            className="flex items-center gap-2 text-white hover:text-blue-400 transition"
          >
            <img
              src="/images/social/whatsapp.svg"
              alt="WhatsApp"
              className="w-5 h-5"
            />
            WhatsApp
          </a>
        </div>

        {/* Ciudad */}
        <div className="mb-4 md:mb-0">Colón, Panamá</div>

        {/* Licencia de creación */}
        <div className="text-sm text-gray-300">
          &copy; {new Date().getFullYear()} Creado por Camila Bedoya
          <br />
          Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
