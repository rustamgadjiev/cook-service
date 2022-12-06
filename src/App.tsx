import "./normalize.css";
import "./fonts/fonts.css";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Slider } from "./components/Slider/Slider";
import { Filter } from "./components/Filter/Filter";
import { useState } from "react";
import { FoodItems } from "./components/FoodItems/FoodItems";
import { Footer } from "./components/Footer/Footer";

function App() {
  const [selectedFilterId, setSelectedFilterId] = useState<number>(0);

  return (
    <div className="App">
      <Header />
      <Slider />
      <Filter
        selectedFilterId={selectedFilterId}
        setSelectedFilterId={setSelectedFilterId}
      />
      <FoodItems selectedFilterId={selectedFilterId} />
      <Footer />
    </div>
  );
}

export default App;
