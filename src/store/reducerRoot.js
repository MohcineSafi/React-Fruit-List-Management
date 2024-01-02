const initState = { 
    fruits: [] 
} 
export default function Reducer(state = initState, action) { 
        if (action.type === 'ADD') { 
            console.log(state) 
            return { fruits: [...state.fruits, action.element] }
        }
        if (action.type === 'VIDER') 
        { 
            return { fruits: [] } 
        } 
        return state
}