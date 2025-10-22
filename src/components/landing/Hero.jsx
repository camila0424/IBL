function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* 🎥 Video de fondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/hero-bg.mp4"
        autoPlay
        muted
        loop
      />

      {/* 🟦 Capa azul difuminada */}
      <div className="absolute inset-0 bg-blue-950/70"></div>

      {/* 💬 Texto centrado */}
      <div className="relative flex items-center justify-center h-full">
        <h1 className="text-white mt-10  text-4xl md:text-6xl font-bold text-center px-4 leading-tight">
          Conectamos tu carga con el mundo,
          <br />
          <span className="font-semibold text-white">
            desde y hacia Panamá.
          </span>
        </h1>
      </div>
    </section>
  );
}

export default Hero;
