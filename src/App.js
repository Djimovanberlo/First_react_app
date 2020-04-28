import React from "react";
import logo from "./logo.svg";
import Title from "./components/Title";
import Pokemon from "./components/Pokemon";
import "./App.css";

const all_pokemon = [
  {
    name: "Raticate",
    weight: 18,
    awesome: true,
    terrifuing: false,
    abilities: ["Quick Attack", "Super Fang", "Crunch", "Hyper Fang"],
  },
  {
    name: "Zangooze",
    weight: 40,
    awesome: true,
    terrifying: false,
    abilities: ["Slash", "X-Scissor", "Swords Dance", "Brick Break"],
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <main>
          {all_pokemon.map((pokemon) => {
            const { name, weight, awesome, terrifying, abilities } = pokemon;
            return (
              <Pokemon
                name={name}
                weight={weight}
                awesome={awesome}
                terrifying={terrifying}
                abilities={abilities}
              />
            );
          })}
        </main>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome to Codaisseur
        </a>
      </header>
    </div>
  );
}

export default App;
