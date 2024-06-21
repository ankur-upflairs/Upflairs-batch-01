

let todoReducer=(state=[],action)=>{
    switch(action.type){
        
        case 'todo/add':
            return [...state,{task:action.payload}]

        default :
            return state
    }




}

export default todoReducer