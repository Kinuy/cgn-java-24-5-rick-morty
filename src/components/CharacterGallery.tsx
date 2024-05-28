import {Character} from "../types/RickAndMortyCharacter.ts";
import CharacterCard from "./CharacterCard.tsx";
import "./CharacterGallery.css";

type CharacterGalleryProps = {
    characters: Character[];
}
export default function CharacterGallery(props: Readonly<CharacterGalleryProps>) {
    return (
        <div className="character-gallery">
            {props.characters.map((character) => <CharacterCard key={character.name} character={character}/>)}
        </div>
    );
}
