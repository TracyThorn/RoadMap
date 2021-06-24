import { types } from '../actions/types.js';


export default (state=[], action) => {
    switch(action.type){
        case types.GET_POSTS:
            return action.payload;
        default:
            return state;
    }
};