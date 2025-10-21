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

  // --- Cerrar menú si se hace click fuera ---
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setActiveItem(""); // quitar marca al cerrar menú
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm border-b border-gray-700 shadow-md font-['Roboto']">
      <nav className="container mx-auto flex items-center justify-between h-24 px-4 md:h-28">
        {/* Logo + Nombre */}
        <a
          href="#inicio"
          onClick={(e) => handleScroll(e, "inicio")}
          className="flex items-center gap-2"
        >
          <img
            src={Logo}
            alt="Logo IBL"
            className="h-6 sm:h-8 md:h-16 lg:h-20 transition-transform duration-500 hover:scale-110"
          />
          <span className="text-blue-950 font-semibold tracking-wide mt-1 sm:mt-2 sm:mr-4 md:text-lg lg:text-xl">
            INTERNATIONAL BUSINESS LOGISTICS S.A.
          </span>
        </a>

        {/* Botón hamburguesa mobile */}
        <button
          className="md:hidden text-2xl ml-2 z-50"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
            if (isMenuOpen) setActiveItem(""); // quitar marca al cerrar menú
          }}
          aria-label="Abrir menú"
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
                className="hover:text-gray-500 transition-colors duration-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Menú Mobile */}
        <div
          ref={menuRef}
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg border-l border-gray-300 transform transition-transform duration-300 md:hidden z-40
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <ul className="flex flex-col mt-24 gap-2 px-4">
            {menuItems.map((item) => (
              <li key={item} className="w-full">
                <button
                  onClick={(e) => handleScroll(e, item)}
                  className={`block w-full px-4 py-2 rounded text-left transition-colors
                    ${
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
