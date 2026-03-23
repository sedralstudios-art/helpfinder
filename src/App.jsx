import { useState } from "react";
import LandingPage from "./components/LandingPage.jsx";
import HelpFinder from "./components/HelpFinder.jsx";

// HELPFINDER.HELP — App Router
// One purpose. One product. Free help, everywhere.

const VIEWS = { LANDING: "landing", HELP: "help" };

export default function App() {
  const [view, setView] = useState(VIEWS.LANDING);
  const [lang, setLang] = useState("en");
  const [city, setCity] = useState("your area");

  const goToHelp = () => { setView(VIEWS.HELP); window.scrollTo(0, 0); };
  const goHome = () => { setView(VIEWS.LANDING); window.scrollTo(0, 0); };

  if (view === VIEWS.HELP) return <HelpFinder onExit={goHome} city={city} />;
  return <LandingPage onNavigateHelp={goToHelp} onLangChange={setLang} onCityDetected={setCity} />;
}
