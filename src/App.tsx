import ButtonGradient from "./assets/svg/ButtonGradient.tsx";
import Benefits from "./components/Benefits.tsx";
import Colaboration from "./components/Colaboration.tsx";
import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import Servives from "./components/Servives.tsx";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Colaboration />
        <Servives />
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
