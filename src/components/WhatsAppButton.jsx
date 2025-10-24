// src/components/WhatsAppButton.jsx
function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/50765309792?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300 z-50 flex items-center justify-center"
      aria-label="WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M16.2 13.7c-.3-.2-1.8-.9-2-.9-.2 0-.3-.1-.5.2s-.6.9-.8 1.1c-.1.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.7-1.7-2-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5 0-.2-.5-1.2-.7-1.7-.2-.5-.5-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.6 1 2.8c.1.2 1.8 2.8 4.4 3.9.6.2 1.1.4 1.5.5.6.2 1.1.2 1.5.1.5-.1 1.8-.7 2-1.3.2-.7.2-1.3.1-1.5-.1-.2-.3-.3-.6-.5z" />
        <path d="M12 2C6.5 2 2 6.4 2 11.9c0 2.1.6 4.1 1.8 5.9L2 22l4.4-1.4c1.7 1 3.6 1.5 5.6 1.5 5.5 0 10-4.4 10-9.9S17.5 2 12 2zm0 17.9c-1.8 0-3.5-.5-5-1.5l-.4-.2-2.6.8.8-2.5-.2-.4c-1.1-1.5-1.7-3.3-1.7-5.2 0-4.9 4.1-8.9 9.1-8.9s9.1 4 9.1 8.9-4.1 8.9-9.1 8.9z" />
      </svg>
    </a>
  );
}

export default WhatsAppButton;
