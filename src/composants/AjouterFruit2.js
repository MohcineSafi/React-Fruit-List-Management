import React, { useState } from "react";
import { useDispatch } from "react-redux";
export default function AjouterFruit2() {
    const [nomFruit, setNomFruit] = useState()
    const dispatch = useDispatch()
    return (
        <div>
            <label>Fruit: </label>
            <input type='text' onChange={(e) => setNomFruit(e.target.value)} value={nomFruit} />
            <button onClick={() => { dispatch({ type: 'ADD', element: nomFruit }) }}>Add</button>
        </div>
    )
}