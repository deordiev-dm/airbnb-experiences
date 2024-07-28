import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import CardsContainer from "./components/CardsContainer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CardsContainer />
      </main>
    </>
  );
}

export default App;
