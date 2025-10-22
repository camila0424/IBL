import { useState, useEffect, useRef } from "react";
import Logo from "../../assets/images/logo/ibl_sin_texto.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const menuRef = useRef(null);

  const menuItems = ["inicio", "servicios", "nosotros", "contacto"];

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) target.scrollIntoView({ behavior: "smooth" });
    setActiveItem(targetId);
    setIsMenuOpen(false);
  };

  // Cerrar menú si se hace click fuera (y resetear activeItem)
  // --- Cerrar menú si se hace click fuera ---
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Si el click viene del botón toggle, no hacer nada
      if (event.target.closest("button[aria-label]")) return;

      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setActiveItem(""); // quitar marca al cerrar menú
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-700 shadow-md font-['Roboto']">
      <nav className="container mx-auto flex items-center justify-between h-24 px-4 md:h-28 relative">
        {/* Logo + Nombre */}
        <a
          href="#inicio"
          onClick={(e) => handleScroll(e, "inicio")}
          className="flex items-center gap-2"
        >
          <img
            src={Logo}
            alt="Logo IBL"
            className="h-6 sm:h-8 md:h-12 lg:h-14 transition-transform duration-500 hover:scale-110"
          />
          <span className="text-blue-950 font-semibold tracking-wide mt-1 sm:mt-2 md:mt-1 lg:mt-5 sm:mr-4 md:text-lg lg:text-xl">
            INTERNATIONAL BUSINESS LOGISTICS S.A.
          </span>
        </a>

        {/* Botón hamburguesa mobile - aseguramos z-index alto y fuera de menuRef */}
        <button
          // z-50 para estar por encima del menú (que tendrá z-40)
          className="md:hidden text-2xl ml-2 z-50 relative"
          onClick={() => {
            // toggle y limpiar active si cerramos
            setIsMenuOpen((prev) => {
              const next = !prev;
              if (!next) setActiveItem("");
              return next;
            });
          }}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        {/* Menú Desktop */}
        <ul className="hidden md:flex flex-row gap-8 text-lg text-blue-950">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={(e) => handleScroll(e, item)}
                className={`px-2 py-1 transition-colors duration-300 rounded ${
                  activeItem === item
                    ? "text-gray-400"
                    : "hover:text-white hover:bg-indigo-950 hover:border-2"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Menú Mobile (pequeño, solo alto según contenido).
            NOTA: z-40 para que quede por debajo del botón */}
        <div
          ref={menuRef}
          className={`absolute top-24 right-2 w-56 bg-white shadow-md border border-gray-300 rounded-xl transform transition-transform duration-300 md:hidden z-40
            ${
              isMenuOpen
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0 pointer-events-none"
            }`}
          // pointer-events-none cuando está oculto evita que un elemento invisible capture clicks
        >
          <ul className="flex flex-col py-3 gap-2 px-4">
            {menuItems.map((item) => (
              <li key={item} className="w-full">
                <button
                  onClick={(e) => {
                    handleScroll(e, item);
                    setActiveItem(item);
                  }}
                  className={`block w-full px-4 py-2 rounded text-left transition-colors ${
                    activeItem === item
                      ? "bg-gray-100 text-gray-400"
                      : "hover:bg-gray-50 text-blue-950"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
