import "./App.css";
import React from "react";
import pokemons from "./pokemon.json";
import styled from "styled-components";
import DetailsComponent from "./DetailsComponent";

const Main = styled.div`
  width: 60vw;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 25px;
`;

const Input = styled.input``;

const PokemonRow = ({ pokemon, setSelectedPokemon }) => (
  <tr>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(", ")}</td>

    <td>
      <button
        onClick={() => {
          setSelectedPokemon(pokemon);
        }}
      >
        Show Details
      </button>{" "}
    </td>
  </tr>
);

function App() {
  const [selectedPokemon, setSelectedPokemon] = React.useState(null);
  const [filter, filterSet] = React.useState("");
  return (
    <Container>
      <Main>
        <h1 className="title">Pokemon Search</h1>
        <Input
          type="text"
          value={filter}
          onChange={(evt) => filterSet(evt.target.value)}
        />
        <table width="100%">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {pokemons
              .filter((pokemon) =>
                pokemon.name.english
                  .toLocaleLowerCase()
                  .includes(filter.toLocaleLowerCase())
              )
              .slice(0, 20)
              .map((pokemon) => (
                <PokemonRow
                  setSelectedPokemon={setSelectedPokemon}
                  key={pokemon.id}
                  pokemon={pokemon}
                ></PokemonRow>
              ))}
          </tbody>
        </table>
      </Main>

      <DetailsComponent selectedPokemon={selectedPokemon} />
    </Container>
  );
}

export default App;
