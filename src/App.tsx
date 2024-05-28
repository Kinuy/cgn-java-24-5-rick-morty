import './App.css'
import {Route, Routes} from "react-router-dom";
import CharacterPage from "./CharacterPage.tsx";
import HomePage from "./HomePage.tsx";
import Header from "./components/Header.tsx";

export default function App() {

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/characters" element={<CharacterPage />}/>
            </Routes>
        </>
    );
}
