export const getAllTypes = (pokemons) => {
    let options = ['All']
  
    pokemons.forEach((pokemon) =>
      pokemon.types.forEach((types) => {
        if (!options.includes(types.type.name)){
          options = [...options, types.type.name]
        }
      }
      )
    )
  
    return options
  }
