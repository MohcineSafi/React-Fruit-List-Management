import React, { useState } from "react";
import { connect } from "react-redux";

function mapDispatchToProps(dispatch) {
    return {
        ajouter: (fruit) => dispatch({ type: 'ADD', element: fruit }),
    }
}
function AjouterFruit(props) {
    const [nomFruit, setNomFruit] = useState()
    return (
        <div>
            <label>Fruit: </label>
            <input type='text' onChange={(e) => setNomFruit(e.target.value)} value={nomFruit} />
            <button onClick={() => { props.ajouter(nomFruit); setNomFruit('') }}>Add</button> </div>
    )
}
export default connect(null, mapDispatchToProps)(AjouterFruit)