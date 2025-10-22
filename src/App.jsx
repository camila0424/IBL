import "../styles/tailwind.css";
import Hero from "./components/landing/Hero";
import Services from "./components/landing/Services";
import Who_we_are_landing from "./components/landing/Who_we_are";
import Header from "./components/layout/Header";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Who_we_are_landing />
      <Services />
    </>
  );
}

export default App;
