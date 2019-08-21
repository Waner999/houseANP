import { createStore,combineReducers } from 'redux'

function likelist(state = [],action){

     
    switch (action.type) {
        
        case 'addFoot' : {
            for(let i = 0 ; i < state.length; i++){
                if(state[i].id == action.like.id){

                    state.splice(i,1)
                }
                break;
            }
            console.log(action.like)

            return [action.like,...state] 
        }

        default: return state
    }

}



//仓库
let store = createStore(combineReducers({
    likelist
}))

 



export default store