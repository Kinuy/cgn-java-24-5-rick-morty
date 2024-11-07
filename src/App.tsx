import './App.css'
import {Route, Routes} from "react-router-dom";
import CharacterPage from "./CharacterPage.tsx";
import HomePage from "./HomePage.tsx";
import Header from "./components/Header.tsx";
import CharacterDetailsPage from "./CharacterDetailsPage.tsx";
import {useEffect, useState} from "react";
import {Character} from "./types/RickAndMortyCharacter.ts";
import axios from "axios";

export default function App() {

    const [characters, setCharacters] = useState<Character[]>([])

    // useEffect(() => {
    //     console.log("characters changed")
    // }, [characters])

    useEffect(() => {
        console.log("one time")
        loadAllCharacters()
    }, [])

    // useEffect(() => {
    //     console.log("every time")
    // })

    const loadAllCharacters = () => {
        //axios.post("http://rickandmortyapi.com", requestBody)

        axios.get("https://rickandmortyapi.com/api/character")
            .then((response) => {
                // Replace old characters with new ones
                setCharacters(response.data.results)
                // Add new Characters to old ones
                // setCharacters([...characters, ...response.data.results])
            })
            .catch((error) => {
               console.error(error)
            })
    }

    const saveCharacter = (newCharacter: Character) => {
        setCharacters([...characters, newCharacter])
    }

    return (
        <>
            <Header/>
            <button onClick={loadAllCharacters}>Load</button>
            <Routes>
                <Route path="/"
                       element={<HomePage/>}/>
                <Route path="/characters"
                       element={<CharacterPage characters={characters}
                                               saveCharacter={saveCharacter}/>}/>
                <Route path="/characters/:id"
                       element={<CharacterDetailsPage characters={characters}/>}/>
            </Routes>
        </>
    );
}
