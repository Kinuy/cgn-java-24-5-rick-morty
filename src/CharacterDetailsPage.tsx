import {useParams} from "react-router-dom";
import {Character} from "./types/RickAndMortyCharacter.ts";

type CharacterDetailsPageProps = {
    characters: Character[]
}

export default function CharacterDetailsPage(props: CharacterDetailsPageProps) {

    const params = useParams()
    const id = params.id

    const character = props.characters.find((character) => character.id === Number(id))

    if (character === undefined) {
        return <p>Character not found</p>
    }

    return (
        <div>
            <h2>{character.name}</h2>
            <p>{character.status}</p>
        </div>
    )
}
