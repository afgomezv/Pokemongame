import getPokemonOptions, {
  getPokemons,
  getPokemonNames,
} from "@/helpers/getPokemonOptions";

describe("getPokemonOptions helpers", () => {
  test("debe regresar un arreglo de numeros", () => {
    const pokemons = getPokemons();
    //console.log(pokemons);
    expect(pokemons.length).toBe(650);
    expect(pokemons[0]).toBe(1);
    expect(pokemons[500]).toBe(501);
    expect(pokemons[649]).toBe(650);
  });

  test("debe retornar un arreglo de 4 elementos", async () => {
    const pokemons = await getPokemonNames([1, 2, 3, 4]);
    //console.log(pokemons);
    expect(pokemons[0].name).toBe("bulbasaur");
    expect(pokemons[1].name).toBe("ivysaur");
    expect(pokemons[2].name).toBe("venusaur");
    expect(pokemons[3].name).toBe("charmander");

    // expect(pokemons).toStrictEqual([
    //   { name: "bulbasaur", id: 1 },
    //   { name: "ivysaur", id: 2 },
    //   { name: "venusaur", id: 3 },
    //   { name: "charmander", id: 4 },
    // ]);
  });

  test("getPokemonOptions debe retornar un arreglo mezclado", async () => {
    const pokemons = await getPokemonOptions();
    //console.log(pokemons);
    expect(pokemons.length).toBe(4);
    expect(pokemons).toEqual([
      { name: expect.any(String), id: expect.any(Number) },
      { name: expect.any(String), id: expect.any(Number) },
      { name: expect.any(String), id: expect.any(Number) },
      { name: expect.any(String), id: expect.any(Number) },
    ]);
  });
});
