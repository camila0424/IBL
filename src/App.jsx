import "../styles/tailwind.css";

import Header from "./components/layout/Header";
import Landing from "./components/landing/Landing";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Header />
      <Landing />
      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default App;
