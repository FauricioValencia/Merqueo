import {GET_API_USER} from '../type/';

export const getApiUser =(payload)=>{
    return{
        type:GET_API_USER,  
        payload
    }
}