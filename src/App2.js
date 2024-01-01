import React from "react";
import AjouterFruit2 from "./composants/AjouterFruit2";
import ListeFruit2 from "./composants/ListeFruits2";
import './index.css';

export default function App2(props) {
    return (
    <>
        <h2>Second method: with Hooks</h2>
        <AjouterFruit2 />
        <ListeFruit2 /> </>
    )
}