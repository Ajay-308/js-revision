const fetchPokemons = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=2");
    //   .then(function (res) {
    //     return res.json();
    //   })
    //   .then(function (data) {
    //     console.log("pokemon data", data.results);
    //   });
    console.log("response is", res);
    if (!res.ok) {
      console.error("Error fetching Pokémon data:", res.statusText);
      return;
    }

    const data = await res.json();
    if (!data || !data.results) {
      console.error("Invalid data structure:", data);
      return;
    }
    console.log("pokemon data", data.results);
  } catch (error) {
    console.error("Error fetching Pokémon:", error);
  }
};

fetchPokemons();
