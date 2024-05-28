import {useParams} from "react-router-dom";
import {characters} from "./Characters.ts";


export default function CharacterDetailsPage() {

    const params = useParams()
    const id = params.id

    const character = characters.find((character) => character.id === Number(id))

    if (character === undefined) {
        return <p>Character not found</p>
    }

    return (
        <div>
            <h2>{character.name}</h2>
            <img src={character.image}/>
            <p>{character.status}</p>
            <p>{character.origin.name}</p>
        </div>
    )
}
