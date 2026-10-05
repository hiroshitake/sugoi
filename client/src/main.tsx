import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return <main className="shell"><section className="hero"><span className="eyebrow">SUGOI</span><h1>Gestão de restaurante, em um só lugar.</h1><p>Garçom, cozinha, caixa e administração conectados em tempo real.</p></section></main>;
}

createRoot(document.getElementById("root")!).render(<StrictMode><App /></StrictMode>);
