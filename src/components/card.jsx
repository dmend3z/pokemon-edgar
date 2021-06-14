import React, {useContext} from "react"

const Card = (props) => {

    const {optionSelected, setOptionSelected} = useContext(PokemonContext)

    const {description, type, name, hp, attack, defense, spAttack, spDefense, speed, height, weight, imageURL} = props; 
    return (
    <>
        <div onClick={() => optionSelected===name?setOptionSelected(null): setOptionSelected(name)}
            className={`pokemon-card ${type.toLowerCase()} ${ name === optionSelected ? 'selected': ''}`} 
            id="pokemon-card">
            <div className="pokemon-card-image-container">
                <img id="pokemon-image" src={imageURL} alt="pokemon-image"/>   
            </div>
            <div className="pokemon-card-container">
                <div className="pokemon-card-type">
                    <label id="pokemon-card-type">{type}</label>
                </div>
                <div className="pokemon-card-title">
                    <b><label id="pokemon-name">{name}</label></b>
                </div>
                <div className="pokemon-card-stats">
                    <table className="pokemon-card-table-stats">
                        <tbody>
                            <tr>
                                <td>HP:</td>
                                <th><label id="pokemon-hp" className="pokemon-stat">{hp}</label></th>
                            </tr>
                            <tr>
                                <td>Attack:</td>
                                <th><label id="pokemon-attack" className="pokemon-stat">{attack}</label></th>
                            </tr>

                            <tr>
                                <td>Defense:</td>
                                <th><label id="pokemon-defense" className="pokemon-stat">{defense}</label></th>
                            </tr>

                            <tr>
                                <td>Special Attack:</td>
                                <th><label id="pokemon-specialAttack" className="pokemon-stat">{spAttack}</label></th>
                            </tr>
                            <tr>
                                <td>Special Defense:</td>
                                <th>
                                    <label id="pokemon-specialDefense" className="pokemon-stat">{spDefense}</label>
                                </th>
                            </tr>
                            <tr>
                                <td>Speed:</td>
                                <th>
                                    <label id="pokemon-speed" className="pokemon-stat">{speed}</label>
                                </th>
                            </tr>
                            <tr>
                                <td>Height:</td>
                                <th>
                                    <label id="pokemon-height">{height}</label>
                                </th>
                            </tr>
                            <tr>
                                <td>Weight:</td>
                                <th>
                                    <label id="pokemon-weight">{weight}</label>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/*<div>
                    <table className="pokemon-card-table-abilities">
                        <tr>
                            <td>Ability:</td>
                            <td>Hidden Ability:</td>
                        </tr>
                        <tr>
                            <th><label id="pokemon-ability">{ability}</label></th>
                            <th><label id="pokemon-ability-hidden">{hiddenAbillity}</label></th>
                        </tr>
                    </table>
                </div>*/}
            </div>
        </div>
    </>
    )
}

export default Card