import { SET_ROLES, SET_CATEGORIES, SET_THEME, SET_LANGUAGE } from "../actions/globalActions";


const initialState = {
    roles:[],
    categories:[],
    theme:"light",
    language:"tr",
};

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case SET_ROLES:
            return {...state, roles:action.pyload};
        
        case SET_CATEGORIES:
            return {...state, categories:action.pyload};
        case SET_THEME:
            return {...state, theme:action.pyload};
        case SET_LANGUAGE:
            return {...state, language:action.pyload};        
        default:
            return state;
    }
}

export default reducer;