import './App.css';
import React from "react";
import {IncAndRes} from "./components/IncAndDecrMenu/IncAndRes";
import {ValueMenu} from "./components/ValueMenu/ValueMenu";
import {Container} from "./components/Container/Container";


function App() {
    return (
        <Container className="body">

                <IncAndRes />



                <ValueMenu />

        </Container>

    )
}

export default App;
