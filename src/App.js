import React from "react";
import Title from "./components/Title";
import Pokemon from "./components/Pokemon";
import "./App.css";

const all_pokemon = [
  {
    name: "Raticate",
    weight: 18,
    awesome: true,
    terrifying: false,
    abilities: ["Quick Attack", "Super Fang", "Crunch", "Hyper Fang"],
  },
  {
    name: "Zangooze",
    weight: 40,
    awesome: true,
    terrifying: true,
    abilities: ["Slash", "X-Scissor", "Swords Dance", "Brick Break"],
  },
  {
    name: "Jolteon",
    weight: 25,
    awesome: true,
    terrifying: false,
    abilities: ["Thunder", "Rain Dance", "Thunderbolt", "Thunder Wave"],
  },
];

function App() {
  return (
    <main className="container">
      <Title content="Some Simple Title" />
        <div className="row">
          {all_pokemon.map(pokemon => (
              <div className="col-md-6 col-lg-4">
                <Pokemon
                  name={pokemon.name}
                  weight={pokemon.weight}
                  awesome={pokemon.awesome}
                  terrifying={pokemon.terrifying}
                  abilities={pokemon.abilities}
                />
              </div>
          ))}
        </div>
      </main>
  )

export default App;
