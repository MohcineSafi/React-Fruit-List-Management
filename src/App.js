import React from "react";
import AjouterFruit from "./composants/AjouterFruit";
import ListeFruits from "./composants/ListeFruits";
import './index.css';

export default function App(props) {
  return (
    <>
      <h2>First method: with the connect method</h2>
      <AjouterFruit />
      <ListeFruits />
    </>
  )
}