import Logo from "../../assets/images/logo/logo.png"; // <-- ruta relativa desde tu componente

function Who_we_are_landing() {
  return (
    <section
      id="nosotros"
      className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16 bg-white"
    >
      {/* Logo de la empresa */}
      <div className="mb-8 md:mb-0 md:mr-10 flex shrink-0">
        <img
          src={Logo}
          alt="Logo de la empresa"
          className="w-60 md:w-90 sm:ml-0 lg:ml-10"
        />
      </div>

      {/* Texto descriptivo y botón */}
      <div className="max-w-xl text-gray-800">
        <p className="mb-6 leading-relaxed text-justify">
          Somos una empresa con 18 años de experiencia en el sector logístico
          internacional, especializada en el manejo de carga aérea, marítima y
          terrestre. Desde nuestros inicios, hemos trabajado con el propósito de
          ofrecer soluciones integrales que generen confianza y eficiencia en
          cada operación. A lo largo de nuestra trayectoria, hemos acompañado a
          empresas de diferentes sectores en el cumplimiento de sus objetivos,
          destacándonos por nuestra atención personalizada, cumplimiento y
          capacidad de adaptación a las necesidades del mercado global.
        </p>

        <a
          href="/pagina-de-detalle" // <- cambia al enlace de destino
          className="inline-block px-6 py-3 bg-blue-950 text-white font-semibold rounded hover:bg-gray-600 transition-colors"
        >
          Saber más
        </a>
      </div>
    </section>
  );
}

export default Who_we_are_landing;
