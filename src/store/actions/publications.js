import { GET_PUBLICATIONS } from '../type/';

export const addPublication =(payload)=>{
    return{
        type:GET_PUBLICATIONS,  
        payload
    }
}