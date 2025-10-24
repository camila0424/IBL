import "../styles/tailwind.css";

import Header from "./components/layout/Header";
import Landing from "./components/landing/Landing";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <>
      <Header />
      <Landing />
      <WhatsAppButton />
    </>
  );
}

export default App;
