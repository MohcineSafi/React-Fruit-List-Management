import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function ListeFruit2() {
    const fruits = useSelector(data => data.fruits)
    const dispatch = useDispatch()
    return (
        <>
            <h2>Liste des fruits</h2>
            <ul> {fruits.map((f, i) => <li key={i}>{f}</li>
            )
            }
            </ul>
            <button onClick={() => dispatch({ type: 'VIDER' })}>Clear</button> </>
    )
}