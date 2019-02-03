import { GET_PUBLICATIONS } from '../type/';

const initialState = {
    publications: ''
}


const publication = (state = initialState, action) => {
    switch(action.type) {
         case GET_PUBLICATIONS:
             return { ...state,
                 user: action.payload
             }
         default:
             return state
     }
 }
 export default publication;