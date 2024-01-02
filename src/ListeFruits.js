import React from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
    return ({
        liste: state.fruits
    })
}
function mapDispatchToProps(dispatch) {
    return {
        vider: () => dispatch({ type: 'VIDER' })
    }
}
function ListeFruits(props) {
    console.log(props)
    return (<>
        <h2>Liste des fruits</h2>
        <ul>
            {props.liste.map((f, i) => <li key={i}>{f}</li>)}
        </ul>
        <button onClick={() => props.vider()}>Clear</button> </>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(ListeFruits)