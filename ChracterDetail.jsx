import React from "react";

const CharacterDetails = ({ character }) => {
    return (
        <div>
            <button onClick={() => window.location.reload(false)}>Return!</button>
            <h1>{character.name}</h1>
            <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
            <p>{character.description}</p>
            <h2>Comics</h2>
            <ul>
                {character.comics.items.map((comic) => (
                    <li key={comic.resourceURI}>{comic.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default CharacterDetails;
