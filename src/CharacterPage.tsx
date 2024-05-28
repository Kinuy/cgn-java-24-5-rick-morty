import CharacterGallery from "./components/CharacterGallery.tsx";
import {ChangeEvent, FormEvent, useState} from "react";
import {Character} from "./types/RickAndMortyCharacter.ts";

type CharacterPageProps = {
    characters: Character[],
    saveCharacter: (newCharacter: Character) => void
}

export default function CharacterPage(props: CharacterPageProps) {

    const [searchText, setSearchText] = useState("");

    const [newCharacter, setNewCharacter] = useState<Character>({id: 0, name: "", status: "", species: ""})


    const filteredCharacters = props.characters
        .filter((character) => character.name.toLowerCase().includes(searchText.toLowerCase()));


    const onNewCharacterChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewCharacter({...newCharacter, [event.target.name]: event.target.value})
    }

    const onCharacterSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        props.saveCharacter(newCharacter)
        setNewCharacter({id: 0, name: "", status: "", species: ""})
    }

    return (
        <div>
            <input type="text" onChange={(e) => setSearchText(e.target.value)} placeholder="Search for a character"/>
            {
                filteredCharacters.length > 0
                    ? <CharacterGallery characters={filteredCharacters}/>
                    : <p>No characters found</p>
            }

            <form onSubmit={onCharacterSubmit}>
                <input type={"number"} onChange={onNewCharacterChange} value={newCharacter.id} placeholder={"Id"} name={"id"}/>
                <input onChange={onNewCharacterChange} value={newCharacter.name} placeholder={"Name"} name={"name"}/>
                <input onChange={onNewCharacterChange} value={newCharacter.species} placeholder={"Species"}
                       name={"species"}/>
                <input onChange={onNewCharacterChange} value={newCharacter.status} placeholder={"Status"}
                       name={"status"}/>
                <button>
                    Save
                </button>
            </form>
        </div>

    )
}
